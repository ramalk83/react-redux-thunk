
import React from 'react'
import {connect} from 'react-redux';
import {COUNTER_INCREMENT,COUNTER_DECREMENT} from './store';

let Hello = (props) =>{
    return <h1>
        <button onClick={props.increment}>Increment</button>
        <button onClick={props.decrement}>Decrement</button>
        
        Hello {props.name}! {props.count}</h1>
}

const mapStateToProps=(state)=>{
    return{
        count:state.counter.count
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        increment:() => {dispatch({type:COUNTER_INCREMENT})},
        decrement:() =>{dispatch({type:COUNTER_DECREMENT})},
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Hello);

