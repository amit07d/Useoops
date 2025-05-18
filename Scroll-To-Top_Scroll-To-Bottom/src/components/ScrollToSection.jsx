import { useRef } from "react";

function ScrollToSection() {
  const ref = useRef();

  const data = [
    {
      label: "First Card",
      className: "w-full h-[600px] bg-red-500",
    },
    {
      label: "Second Card",
      className: "w-full h-[600px] bg-blue-500",
    },
    {
      label: "Third Card",
      className: "w-full h-[600px] bg-green-500",
    },
    {
      label: "Fourth Card",
      className: "w-full h-[600px] bg-orange-500",
    },
    {
      label: "Fifth Card",
      className: "w-full h-[600px] bg-purple-500",
    },
  ];

  function handleScrollToLabel() {
    const position = ref.current?.offsetTop;
    window.scrollTo({
      top: position,
      behavior: "smooth",
    });
  }

  return (
    <div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold">Scroll To Section</h2>
      </div>
      <div>
        <button
          onClick={handleScrollToLabel}
          className="bg-amber-500 text-white px-4 py-2 rounded hover:bg-amber-600 mb-4"
        >
          Click To Scroll
        </button>

        {data.map((dataItem, index) => (
          <div
            key={index}
            ref={index === 2 ? ref : null}
            className={`${dataItem.className} flex items-center justify-center`}
          >
            <h3 className="text-white text-2xl font-semibold">
              {dataItem.label}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ScrollToSection;
