import React, { Component } from 'react'
import ParameterInput from './ParameterInput'
import * as generate from '../business/generate.js'
import OutputComponent from './OutputComponent'
import '../styles/horizontal-container.css'

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
            contrastWhite: "fafafa",
            contrastBlack: "0d0f12",
            outputVal: ""
        }
    }

    stepChanged = (event) => {
        const receivedValue = event.target.value
        if (receivedValue === null || receivedValue === '') {
            this.setState({ steps: "" })
        } else {
            this.setState({ steps: parseInt(event.target.value) })
        }
        
    }
    
    hueStartChanged = (event) => {
        const receivedValue = event.target.value
        if (receivedValue === null || receivedValue === '') {
            this.setState({ hue_start: "" })
        } else {
            this.setState({ hue_start: parseInt(event.target.value) })
        }
    }

    hueEndChanged = (event) => {
        const receivedValue = event.target.value
        if (receivedValue === null || receivedValue === '') {
            this.setState({ hue_end: "" })
        } else {
            this.setState({ hue_end: parseInt(event.target.value) })
        }
    }

    hueCurveChanged = (event) => {
        this.setState({ hue_curve: event.target.value }) 
    }

    statStartChanged = (event) => {
        const receivedValue = event.target.value
        if (receivedValue === null || receivedValue === '') {
            this.setState({ sat_start: "" })
        } else {
            this.setState({ sat_start: parseInt(event.target.value) })
        }
    }

    satEndChanged = (event) => {
        const receivedValue = event.target.value
        if (receivedValue === null || receivedValue === '') {
            this.setState({ sat_end: "" })
        } else {
            this.setState({ sat_end: parseInt(event.target.value) })
        }
    }

    satCurvedChanged = (event) => {
        this.setState({sat_curve: event.target.value})
    }

    satRateChanged = (event) => {
        const receivedValue = event.target.value
        if (receivedValue === null || receivedValue === '') {
            this.setState({ sat_rate: "" })
        } else {
            this.setState({ sat_rate: parseInt(event.target.value) })
        }
    }

    lumStartChanged = (event) => {
        const receivedValue = event.target.value
        if (receivedValue === null || receivedValue === '') {
            this.setState({ lum_start: "" })
        } else {
            this.setState({ lum_start: parseInt(event.target.value) })
        }
    }

    lumEndChanged = (event) => {
        const receivedValue = event.target.value
        if (receivedValue === null || receivedValue === '') {
            this.setState({ lum_end: "" })
        } else {
            this.setState({ lum_end: parseInt(event.target.value) })
        }
    }

    lumCurveChanged = (event) => {
        this.setState({lum_curve: event.target.value})
    }
    
    modifierChanged = (event) => {
        const receivedValue = event.target.value
        if (receivedValue === null || receivedValue === '') {
            this.setState({ modifier: "" })
        } else {
            this.setState({ modifer: parseInt(event.target.value) })
        }
    }

    contrastWhiteChanged = (event) => {
        const receivedValue = event.target.value
        if (receivedValue === null || receivedValue === '') {
            this.setState({ contrastWhite: "" })
        } else {
            this.setState({ contrastWhite: event.target.value })
        }
    }
    
    contrastBlackChanged = (event) => {
        const receivedValue = event.target.value
        if (receivedValue === null || receivedValue === '') {
            this.setState({ contrastBlack: "" })
        } else {
            this.setState({ contrastBlack: event.target.value })
        }
    }

    render() {
        const inputParameters = [{ id: 1, 'name': 'steps', label: 'Steps', changeEvent: this.stepChanged },
        { id: 2, 'name': 'hue_start', label: "Hue start", changeEvent: this.hueStartChanged },
        { id: 3, 'name': 'hue_end', label: "Hue end", changeEvent: this.hueEndChanged },
        { id: 4, 'name': 'hue_curve', label: "Hue curve",changeEvent: this.hueCurveChanged },
        { id: 5, 'name': 'sat_start', label: "Saturation Start",changeEvent: this.statStartChanged },
        { id: 6, 'name': 'sat_end', label: "Saturation End",changeEvent: this.satEndChanged },
        { id: 7, 'name': 'sat_curve', label: "Saturation Curve",changeEvent: this.satCurvedChanged },
        { id: 8, 'name': 'sat_rate', label: "Saturation Rate",changeEvent: this.satRateChanged },
        { id: 9, 'name': 'lum_start', label: "Luminosity Start",changeEvent: this.lumStartChanged },
        { id: 10, 'name': 'lum_end', label: "Luminosity End",changeEvent: this.lumEndChanged },
        { id: 11, 'name': 'lum_curve', label: "Luminosity Curve",changeEvent: this.lumCurveChanged },
        { id: 12, 'name': 'modifier', label: "Modifier",changeEvent: this.modifierChanged },
        { id: 13, 'name': 'contrastWhite', label: "Contrast White",changeEvent: this.contrastWhiteChanged },
        { id: 14, 'name': 'contrastBlack', label: "Contrast Black",changeEvent: this.contrastBlackChanged }]
        const inputFieldsToRender = inputParameters.map(spec => <ParameterInput key={spec.id} name={spec.label} value={this.state[spec.name]} change={spec.changeEvent}></ParameterInput>) 
        return (
            <div className="container">
                <div className="container-item">
                <form onSubmit = {this.handleSubmit}>
                    {inputFieldsToRender}
                    <button type="submit">Calculate</button>
                </form>
                </div>
                <div  className="container-item"><OutputComponent value={JSON.stringify(this.state.outputVal)}></OutputComponent></div>
            </div>
        )
    }

    handleSubmit = (event) => {
        console.log('Calling generate with ', this.state)
        const result = generate.generate(this.state).map(res => { return {number:res.no, hex: res.hex, contrastWhite: res.contrastWhite, contrastBlack: res.contrastBlack } })
        console.log('Received res ', result)
        this.setState({
            outputVal:result
        })
        event.preventDefault()
    }
}

export default InputComponent
