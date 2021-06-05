import React, { Component } from 'react'

class Imgchange extends Component {
    constructor() {
        super()
            this.state={
                change : {name:'',bio : ''}
            }  
    }
        changeImage(){
         this.setState({
                change :  
           
         })   
    }
    changeImage2(){
        this.setState({
               change : <img src="https://images.frandroid.com/wp-content/uploads/2020/11/samsung-galaxy-m51-frandroid-2020.png" alt='no pic'/>
          
        })   
   }
    render() {
        return (
            <div>
                <h1>{this.state.change}</h1>
                <button onClick={()=>{this.changeImage()}}>click!</button>
                <button onClick={()=>{this.changeImage2()}}>click!</button>
            </div>
        )
    }
}

export default Imgchange