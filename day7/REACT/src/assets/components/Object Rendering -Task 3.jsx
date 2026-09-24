 const App = () => {
  const product = {
    name: "Laptop",
    price: 55000,
    category: "Electronics",
    brand: "HP",
  };

  return (
    <div className="min-h-screen bg-yellow-100 p-10">
      <div className="mx-auto max-w-md rounded-xl bg-white p-6 shadow-xl">
        <h1 className="mb-5 text-3xl font-bold text-orange-600">
          Product Details
        </h1>

        <p className="mb-3">Name: {product.name}</p>
        <p className="mb-3">Price: ₹{product.price}</p>
        <p className="mb-3">Category: {product.category}</p>
        <p>Brand: {product.brand}</p>
      </div>
    </div>
  );
};

export default App;