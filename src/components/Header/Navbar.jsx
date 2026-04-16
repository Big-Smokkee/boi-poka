import React from 'react';
import { Link, NavLink } from 'react-router';
import './Navbar.css'
const Navbar = () => {
    const links = <div className='block md:flex gap-3'>
        {/* <li className='p-2 hover:border border-green-400  rounded-xl'>Home</li> */}
        {/* <Link className='p-2 hover:border border-green-400  rounded-xl' to='/'>Home</Link> */}
        {/* <Link className='p-2 hover:border border-green-400  rounded-xl' to='/about'>About</Link> */}
        {/* <li className='p-2 hover:border border-green-400  rounded-xl'>About</li> */}
        <NavLink className='' to='/'>Home</NavLink>
        <NavLink className='' to='/about'>About</NavLink>
    </div >

    return (
        <div className="navbar  shadow-sm px-32.5 text-black work">
            <div className="navbar-start ">
                <div className="dropdown bg-white">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end flex gap-3">
                <a className="btn bg-[#23BE0A] border-0 rounded-lg">Sign In</a>
                <a className="btn rounded-lg bg-[#59C6D2] border-0">Sign Up</a>
            </div>
        </div>
    );
};

export default Navbar;