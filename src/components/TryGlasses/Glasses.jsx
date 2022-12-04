import React, { Component } from 'react'

export default class Glasses extends Component {
  render() {
    return (
      <div>
        <h3 className='info-title'>{this.props.state.name}</h3>
        <div>id: {this.props.state.id}</div>
        <div>price: {this.props.state.price}$</div>  
        <div>description: {this.props.state.desc}</div>  
      </div>
    )
  }
}
