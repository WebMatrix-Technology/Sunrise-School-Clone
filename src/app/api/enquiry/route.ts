import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");
const FILE_PATH = path.join(DATA_DIR, "submissions.json");

function initStorage() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(FILE_PATH)) {
    fs.writeFileSync(FILE_PATH, JSON.stringify({ enquiries: [], contacts: [] }, null, 2));
  }
}

export async function GET() {
  try {
    initStorage();
    const data = fs.readFileSync(FILE_PATH, "utf-8");
    return NextResponse.json(JSON.parse(data));
  } catch (error) {
    return NextResponse.json({ error: "Failed to read data" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    initStorage();
    const body = await request.json();
    
    // Validate mandatory fields
    if (!body.studentName || !body.dob || !body.standard || !body.mobile) {
      return NextResponse.json({ error: "Mandatory fields missing" }, { status: 400 });
    }

    const dataRaw = fs.readFileSync(FILE_PATH, "utf-8");
    const db = JSON.parse(dataRaw);

    const newEnquiry = {
      id: "enq_" + Date.now() + "_" + Math.random().toString(36).substr(2, 4),
      timestamp: new Date().toISOString(),
      ...body
    };

    db.enquiries.unshift(newEnquiry);
    fs.writeFileSync(FILE_PATH, JSON.stringify(db, null, 2));

    return NextResponse.json({ success: true, enquiry: newEnquiry });
  } catch (error) {
    return NextResponse.json({ error: "Server error processing enquiry" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    initStorage();
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    if (!id) {
      return NextResponse.json({ error: "ID missing" }, { status: 400 });
    }

    const dataRaw = fs.readFileSync(FILE_PATH, "utf-8");
    const db = JSON.parse(dataRaw);

    db.enquiries = db.enquiries.filter((item: any) => item.id !== id);
    fs.writeFileSync(FILE_PATH, JSON.stringify(db, null, 2));

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Server error deleting enquiry" }, { status: 500 });
  }
}
