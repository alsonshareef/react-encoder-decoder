import React, { Component } from 'react';
import Dropdown from './Dropdown'
import Output from './Output'
import TextareaAutosize from 'react-autosize-textarea'; // A textarea which will resize automatically depending on the amount of content in it
const { fullEncoder, fullDecoder } = require('../encoders/Chuck Norris/chucknorris')

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      inputText: "",
      output: "",
      encoders: [
        {
          id: 0,
          title: 'Chuck Norris',
          selected: false,
          key: 'encoders'
        },
        {
          id: 1,
          title: 'Letter Mapping',
          selected: false,
          key: 'encoders'
        },
        {
          id: 2,
          title: 'Multiply-Ascii',
          selected: false,
          key: 'encoders'
        },
        {
          id: 3,
          title: 'Star and Dots',
          selected: false,
          key: 'encoders'
        },
        {
          id: 4,
          title: 'Symbol',
          selected: false,
          key: 'encoders'
        },
      ]
    }
  }

  // Will toggle the clicked list items 'selected' property between true and false
  toggleSelected = (id, key) => {
    let temp = this.state[key]
    temp[id].selected = !temp[id].selected
    this.setState({
      [key]: temp
    })
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
        <h2>Encode or Decode your messages below!</h2>
        <Dropdown 
          encoders={this.state.encoders}
          toggleSelected={this.toggleSelected}
        />
        <form>
          <TextareaAutosize 
            className="textarea-input"
            value={this.state.inputText} 
            placeholder='Please enter the message that you would like to encode or decode.'
            onChange={this.handleInput}
          />  
          <div>
            <button className="buttons" onClick={this.handleEncode}>Encode</button>
            <button className="buttons" onClick={this.handleDecode}>Decode</button>
          </div>
        </form>
        <Output output={this.state.output}/>
      </div>
    );
  }
}

export default App;
