import {useState, useEffect} from 'react'

export default function CounterStatePage(){
    
    const [count, setCount] = useState(0)

    function onClickCountUp(){
        setCount(count+1)
    }

    function onClickCountDown(){
        setCount(count-1)
    }
    return(
        <>
            <div>{count}</div>
            <button onClick={onClickCountUp}>Count UP</button>
            <button onClick={onClickCountDown}>Count DOWN</button>
        </>
    )
}