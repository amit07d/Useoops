import { useEffect, useRef, useState } from "react";

function ScrollToTopAndScrollToBottom({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const topRef = useRef(null);
  const bottomRef = useRef(null);

  function scrollToTop() {
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  async function fetchData(getUrl) {
    setLoading(true);
    try {
      const response = await fetch(getUrl);
      const responseData = await response.json();
      if (
        responseData &&
        responseData.products &&
        responseData.products.length
      ) {
        setData(responseData.products);
      }
    } catch (error) {
      console.log(error);
      setErrorMessage("Error fetching data");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  return (
    <div className="min-h-screen flex flex-col items-center p-4">
      <div className="mb-4" ref={topRef}>
        <h2 className="text-2xl font-bold">Scroll Top Bottom</h2>
      </div>

      <div className="mb-4 text-center">
        <h3 className="text-lg font-semibold mb-2">This is the top section</h3>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={scrollToBottom}
        >
          Scroll To Bottom
        </button>
      </div>

      <div className="w-full max-w-md">
        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : errorMessage ? (
          <p className="text-center text-red-500">{errorMessage}</p>
        ) : (
          <div className="space-y-2">
            {data.map((dataItem) => (
              <div
                key={dataItem.id}
                className="p-2 border border-gray-300 rounded shadow-sm"
              >
                {dataItem.title}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-6 text-center" ref={bottomRef}>
        <h3 className="text-lg font-semibold mb-2">
          This is the Bottom Section
        </h3>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          onClick={scrollToTop}
        >
          Scroll To Top
        </button>
      </div>
    </div>
  );
}

export default ScrollToTopAndScrollToBottom;
