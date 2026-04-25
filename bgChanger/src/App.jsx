import { useState } from "react";

function App() {
  const [color, setColor] = useState("grey");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
          <div className="flex flex-wrap justify-center gap-5 rounded px-5 py-2 bg-white">
            <button className="bg-red-500 text-white font-bold py-2 px-4 rounded-full" onClick={() => setColor("red")}>
              Red
            </button>
            <button onClick={() => setColor("green")} className="bg-green-600 text-white font-bold py-2 px-4 rounded-full">
              Green 
            </button>
            <button onClick={() => setColor("blue")} className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full">
              Blue
            </button>
            <button onClick={() => setColor("purple")} className="bg-purple-500 text-white font-bold py-2 px-4 rounded-full">
              Purple
            </button>
            <button onClick={() => setColor("yellow")} className="bg-yellow-500 text-white font-bold py-2 px-4 rounded-full">
              Yellow
            </button>
            <button onClick={() => setColor("black")} className="bg-black text-white font-bold py-2 px-4 rounded-full">
              Black
            </button>
            <button onClick={() => setColor("white")} className="bg-white text-black font-bold py-2 px-4 rounded-full border shadow-3xl">
              White
            </button>
            <button onClick={() => setColor("pink")} className="bg-pink-300 text-white font-bold py-2 px-4 rounded-full shadow-3xl">
              Pink
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
