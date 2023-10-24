import React from "react"
import './styles.css'

export default function LandingTitle() {
    return (
        <div className="d-block">
            <div className="landing d-flex justify-content-center align-items-center">
                <div className="blob1"></div>
                <div className="blob2"></div>
                <div className="squigly"></div>
                <div className="center-text" style={{paddingRight: "20%", paddingLeft: "20%"}}>
                    <p>
                        <span>Start</span> {" "} 
                        <span>Working</span> {" "} 
                        <span>Your</span> {" "} 
                        <span>Project</span> {" "} 
                        <span>with</span> {" "} 
                        <span>less</span> {" "} 
                        <span>cost</span> {" "} 
                        <span>and</span> {" "} 
                        <span>more</span> {" "} 
                        <span>efficiency</span> {" "}
                    </p>
                </div>
            </div>
            
        </div>
    )
}