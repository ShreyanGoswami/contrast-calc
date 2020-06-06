import React, { Component } from 'react'
import ParameterInput from './ParameterInput'
import * as generate from '../business/generate.js'
import OutputComponent from './OutputComponent'

export class InputComponent extends Component {

    constructor(props) {
        super(props)
    
        // TODO move to a file


        this.state = {
            steps: 10,
            hue_start: 356,
            hue_end: 356,
            hue_curve: "easeInQuad",
            sat_start: 10,
            sat_end: 90,
            sat_curve: "easeOutQuad",
            sat_rate: 100,
            lum_start: 100,
            lum_end: 10,
            lum_curve: "easeOutQuad",
            modifier: 10,
            outputVal: ""
        }
    }

    stepChanged = (event) => {
        console.log('Received step changed event ', event)
        this.setState({steps: event.target.value})
    }
    
    hueStartChanged = (event) => {
        this.setState({hue_start: event.target.value})
    }
    hueEndChanged = (event) => {
        this.setState({hue_end: event.target.value})
    }
    hueCurveChanged = (event) => {
        this.setState({hue_curve: event.target.value})
    }
    statStartChanged = (event) => {
        this.setState({sat_start: event.target.value})
    }
    satEndChanged = (event) => {
        this.setState({sat_end: event.target.value})
    }
    satCurvedChanged = (event) => {
        this.setState({sat_curve: event.target.value})
    }
    satRateChanged = (event) => {
        this.setState({sat_rate: event.target.value})
    }
    lumStartChanged = (event) => {
        this.setState({lum_start: event.target.value})
    }
    lumEndChanged = (event) => {
        this.setState({lum_end: event.target.value})
    }
    lumCurveChanged = (event) => {
        this.setState({lum_curve: event.target.value})
    }
    modifierChanged = (event) => {
        this.setState({modifier: event.target.value})
    }

    render() {
        const inputParameters = [{ id: 1, 'name': 'steps', changeEvent: this.stepChanged },
        { id: 2, 'name': 'hue_start', changeEvent: this.hueStartChanged },
        { id: 3, 'name': 'hue_end', changeEvent: this.hueEndChanged },
        { id: 4, 'name': 'hue_curve', changeEvent: this.hueEndChanged },
        { id: 5, 'name': 'sat_start', changeEvent: this.statStartChanged },
        { id: 6, 'name': 'sat_end', changeEvent: this.satEndChanged },
        { id: 7, 'name': 'sat_curve', changeEvent: this.satCurvedChanged },
        { id: 8, 'name': 'sat_rate', changeEvent: this.satRateChanged },
        { id: 9, 'name': 'lum_start', changeEvent: this.lumStartChanged },
        { id: 10, 'name': 'lum_end', changeEvent: this.lumEndChanged },
        { id: 11, 'name': 'lum_curve', changeEvent: this.lumCurveChanged },
        { id: 12, 'name': 'modifier', changeEvent: this.modifierChanged }]
        const inputFieldsToRender = inputParameters.map(spec => <ParameterInput key={spec.id} name={spec.name} value={this.state[spec.name]} change={spec.changeEvent}></ParameterInput>) 
        return (
            <div>
                <form onSubmit = {this.handleSubmit}>
                    {inputFieldsToRender}
                    <button type="submit">Calculate</button>
                </form>
                <OutputComponent value={JSON.stringify(this.state.outputVal)}></OutputComponent>
            </div>
        )
    }

    handleSubmit = (event) => {
        console.log('Calling generate with ', this.state)
        const res = generate.generate(this.state)
        console.log('Received res ', res)
        this.setState({
            outputVal:res
        })
        event.preventDefault()
    }
}

export default InputComponent
