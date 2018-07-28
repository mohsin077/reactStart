import React, { Component } from 'react';
import {List} from "./list"

export class Demo extends Component{

    constructor(){
        super();
         
        this.getData=this.getData.bind(this);
        this.state={
            elements:[]
        }
    }

    componentWillReceiveProps(nextProps){   
         
this.setState({elements:[].concat(nextProps.data)})
    }
    componentWillMount(){
    
        this.setState({elements:[].concat(this.props.data)});
    }
    getData=async(i,value)=>{
        let {elements}=this.state;
        elements[i]=value;
        await this.setState({elements});
        
      }
    render(){
         
        let elements=[];
        let that=this;
        this.state.elements.forEach(function(ele,i){
            elements.push(<List key={i} index={i} item={ele} sendData={that.getData}/>);
        })
        return(<div> 
            <button onClick={()=>this.props.change()}>Change Values</button>
            <h1>{elements} </h1>
            </div>);
    }
}