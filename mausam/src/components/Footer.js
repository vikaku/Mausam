import React from 'react';


const Footer = (props) => {

    const {isDarkMode} = props;

    return (
        <>
            <div className={`footer_div ${isDarkMode ? 'dark_mode' : 'light_mode'}`}>
                <a
                  href="https://mausamAajka.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "unset" }}
                >
                    <i className='fas fa-bolt' style = {{color:"#0CB0FF"}}></i>
                    Powered by mausamAajka.org
                </a>
                <p className='mt-2 mt-0'>
                        khole aur aaj ka mausam dekha
                </p>
            </div>
           
        </>
    )
}

export default Footer;