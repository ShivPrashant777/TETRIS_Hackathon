import React, {useContext} from 'react'
import {Navigate} from 'react-router-dom'
import CollegeContext from '../context/college/collegeContext'

const PrivateRoute = ({component: Component}) => {
    const collegeContext = useContext(CollegeContext)
    const {isAuth} = collegeContext
    if (isAuth) return <Component />
    return <Navigate to="/login" />
}

export default PrivateRoute
