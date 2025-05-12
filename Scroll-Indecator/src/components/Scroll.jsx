import React, { useEffect, useState } from "react";

function Scroll({ url }) {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);

  async function fetchData(getUrl) {
    setloading(true);

    try {
      const response = await fetch(getUrl);
      const data = await response.json();

      if (data && data.products && data.products.length) {
        setData(data.products);
      }
    } catch (error) {
      console.log(error);
      setErrorMessage("Error fetching data");
    } finally {
      setloading(false);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage, { passive: true });
    return () => window.removeEventListener("scroll", handleScrollPercentage);
  }, []);

  function handleScrollPercentage() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const windowHeight =
      document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = Math.min((scrollTop / windowHeight) * 100, 100);
    setScrollPercentage(scrolled);
  }

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-500 z-50">
        <div
          className="h-full bg-amber-600 transition-all duration-150"
          style={{ width: `${scrollPercentage}%` }}
        />
      </div>

      <div className="p-4 pt-6">
        <h1 className="text-3xl font-extrabold mb-4">
          Custom Scroll Indicator
        </h1>

        {loading ? (
          <p>Loading...</p>
        ) : errorMessage ? (
          <p className="text-red-500">{errorMessage}</p>
        ) : (
          <div>
            {data.map((dataItem) => (
              <div key={dataItem.id} className="mb-4 p-3 border rounded">
                <h2 className="text-lg font-semibold text-amber-500 mt-2">
                  {dataItem.title}
                </h2>
                <h3 className="text-sm font-bold mt-1">
                  Rating: {dataItem.rating}
                </h3>
                <p className="text-amber-800 mt-1.5">
                  {dataItem.shippingInformation}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Scroll;
