import { useState, React, useEffect } from 'react'

import { BrowserRouter as Router, Link } from 'react-router-dom'
import AnimatedRoutes from './AnimatedRoutes';
function Navbar() {
    const [mobile, setMobile] = useState(false);
    const [sidebar, setSidebar] = useState(false);
    useEffect(() => {
        if (window.innerWidth <= 768) {
            setMobile(true);
        }
    }, []);
    useEffect(() => {
        const handleSize = () => {
            if (window.innerWidth <= 768) {
                setMobile(true);
            }
            else {
                setMobile(false);
                setSidebar(false);
            }
        };
        window.addEventListener("resize", handleSize);
        return () => {
            window.removeEventListener("resize", handleSize);
        }
    }, []);
    return (
        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" />

            <Router>
                <nav>
                    {!mobile && (
                        <div class="navbar">
                            <Link to="/"><button class="btn-Firmname">
                                <div className='FirmName'>
                                    <img src='assets\sevalogo.png' className='logo' alt="" />
                                    <p className='Name'>Seva Traders</p>
                                </div></button></Link>
                            <Link to="/" className='Home'>Home</Link>
                            <Link to="/About" className='About'>About</Link>
                            <Link to="/Contact" className='Contact'>Contact-Us</Link>
                            <Link to="/Portal" className='Portal'>Customer-Portal</Link>
                            <div class="search-support">
                                <h2><i class="fas fa-search" id="icon"></i></h2>
                                <input class="search" />
                            </div>
                            <div class="social">
                                <a href='https://www.instagram.com'><h2><i class="fa-brands fa-instagram" id="instagram"></i></h2></a>
                                <a href='https://www.linkedin.com'><h2><i class="fa-brands fa-linkedin" id="linkedin"></i></h2></a>
                                <a href='https://www.twitter.com'><h2><i class="fa-brands fa-twitter" id="twitter"></i></h2></a>
                            </div>
                        </div>
                    )}
                    {mobile && (
                        <div class="nav1">
                            {sidebar ? (
                                <button class="Close" onClick={() => {
                                    setSidebar(!sidebar)
                                }}><i class="fa-solid fa-xmark"></i></button>) : (
                                <button onClick={() => {
                                    setSidebar(!sidebar)
                                }} class="bars"><i class="fa-solid fa-bars"></i></button>)}
                            <div class="mobile-view"></div>
                        </div>
                    )}
                </nav>
                <div class={sidebar ? "sidebar active" : "sidebar"}>
                    <div class="Sidebar-link">
                        <Link to="/"><button className='Home-sidebar'>Home</button></Link>
                        <Link to="/About"><button className='About-sidebar'>About</button></Link>
                        <Link to="/Contact"><button className='Contact-sidebar'>Contact-Us</button></Link>
                        <Link to="/Portal"><button className='Portal-sidebar'>Customer-Portal</button></Link>
                    </div>

                    <div class="social-sidebar">
                                <div class="insta-div"><a href='https://www.instagram.com'><h2><i class="fa-brands fa-instagram" id="instagram1"></i></h2></a></div>
                                <div class="linked-div"><a href='https://www.linkedin.com'><h2><i class="fa-brands fa-linkedin" id="linkedin1"></i></h2></a></div>
                                <div class="twitter-div"><a href='https://www.twitter.com'><h2><i class="fa-brands fa-twitter" id="twitter1"></i></h2></a></div>
                    </div>
                    {/* <div class="social-sidebar">
                                <a href='https://www.instagram.com'><h2><i class="fa-brands fa-instagram" id="instagram"></i></h2></a>
                                <a href='https://www.linkedin.com'><h2><i class="fa-brands fa-linkedin" id="linkedin"></i></h2></a>
                                <a href='https://www.twitter.com'><h2><i class="fa-brands fa-twitter" id="twitter"></i></h2></a>
                    </div> */}
                </div>
                <div></div>
                <AnimatedRoutes sidebar={sidebar}/>
            </Router>
        </div>
    )
}

export default Navbar