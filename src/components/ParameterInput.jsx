import React from 'react'

function ParameterInput(props) {
    return (
        <div>
            <label>{props.name}</label><input type = "text" value = {props.value} onChange = {props.change}></input>
        </div>
    )
}

export default ParameterInput
