import React, { Component } from 'react';
import logo from '../logo.svg';
import {Demo} from './demo'
import {connect} from 'react-redux'
import {updateUser} from "../actions"

class App extends Component {
  constructor(){
    super();
    this.state={
        elements:['a','b','c'] 
    }
    this.changeData=this.changeData.bind(this);

  }
  componentWillReceiveProps(nextProps){
    this.props;
    nextProps;
    debugger;
  }
  changeData(){
    this.setState({elements:['x','y','z']});
  }
 
 
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro"></p>
      <Demo data={this.state.elements} change={this.changeData}/>
      <button onClick={()=>this.props.updateUser([1,2,3])}>click Me</button>
      </div>
    );
  }
}
function mapStateToProps({user}){
return {user};
}

export default connect(mapStateToProps,{updateUser})(App);


