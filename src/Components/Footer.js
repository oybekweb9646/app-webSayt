import React from 'react';

import {LightgalleryProvider, LightgalleryItem} from 'react-lightgallery';
import "lightgallery.js/dist/css/lightgallery.css";
import Link from "react-router-dom/Link";
import {Row} from "reactstrap";


const Footer = () => {

    let rasm1 = <img src="../img/mail%20(3)%202-1.png" alt=""/>;


    return (
        <section id={"Past"}>

            <div className="orqaRasm pb-5">
                <div className="container">


                    <h1 className={"text-center mb-5 font-weight-bold text-white"}
                        style={{fontSize: "67px", fontFamily: "Montserrat"}}>Gallery of our work</h1>

                    <div id={"Rasmlar"} className="footerimgs-mobile p-0 d-none ml-5">
                        <LightgalleryProvider>

                            <div>
                                <div className="d-flex">
                                <LightgalleryItem src={"../img/Mask%20Group-1.png"}><img src="../img/Mask%20Group-1.png"
                                                                                         style={{
                                                                                             width: '40vw',

                                                                                         }} className={"rasmcha  p-2"}
                                                                                         alt=""/></LightgalleryItem>
                                <LightgalleryItem src={"../img/Mask%20Group-6.png"}><img src="../img/Mask%20Group-6.png"
                                                                                         style={{
                                                                                             width: '40vw',

                                                                                         }} className={"rasmcha  p-2"}
                                                                                         alt=""/></LightgalleryItem>
                                </div>
                                <div>
                                <LightgalleryItem src={"../img/Mask%20Group-7.png"}><img src="../img/Mask%20Group-7.png"
                                                                                         style={{
                                                                                             width: '80vw',

                                                                                         }} className={"rasmcha p-2"}
                                                                                         alt=""/></LightgalleryItem>
                                </div>
                                <div className="d-flex ">

                                    <LightgalleryItem src={"../img/Mask%20Group.png"}><img src="../img/Mask%20Group.png"
                                                                                           style={{
                                                                                               width: '80vw',

                                                                                               marginTop: "37px"
                                                                                           }} className={"rasmcha  p-2"}
                                                                                           alt=""/></LightgalleryItem>
                                </div>

                            </div>


                        </LightgalleryProvider>
                    </div>




                    <div id={"Rasmlar"} className="footerimgs p-0 col-12 ml-n5 flex-wrap d-flex">
                        <LightgalleryProvider>

                            <div className="d-flex">
                                <LightgalleryItem src={"../img/Mask%20Group-1.png"}><img src="../img/Mask%20Group-1.png"
                                                                                         style={{
                                                                                             width: '229px',
                                                                                             height: '422px'
                                                                                         }} className={"rasmcha  p-2"}
                                                                                         alt=""/></LightgalleryItem>
                                <LightgalleryItem src={"../img/Mask%20Group-6.png"}><img src="../img/Mask%20Group-6.png"
                                                                                         style={{
                                                                                             width: '229px',
                                                                                             height: '422px'
                                                                                         }} className={"rasmcha  p-2"}
                                                                                         alt=""/></LightgalleryItem>
                                <LightgalleryItem src={"../img/Mask%20Group-7.png"}><img src="../img/Mask%20Group-7.png"
                                                                                         style={{
                                                                                             width: '416px',
                                                                                             height: '422px'
                                                                                         }} className={"rasmcha p-2"}
                                                                                         alt=""/></LightgalleryItem>
                                <div className="d-flex flex-column">

                                    <LightgalleryItem src={"../img/Mask%20Group-8.png"}><img
                                        src="../img/Mask%20Group-8.png" style={{width: '383px', height: '190px'}}
                                        className={"rasmcha  p-2"} alt=""/></LightgalleryItem>
                                    <LightgalleryItem src={"../img/Mask%20Group.png"}><img src="../img/Mask%20Group.png"
                                                                                           style={{
                                                                                               width: '384px',
                                                                                               height: '195px',
                                                                                               marginTop: "37px"
                                                                                           }} className={"rasmcha  p-2"}
                                                                                           alt=""/></LightgalleryItem>
                                </div>

                            </div>

                            <div className="d-flex">

                                <LightgalleryItem src={"../img/Layer%201.png"}><img src="../img/Layer%201.png" style={{
                                    width: '410px',
                                    height: '432px'
                                }} className={"rasmcha  p-2"} alt=""/></LightgalleryItem>
                                <LightgalleryItem src={"../img/Rectangle%2071.png"}><img src="../img/Rectangle%2071.png"
                                                                                         style={{
                                                                                             width: '256px',
                                                                                             height: '431px'
                                                                                         }} className={"rasmcha  p-2"}
                                                                                         alt=""/></LightgalleryItem>
                                <LightgalleryItem src={"../img/Mask%20Group-4.png"}><img src="../img/Mask%20Group-4.png"
                                                                                         style={{
                                                                                             width: '218px',
                                                                                             height: '432px'
                                                                                         }} className={"rasmcha  p-2"}
                                                                                         alt=""/></LightgalleryItem>
                                <LightgalleryItem src={"../img/Mask%20Group-3.png"}><img src="../img/Mask%20Group-3.png"
                                                                                         style={{
                                                                                             width: '373px',
                                                                                             height: '431px'
                                                                                         }} className={"rasmcha  p-2"}
                                                                                         alt=""/></LightgalleryItem>


                            </div>

                            <div className="d-flex">
                                <LightgalleryItem src={"../img/Rectangle%2072.png"}><img src="../img/Rectangle%2072.png"
                                                                                         style={{
                                                                                             width: '437px',
                                                                                             height: '374px'
                                                                                         }} className={"rasmcha  p-2"}
                                                                                         alt=""/></LightgalleryItem>
                                <LightgalleryItem src={"../img/Mask%20Group-2.png"}><img src="../img/Mask%20Group-2.png"
                                                                                         style={{
                                                                                             width: '448px',
                                                                                             height: '380px'
                                                                                         }} className={"rasmcha  p-2"}
                                                                                         alt=""/></LightgalleryItem>
                                <LightgalleryItem src={"../img/Rectangle%2073.png"}><img src="../img/Rectangle%2073.png"
                                                                                         style={{
                                                                                             width: '373px',
                                                                                             height: '380px'
                                                                                         }} className={"rasmcha  p-2"}
                                                                                         alt=""/></LightgalleryItem>
                            </div>
                        </LightgalleryProvider>
                    </div>

                </div>
            </div>

            <div className="inputlar">

                <Row>
                <div className="col-lg-6 m-0">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.823260946244!2d69.21750224495935!3d41.35619512220954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8c405301662d%3A0xb89f4f278a29d189!2zOGEgUW9yYXFhbWlzaCBrbydjaGFzaSwg0KLQvtGI0LrQtdC90YIgMTAwMDk1LCBPYHpiZWtpc3Rvbg!5e0!3m2!1suz!2s!4v1613719600528!5m2!1suz!2s"
                        frameBorder="0"
                        className="aaa"  allowFullScreen/>
               </div>
                <div className="col-lg-6 p-0 m-0 position-relative" style={{backgroundColor: "#F4E6F0"}}>

                    <div className="p-3 col-lg-9">

                        <h3 className="" style={{fontSize: "5vw", fontFamily: "Montserrat", fontStyle: "normal"}}>Get
                            in Touch</h3>
                        <div className="chiziq"></div>

                        <p className="">Have any questions? Feel free to use the contact form below to got in
                            touch with us. We will answer you as soon as possible!</p>

                        <div className="group">
                            <input type="text" className="form-control bg-transparent" style={{width: "473px", borderRadius: "35px", border: "1px solid #C4C4C4"}} id="text" placeholder="Your name"/>
                            <input type="text" className="form-control mt-4 bg-transparent" placeholder=" Your Email" id="text2"
                                   style={{width: "473px", borderRadius: "35px", border: "1px solid #C4C4C4"}}/>
                            <input type="text" className="form-control mt-4 bg-transparent" placeholder=" Your Phone" id="text3"
                                   style={{width: "473px", borderRadius: "35px", border: "1px solid #C4C4C4"}}/>
                            <textarea name="" id="text4" placeholder=" Your Message"
                                      style={{width: "473px", borderRadius: "35px", border: "1px solid #C4C4C4"}}
                                      className="form-control mt-4 bg-transparent" style={{
                                width: "473px",
                                borderRadius: "20px",
                                border: "1px solid #C4C4C4",
                                height: "100px"
                            }}>

                            </textarea>

                            <button className="btn font-weight-bold mt-5 rasmcha"
                                    style={{borderRadius: "35px", border: "5px solid #5B0242", color: "#5B0242"}}>Send
                                Message
                            </button>

                            {console.log(rasm1)}
                            {console.log(rasm1.props.src)}
                        </div>

                    </div>


                    <img src="../img/Component%204.png" className={"qush"} style={{width: "30vw"}}
                         alt=""/>

                </div>
                </Row>
            </div>

            <div className="orqaRasm2">
                <div className="container">
                    <div className="row mb-5 align-items-start justify-content-between">
                        <div className="navbar col-lg-3 col-md-6 ">
                            <ul className="navbar-nav">
                                <li className="nav-item"><a href={"#"} className={"text-dark nav-link"}>
                                    <div className="pt-3 text-dark font-weight-bold text-dark"
                                         style={{fontSize: "20px"}}>About Us

                                        <div className="mt-3"
                                             style={{width: "102px", height: "3px", backgroundColor: "#FFD8CB"}}>
                                        </div>

                                    </div>
                                </a></li>
                                <li className="nav-item"><a href={"#"} className={"nav-link"}
                                                            style={{fontSize: "15px", color: "#9B9B9B"}}>Allamaroza Nail
                                    Salon has
                                    been offering
                                    an extensive range of nail services and
                                    skin treatments since 1999</a></li>
                            </ul>
                        </div>
                        <div className="navbar col-lg-3 col-md-6 ">
                            <ul className="navbar-nav">
                                <li className="nav-item"><a href={"#"} className={"nav-link"}>
                                    <div className="pt-3 font-weight-bold text-dark"
                                         style={{fontSize: "20px",}}>Recent Photos
                                        <div className="mt-3"
                                             style={{width: "102px", height: "3px", backgroundColor: "#FFD8CB"}}/>
                                    </div>
                                </a></li>
                                <li className="nav-item"><a href={"#"} className={"nav-link"}
                                                            style={{fontSize: "15px", color: "#9B9B9B"}}>Top 5 Reasons
                                    to Visit the Nearest
                                    Nail Salon <p><i>June 10, 2018 / 3 Comments</i></p>
                                    One Day from the Life of a Nail
                                    Artist <p><i>June 10, 2018 / 3 Comments</i></p></a></li>
                            </ul>
                        </div>
                        <div className="navbar col-lg-3 col-md-6 pr-1">
                            <ul className="navbar-nav">
                                <li className="nav-item"><a href={"#"} className={"nav-link"}>
                                    <div className="pt-3 font-weight-bold text-dark"
                                         style={{fontSize: "20px"}}>Opening Hours

                                        <div className="mt-3"
                                             style={{width: "102px", height: "3px", backgroundColor: "#FFD8CB"}}/>

                                    </div>
                                </a></li>
                                <li className="nav-item"><a href={"#"} className={"nav-link"}
                                                            style={{fontSize: "15px", color: "#9B9B9B"}}>Mon-Fri: 9 am -
                                    6 pm <br/>
                                    Saturday: 9 am - 4 pm <br/>
                                    Sunday: Closed</a></li>
                            </ul>
                        </div>
                        <div className="navbar col-lg-3 col-md-6  pl-0">
                            <ul className="navbar-nav">
                                <li className="nav-item pl-0"><a href={"#"} className={"pl-0 nav-link"}>
                                    <div className="pt-3 font-weight-bold text-dark"
                                         style={{fontSize: "20px"}}>Contact Information
                                        <div className="mt-3"
                                             style={{width: "102px", height: "3px", backgroundColor: "#FFD8CB"}}/>
                                    </div>
                                </a></li>
                                <li className="nav-item"><a href={"#"} className={"nav-link"}
                                                            style={{fontSize: "15px", color: "#9B9B9B"}}>
                                    <div className="">
                                        <div className=""><span className="mr-2"><img src="../img/location-pin%201.png"
                                                                                      width={"20px"} alt=""/></span>Washington,
                                            USA, Richmond street
                                        </div>

                                        <div className="mt-3">
                                            <span className="mr-2"><img src="../img/call%20(1)%202.png"
                                                                        width={"20px"} alt=""/></span>(90) 9497987
                                        </div>

                                        <div className="mt-3">
                                            <span className="mr-2"><img src="../img/mail%20(3)%202.png"
                                                                        width={"20px"} alt=""/></span>info@demolink.org
                                        </div>

                                    </div>
                                </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{height: "160px", backgroundColor: "#8F0365"}}>
                <div className="container">

                    <div className="d-flex justify-content-between align-items-center">

                        <div className="mt-3"><img src="../img/klipartz.com%20-%202021-01-11T125115%206.png"
                                               width={"126.5px"} alt=""/></div>

                        <div className="font-weight-normal text-light">2020 All Rights Reserved Privacy Policy</div>

                        <div className="d-flex justify-content-between align-items-center">

                            <div className="mr-3 overicon"><img src="../img/facebook%20(2)%201.png" style={{opacity:"0.5"}} alt="" width={"25px"}/></div>
                            <div className="mx-3"><img src="../img/twitter%201.png" alt="" style={{opacity:"0.5"}} width={"25px"}/></div>
                            <div className="mx-3 overicon"><img src="../img/google-plus%201.png" alt="" style={{opacity:"0.5"}} width={"25px"}/></div>
                            <div className="mx-3 overicon"><img src="../img/youtube-logotype%201.png" alt="" style={{opacity:"0.5"}} width={"25px"}/></div>
                            <div className=" overicon"><img src="../img/pinterest%201.png" alt="" style={{opacity:"0.5"}} width={"25px"}/></div>

                        </div>
                    </div>
                </div>
            </div>


        </section>
    );
};

export default Footer;