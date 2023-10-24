import React from "react"
import Logo from '../../assets/quantum-logo.svg'
import './styles.css'

export default function Header() {
    return ( 
        <header className="site-header">
            <div className="container">
                <div className="d-flex position-relative justify-content-between align-items-center py-4">
                    <a href="/">
                        <img src={Logo} alt="Logo" width={64} height={64}/>
                    </a>
                </div>
            </div>
        </header>
    )
}