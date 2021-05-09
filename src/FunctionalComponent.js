import { useState, useEffect, useRef } from "react";

const FunctionalComponent = () => {
    const inputRef = useRef(null);
    const value = useRef(0);
    console.log('value', value)


  const [counter, setCounter] = useState(0);
  const [text, setText] = useState("");


  /*useEffect, 
    bağımlılık arrayi verilmezse: componentDidUpdate gibi her renderda çalışır
    boş bağımlılık arrayi verilirse: componentDidMount gibi çalışır
    değişkene bağlı bağımlılık arrayi verilirse: değişken değiştikçe çalışır
    return verilirse: return kısmı componentWillUnmount gibi çalışır.
    yani component null olursa*/

    // useEffect(() => {
    //     console.log("useEffect");
    //     /*timeout kullanılırsa clearTimout kullanılması gereken yer return*/
    //     return () => 
    //     {
    //         console.log("Function Component unmounted")
    //     }
    // }, [counter])

    /*useRef ile tutulan element değişince render edilmiyor.
    render edilmesi için ona bağlı değişkenin useEffecte bağlanması gerekiyor.*/
  useEffect(() => {
    console.log("useEffect");
  },[counter])

//   console.log("Func Counter: ", counter);

// useEffect(() => {
//     console.log("useEffect");
//     return () => {console.log("func comp unmount")}
// },[counter])

console.log("Func Comp Rendered!")

  const increase = () => {
      setCounter(counter + 1);
      value.current = value.current + 1;
  }

  const changeBGColor = () => {
      const color = inputRef.current.value;
      inputRef.current.parentElement.style.backgroundColor = text;
  }

  const handleText = (e) => {
      setText(e.target.value);
  }

  return (
    <div className="function">
      <h2>Functional Component</h2>
      <p>Counter: {counter}</p>
      <button onClick={()=>setCounter(counter+1)}>Increase1</button>
      <button onClick={() => increase()}>Increase2</button>
      <hr />
      <input type="text" value={text}  ref={inputRef} onChange={handleText}/>
      <button onClick={() => changeBGColor()}>BG Color</button>
    </div>
  );
};

export default FunctionalComponent;
