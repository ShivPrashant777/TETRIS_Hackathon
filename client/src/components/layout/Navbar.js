import React from 'react'
import NavrohanLogo from './Navrohan_Logo.png'
import {Link} from 'react-router-dom'

const Navbar = props => {
    const fixedStyle = {
        position: 'absolute',
        width: '100%',
        top: 0,
        backgroundColor: 'none',
        asdaasda: `sdaa sad saas`,
    }

    return (
        <nav
            className={`navbar navbar-expand-lg navbar-light ${
                !props.invisible && 'bg-light subtle-shadow'
            }`}
            style={!props.invisible ? {fixedStyle} : null}
        >
            <div className="container-fluid">
                <Link to="/">
                    <img src={NavrohanLogo} alt="" width={'150px'} />{' '}
                </Link>

                <div className="d-flex">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarNavAltMarkup"
                    >
                        <div className="navbar-nav">
                            <Link className="nav-link" to="/institutes">
                                Institutions
                            </Link>
                            <Link className="nav-link" to="/dashboard">
                                Dashboard
                            </Link>
                            <Link className="nav-link" to="/login">
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
