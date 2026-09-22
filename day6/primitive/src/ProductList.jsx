 
const ProductList = () => {

  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 50000,
      category: "Electronics"
    },
    {
      id: 2,
      name: "Mobile",
      price: 25000,
      category: "Electronics"
    },
    {
      id: 3,
      name: "Headphones",
      price: 2000,
      category: "Accessories"
    },
    {
      id: 4,
      name: "Keyboard",
      price: 1500,
      category: "Computer"
    }
  ];

  return (<>
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="mb-6 text-3xl font-bold text-orange-600">
        Product List
      </h1>

      <div className="grid gap-5 sm:grid-cols-2">

        {products.map((product) => (
          <div
            key={product.id}
            className="rounded-xl bg-white p-6 shadow-lg"
          >

            <h2 className="mb-3 text-xl font-bold text-orange-600">
              {product.name}
            </h2>

            <p className="mb-2">
              <b>Price:</b> ₹{product.price}
            </p>

            <p>
              <b>Category:</b> {product.category}
            </p>

          </div>
        ))}

      </div>

    </div>
  </>);
};

export default ProductList;

