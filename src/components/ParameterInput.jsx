import React from 'react'
import '../styles/horizontal-container.css'

function ParameterInput(props) {
    return (
        <div className="container">
            <div className="container-item">
                <label>{props.name}</label>
            </div>
            <div className="container-item">
                <input className="input-item" type = "text" value = {props.value} onChange = {props.change} placeholder={props.name}></input>
            </div>
        </div>
    )
}

export default ParameterInput
