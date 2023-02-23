import React from "react"

export default function Info() {
    return (
        <div className="info-section">
            <h1 id="name">Michael Blanchette</h1>
            <p id="occupation">HKUST Year 3 BEng Computer Science & BBA Marketing</p>
            <p id="website">INSERT WEBSITE HERE</p>
            <div className="info--buttons">
                <a href="mailto:michaeldblanchette@gmail.com">
                    <button id="email-button">
                        <i className="fa fa-envelope"></i>Email
                    </button>
                </a>
                <a href="https://www.linkedin.com/in/michael-blanchette-8816a8215" target="_blank">
                    <button id="linkedin-button">
                        <i className="fa fa-linkedin"></i>LinkedIn
                    </button>
                </a>
            </div>
        </div>
    )
}