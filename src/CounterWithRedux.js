import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import increment from './Action/counter';
import decrement from './Action/counter1';

const CounterWithRedux = () =>{
    const dispatch = useDispatch();
    const state= useSelector((state)=>{
        console.log(state)
        return{
            count:state.counters.count
        }
    })
    return(
        <>
        <button onClick={()=>dispatch( increment(10))}>+</button>
        <span>{state.count}</span>
        <button onClick={()=>dispatch( decrement(10))}>-</button>
        </>
    )
}
export default CounterWithRedux;