import React, { Component } from 'react'

export default class GlassesModel extends Component {
  render() {
    return (
        <img
        key = {this.props.element.id}
        src={this.props.element.urlImg}
        alt="#" className='col-xs-6 col-sm-4 col-md-3 col-lg-2 w-100 h-100 align-self-center cussor'
        onClick={()=>this.props.handleChangeGlasses(`${this.props.element.id}`)}
        />
    )
  }
}
