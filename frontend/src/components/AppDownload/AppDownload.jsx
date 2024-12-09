import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'
import { getId } from '../Navbar/navLinks'

function AppDownload() {
    return (
        <div className='app-download' id={getId("mobile app")}>
            <p>For Better Experience Download <br />Share Bite</p>
            <div className="app-download-platforms">
                <img src={assets.play_store} alt="" />
                <img src={assets.app_store} alt="" />
            </div>

        </div>
    )
}

export default AppDownload
