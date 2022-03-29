import React, {useContext, useEffect} from 'react'
import {Navigate} from 'react-router-dom'
import CollegeContext from '../context/college/collegeContext'
import Spinner from '../components/layout/Spinner'

const PrivateRoute = ({component: Component}) => {
    const collegeContext = useContext(CollegeContext)
    const {isAuth, loading} = collegeContext
    useEffect(() => {}, [isAuth])
    if (loading) return <Spinner />
    if (isAuth) return <Component />
    return <Navigate to="/login" />
}

export default PrivateRoute
