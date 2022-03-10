import React from 'react'
import Navbar from '../layout/Navbar'

import InstitutesList from './InstitutesList'

const Institutes = () => {
    return (
        <div>
            <div>
                <Navbar />
                <div className="container-fluid px-5 py-3 institutes-container">
                    <input
                        class="form-control mx-auto col-5"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                    />

                    <InstitutesList />
                </div>
            </div>
        </div>
    )
}

export default Institutes
