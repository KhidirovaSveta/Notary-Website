import React from 'react'
import FooterImg from  "../../img/hero_bg_footer.jpg"
import "./index.scss"
const Footer = () => {
  return (
    <div id='Footer'>
        <img src={FooterImg} alt="" className='footbg'/>
        {/* <p className='copyright'>Copyright © 2023 All rights reserved | This template is made with  by Colorlib</p> */}
    </div>
  )
}

export default Footer