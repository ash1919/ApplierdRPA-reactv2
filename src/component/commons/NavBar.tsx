import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'
import { Link } from 'react-scroll'

const NavBar = () => {
    const [hamburgerOpen, setHamburgerOpen] = useState(false)

    return (
        <nav className=" w-full nav-bar sticky top-0 z-[100] bg-transparent py-6 backdrop-blur-sm">
            <div className="container flex items-center justify-between space-x-12 mx-auto px-6 ">
                <div>
                    <figure>
                        <img
                            src="/images/appliedrpa-logo.png"
                            alt="appliedrpa"
                            className="w-96"
                        />
                    </figure>
                </div>
                <div className="hidden lg:flex space-x-8 text-white text-sm items-center justify-center">
                    <Link
                        to="aboutHackathon"
                        activeClass="active"
                        smooth
                        offset={-70}
                        duration={500}
                        className="cursor-pointer text-xl"
                    >
                        About Us
                    </Link>
                    <Link
                        to="aboutHackathon"
                        activeClass="active"
                        smooth
                        offset={-70}
                        duration={500}
                        className="cursor-pointer text-xl"
                    >
                        Services
                    </Link>
                    <Link
                        to="domain"
                        activeClass="active"
                        smooth
                        offset={-70}
                        duration={500}
                        className="cursor-pointer text-xl"
                    >
                        Products
                    </Link>
                    <button
                        type="button"
                        className="mx-auto p-6 rounded-lg py-3 px-10 font-semibold hover:text-white bg-rpaPurple-500 text-xl"
                    >
                        CONTACT US
                    </button>
                </div>
                <div className="block lg:hidden ">
                    <button
                        type="button"
                        className="block lg:hidden transition  "
                        onClick={() => setHamburgerOpen(!hamburgerOpen)}
                    >
                        <GiHamburgerMenu className=" w-20 h-8 pl-10 transition focus:outline-none text-rpaLightBlue-300" />
                    </button>
                    {hamburgerOpen && (
                        <div className="absolute top-0 left-0 w-full lg:hidden bg-rpaBlue-900 z-[500] text-white ">
                            <div className=" gap-8 bg-rpaBlue-500 py-6 flex flex-col shadow-md shadow-blue-500/50">
                                <div className=" container mx-auto px-6 flex items-center justify-between">
                                    <div>
                                        <img
                                            src="/images/appliedrpa-logo.png"
                                            alt="appliedrpa"
                                            className="w-96"
                                        />
                                    </div>
                                    <button
                                        type="button"
                                        className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-all"
                                        onClick={() => setHamburgerOpen(false)}
                                    >
                                        <GrClose
                                            className="h-10 w-10 text-rpaLightBlue-300"
                                            aria-hidden="true"
                                        />
                                    </button>
                                </div>
                                <div className="container mx-auto px-16 flex flex-col items-start gap-y-4">
                                    <Link
                                        to="aboutHackathon"
                                        activeClass="active"
                                        smooth
                                        offset={-70}
                                        duration={500}
                                        className="cursor-pointer text-xl"
                                        onClick={() => setHamburgerOpen(false)}
                                    >
                                        About Us
                                    </Link>
                                    <Link
                                        to="domain"
                                        activeClass="active"
                                        smooth
                                        offset={-70}
                                        duration={500}
                                        className="cursor-pointer text-xl"
                                        onClick={() => setHamburgerOpen(false)}
                                    >
                                        Products
                                    </Link>
                                    <button
                                        type="button"
                                        className="mx-auto p-6 rounded-lg mt-6 py-3 px-10 font-semibold hover:text-white bg-rpaPurple-500 text-xl"
                                    >
                                        CONTACT US
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default NavBar
