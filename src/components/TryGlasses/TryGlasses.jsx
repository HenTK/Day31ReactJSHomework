import React, { Component } from 'react'
import "./style.css"
import glassesList from '../../data/dataGlasses.json'
import Glasses from './Glasses'
import GlassesModel from './GlassesModel'
import Header from './Header'

export default class TryGlasses extends Component {
  renderGlassesList = () => {
    const content = glassesList.map(element => {
      return  (<GlassesModel
                element = {element}
                handleChangeGlasses = {this.handleChangeGlasses}
                />)
  })
  return content;
  }

  state = {
    id: 1,
    price: 30,
    name: "GUCCI G8850U",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    url: './Images/v1.png',
  }

  handleChangeGlasses = (color) => {
    glassesList.forEach((element)=>{
      if(color == element.id)
      this.setState({
        url: element.url,
        id: element.id,
        price: element.price,
        name: element.name,
        desc: element.desc,
      })
    })
  }

  render() {
    return (
      <div className='w-100 bg-info'>
        <Header/>
        <div className='row justify-content-center mar-3'>
          <div className='col-3 mar-1 pad-1'>
            <div className='pos-model'>
                <img src="./Images/model.jpg" alt=""  className='w-100 model-css' />
                <img src={this.state.url} className='w-100 pos-glasses'/>
                <div className='pos-infoGlasses'>
                    <Glasses
                    state = {this.state}
                    />
                </div>
            </div>
          </div>
          <div className='col-3 mar-1 pad-1'>
            <img src="./Images/model.jpg" alt="" className='w-100 model-css' />
          </div>
        </div>
        <div className='mar-3 pad-2'>
          <div className='row bg-white overfl'>
            {this.renderGlassesList()};
          </div>
        </div>
      </div>
    )
  }
}
