import React, { Component } from 'react'
import Post from './components/Post'
import Postform from './components/Postform'
import {Provider} from 'react-redux'
import { applyMiddleware } from 'redux'
import store from './store';



export default class App extends Component {  
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <Postform/>
        <hr/>
        <Post/>
      </div>
      </Provider>
    )
  }
}

