import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
        display:true,
        text:'',
        elements:[]
    }
    this.countries=['1','2']

  }
  componentWillReceiveProps(nextProps){
    debugger;
this.props;
nextProps;
  }
  onChageInput=(event)=>{
    this.setState({text:event.target.value});
  }
  onClickButton =()=>{
      let {elements}=this.state;
      elements.push(this.state.text);
      this.setState({elements,text:''})
      if(elements.length>5){
        this.setState({elements:[]});
      }
  }
  render() {
    let list=[];
    this.state.elements.forEach(function(li,i){
list.push(<li key={i}>{li}</li>)
    })
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro"></p>
          <h1>hello</h1>
          <input type='text' value={this.state.text} onChange={(e)=>this.onChageInput(e)}/>
          <button onClick={()=>this.onClickButton()} >save </button>
        


        <div>
         <ul> {list}</ul>
          </div>
      </div>
    );
  }
}

export default App;
