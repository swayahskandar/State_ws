import React, { Component } from 'react'

class IfElseState extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : false
        }
    }
    
    render() {
        return this.state.isLoggedIn
    }
}

export default IfElseState
