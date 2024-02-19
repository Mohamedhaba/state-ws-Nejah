
import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  
  state={ 
    count:0,
    isShow:true
  }
  handlePlus=()=>this.setState({count:this.state.count+1})
    handleMoins=()=>this.state.count>0&&this.setState({count:this.state.count-1 })
  handleFalse=()=>this.setState({isShow:!this.state.isShow})
 componentDidMount(){
  console.log("Component did MOUNT")
  setInterval(() => {
    this.handlePlus()
 }, 1000);

 }
 componentDidUpdate(){
  console.log("COmponent did update")

 }
 componentWillUnmount(){
  console.log("Componenet will Unmount")
 }
  render() {
    console.log("render");
    return (
      <div className='App'>
        <button onClick={this.handleFalse}>{this.state.isShow?"Hide":"Show"}</button>
        {this.state.isShow&&
          <>
          <h1>{this.state.count}</h1>
        <button onClick={this.handlePlus} >+</button>
        <button onClick={this.handleMoins}>-</button>
          </>
        }
      </div>
    )
  }
}
