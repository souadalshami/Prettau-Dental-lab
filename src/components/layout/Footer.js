

import site_footer_shape_1   from '../../assets/images/shapes/site-footer-shape-1.png'
import site_footer_shape_2   from '../../assets/images/shapes/site-footer-shape-2.png'
import footer_logo from  '../../assets/images/logo/black.png'
import { Link } from 'react-router-dom';

import WOW from 'wowjs';
import { useEffect } from 'react'


function Footer(){
    useEffect(() => { 
        new WOW.WOW({ live: false
        }).init(); }, [])
    return(
        <footer className="site-footer">
            <div className="site-footer__shape-1 img-bounce">
                <img src={site_footer_shape_1} alt=""/>
            </div>
            <div className="site-footer__shape-2 float-bob-y">
                <img src={site_footer_shape_2} alt=""/>
            </div>
            <div className="container">
                <div className="site-footer__top">
                    <div className="row">
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                            <div className="footer-widget__column footer-widget__about">
                                <div className="footer-widget__logo">
                                    <Link to="/"><img src={footer_logo} alt=""/></Link>
                                </div> 
                                <p className="footer-widget__about-text">Provides the integrated solutions for all Dental Prosthetics in parallel with the high technology around the world.</p>
                                <div className="site-footer__social">
                                    <a href="#"><i className="fab fa-facebook"></i></a>
                                    <a href="#"><i className="fab fa-youtube"></i></a>
                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                            <div className="footer-widget__column footer-widget__company">
                                <div className="footer-widget__title-box">
                                    <h3 className="footer-widget__title">Products</h3>
                                </div>
                                <ul className="footer-widget__company-list list-unstyled">
                                    <li><Link to="/premium">Premium</Link></li>
                                    <li><Link to="/premium">Titanium</Link></li>
                                    <li><Link to="/premium">Zircon</Link></li>
                                    <li><Link to="/premium">Laser Implant</Link></li>
                                    <li><Link to="/premium">Peek Polymer</Link></li>
                                    <li><Link to="/premium">Acrylic</Link></li>
                                    <li><Link to="/premium">Ortho</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                            <div className="footer-widget__column footer-widget__newsletter">
                                <div className="footer-widget__title-box">
                                    <h3 className="footer-widget__title">Latest Blog</h3>
                                </div>
                                <ul className="footer-widget__company-list list-unstyled">
                                    <li><Link to="/productdetails">V_max Multilayered 4D Case 1</Link></li>
                                    <li><Link to="/productdetails">Porcelain Fusedto 4D Case 1
                                        </Link></li>
                                        <li><Link to="/productdetails">E_max Multilayered 4D Case 1
                                        </Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                            <div className="footer-widget__column footer-widget__contact">
                                <div className="footer-widget__title-box">
                                    <h3 className="footer-widget__title">You’ve Questions</h3>
                                </div>
                                <ul className="footer-widget__contact-list list-unstyled">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-location-1"></span>
                                        </div>
                                        <div className="content">
                                            <h3>Location</h3>
                                            <p> 60 th St, Sulimaniyah. Iraq </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-phone"></span>
                                        </div>
                                        <div className="content">
                                            <h3>Get a quote</h3>
                                            <p><a href="tel:+9647702464">+964 (770) 037-2464</a></p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-envelope"></span>
                                        </div>
                                        <div className="content">
                                            <h3>Send a mail</h3>
                                            <p><a href="mailto:Prettau.ptrettau@gmail.com">Prettau.ptrettau@gmail.com</a></p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-footer__bottom">
                <div className="container">
                    <div className="site-footer__bottom-inner">
                        <p className="site-footer__bottom-text">© Copyright Prettau 2023. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )

}   
export default Footer;