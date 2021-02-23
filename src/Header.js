import React from 'react';

const Header = () => {
    return (<>
        <nav>
            <div className="wrapper">
                <div className="logo">
                    <a href="">Design Zone</a>
                    <input type="radio" name="slide" id="menu-btn"/>
                    <input type="radio" name="slide" id="cancel-btn"/>
                </div>
                <ul  className="nav-links">
                    <label className="btn cancel-btn" htmlFor="cancel-btn"> <i className="fa fa-times"></i> </label>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li>
                        <a href="" className="desktop-item">Menu</a>
                       <input type="checkbox" id="showDrop"/>
                        <label htmlFor="showDrop" className="mobile-item">Menu</label>
                        <ul className="drop-menu">
                            <li><a href="">Drop Menu 1</a></li>
                            <li><a href="">Drop Menu 2</a></li>
                            <li><a href="">Drop Menu 3</a></li>
                            <li><a href="">Drop Menu 4</a></li>

                        </ul>
                    </li>
                    <li>
                    <a href="" className="desktop-item">Services</a>
                    <input type="checkbox" id="showMega"/>
                    <label htmlFor="showMega" className="mobile-item">Services</label>

                        <div className="mega-box">
                            <div className="content">
                                <div className="row">
                                    <img src="https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                                </div>
                                <div className="row">
                                    <header>Design Services</header>
                                    <ul className='mega-links'>
                                        <li><a href="">Graphics</a></li>
                                        <li><a href="">Vectors</a></li>
                                        <li><a href="">Business card</a></li>
                                        <li><a href="">Custom logo</a></li>
                                    </ul>
                                </div>
                                <div className="row">
                                    <header>Email Services</header>
                                    <ul className='mega-links'>
                                        <li><a href="">Personal Email</a></li>
                                        <li><a href="">Business Email</a></li>
                                        <li><a href="">Mobile Email</a></li>
                                        <li><a href="">Web Marketing</a></li>
                                    </ul>
                                </div>
                                <div className="row">
                                    <header>Security Services</header>
                                    <ul className='mega-links'>
                                        <li><a href="">Site Seal</a></li>
                                        <li><a href="">VPS Hosting</a></li>
                                        <li><a href="">Privacy Seal</a></li>
                                        <li><a href="">Website design</a></li>
                                    </ul>
                                </div>


                            </div>
                        </div>
                    </li>
                    <li><a href="">Contact</a></li>

                </ul>
                <label className="btn menu-btn" htmlFor="menu-btn"> <i className="fa fa-bars"></i> </label>

            </div>
        </nav>
    </>);
}

export default Header;