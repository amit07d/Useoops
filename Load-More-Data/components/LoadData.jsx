import React, { useEffect, useState } from "react";

function LoadData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  async function fetchLoading() {
    setLoading(true);
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${count * 20}`
      );
      const data = await response.json();
      if (data && data.products && data.products.length) {
        setProducts(data.products);
      }
    } catch (error) {
      console.error("Error fetching loading", error);
    } finally {
      setLoading(false);
    }
  }

  const handleprev = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  const handleNext = () => {
   setCount(count + 1)
  }

  useEffect(() => {
    fetchLoading();
  }, [count]);

  return (
    <div className="mt-4">
      <h2 className="text-2xl font-bold mb-4">Product Grid</h2>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((product) => (
            <div key={product.id}
            className="bg-white rounded-2xl shadow-md p-4 flex flex-col"
            >
              <img src={product.thumbnail}
                alt={product.meta.barcode}
              className="w-full object-cover rounded-md mb-3"
              />
              <h3 className="text-lg font-semibold text-amber-500">{product.title}</h3>
              <p className="text-sm text-blue-300 line-clamp-3">{product.description}</p>
              <span className="mt-auto text-amber-800 font-bold">{product.price}</span>
            </div>
          ))}
        </div>
      )}

      {/* for button */}
      <div className="flex justify-center items-center gap-4 mt-6">
        <button
          className="px-4 py-2 bg-gray-300 rounded-2xl hover:bg-gray-500 disabled:opacity-50"
          onClick={handleprev}
          disabled={count ===0}
        >Previous</button>
        <span className="font-medium">Page{ count +1}</span>
        <button
          className="px-4 py-2 bg-gray-300 rounded-2xl hover:bg-gray-500 disabled:opacity-50"
        onClick={handleNext}
        >Next</button>
      </div>
    </div>
  );
}

export default LoadData;
