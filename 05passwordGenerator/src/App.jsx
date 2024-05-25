import { useState, useCallback, useEffect , useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [length, setLength] = useState(8); 
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");


  //userefHook
  const copyTOClipBoard = useCallback(() => {
    passRef.current?.select()
    window.navigator.clipboard.writeText(passRef)
  }, [password])
  const passRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*(){}:><";

    
    for (let i = 0; i < length; i++) { 
      let charIndex = Math.floor(Math.random() * str.length); 
      pass += str.charAt(charIndex);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]); 
  useEffect(() => {
    passwordGenerator(); 
  }, [length, numberAllowed, charAllowed, passwordGenerator]); 

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-600">
        <h1 className="text-white text-center pt-3 my-3">Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="mb-3 outline-none w-full py-1 px-3 rounded-md"
            placeholder="Password"
            readOnly
            ref={passRef}
          />
          <button 
            className="outline-none bg-blue-700 text-white px-3 mb-3 shrink-0 rounded-md"
            onClick={copyTOClipBoard}
            
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm items-center gap-x-1">
          <input 
            type="range" 
            min={6}
            max={100}
            value={length} 
            className="cursor-pointer"
            onChange={(e) => setLength(parseInt(e.target.value, 10))} 
          />
          <label>Length: {length}</label>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={numberAllowed} // Changed from defaultChecked to checked
              id="numberInput"
              onChange={() => setNumberAllowed(prev => !prev)}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={charAllowed} 
              id="characterInput"
              onChange={() => setCharAllowed(prev => !prev)}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
