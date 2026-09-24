import { useState } from "react";


const App = () => {

const [countNumber,setCountNumber] = useState(0)

let handleIncrement = ()=>{
  setCountNumber(countNumber+1)
};
let handleDecrement = ()=>{
  setCountNumber(countNumber-1)
};

let handleReset = ()=>{
  setCountNumber(0)
}
  return (<>
  <div>
 <h1>react Cunter</h1>
 <h2>{countNumber}</h2>
 <button onclik={handleIncrement}>+</button>
<button onclik={handleDecrement}>-</button>
<button onclik={handleReset}>Rest</button>

 </div>


  </>)
}

export default App 