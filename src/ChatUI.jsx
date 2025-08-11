import { useState } from "react";

export default function ChatUI() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { sender: "user", text: input }]);
    setInput("");
  };

  return (
    <div className="h-screen flex flex-col bg-black text-white">
      <header className="p-4 text-center text-2xl font-bold neon-text">
        CM Chat
      </header>
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-3 rounded-lg max-w-md ${
              msg.sender === "user"
                ? "bg-neonBlue text-black ml-auto"
                : "bg-neonPink text-black"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="p-4 flex gap-2">
        <input
          className="flex-1 p-2 rounded neon-border bg-black text-white outline-none"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={sendMessage}
          className="px-4 py-2 neon-border neon-text font-bold"
        >
          Send
        </button>
      </div>
    </div>
  );
}
