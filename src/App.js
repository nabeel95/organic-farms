import './App.css';

const App = () => {
  return (
      <div className="font-sans">
        {/* Navbar */}
        <nav className="bg-black text-white p-4 flex justify-between">
          <h1 className="text-xl font-bold">India Organic Farms</h1>
          <ul className="flex space-x-4">
            <li>Contact (+91 9071093799)</li>
          </ul>
        </nav>

        {/* Hero Section */}
        <section className="bg-green-200 h-80 flex items-center justify-center text-center p-6">
          <div>
            <h2 className="text-4xl font-bold">Fresh Organic Products</h2>
            <p className="mt-2">100% Natural and Chemical-Free</p>
          </div>
        </section>

        {/* Categories */}
        <section className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white shadow-md p-4 text-center">
            <h3 className="text-xl font-bold">Vegetables</h3>
            <p>Fresh farm-grown organic vegetables.</p>
          </div>
          <div className="bg-white shadow-md p-4 text-center">
            <h3 className="text-xl font-bold">Fruits</h3>
            <p>Delicious organic fruits directly from the farm.</p>
          </div>
          <div className="bg-white shadow-md p-4 text-center">
            <h3 className="text-xl font-bold">Grains</h3>
            <p>Whole grains rich in nutrients and free from chemicals.</p>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black text-white text-center p-4">
          <p>&copy; 2025 India Organic Farms. All rights reserved.</p>
        </footer>
      </div>
  );
};

export default App;
