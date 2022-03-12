import React, {useState, useContext} from 'react'
import Navbar from './layout/Navbar'
import CollegeContext from '../context/college/collegeContext'

const CollegeRegister = () => {
    const collegeContext = useContext(CollegeContext)
    const {register} = collegeContext

    const [college, setCollege] = useState({
        name: '',
        address: '',
        city: '',
        state: '',
        zipcode: '',
        collegeType: '',
        headname: '',
        contact: '',
        email: '',
        password: '',
    })

    const {
        name,
        address,
        city,
        state,
        zipcode,
        collegeType,
        headname,
        contact,
        email,
        password,
    } = college

    const onSubmit = e => {
        e.preventDefault()
        register({
            name,
            address,
            city,
            state,
            zipcode,
            collegeType,
            headname,
            contact,
            email,
            password,
        })
    }

    const onChange = e => {
        setCollege({...college, [e.target.name]: e.target.value})
    }

    return (
        <div>
            <Navbar />
            <div className="container clg-reg-form my-5 p-4">
                <form onSubmit={onSubmit}>
                    <h1>Register your Institution</h1>
                    <hr />
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                            Institution Name
                        </label>
                        <input
                            className="form-control"
                            type="text"
                            name="name"
                            value={name}
                            onChange={onChange}
                            required
                        />
                    </div>
                    <div className="mb-3 row">
                        <div className="col-9">
                            <label htmlFor="address" className="form-label">
                                Address
                            </label>
                            <input
                                type="text"
                                name="address"
                                className="form-control"
                                value={address}
                                onChange={onChange}
                            />
                        </div>

                        <div className="col-3">
                            <label htmlFor="city" className="form-label">
                                City
                            </label>
                            <input
                                type="text"
                                name="city"
                                className="form-control"
                                value={city}
                                onChange={onChange}
                            />
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <div className="col-9">
                            <label htmlFor="state" className="form-label">
                                State
                            </label>
                            <input
                                type="text"
                                name="state"
                                className="form-control"
                                value={state}
                                onChange={onChange}
                            />
                        </div>

                        <div className="col-3">
                            <label htmlFor="zip_code" className="form-label">
                                Zip Code
                            </label>
                            <input
                                type="text"
                                name="zipcode"
                                className="form-control"
                                value={zipcode}
                                onChange={onChange}
                            />
                        </div>
                    </div>

                    <div className="mb-3">
                        <label
                            for="institution_type"
                            className="form-label mr-4"
                        >
                            Institute Type
                        </label>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="collegeType"
                                value="Central University"
                                onChange={onChange}
                            />
                            <label
                                className="form-check-label"
                                for="central_university"
                            >
                                Central University
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="collegeType"
                                value="State University"
                                onChange={onChange}
                            />
                            <label
                                className="form-check-label"
                                for="state_university"
                            >
                                State University
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="collegeType"
                                value="Autonomous"
                                onChange={onChange}
                            />
                            <label
                                className="form-check-label"
                                for="autonomous"
                            >
                                Autonomous
                            </label>
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <div className="col-9">
                            <label
                                htmlFor="college_head_name"
                                className="form-label"
                            >
                                College Head Name
                            </label>
                            <input
                                type="text"
                                name="headname"
                                className="form-control"
                                value={headname}
                                onChange={onChange}
                            />
                        </div>

                        <div className="col-3">
                            <label
                                htmlFor="contact_number"
                                className="form-label"
                            >
                                Contact Number
                            </label>
                            <input
                                type="text"
                                name="contact"
                                className="form-control"
                                value={contact}
                                onChange={onChange}
                            />
                        </div>
                    </div>

                    <div className="mb-3">
                        <label for="email" className="form-label">
                            Email
                        </label>
                        <input
                            type="text"
                            name="email"
                            className="form-control"
                            value={email}
                            onChange={onChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label
                            for="exampleInputPassword1"
                            className="form-label"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            value={password}
                            onChange={onChange}
                        />
                    </div>
                    <button type="submit" class="btn btn-danger px-5">
                        Register
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CollegeRegister
