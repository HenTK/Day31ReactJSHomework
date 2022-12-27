import React, { Component } from 'react'
import { connect } from 'react-redux'

class Glasses extends Component {
  render() {
    return (
      <div className=''>
        <h3 className='info-title info'>{this.props.glassesInfo.name}</h3>
        <div className='info'>id: {this.props.glassesInfo.id}</div>
        <div className='info'>price: {this.props.glassesInfo.price}$</div>  
        <h4 className='info'>description: {this.props.glassesInfo.desc}</h4>  
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    glassesInfo: state.tryglassesReducer.glassesInfo,
  };
};

export default connect(mapStateToProps)(Glasses);
