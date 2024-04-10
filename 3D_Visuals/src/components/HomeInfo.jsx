import React from 'react'
import { Link } from 'react-router-dom'
const InfoBox = ({text, link, btnText }) => (
    <div className="info-box">
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
        </Link>
    </div>
)
const renderContent = {
    1: (
        <InfoBox
        text="Exploring the Essence of SoundScapes "
        // link="/explore"
        btnText="Welcome!"
        />
    ),

}

const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo