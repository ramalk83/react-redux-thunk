import React, { Component } from 'react'
import Hello from './Hello';
import store,{COUNTER_INCREMENT,COUNTER_DECREMENT} from './store';
import {Provider} from 'react-redux';


export default class App extends Component {  
  constructor(){
    super();
    this.state={
      name:'React'
    };
  }

  increment=()=>{
    store.dispatch({type:COUNTER_INCREMENT});
    console.log(store.getState());
  }
  decrement=()=>{
    store.dispatch({type:COUNTER_DECREMENT});
    console.log(store.getState());
  }
  push=()=>{
    store.dispatch({type:'push',value:Math.random()});
    console.log(store.getState());
  }
  pop=()=>{
    store.dispatch({type:'pop'});
    console.log(store.getState());
  }
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <Hello name={this.state.name}/>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={this.push}>Push</button>
        <button onClick={this.pop}>Pop</button>
      </div>
      </Provider>
    )
  }
}

