import React, { Component } from 'react'
import "./style.css"
import glassesList from '../../data/dataGlasses.json'
import Glasses from './Glasses'
import GlassesModel from './GlassesModel'
import Header from './Header'
import { connect } from 'react-redux';

class TryGlasses extends Component {
  renderGlassesList = () => {
    console.log(this.props.glassesList);
    const content = this.props.glassesList.map(element => {
      return  (<GlassesModel
                element = {element}
                handleChangeGlasses = {this.props.handleChangeGlasses}
                />)
              })
      return content;
  }

  render() {
    return (
      <div className='w-100 bg-info'>
        <Header/>
        <div className='row justify-content-center mar-3'>
          <div className='col-3 mar-1 pad-1'>
            <div className='pos-model'>
                <img src="./Images/model.jpg" alt=""  className='w-100 model-css' />
                <img src={this.props.glassesInfo.url} className='w-100 pos-glasses'/>
                <div className='pos-infoGlasses'>
                    <Glasses/>
                </div>
            </div>
          </div>
          <div className='col-3 mar-1 pad-1'>
            <img src="./Images/model.jpg" alt="" className='w-100 model-css' />
          </div>
        </div>
        <div className='mar-3 pad-2'>
          <div className='row bg-white overfl'>
            {this.renderGlassesList()}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    glassesList: state.tryglassesReducer.glassesList,
    glassesInfo: state.tryglassesReducer.glassesInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChangeGlasses(id) {
      dispatch({
        type: "CHANGE_ITEM",
        payload: id,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TryGlasses);
