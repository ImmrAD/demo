import React from "react";
import { Link } from "react-router-dom";


export default function Header (){
    return(
        <div className="flex justify-between items-center p-4 bg-pink-100 m-2 rounded-xl">
            <h1 className="text-2xl font-mono font bold">Anand Dane</h1>
            <nav className="space-x-5">
                <Link to="/projects" className='text-black hover;text-white'>PROJECTS</Link>
                <Link to="/about" className='text-black hover;text-white'>ABOUT</Link>
                <Link to="/contact" className='text-black hover;text-white'>CONTACT</Link>
            </nav>
        </div>
    )
}