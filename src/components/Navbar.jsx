import React from 'react';
import { Link } from 'react-router-dom';
import jkuat from '../image/jkuatlogo1.png';

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <img src={jkuat} alt="jkuat" />
            </div>
            <div className="links">
                <div className="feedback">
                    <Link to="/">Home</Link>
                </div>
                <div className="feedback">
                    <Link to="/feedback">FeedBack</Link>
                </div>
                <div className="complaint">
                    <Link to="/complaint">Complaint</Link>
                </div>
                <div className="compliments">
                    <Link to="/compliments">Compliment</Link>
                </div>
            </div>
        </div>
    );
};
