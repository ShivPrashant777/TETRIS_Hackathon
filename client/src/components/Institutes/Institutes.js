import React, {useState, useContext} from 'react'
import Navbar from '../layout/Navbar'
import SearchIcon from '../layout/Search_Icon.png'
import InstitutesList from './InstitutesList'
import CollegeContext from '../../context/college/collegeContext'

const Institutes = () => {
    const collegeContext = useContext(CollegeContext)
    const {searchCollege} = collegeContext

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

    const [searchValue, setSearchValue] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        searchCollege(searchValue)
    }

    return (
        <div>
            <div>
                <Navbar />
                <div className="container-fluid px-5 py-3 institutes-container">
                    <form
                        action=""
                        className="d-flex justify-content-around align-items-center col-5 mx-auto"
                        onSubmit={handleSubmit}
                    >
                        <input
                            className="form-control"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            name="search"
                            value={searchValue}
                            onChange={e => setSearchValue(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="btn btn-light"
                            style={buttonStyle}
                        >
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
