import { useCallback, useState, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numsAllowed, setNumAllowed] = useState(false);
  const [charsAllowed, setCharsAllowed] = useState(false);
  const [password, setPassword] = useState("");
// use ref hook

  const passwordRef = useRef(null);

// use callback for optimizaton and the dependencies are for chache memorisation
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXUZabcdefghijklmnopqrstuvwxyz"; 
    if (numsAllowed) str +="1234567890";
    if (charsAllowed) str += "@#!$%^&*~";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() *str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, charsAllowed, numsAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 50);
    window.navigator.clipboard.writeText(password);
  }, [password])

  // useEffect => if there are any changes in dependencies then the function should run again.
    useEffect(() => {passwordGenerator()}, [length, charsAllowed, numsAllowed, passwordGenerator])
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-600 bg-gray-700">
        <h1 className="text-amber-50 text-4xl text-center">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            placeholder="password"
            className="outline-none w-full py-1 px-3 bg-white my-2 rounded-tl rounded-bl"
            readOnly
            ref={passwordRef}
          />
          <button className="outline-none bg-blue-500 text-white px-3 py-1 my-2 shrink-0 rounded-tr rounded-br font-bold" onClick={copyPasswordToClipboard}>
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1 ">
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              id="lengthRange"
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label htmlFor="lengthRange">Length : {length} </label>
          </div>
          <div className="flex items-center gap-x-1 ">
            <input
              type="checkbox"
              defaultChecked={numsAllowed}
              id="numsInput"
              onChange={(e) => {
                setNumAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numsInput">Numbers </label>
          </div>
          <div className="flex items-center gap-x-1 ">
            <input
              type="checkbox"
              defaultChecked={charsAllowed}
              id="charsInput"
              onChange={(e) => {
                setCharsAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="charsInput">Characters </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
