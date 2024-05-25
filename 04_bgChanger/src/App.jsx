import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive")
  function colorChanger(inputColor){
    setColor(inputColor)

  }
  return (
    <>
      <div className="w-full h-screen duration-200 "  style={{backgroundColor: color}}>
         <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 "> <div className="flex justify-center shadow-lg bg-white gap-7 rounded-md px-3 py-2">
            <button className="px-3  border-2 rounded-xl bg-blue-500 " onClick={()=>colorChanger("blue")} >Blue</button>
            <button className="px-3  border-2 rounded-xl bg-red-500 "onClick={()=>colorChanger("red")}>Red</button>
            <button className="px-3  border-2 rounded-xl bg-green-500" onClick={()=>colorChanger("green")}>Green</button>
            <button className="px-3  border-2 rounded-xl bg-pink-500" onClick={()=>colorChanger("rgb(236 72 153)")}>Pink</button>
            <button className="px-3  border-2 rounded-xl bg-orange-500"onClick={()=>colorChanger("orange")}>orange</button>
         </div>

         </div>
      </div>
    </>
  )
}

export default App
