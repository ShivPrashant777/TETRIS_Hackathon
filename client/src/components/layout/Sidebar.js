import React, {useContext} from 'react'
import CollegeLogo from '../Institutes/Logo_of_G.H._Raisoni_College_of_Engineering_Nagpur.png'
import NavrohanLogo from '../layout/Navrohan_Logo.png'
import {Link} from 'react-router-dom'
import CollegeContext from '../../context/college/collegeContext'

const Sidebar = () => {
    const collegeContext = useContext(CollegeContext)
    const {logout, college} = collegeContext

    const onLogout = () => {
        logout()
    }

    return (
        <div className="col-3 py-2 px-2 px-xl-5 bg-white subtle-shadow sidebar">
            <div className="d-flex flex-column justify-content-center">
                <div className="text-center">
                    <Link to="/">
                        <img src={NavrohanLogo} alt="" width="150px" />
                    </Link>
                </div>
                <div className="institute_img text-center my-4">
                    <img src={college.img} alt="" width="150px" />
                </div>
                <div className="text-center text-secondary">
                    <h5>
                        <b>{college.name}</b>
                    </h5>
                </div>
                <div className="text-center college-info d-flex flex-column my-2">
                    <div className="d-flex justify-content-between">
                        <p>College Type</p>
                        <p>:</p>
                        <p>{college.collegeType}</p>
                    </div>
                    <div className="d-flex justify-content-between text-left">
                        <p>Location</p>
                        <p>:</p>
                        <p>
                            {college.city}, {college.state}
                        </p>
                    </div>
                    <div className="d-flex justify-content-between text-left">
                        <p>President</p>
                        <p>:</p>
                        <p>{college.headname}</p>
                    </div>
                    <div className="d-flex justify-content-between text-left">
                        <p>Contact</p>
                        <p>:</p>
                        <p>{college.contact}</p>
                    </div>
                </div>

                <div className="text-start my-2">
                    <Link to="/dashboard">
                        <div className="border my-2 p-2 rounded highlighted">
                            Dashboard
                        </div>
                    </Link>
                    <Link to="/">
                        <div className="my-2 m p-2 rounded">Home</div>
                    </Link>

                    <Link to="/institutes">
                        <div className="my-2 p-2 rounded">Institutes</div>
                    </Link>
                    <Link to="/manage">
                        <div className="my-2 p-2 rounded">Manage</div>
                    </Link>
                    <Link to="/">
                        <div className="my-2 p-2 rounded">Listings</div>
                    </Link>
                    <Link onClick={onLogout} to="/login">
                        <div className="my-2 p-2 rounded">Logout</div>
                    </Link>
                </div>
                <div className="account">
                    <div className="d-flex justify-content-start align-items-center">
                        <img src={college.img} alt="" width="40px" />
                        <div style={{margin: '0 5px', fontSize: '0.8em'}}>
                            <b>{college.headname}</b>
                            <p className="light-text" style={{margin: 0}}>
                                Account details
                            </p>
                        </div>
                        <span className="chevron bottom ml-auto"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
