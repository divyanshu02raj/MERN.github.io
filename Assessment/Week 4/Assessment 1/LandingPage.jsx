export default function LandingPage() {
    const products = [
      { id: 1, name: "Product A", price: "₹999", image: "https://via.placeholder.com/150" },
      { id: 2, name: "Product B", price: "₹799", image: "https://via.placeholder.com/150" },
      { id: 3, name: "Product C", price: "₹599", image: "https://via.placeholder.com/150" }
    ];
  
    return (
      <div className="font-sans">
        {/* Navbar */}
        <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">MyShop</h1>
          <div className="space-x-4">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">Products</a>
            <a href="#" className="hover:underline">Contact</a>
          </div>
        </nav>
  
        {/* Hero Section */}
        <header className="text-center py-16 bg-gray-100">
          <h2 className="text-4xl font-bold mb-4">Welcome to MyShop</h2>
          <p className="text-lg text-gray-700">Find the best products at unbeatable prices.</p>
        </header>
  
        {/* Product Section */}
        <section className="p-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow p-4 text-center">
              <img src={product.image} alt={product.name} className="mx-auto mb-4" />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-blue-600 font-bold">{product.price}</p>
            </div>
          ))}
        </section>
  
        {/* Footer */}
        <footer className="bg-gray-800 text-white p-4 text-center mt-10">
          <p>Follow us on</p>
          <div className="space-x-4 mt-2">
            <a href="#" className="hover:underline">Instagram</a>
            <a href="#" className="hover:underline">Facebook</a>
            <a href="#" className="hover:underline">Twitter</a>
          </div>
        </footer>
      </div>
    );
  }
  