import React, {useState, useContext} from 'react'
import RegisterStep1 from './RegisterStep1'
import RegisterStep2 from './RegisterStep2'
import CollegeContext from '../../context/college/collegeContext'

const RegisterForm = () => {
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
        img: '',
        cid: '',
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
        img,
        cid,
    } = college

    const values = {
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
        img,
        cid,
    }

    const handleChange = e => {
        setCollege({...college, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(values)
        register(values)
    }

    const handleFile = e => {
        setCollege({...college, img: e.base64})
    }

    const [step, setStep] = useState(1)

    const nextStep = () => {
        console.log(step)
        setStep(step + 1)
    }
    const prevStep = () => {
        setStep(step - 1)
    }

    return (
        <form onSubmit={handleSubmit}>
            {step === 1 ? (
                <RegisterStep1
                    nextStep={nextStep}
                    values={values}
                    handleChange={handleChange}
                />
            ) : (
                <RegisterStep2
                    prevStep={prevStep}
                    values={values}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    handleFile={handleFile}
                />
            )}
        </form>
    )
}

export default RegisterForm
