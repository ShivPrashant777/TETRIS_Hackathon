import React from 'react'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light abc">
            <div class="container-fluid">
                <a class="navbar-brand">Navrohan</a>
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
                            <a class="nav-link active" aria-current="page">
                                Institutions
                            </a>
                            <a class="nav-link">Dashboard</a>
                            <a class="nav-link">Login</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
