import React from 'react'
import NavrohanLogo from './Navrohan_Logo.png'

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
                <a className="navbar-brand">
                    <img src={NavrohanLogo} alt="" width={'150px'} />
                </a>
                <div className="d-flex">
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div
                        class="collapse navbar-collapse"
                        id="navbarNavAltMarkup"
                    >
                        <div class="navbar-nav">
                            <a
                                class="nav-link active"
                                aria-current="page"
                                href="/institutes"
                            >
                                Institutions
                            </a>
                            <a class="nav-link" href="dashboard">
                                Dashboard
                            </a>
                            <a class="nav-link" href="/">
                                Login
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
