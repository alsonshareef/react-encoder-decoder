import React, { Component } from 'react'

export default class Dropdown extends Component {
  constructor(props){
    super(props)
    this.state = {
      listOpen: false,
    }
  }

  toggleList(){
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }))
  }

  render(){
    const {encoders, toggleSelected} = this.props
    const {listOpen} = this.state

    return (
      <div className="dd-wrapper">
        <div className="dd-header" >
            <button className="dd-list-button" onClick={() => this.toggleList()}>
              Encoder List
            </button>
        </div>
        {
          listOpen ? 
          <ul className="dd-list" style={{listStyle: 'none'}}>
            {
              encoders.map((item) => (
                <li className="dd-list-item" key={item.id} onClick={() => toggleSelected(item.id, item.key)}>{item.title} {item.selected && 'i am selected'}</li>
              ))
            }
          </ul>
          :
          null
        }
      </div>
    )
  }
}
