import { useState } from "react";

// 1. TextUpdater Component
function TextUpdater() {
    const [text, setText] = useState("");
    return (
        <div className="p-4">
            <input 
                type="text" 
                className="border p-2" 
                value={text} 
                onChange={(e) => setText(e.target.value)} 
                placeholder="Type something..." 
            />
            <p className="mt-2">{text}</p>
        </div>
    );
}

// 2. Form Component
function InputForm() {
    const [inputValue, setInputValue] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputValue);
    };

    return (
        <form onSubmit={handleSubmit} className="p-4">
            <input 
                type="text" 
                className="border p-2" 
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)} 
                placeholder="Enter text" 
            />
            <button type="submit" className="bg-blue-500 text-white p-2 ml-2 rounded">Submit</button>
        </form>
    );
}

// 3. UserCard Component
function UserCard({ name, email }) {
    return (
        <div className="border p-4 rounded shadow-md max-w-sm">
            <h2 className="text-xl font-bold">{name}</h2>
            <p className="text-gray-600">{email}</p>
        </div>
    );
}

// 4. Button Component
function CustomButton() {
    return (
        <button 
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
            onClick={() => console.log("Button clicked!")}
        >
            Click Me
        </button>
    );
}

// 5. LoginForm Component
function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Email: ${email}\nPassword: ${password}`);
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 space-y-2">
            <input 
                type="email" 
                className="border p-2 w-full" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
            />
            <input 
                type="password" 
                className="border p-2 w-full" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">Login</button>
        </form>
    );
}

export { TextUpdater, InputForm, UserCard, CustomButton, LoginForm };
