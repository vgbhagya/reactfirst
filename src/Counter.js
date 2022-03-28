import React from "react";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      color:'red',
      backGround:'blue',
      isClicked:true
    };
  }
  increment = () => {
    this.setState({
      value: this.state.value + 1
    });
  };
  decrement = () => {
    this.setState({
      value: this.state.value - 1
    });
  };
  //ComponentDidMount(){
      //Console.log('mounting..')
  //}
  render() {
    return (
      <>
        <button onClick={this.increment}>+</button>
        <span>{this.state.value}</span>
        <button onClick={this.decrement}>-</button>
      </>
    );
  }
}
export default Counter;

