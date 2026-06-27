import { useState } from "react";

function App() {
  const [color, setColor] = useState("grey");

  return (
    <>
      <div className="w-full h-screen" style={{ backgroundColor: color }}>
        <div className="flex flex-wrap bottom-12  fixed justify-center inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-4 shadow-lg bg-white px-4 py-2.5 rounded-3xl">
            <button className="border-s-black rounded-3xl outline-none px-7 py-2.5 font-bold bg-red-600" style={{backgroundColor:"red", color:"white"}} onClick={()=>setColor("red")}>
              Red
            </button>
            <button className="border-s-black rounded-3xl outline-none font-bold px-7 py-2.5 bg-yellow-600" style={{backgroundColor:"yellow"}} onClick={()=>setColor("yellow")}>
              Yellow
            </button>
            <button className="border-s-black rounded-3xl outline-none font-bold px-7 py-2.5 bg-orange-600" style={{backgroundColor:"orange", color:"white"}} onClick={()=>setColor("orange")}>
              Orange
            </button>
            <button className="border-s-black rounded-3xl outline-none font-bold px-7 py-2.5 bg-blue-600" style={{backgroundColor:"blue", color:"white"}} onClick={()=>setColor("blue")}>
              Blue
            </button>
            <button className="border-s-black rounded-3xl outline-none font-bold px-7 py-2.5 bg-pink-400" style={{backgroundColor:"pink"}} onClick={()=>setColor("pink")}>
              Pink
            </button>
            <button className="border-s-black rounded-3xl outline-none px-7 py-2.5 font-bold bg-green-600" style={{backgroundColor:"green" , color:"white"}} onClick={()=>setColor("green")}>
              Green
            </button>
            <button className="border-s-black rounded-3xl outline-none font-bold px-7 py-2.5" style={{backgroundColor:"violet", color:"white"}} onClick={()=>setColor("violet")}>
              Violet
            </button>
            <button className="border-s-black rounded-3xl outline-none font-bold px-7 py-2.5" style={{backgroundColor:"black", color:"white"}} onClick={()=>setColor("black")}>
              Black
            </button>
            <button className="border rounded-3xl outline-none font-bold px-7 py-2.5" style={{backgroundColor:"white"}} onClick={()=>setColor("white")}>
              White
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
