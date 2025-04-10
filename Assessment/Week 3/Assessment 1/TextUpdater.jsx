import { useState } from "react";

export default function TextUpdater() {
  const [text, setText] = useState("");

  return (
    <div className="p-6">
      <input
        type="text"
        className="border p-2 rounded w-full"
        placeholder="Type something..."
        onChange={(e) => setText(e.target.value)}
      />
      <p className="mt-4 text-lg font-medium">You typed: {text}</p>
    </div>
  );
}
