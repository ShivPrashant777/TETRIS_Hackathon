import React from 'react'

const CollegeRegister = () => {
    return (
        <div className="container clg-reg-form my-5 p-4">
            <form action="">
                <h1>Register your Institution</h1>
                <hr />
                <div className="mb-3">
                    <label htmlFor="institution_name" className="form-label">
                        Institution Name
                    </label>
                    <input type="text" className="form-control" />
                </div>
                <div className="mb-3 row">
                    <div className="col-9">
                        <label htmlFor="address" className="form-label">
                            Address
                        </label>
                        <input type="text" className="form-control" />
                    </div>

                    <div className="col-3">
                        <label htmlFor="city" className="form-label">
                            City
                        </label>
                        <input type="text" className="form-control" />
                    </div>
                </div>

                <div className="mb-3 row">
                    <div className="col-9">
                        <label htmlFor="state" className="form-label">
                            State
                        </label>
                        <input type="text" className="form-control" />
                    </div>

                    <div className="col-3">
                        <label htmlFor="zip_code" className="form-label">
                            Zip Code
                        </label>
                        <input type="text" className="form-control" />
                    </div>
                </div>

                <div className="mb-3">
                    <label for="institution_type" className="form-label mr-4">
                        Institute Type
                    </label>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="central_university"
                            checked
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
                            name="state_university"
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
                            name="autonomous"
                        />
                        <label className="form-check-label" for="autonomous">
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
                        <input type="text" className="form-control" />
                    </div>

                    <div className="col-3">
                        <label htmlFor="contact_number" className="form-label">
                            Contact Number
                        </label>
                        <input type="text" className="form-control" />
                    </div>
                </div>

                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">
                        Password
                    </label>
                    <input type="password" className="form-control" />
                </div>
                <button type="submit" class="btn btn-danger px-5">
                    Register
                </button>
            </form>
        </div>
    )
}

export default CollegeRegister
