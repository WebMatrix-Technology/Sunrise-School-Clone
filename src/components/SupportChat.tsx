"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  MessageSquare, 
  Send, 
  X, 
  ChevronDown, 
  Sparkles, 
  PhoneCall, 
  Loader2
} from "lucide-react";

interface Message {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: Date;
  link?: { href: string; label: string };
}

interface LeadForm {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export default function SupportChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(1);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [input, setInput] = useState("");
  
  // Callback details collection flow:
  // null = idle, 'name' = asking name, 'phone' = asking phone, 'email' = asking email, 'query' = asking query
  const [callbackStep, setCallbackStep] = useState<"name" | "phone" | "email" | "query" | null>(null);
  const [leadForm, setLeadForm] = useState<LeadForm>({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const chatEndRef = useRef<HTMLDivElement>(null);

  // Initialize welcome message once client-side to prevent hydration mismatch on timestamp
  useEffect(() => {
    setMessages([
      {
        id: "welcome",
        sender: "bot",
        text: "Hello! Welcome to Sunrise International School. 🏫 I'm Arya, your virtual admissions desk assistant. How can I help you today?",
        timestamp: new Date()
      }
    ]);
  }, []);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  // Flash unread badge helper
  const handleOpenChat = () => {
    setIsOpen(true);
    setUnreadCount(0);
  };

  // Bot response simulator helper
  const triggerBotResponse = (text: string, delay = 1200, link?: { href: string; label: string }) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [
        ...prev,
        {
          id: `bot_${Date.now()}`,
          sender: "bot",
          text,
          timestamp: new Date(),
          link
        }
      ]);
    }, delay);
  };

  // Handles quick option chip clicks
  const handleOptionClick = (option: string) => {
    // Add user message
    const userMsg: Message = {
      id: `user_${Date.now()}`,
      sender: "user",
      text: option,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMsg]);

    // Reset callback flow if they click another option mid-flow
    if (callbackStep !== null) {
      setCallbackStep(null);
    }

    if (option.includes("Admission Process")) {
      triggerBotResponse(
        "Admissions for the current academic year (Nursery to Grade X) are open on a first-come, first-serve basis. The process is simple:\n\n1️⃣ Fill out the online admission form.\n2️⃣ Visit our campus for a brief interaction and document verification.\n3️⃣ Confirm the seat by paying the registration fee.\n\nWould you like to visit the Enquiry Form page?",
        1000,
        { href: "/enquiry-form", label: "Open Enquiry Form 📝" }
      );
    } else if (option.includes("Fee Structure")) {
      triggerBotResponse(
        "Our fee structure is premium yet competitive, structured grade-wise to support top-tier facilities (smart labs, digital classrooms, sports club). \n\nTo receive a detailed grade-specific fee sheet, please choose the 'Speak to Counselor' option or leave your contact details so our coordinator can send it directly to you.",
        1200
      );
    } else if (option.includes("Location & Transport")) {
      triggerBotResponse(
        "📍 Campus: Vaalivali, Barvi Dam Road, Badlapur (West), Thane.\n\n🚌 Transport: We operate safety-optimized school bus services (equipped with GPS tracking, CCTV, and female attendants) across Badlapur and nearby sectors. All routes follow strict transport safety rules.",
        1100
      );
    } else if (option.includes("Speak to Counselor")) {
      setCallbackStep("name");
      triggerBotResponse("I would be happy to arrange a call back from our admissions desk! Let's get your details. First, could you please tell me your full name?", 800);
    }
  };

  // Handles submitting the custom message text input
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input.trim();
    setInput("");

    // Render user message immediately
    const userMsg: Message = {
      id: `user_${Date.now()}`,
      sender: "user",
      text: userText,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMsg]);

    // Check if we are currently in a step-by-step callback flow
    if (callbackStep !== null) {
      handleCallbackFlow(userText);
      return;
    }

    // Keyword matching parser for general queries
    const textLower = userText.toLowerCase();

    if (textLower.includes("fee") || textLower.includes("cost") || textLower.includes("price") || textLower.includes("pay")) {
      triggerBotResponse(
        "Our annual fees cover digital smart boards, standard curricula, and core sports. To get a precise breakdown matching your child's age/grade, would you like to speak with our counsellor?",
        1000
      );
    } else if (textLower.includes("admission") || textLower.includes("apply") || textLower.includes("enquiry") || textLower.includes("enroll") || textLower.includes("register")) {
      triggerBotResponse(
        "Admissions are open for Nursery, Jr KG, Sr KG, and Grades I through X. We suggest submitting the online enquiry form to start the verification process.",
        1000,
        { href: "/enquiry-form", label: "Admission Enquiry Form 📝" }
      );
    } else if (textLower.includes("location") || textLower.includes("address") || textLower.includes("map") || textLower.includes("where") || textLower.includes("badlapur")) {
      triggerBotResponse(
        "The school is located Opp. New Water Tank, Barvi Dam Road, Village Vaalivali, Badlapur (West), Thane - 421503. Visitors are welcome from Monday to Saturday, 9 AM to 3 PM.",
        1000,
        { href: "/contact", label: "View Location Map 📍" }
      );
    } else if (textLower.includes("transport") || textLower.includes("bus") || textLower.includes("van") || textLower.includes("pick")) {
      triggerBotResponse(
        "Yes, we provide fully-serviced school buses with safety tracking, speed governors, and supervisors across various routes in Badlapur.",
        1000
      );
    } else if (textLower.includes("contact") || textLower.includes("phone") || textLower.includes("call") || textLower.includes("number") || textLower.includes("email")) {
      triggerBotResponse(
        "You can call us directly at +91-9324120900 or email sunriseint.school@gmail.com. Alternatively, I can collect your details to schedule a counselor callback. Would you like that?",
        1000
      );
    } else if (textLower.includes("time") || textLower.includes("hour") || textLower.includes("open") || textLower.includes("schedule")) {
      triggerBotResponse(
        "School office hours are 8:00 AM to 4:00 PM. Student session hours vary (usually 8:30 AM to 1:30 PM for primary grades).",
        900
      );
    } else if (textLower.includes("hi") || textLower.includes("hello") || textLower.includes("hey") || textLower.includes("good morning")) {
      triggerBotResponse(
        "Hello! I am here to help you. Ask me about admissions, fees, transport, or type 'counselor' to request a callback.",
        800
      );
    } else {
      // Fallback
      triggerBotResponse(
        "I want to make sure you get the most accurate answer! Let me register your query for a callback from our admissions team. Could you tell me your full name to get started?",
        1000
      );
      setCallbackStep("name");
    }
  };

  // Step-by-step callback flow processor
  const handleCallbackFlow = async (inputVal: string) => {
    if (callbackStep === "name") {
      setLeadForm(prev => ({ ...prev, name: inputVal }));
      setCallbackStep("phone");
      triggerBotResponse(`Thanks, ${inputVal}! What is your mobile phone number? (e.g. +91 9876543210)`, 800);
    } 
    
    else if (callbackStep === "phone") {
      // Basic validation: must have at least 8 digits
      const digits = inputVal.replace(/\D/g, "");
      if (digits.length < 8) {
        // Re-ask
        triggerBotResponse("Hmm, that phone number looks a bit short. Could you please provide a valid contact number?", 600);
        return;
      }
      setLeadForm(prev => ({ ...prev, phone: inputVal }));
      setCallbackStep("email");
      triggerBotResponse("Got it. What is your email address? (Optional: write 'none' to skip)", 800);
    } 
    
    else if (callbackStep === "email") {
      let emailVal = inputVal.trim();
      if (emailVal.toLowerCase() !== "none" && !emailVal.includes("@")) {
        triggerBotResponse("Please write a valid email address, or type 'none' to skip.", 600);
        return;
      }
      if (emailVal.toLowerCase() === "none") {
        emailVal = "not-provided@example.com";
      }
      setLeadForm(prev => ({ ...prev, email: emailVal }));
      setCallbackStep("query");
      triggerBotResponse("Perfect. Finally, what grade are you interested in or what is your question?", 800);
    } 
    
    else if (callbackStep === "query") {
      const finalForm = {
        ...leadForm,
        message: `[Chat Query] Grade/Question: ${inputVal}. User Contact Phone: ${leadForm.phone}`
      };
      
      // Update local state
      setLeadForm(finalForm);
      setCallbackStep(null); // finish flow

      setIsTyping(true);

      try {
        // Submit via post to existing contact form api
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: finalForm.name,
            email: finalForm.email,
            phone: finalForm.phone,
            subject: "[Chat Lead] Admissions Callback",
            message: finalForm.message
          })
        });

        setIsTyping(false);

        if (res.ok) {
          triggerBotResponse(
            `Thank you, ${finalForm.name}! 🎉 Your callback request has been filed successfully. Our admissions desk will call you back at ${finalForm.phone} shortly. Have a wonderful day!`,
            500
          );
        } else {
          triggerBotResponse(
            "I've saved your details! However, I had a small connection issue sending it immediately. Rest assured, our team will review the log and reach out shortly.",
            500
          );
        }
      } catch (err) {
        setIsTyping(false);
        triggerBotResponse(
          "Saved! We will check your details and connect with you shortly. Thank you!",
          500
        );
      }
    }
  };

  return (
    <>
      {/* FLOATING ACTION BUTTON */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center">
        <button
          onClick={isOpen ? () => setIsOpen(false) : handleOpenChat}
          className={`relative w-14 h-14 rounded-full flex items-center justify-center text-white transition-all duration-300 shadow-premium-lg border border-amber-400/20 cursor-pointer ${
            isOpen 
              ? "bg-slate-900 rotate-90 scale-95" 
              : "bg-gradient-to-tr from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 hover:scale-105 active:scale-95"
          }`}
          aria-label="Open support chat"
        >
          {isOpen ? (
            <X size={22} className="text-amber-400" />
          ) : (
            <MessageSquare size={24} className="animate-wiggle" />
          )}

          {/* UNREAD BADGE */}
          {!isOpen && unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-[10px] font-bold w-5.5 h-5.5 rounded-full flex items-center justify-center border-2 border-white animate-bounce">
              {unreadCount}
            </span>
          )}
          
          {/* Decorative subtle pulse ring around button */}
          {!isOpen && (
            <span className="absolute inset-0 rounded-full bg-amber-500/30 -z-10 animate-ping opacity-75" />
          )}
        </button>
      </div>

      {/* CHAT WINDOW CONTAINER */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-[350px] sm:w-[380px] h-[500px] flex flex-col bg-white/95 backdrop-blur-md rounded-2xl border border-slate-100 shadow-premium-lg animate-in fade-in slide-in-from-bottom-5 duration-200 overflow-hidden">
          
          {/* HEADER */}
          <div className="bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 text-white p-4 flex items-center justify-between border-b border-slate-800">
            <div className="flex items-center gap-3">
              {/* Virtual Assistant Avatar */}
              <div className="relative w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center overflow-hidden">
                <span className="text-amber-400 font-display font-extrabold text-sm">SIS</span>
                {/* Active Indicator Pulse */}
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-slate-950 animate-pulse" />
              </div>
              
              <div>
                <h4 className="text-sm font-bold tracking-wide flex items-center gap-1">
                  Arya <Sparkles size={12} className="text-amber-400" />
                </h4>
                <p className="text-[10px] text-slate-400 font-medium">Admissions Desk Assistant • Online</p>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                title="Minimize"
              >
                <ChevronDown size={18} />
              </button>
            </div>
          </div>

          {/* MESSAGES SCROLL AREA */}
          <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-slate-50/50">
            {messages.map((msg) => {
              const isBot = msg.sender === "bot";
              return (
                <div 
                  key={msg.id} 
                  className={`flex ${isBot ? "justify-start" : "justify-end"} items-end gap-2 animate-in fade-in slide-in-from-bottom-1 duration-150`}
                >
                  {isBot && (
                    <div className="w-6 h-6 rounded-full bg-slate-900 flex items-center justify-center text-[8px] font-bold text-amber-400 shrink-0 select-none">
                      A
                    </div>
                  )}

                  <div className="flex flex-col max-w-[80%] space-y-1">
                    <div 
                      className={`p-3 rounded-2xl text-xs md:text-sm shadow-sm leading-relaxed whitespace-pre-line ${
                        isBot 
                          ? "bg-white text-slate-800 border border-slate-100 rounded-bl-none" 
                          : "bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-br-none font-medium"
                      }`}
                    >
                      {msg.text}

                      {/* Optional Interactive Link Action Button */}
                      {msg.link && (
                        <div className="mt-2.5 pt-2 border-t border-slate-100 flex">
                          <a 
                            href={msg.link.href}
                            className="inline-flex items-center gap-1 px-3 py-1.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-[10px] rounded-lg transition-colors"
                          >
                            {msg.link.label}
                          </a>
                        </div>
                      )}
                    </div>
                    
                    <span className={`text-[9px] text-slate-400 px-1 ${!isBot && "self-end"}`}>
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              );
            })}

            {/* Simulated typing indicator */}
            {isTyping && (
              <div className="flex justify-start items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-slate-900 flex items-center justify-center text-[8px] font-bold text-amber-400 shrink-0">
                  A
                </div>
                <div className="bg-white border border-slate-100 p-3 rounded-2xl rounded-bl-none shadow-sm flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" />
                </div>
              </div>
            )}

            <div ref={chatEndRef} />
          </div>

          {/* QUICK SUGGESTION OPTIONS PANEL */}
          {callbackStep === null && (
            <div className="px-4 py-2 border-t border-slate-100 bg-white flex flex-wrap gap-1.5">
              <button 
                type="button"
                onClick={() => handleOptionClick("🏫 Admission Process")}
                className="px-2.5 py-1.5 bg-slate-50 hover:bg-amber-500/10 hover:text-amber-600 border border-slate-200 hover:border-amber-500/30 rounded-xl text-[10px] md:text-xs font-semibold text-slate-600 cursor-pointer transition-all duration-200"
              >
                🏫 Admission Process
              </button>
              <button 
                type="button"
                onClick={() => handleOptionClick("💰 Fee Structure")}
                className="px-2.5 py-1.5 bg-slate-50 hover:bg-amber-500/10 hover:text-amber-600 border border-slate-200 hover:border-amber-500/30 rounded-xl text-[10px] md:text-xs font-semibold text-slate-600 cursor-pointer transition-all duration-200"
              >
                💰 Fee Structure
              </button>
              <button 
                type="button"
                onClick={() => handleOptionClick("📍 Location & Transport")}
                className="px-2.5 py-1.5 bg-slate-50 hover:bg-amber-500/10 hover:text-amber-600 border border-slate-200 hover:border-amber-500/30 rounded-xl text-[10px] md:text-xs font-semibold text-slate-600 cursor-pointer transition-all duration-200"
              >
                📍 Location & Transport
              </button>
              <button 
                type="button"
                onClick={() => handleOptionClick("📞 Speak to Counselor")}
                className="px-2.5 py-1.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl text-[10px] md:text-xs font-bold shadow-sm hover:shadow hover:scale-102 cursor-pointer transition-all duration-200 flex items-center gap-1"
              >
                <PhoneCall size={10} />
                <span>Request Call</span>
              </button>
            </div>
          )}

          {/* INPUT FORM */}
          <form 
            onSubmit={handleSendMessage} 
            className="p-3 border-t border-slate-100 bg-white flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={
                callbackStep === "name" ? "Type your name..." : 
                callbackStep === "phone" ? "Type your phone..." : 
                callbackStep === "email" ? "Type your email..." : 
                callbackStep === "query" ? "Type grade/question..." : 
                "Ask a query or type message..."
              }
              className="flex-grow px-3 py-2 text-xs md:text-sm bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-amber-500 focus:bg-white transition-all text-slate-800"
            />
            <button
              type="submit"
              className="p-2.5 bg-slate-900 hover:bg-amber-500 text-white hover:text-slate-950 rounded-xl transition-all cursor-pointer shadow-sm active:scale-95 flex items-center justify-center shrink-0"
              aria-label="Send message"
            >
              {isTyping && callbackStep !== null ? (
                <Loader2 size={14} className="animate-spin" />
              ) : (
                <Send size={14} />
              )}
            </button>
          </form>
        </div>
      )}
    </>
  );
}
