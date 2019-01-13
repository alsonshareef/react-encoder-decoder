import React, { Component } from 'react';
import Output from './output'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      inputText: "",
      output: ""
    }
  }

  // Changes this.state.inputText to = the value in the textarea
  handleChange = (e) => {
    this.setState({inputText: e.target.value})
  }

  // Makes this.state.output = inputText, and passes output to the Output component to display
  handleClick = (e) => {
    e.preventDefault()
    this.setState({output: this.state.inputText})
  }

  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h3>Input</h3>
        <form>
          <textarea 
            style={{
              width: 300,
              height: 70
            }} 
            placeholder='Please enter what you would like to encode or decode.'
            onChange={this.handleChange}
          />
          <div>
            <button onClick={this.handleClick}>Encode</button>
            <button onClick={this.handleClick}>Decode</button>
          </div>
        </form>
        <Output output={this.state.output}/>
      </div>
    );
  }
}

export default App;
