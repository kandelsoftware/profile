import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from './Form'
class Header extends Component {
    render() {
        return (
                    <div>
                     
                      <header className="header_area">
                        <div className="main-menu">
                          <nav className="navbar navbar-expand-lg navbar-light">
                            <a className="navbar-brand" href="#"><img src="./img/logo.png" alt="logo" /></a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                              <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                              <div className="mr-auto" />
                              <ul className="navbar-nav">
                                <li className="nav-item active">
                                  <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                  <a className="nav-link" href="#about-area">about</a>
                                </li>
                                <li className="nav-item">
                                  <a className="nav-link" href="#services-area">services</a>
                                </li>
                               
                                <li className="nav-item">
                                  <a className="nav-link" href="#">contact</a>
                                </li>

                              {/*  <li className="nav-item">
                                  <a className="nav-link" href="#">portfolio</a>
                                </li>
                                <li className="nav-item">
                                  <a className="nav-link" href="#">pages</a>
                                </li>
                                <li className="nav-item">
                                  <a className="nav-link" href="#">blog</a></li>*/}
                              </ul>
                            </div>
                          </nav>
                        </div>
                      </header>
                      {/*  ======================= End Header Area ============================== */}
                      {/*  ======================= Start Main Area ================================ */}
                      <main className="site-main">
                        {/*  ======================= Start Banner Area =======================  */}
                        <section className="site-banner">
                          <div className="container">
                            <div className="row">
                              <div className="col-lg-6 col-md-12 site-title">
                                <h3 className="title-text">Hey</h3>
                                <h1 className="title-text text-uppercase">I am Saroj</h1>
                                <h4 className="title-text text-uppercase">Senior Mobile & Web Developer</h4>
                                <div className="site-buttons">
                                  <div className="d-flex flex-row flex-wrap">
                                    <button type="button" className="btn button primary-button mr-4 text-uppercase">hire
                                      me</button>
                                   {/*   <button type="button" className="btn button secondary-button text-uppercase">Get cv</button> */}
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-12 banner-image">
                                <img src="./img/banner/banner-image.png" alt="banner-img" className="img-fluid" />
                              </div>
                            </div>
                          </div>
                        </section>
                        {/*  ======================= End Banner Area =======================  */}
                        {/*  ========================= About Area ==========================  */}
                        <section id="about-area" className="about-area">
                          <div className="container-fluid">
                            <div className="row">
                              <div className="col-lg-6 col-md-12">
                                <div className="about-image">
                                  <img src="./img/about-us.png" alt="About us" className="img-fluid" />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-12 about-title">
                                <h2 className="text-uppercase pt-5">
                                  <span>Let me</span>
                                  <span>introduce</span>
                                  <span>myself</span>
                                </h2>
                                <div className="paragraph py-4 w-75">
                                  <p className="para">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error rerum iure obcaecati vel
                                    possimus officia maiores perferendis ut! Quos, perspiciatis.
                                  </p>
                                  <p className="para">
                                    It is a long established fact that a reader will be distracted by the readable content
                                    of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                                    more-or-less normal distribution of letters, as opposed to using 'Content here, content
                                    here
                                  </p>
                                </div>
                                <button type="button" className="btn button primary-button text-uppercase">Download cv</button>
                              </div>
                            </div>
                          </div>
                        </section>
                        {/*  ========================= End About Area ==========================  */}
                        {/*  ======================== Brand Area ==============================  */}
                        <section className="brand-area">
                          <div className="container-fluid">
                            <div className="row">
                              <div className="col-xl-6 col-lg-12 col-md-12">
                                <div className="first-row row">
                                  <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="single-brand">
                                      <img src="./img/brands/logo1.png" alt="Brand-1 " />
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="single-brand">
                                      <img src="./img/brands/logo2.png" alt="Brand-2 " />
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="single-brand">
                                      <img src="./img/brands/logo3.png" alt="Brand-3 " />
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="single-brand">
                                      <img src="./img/brands/logo4.png" alt="Brand-4" />
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="single-brand">
                                      <img src="./img/brands/logo5.png" alt="Brand-5 " />
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="single-brand">
                                      <img src="./img/brands/logo6.png" alt="Brand-6" />
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="single-brand">
                                      <img src="./img/brands/logo7.png" alt="Brand-7 " />
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="single-brand">
                                      <img src="./img/brands/logo8.png" alt="Brand-8 " />
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="single-brand">
                                      <img src="./img/brands/logo9.png" alt="Brand-9" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-6 col-lg-12 col-md-12">
                                <div className="experience-area">
                                  <div className="d-flex flex-row years-area">
                                    <h2 className="p-3 years">10</h2>
                                    <h2>
                                      <span>Years</span>
                                      <span>Experience</span>
                                      <span>Working</span>
                                    </h2>
                                  </div>
                                  <div className="d-flex flex-row flex-wrap call-area">
                                    <span><i className="fas fa-phone-alt fa-3x px-3" /></span>
                                    <div className="call-now">
                                      <a href="#" className="text-uppercase h4 font-roboto">Call Now</a>
                                      <span className="font-roboto py-2">(+91)-800-555-4986</span>
                                    </div>
                                  </div>
                                  <div className="bg-panel" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                        {/*  ======================== End Brand Area ==============================  */}
                        {/*  ====================== Start Services Area =============================  */}
                        <section className="services-area"  id="services-area">
                          <div className="container">
                            <div className="row">
                              <div className="col-lg-12 text-center services-title">
                                <h1 className="text-uppercase title-text">Services Offers</h1>
                                <p className="para">
                                  There are many variations of passages of Lorem Ipsum available, but the majority have
                                  suffered alteration in some form, by injected humour
                                </p>
                              </div>
                            </div>
                            <div className="container services-list">
                              <div className="row">
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                  <div className="services">
                                    <div className="sevices-img text-center py-4">
                                      <img src="./img/services/s1.png" alt="Services-1" />
                                    </div>
                                    <div className="card-body text-center">
                                      <h5 className="card-title text-uppercase font-roboto">Wp developer</h5>
                                      <p className="card-text text-secondary">
                                        Some quick example text to build on the card
                                        title and make up
                                        the bulk of the card's content.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                  <div className="services">
                                    <div className="sevices-img text-center py-4">
                                      <img src="./img/services/s2.png" alt="Services-2" />
                                    </div>
                                    <div className="card-body text-center">
                                      <h5 className="card-title text-uppercase font-roboto">ux/ui desing</h5>
                                      <p className="card-text text-secondary">
                                        Some quick example text to build on the card
                                        title and make up
                                        the bulk of the card's content.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                  <div className="services">
                                    <div className="sevices-img text-center py-4">
                                      <img src="./img/services/s3.png" alt="Services-3" />
                                    </div>
                                    <div className="card-body text-center">
                                      <h5 className="card-title text-uppercase font-roboto">App Development</h5>
                                      <p className="card-text text-secondary">
                                        Some quick example text to build on the card
                                        title and make up
                                        the bulk of the card's content.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                  <div className="services">
                                    <div className="sevices-img text-center py-4">
                                      <img src="./img/services/s4.png" alt="Services-4" />
                                    </div>
                                    <div className="card-body text-center">
                                      <h5 className="card-title text-uppercase font-roboto">seo optimize</h5>
                                      <p className="card-text text-secondary">
                                        Some quick example text to build on the card
                                        title and make up
                                        the bulk of the card's content.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                        {/*  ====================== End Services Area =============================  */}
                    
                       
                        {/*  ========================== Subscribe me Area ============================  */}
                        <section className="subscribe-us-area">
                          

                    <Form> </Form>
                               
                        </section>
                        {/*  ========================== End Subscribe me Area ============================  */}
                      </main>
                      {/*  ======================= End Main Area ================================ */}
                      <footer className="footer-area">
                        <div className="container">
                          <div className>
                            <div className="site-logo text-center py-4">
                              <a href="#"><img src="./img/logo.png" alt="logo" /></a>
                            </div>
                            <div className="social text-center">
                              <h5 className="text-uppercase">Follow me</h5>
                              <a href="#"><i className="fab fa-facebook" /></a>
                              <a href="#"><i className="fab fa-instagram" /></a>
                              <a href="#"><i className="fab fa-youtube" /></a>
                              <a href="#"><i className="fab fa-twitter" /></a>
                            </div>
                            <div className="copyrights text-center">
                              <p className="para">
                                Copyright ©2019 All rights reserved | 
                                <a href="#"><span style={{color: 'var(--primary-color)'}}>Saroj</span></a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </footer>
                      {/*  Jquery js file  */}
                      {/*  Bootstrap js file  */}
                      {/*  isotope js library  */}
                      {/*  Magnific popup script file  */}
                      {/*  Owl-carousel js file  */}
                      {/*  custom js file  */}
                    </div>
                  );
    
    }
}

Header.propTypes = {

};

export default Header;