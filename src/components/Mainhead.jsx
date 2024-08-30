import React from 'react'

export default function Mainhead() {
  return (
    <div>
       <main className="content">
        <div className="text-section">
          <h1> Start your educational journey with us </h1>
          <button className="cta-button"> Start</button>
        </div>
        <div className="image-section">
          {/* <img src="your-image-url-here" alt="مدرس" /> */}
          <img src='../images/students.png' alt="Logo Icon" className="logo-icon" /> {}
        </div>
      </main>
    </div>
  )
}
