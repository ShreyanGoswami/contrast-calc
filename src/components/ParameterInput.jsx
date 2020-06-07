import React from 'react'
import '../styles/horizontal-container.css'

function ParameterInput(props) {
    return (
        <div className="container">
            <div className="container-item">
                <label>{props.name}</label>
            </div>
            <div className="container-item">
                <input type = "text" value = {props.value} onChange = {props.change}></input>
            </div>
        </div>
    )
}

export default ParameterInput
