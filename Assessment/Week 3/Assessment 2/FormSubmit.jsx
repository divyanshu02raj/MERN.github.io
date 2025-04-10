import { useState } from "react";

export default function ReactForm() {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Input value:", input);
  };

  return (
    <form onSubmit={handleSubmit} className="p-6">
      <input
        type="text"
        className="border p-2 rounded mr-4"
        placeholder="Enter text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
        Submit
      </button>
    </form>
  );
}
