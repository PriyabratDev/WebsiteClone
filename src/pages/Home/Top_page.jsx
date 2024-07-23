import React from 'react'
import Img from './img.png'
import style from "./Home.module.css";



export const Toppage = () => {
  return (
    <div >
<div className={style.video_frame}>
       

          <video
          id={style.v_bag}
          autoPlay
          loop
          muted
          preload="auto"
          poster="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_1400,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/we-are-cult-logo/promo-video-poster.jpg"
          src="https://cdn-images.cure.fit/www-curefit-com/video/upload/c_fill,w_1400,ar_1.77,q_auto:eco,dpr_2,vc_auto,f_auto/video/test/we-are-cult-web.mp4"
        ></video>
       
        <div className={style.contant}>
                    <img src= {Img} alt="we are cult"/>
                  <button className={style.Button}> EXPLORE CULTFIT</button>
        </div>
      </div>


    </div>
  )
}
