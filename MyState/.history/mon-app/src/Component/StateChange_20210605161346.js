import React, { Component } from 'react'

class Imgchange extends Component {
    constructor() {
        super()
            this.state={
                change : <img src="https://images.frandroid.com/wp-content/uploads/2020/11/samsung-galaxy-m51-frandroid-2020.png" alt='no pic'/>
            }  
    }
        changeImage(){
         this.setState({
                change :  <img src="https://static.fnac-static.com/multimedia/Images/FR/MDM/8f/b2/bd/12432015/1545-1/tsp20210518180957/Apple-iPhone-12-6-1-128-Go-Double-SIM-5G-Noir.jpg" alt='no pic'/>
           
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