import React, {useState} from 'react';
import {Collapse, Container, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, NavLink} from "reactstrap";

function NavbarTop(props) {


    const [leftShow, setLeftShow] = useState(false);
    const [rightShow, setRightShow] = useState(false);


    return (
        <div className="top">

            <div className="bgcolor">
                <Container>
                    <Navbar light expand="sm">

                        <Collapse navbar className="justify-content-between">
                            <Nav navbar>
                                <NavItem>
                                    <NavLink href="/components/"><p className="text-white mb-0">Free Call (90) 949 79
                                        87</p></NavLink>
                                </NavItem>

                            </Nav>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink href="/components/"><p className="text-white mb-0"><span className="">Opening Hours </span> Mn-Fr:
                                        10 am 8 pm</p></NavLink>
                                </NavItem>

                            </Nav>
                            <Nav navbar>
                                <NavItem className="d-flex">
                                    <NavLink href="/components/"><p
                                        className="font-family-regular mb-0 text-white googl">RUS</p></NavLink>
                                    <NavLink href="/components/"><p
                                        className="font-family-regular mb-0 text-white googl">ENG</p></NavLink>
                                </NavItem>

                            </Nav>
                            <Nav navbar>
                                <NavItem className="d-flex">
                                    <NavLink href="/components/" className="mr-4"><span
                                        className="icon iconfacebook"></span></NavLink>
                                    <NavLink href="/components/" className="mr-4"><span
                                        className="icon icontwitter"></span></NavLink>
                                    <NavLink href="/components/" className="mr-4 googl"><span
                                        className="icon icongoogleplus"></span></NavLink>
                                    <NavLink href="/components/" className="mr-4"><span
                                        className="icon iconyoutube"></span></NavLink>
                                    <NavLink href="/components/" className="mr-4 googl"><span
                                        className="icon iconsabachka"></span></NavLink>
                                    <NavLink href="/components/" className="mr-4"><span
                                        className="icon iconshoppingcard"></span></NavLink>

                                </NavItem>

                            </Nav>


                        </Collapse>
                    </Navbar>
                </Container>

            </div>
            <div className="bgcolor2">
                <Container>
                    <Navbar light expand="sm">

                        <Collapse navbar className="justify-content-between align-items-center">
                            <Nav navbar>
                                <NavItem>
                                    <NavLink href="/components/">  <h2 className="text-dark">Home</h2></NavLink>
                                </NavItem>

                            </Nav>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink href="/components/"><h2 className="text-dark">About</h2></NavLink>
                                </NavItem>

                            </Nav>
                            <Nav navbar>
                                <NavItem>

                                    <NavLink href="/components/"><img src="../images/kuchuk.png" alt=""/></NavLink>
                                </NavItem>
                            </Nav>
                            <Nav navbar>
                                    <NavItem>
                                    <NavLink href="/components/">  <h2 className="text-dark">Services</h2></NavLink>

                                </NavItem>
                            </Nav>
                                <Nav navbar>
                                <NavItem>
                                    <NavLink href="/components/"> <h2 className="text-dark">Contacts</h2></NavLink>

                                </NavItem>

                            </Nav>


                        </Collapse>

                    </Navbar>
                </Container>








            </div>

            <div className="mobile-navbar bgcolor3 d-none justify-content-between align-items-center position-relative" onClick={() =>{ if(leftShow==true) setLeftShow(!leftShow) }} >
                <div><button className="border-0  bgcolor3" onClick={() => setLeftShow(!leftShow)}><img className="p-3" src="../images/menu.png" width="70" alt=""/></button></div>
                <div><img src="../images/kuchuk.png" width="80" alt=""/></div>
                <div><button className="border-0 bgcolor3" onClick={() => setRightShow(!rightShow)}><img className="p-2" src="../images/rightmenu.png" width="30" alt=""/></button></div>


                <div className= {`left-menu-mobile bg-succes ${leftShow ? 'active' : ''}`}>
                    <div className="bg-success my-1"><a href="#"><p className=" text-white mb-0 font-family-bold text-dark">Free Call (90) 949 79
                        87</p></a></div>
                    <div className="bg-success my-1"><a href="#"><p className="bg-danger text-white mb-0 font-family-bold text-dark"><span className="">Opening Hours </span> Mn-Fr:
                        10 am 8 pm</p></a></div>
                    <div><a href="#"><h2 className="text-dark">Home</h2></a></div>
                    <div><a href="#"><h2 className="text-dark">About</h2></a></div>
                    <div><a href="#"><h2 className="text-dark">Services</h2></a></div>
                    <div><a href="#"><h2 className="text-dark">Contacts</h2></a></div>

                </div>



                <div className={`right-menu-mobile ${rightShow ? 'active' : ''}`}>
                    <NavItem className="d-block">
                        <NavLink href="/components/" className="mr-4"><span
                            className="icon bg-dark iconfacebook"></span></NavLink>
                        <NavLink href="/components/" className="mr-4"><span
                            className="icon bg-dark icontwitter"></span></NavLink>
                        <NavLink href="/components/" className="mr-4 googl"><span
                            className="icon bg-dark icongoogleplus"></span></NavLink>
                        <NavLink href="/components/" className="mr-4"><span
                            className="icon bg-dark iconyoutube"></span></NavLink>
                        <NavLink href="/components/" className="mr-4 googl"><span
                            className="icon bg-dark iconsabachka"></span></NavLink>
                        <NavLink href="/components/" className="mr-4"><span
                            className="icon bg-dark iconshoppingcard"></span></NavLink>

                    </NavItem>
                </div>
            </div>

        </div>


    );
}

export default NavbarTop;