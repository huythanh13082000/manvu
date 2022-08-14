// import React, {Component} from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './slider.css'
import CardBase from '../card'
import {Campaign} from '../../models/campaign'

interface Props {
  listCampaign?: Campaign[]
}

const SlickSlider = (props: Props) => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  return (
    <div className='container'>
      <Slider {...settings}>
        {props.listCampaign?.map((item) => {
          return <CardBase data={item} width='275px' height='348px' />
        })}
      </Slider>
    </div>
  )
}
export default SlickSlider
