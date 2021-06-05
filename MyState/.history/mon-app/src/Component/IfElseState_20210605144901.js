import React, { Component } from 'react'

class IfElseState extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : true
        }
    }
    
    render() {
        return this.state.isLoggedIn && <div>welcome</div>
    }
}

export default IfElseState
