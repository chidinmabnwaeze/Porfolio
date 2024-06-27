import React from 'react'
import video from '../assets/icons/youtube video.png'

const OpenSource = () => {
    const openSource= [
        {
          img: video,
            label: "NFT Mobile App",
            text:"Here I clearly distinguished between IOS and Android Design guidelines. There are serval interactive components and variants contained in this file.",
            link:"Github link"
         
        },
        {
            img: video,
            label: "Online Mobile App",
            text:"Here I clearly distinguished between IOS and Android Design guidelines. There are serval interactive components and variants contained in this file.",
            link:"Github link"
          }
    ];

  return (
    <div className='youtube'>
        <div className="heading">
        <p>Open Source projects in GitHub <span><img src="" alt="" /></span></p>
        <hr />
      </div>
      <section className="yt-section">
      <div className="yt">
        {openSource.map((open, index) => (
            
          <div className="yt-video" key={index}>
            <img src={open.img} alt="" />
            <p className="video-name">{open.label}</p>
            <p className='source-text'>{open.text}</p>
            <a href="">{open.link}</a>
          </div>
        ))}
        </div>
    </section>
    </div>
  )
}

export default OpenSource;

