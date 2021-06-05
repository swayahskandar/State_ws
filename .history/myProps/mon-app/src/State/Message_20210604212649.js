import React, { Component } from 'react'
import PropTypes from "prop-types";

export class Message extends Component {
    constructor(){
        super()
        this.state={
            message :'change'
        }
    }
    changeMessage(){
        this.setState({
            message:'yes you did it'
        })
    }
    render() {
        return (
            <div>
                <Counter add={this.add} /> 
               <h1>{this.state.message} </h1> 
               <button onClick={()=>this.changeMessage()}>yes you can</button>
            </div>
        )
    }
}
 Message.propTypes = {
     message: PropTypes.string.isRequired,
     }

Message.defaultProps ={
    message:'no message'
}

export default Message
