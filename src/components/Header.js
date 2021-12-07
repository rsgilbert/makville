import React from 'react'
import './Header.scss'


export const Header = () => {

  

    return (
        <React.Fragment>
            <header className="header">
                <div className="header_content">
                    <div 
                        className="details"
                        >
                        <div 
                            className="left"
                            >
                            <img 
                                className="avsi_header_img"
                                src="/avsi.png" />                        
                            <h1 className="avsi_header_title">
                                MAKERERE VILLE
                            </h1>
                        </div>
                        <div
                            className="right"
                            >
                            <p
                                className="fullName"
                                >
                                ABOUT
                            </p>
                            <button
                                className="auth"
                                >
                                CONTACT US
                            </button>
                        </div>
                    </div>
                </div>                
                <hr />
            </header>
        </React.Fragment>
    );
}