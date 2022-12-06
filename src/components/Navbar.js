import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    const dangerTheme =()=>{
        props.changeTheme("danger")
    }
    const darkTheme =()=>{
        props.changeTheme("dark")
    }
    const lightTheme =()=>{
        props.changeTheme("light")
    }
    const primaryTheme =()=>{
        props.changeTheme("primary")
    }
    return (
        <nav className={`navbar navbar-dark navbar-expand-lg bg-${props.theme==='light'?'secondary':props.theme}`}>
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.aboutText}</Link>
                        </li>
                    </ul>
                    <div className='Themes'>
                        <span style={{color:'white'}}>Themes: </span>
                        <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                            <input type="radio" onClick={dangerTheme} className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" />
                            <label className="btn btn-outline-danger bg-danger" htmlFor="btnradio1"></label>

                            <input type="radio" onClick={darkTheme} className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" />
                            <label className="btn btn-outline-dark bg-dark" htmlFor="btnradio2"></label>

                            <input type="radio" onClick={primaryTheme} className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" />
                            <label className="btn btn-outline-primary bg-primary" htmlFor="btnradio3"></label>

                            <input onClick={lightTheme} type="radio" className="btn-check" name="btnradio" id="btnradio4" autoComplete="off" defaultChecked/>
                            <label className="btn btn-outline-light bg-light" htmlFor="btnradio4"></label>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
};

Navbar.defaultProps = {
    title: "Set title here",
    aboutText: "Set about text here"
}