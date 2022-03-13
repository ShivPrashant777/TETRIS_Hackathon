import React from 'react'
import NavrohanLogo from './Navrohan_Logo.png'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light subtle-shadow">
            <div class="container-fluid">
                <a class="navbar-brand">
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
