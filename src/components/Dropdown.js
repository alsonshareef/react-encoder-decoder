import React, { Component } from 'react'

export default class Dropdown extends Component {
  constructor(props){
    super(props)
    this.state = {
      encodeListOpen: false,
      decodeListOpen: false,
    }
  }

  toggleEncodeList(){
    this.setState(prevState => ({
      encodeListOpen: !prevState.encodeListOpen
    }))
  }

  toggleDecodeList(){
    this.setState(prevState => ({
      decodeListOpen: !prevState.decodeListOpen
    }))
  }

  render(){
    const {encoders, decoders, toggleSelected} = this.props
    const {encodeListOpen, decodeListOpen} = this.state

    return (
      <div className="dd-wrapper">
        <div className="dd-encoder-list">
          <div className="dd-header" >
              <button className="dd-list-button" onClick={() => this.toggleEncodeList()}>
                Encoder List {encodeListOpen ? <i className="fas fa-folder-open"></i> : <i className="fas fa-folder"></i>}
              </button>
          </div>
          {
            encodeListOpen ? 
            <ul className="dd-list">
              {
                encoders.map((item) => (
                  <li className="dd-list-item" key={item.id} onClick={() => toggleSelected(item.id, item.key)}><button>{item.title} {item.selected && <i className="fas fa-check"></i>}</button></li>
                ))
              }
            </ul>
            :
            null
          }
        </div>

        <div className="dd-decoder-list">
          <div className="dd-header" >
              <button className="dd-list-button" onClick={() => this.toggleDecodeList()}>
                Decoder List {decodeListOpen ? <i className="fas fa-folder-open"></i> : <i className="fas fa-folder"></i>}
              </button>
          </div>
          {
            decodeListOpen ? 
            <ul className="dd-list">
              {
                decoders.map((item) => (
                  <li className="dd-list-item" key={item.id} onClick={() => toggleSelected(item.id, item.key)}><button>{item.title} {item.selected && <i className="fas fa-check"></i>}</button></li>
                ))
              }
            </ul>
            :
            null
          }
        </div>
      </div>
    )
  }
}
