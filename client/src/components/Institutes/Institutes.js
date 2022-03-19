import React from 'react'
import Navbar from '../layout/Navbar'
import SearchIcon from '../layout/Search_Icon.png'
import InstitutesList from './InstitutesList'

const Institutes = () => {
    const buttonStyle = {
        marginTop: '1px',
        paddingTop: '4px',
        paddingBottom: '4px',
        position: 'absolute',
        top: '0',
        right: '16px',
    }

    const iconStyle = {
        width: '20px',
    }

    return (
        <div>
            <div>
                <Navbar />
                <div className="container-fluid px-5 py-3 institutes-container">
                    <form
                        action=""
                        className="d-flex justify-content-around align-items-center col-5 mx-auto"
                    >
                        <input
                            className="form-control"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button className="btn btn-light" style={buttonStyle}>
                            <img src={SearchIcon} alt="" style={iconStyle} />
                        </button>
                    </form>
                    <InstitutesList />
                </div>
            </div>
        </div>
    )
}

export default Institutes
