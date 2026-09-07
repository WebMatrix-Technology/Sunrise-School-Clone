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

export async function POST(request: Request) {
  try {
    initStorage();
    const body = await request.json();

    if (!body.name || !body.email || !body.message) {
      return NextResponse.json({ error: "Mandatory fields missing" }, { status: 400 });
    }

    const dataRaw = fs.readFileSync(FILE_PATH, "utf-8");
    const db = JSON.parse(dataRaw);

    const newContact = {
      id: "cnt_" + Date.now() + "_" + Math.random().toString(36).substr(2, 4),
      timestamp: new Date().toISOString(),
      ...body
    };

    db.contacts.unshift(newContact);
    fs.writeFileSync(FILE_PATH, JSON.stringify(db, null, 2));

    return NextResponse.json({ success: true, contact: newContact });
  } catch (error) {
    return NextResponse.json({ error: "Server error processing message" }, { status: 500 });
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

    db.contacts = db.contacts.filter((item: any) => item.id !== id);
    fs.writeFileSync(FILE_PATH, JSON.stringify(db, null, 2));

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Server error deleting message" }, { status: 500 });
  }
}
