import React from 'react';
import logo from '../../assets/logo.svg';

const Navbar = () => {
    return (
        <div className="flex w-full justify-between items-center mt-5 px-20">
            <Logo />
            <MenuList />
            <AuthSection />
        </div>
    )
}

const MenuList = () => (
    <span className="flex items-center space-x-8 text-lg">
        <a href="/" className="hover:text-blue transition-all text-blue-light">About</a>
        <a href="/" className="hover:text-blue transition-all text-blue-light">Features</a>
        <a href="/" className="hover:text-blue transition-all text-blue-light">Pricing</a>
        <a href="/" className="hover:text-blue transition-all text-blue-light">Testimonials</a>
        <a href="/" className="hover:text-blue transition-all text-blue-light">Help</a>
    </span>
)

const Logo = () => (
    <span>
        <img alt="logo" width="149px" height="36px" src={logo}></img>
    </span>
)

const AuthSection = () => (
    <span className="font-semibold space-x-5">
        <a href="/" className="text-blue hover:text-blue-light">Sign In</a>
        <a href="/" className="py-2 px-7 hover:bg-red hover:text-white transition-all text-red border rounded-3xl border-red">Sign Up</a>
    </span>
)

export default Navbar
