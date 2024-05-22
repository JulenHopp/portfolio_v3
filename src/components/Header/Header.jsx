import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import logo from "/src/assets/images/logos/logo.png"

export default function Header() {
	const [isOpen, setIsOpen] = React.useState(false);
	const location = useLocation();
	const currentPath = location.pathname;

	const toggleMenu = () => {setIsOpen(!isOpen)};

  return (
		<header>
			<nav className="navbar">
				<div className="logo-hamburger-container">
					<Link to="/">
						<img src={logo} alt="Logo" className="nav-logo" />
					</Link>
					<button onClick={toggleMenu} className="nav-toggle">
						<span className="bar"></span>
						<span className="bar"></span>
						<span className="bar"></span>
					</button>
				</div>
				<ul className={`nav-list ${isOpen ? "show" : ""}`}>
					<li className={currentPath === '/' ? 'active' : 'nav-item'}>
						<div className="link-container">
							<Link to="/">Home</Link>
						</div>
					</li>
					<li className={currentPath === '/projects' ? 'active' : 'nav-item'}>
						<div className="link-container">
							<Link to="/projects">Projects</Link>
						</div>
					</li>
					<li className={currentPath === '/contact' ? 'active' : 'nav-item'}>
						<div className="link-container">
							<Link to="/contact">Contact</Link>
						</div>
					</li>
					<li className={currentPath === '/resume' ? 'active' : 'nav-item'}>
						<div className="link-container">
							<Link to="/resume">Resume</Link>
						</div>
					</li>
				</ul>
			</nav>
  		</header>
  	);
}