import React from 'react'

const Greet = (props) => {
console.log(props)
return (
    <div
<h1>hello {props.name} {props.lastName}</h1>
{props.children}
)
}

export default Greet

