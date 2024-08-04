import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

export default function AppDownload() {
  return (
    <div className='app-download' id='app-download'>
      <p>For Better Experirnce Download <br/> Food App</p>
      <div className="app-download-platforms">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  )
}
