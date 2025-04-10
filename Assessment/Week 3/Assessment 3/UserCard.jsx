export default function UserCard({ name, email }) {
    return (
      <div className="bg-white p-6 rounded-2xl shadow-md max-w-sm mx-auto mt-10">
        <h2 className="text-xl font-bold mb-2">{name}</h2>
        <p className="text-gray-700">{email}</p>
      </div>
    );
  }
