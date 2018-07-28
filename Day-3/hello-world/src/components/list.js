import React, { Component } from 'react';

export class List extends Component{

    constructor(){
        super();
    }

    componentWillReceiveProps(nextProps){

    }
    render(){
        return(
            <div>
        <li>{this.props.item} </li>
        <button onClick={()=>this.props.sendData(this.props.index,this.props.item+'11')}>send </button>
    </div>)
    }
}