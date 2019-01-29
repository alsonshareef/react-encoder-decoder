import React, { Component } from 'react';
import Output from './output'
const { fullEncoder, fullDecoder } = require('./Chuck Norris/chucknorris')

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      inputText: "",
      type: "",
      output: ""
    }
  }

  // Changes this.state.inputText to = the value in the textarea
  handleInput = (e) => {
    this.setState({inputText: e.target.value})
  }

  // Makes this.state.inputText = encoded string, and makes output = inputText, and pass output to the Output component to display
  handleEncode = (e) => {
    e.preventDefault()
    this.setState({output: fullEncoder(this.state.inputText)})
  }

  // Makes this.state.inputText = decoded string, and makes output = inputText, and pass output to the Output component to display
  handleDecode = (e) => {
    e.preventDefault()
    this.setState({output: fullDecoder(this.state.inputText)})
  }

  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h3>Encode or Decode your messages below!</h3>
        <form>
          <textarea 
            style={{
              width: 300,
              height: 70
            }}
            value={this.state.inputText} 
            placeholder='Please enter what you would like to encode or decode.'
            onChange={this.handleInput}
          />
          <div>
            <button onClick={this.handleEncode}>Encode</button>
            <button onClick={this.handleDecode}>Decode</button>
          </div>
        </form>
        <Output output={this.state.output}/>
      </div>
    );
  }
}

export default App;
