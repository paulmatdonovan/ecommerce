import React from 'react'
import './Hero.css'
import Tech from '../Assets/Tech.jpg';

const Hero = () => {
    return (
        <div className='hero1'>
            <div className="hero-left">
                <h2>New Arrivals</h2>
                <div>
                    <div className="hand-hand-icon">
                        <p>Upgrade</p>
                        <img src='' alt="" />
                    </div>
                    <p>your</p>
                    <p>Tech Style</p>
                </div>
            </div>

            <div className='hero-right'>
                <img src={Tech} alt='' />
            </div>
        </div>
    )
}

export default Hero