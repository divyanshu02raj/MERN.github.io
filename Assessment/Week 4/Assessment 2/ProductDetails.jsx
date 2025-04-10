import { useState } from "react";

export default function ProductDetails() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4">Product A</h2>
      <p>₹999</p>
      <button
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? "Hide Details" : "Show Details"}
      </button>
      {showDetails && (
        <div className="mt-4 text-gray-700">
          <p>This is a great product with amazing features. You'll love it!</p>
        </div>
      )}
    </div>
  );
}
