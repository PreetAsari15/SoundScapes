import React from 'react'
import { Link } from 'react-router-dom'
import {arrow} from '../assets/icons'
const InfoBox = ({text, link, btnText }) => (
    <div className="info-box">
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
            <img src={arrow} alt="4'33" className='w-4 h-4 object-contain'/>
        </Link>
    </div>
)
const renderContent = {
    1: (
        // <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        //     Exploring the Essence of SoundScapes
        // </h1>
        <InfoBox
        text="Exploring the Essence of SoundScapes "
        link="/explore"
        btnText="Learn more"
        />
    ),
    2: (
        <InfoBox
        text="Explore "
        link="/explore"
        btnText="Learn more"
        />
    ),

}



const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo