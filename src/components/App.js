import React, { Component } from 'react';
import Dropdown from './Dropdown'
import Output from './Output'
import TextareaAutosize from 'react-autosize-textarea'; // A textarea which will resize automatically depending on the amount of content in it
import { selectEncoder, selectDecoder } from './selectEncoder'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      selectedItem: null,
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
      ],
      decoders: [
        {
          id: 0,
          title: 'Chuck Norris',
          selected: false,
          key: 'decoders'
        },
        {
          id: 1,
          title: 'Letter Mapping',
          selected: false,
          key: 'decoders'
        },
        {
          id: 2,
          title: 'Multiply-Ascii',
          selected: false,
          key: 'decoders'
        },
        {
          id: 3,
          title: 'Star and Dots',
          selected: false,
          key: 'decoders'
        },
        {
          id: 4,
          title: 'Symbol',
          selected: false,
          key: 'decoders'
        },
      ]
    }
  }

  // Will use the 'key' property to identify the list item state variable, then use 'id' to access the 'selected' property of selected li, and toggle it between true and false 
  toggleSelected = (id, key) => {
    let temp = this.state[key]
    temp[id].selected = !temp[id].selected
    this.setState({
      [key]: temp,
      selectedItem: this.state[key][id]
    })
  }

  // Changes this.state.inputText to = the value in the textarea
  handleInput = (e) => {
    this.setState({inputText: e.target.value})
  }

  // Makes this.state.inputText = encoded string, and makes output = inputText, and pass output to the Output component to display
  handleEncode = (e) => {
    e.preventDefault()
    this.setState({output: selectEncoder(this.state.selectedItem, this.state.inputText)})
  }

  // Makes this.state.inputText = decoded string, and makes output = inputText, and pass output to the Output component to display
  handleDecode = (e) => {
    e.preventDefault()
    this.setState({output: selectDecoder(this.state.selectedItem, this.state.inputText)})
  }

  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h2>Encode or Decode your messages below!</h2>
        <Dropdown 
          encoders={this.state.encoders}
          decoders={this.state.decoders}
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
