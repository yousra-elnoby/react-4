import { useRef, useState } from 'react';
import './App.css';

function App() {

  // const [x , setx ] = useState(["task1" , "task2" ,"task3" ,"task4"])
  const [x , setx ] = useState([])
  const inputref = useRef ()
  const add = () => {
    const value = inputref.current.value
    // console.log (value)
    const newData = {completed:false, value}
    setx ([...x , newData])
    inputref.current.value = ""
  }

  const taskDone = (index) =>{ 
    const newx = [...x]
    // حل تاني
    // const newx = x.slice()
    newx[index].completed =  !newx[index].completed
    setx(newx)
  }
  // console.log(x)
  const toDelete = (index) => {
    const newx = [...x]
    newx.splice(index,1)
    setx(newx)
  }
  return (
    <div className="App">
      <h2> RAMADAN TO DO LIST</h2>
      <ul>
{
x.map(({value , completed} , index ) => {
  
    return <div className='d1'> 
      <li className={completed ? "diffstyle" :""} onClick={ () => taskDone(index)}>{value}</li>
          <span onClick={()=> toDelete(index)}>🇽</span>
    </div>
  })
  // طريقه تانية
  // x.map(({value}) => {
  //   return <li>{value}</li>

  // })

}
      </ul>
      <input ref={inputref} placeholder='Enter your new task.....'/>
        <button onClick={add}>Add</button>
    </div>
  );
}

export default App;


                                  // yousra elnoby