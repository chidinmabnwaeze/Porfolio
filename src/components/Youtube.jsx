import React from 'react'
import video from '../assets/icons/youtube video.png'

const youtube = () => {
    const Youtube= [
        {
          img: video,
            label: "NFT Mobile App"
         
        },
        {
            img: video,
            label: "Online Mobile App"
           
          }
    ];

  return (
    <div className='youtube'>
        <div className="heading">
        <p>Some design interactions I made on <span><img src="" alt="" /></span></p>
        <hr />
      </div>
      <section className="yt-section">
      <div className="yt">
        {Youtube.map((ytube, index) => (
            
          <div className="yt-video" key={index}>
            <img src={ytube.img} alt="" />
            <p className="video-name">{ytube.label}</p>
          </div>
        ))}
        </div>
    </section>
    </div>
  )
}

export default youtube

