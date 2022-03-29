import React from 'react'

const Spinner = () => (
    <div className="d-flex justify-content-center mt-5">
        <div
            className="spinner-border"
            role="status"
            style={{width: '3rem', height: '3rem', color: '#5932ea'}}
        >
            <span className="visually-hidden"></span>
        </div>
    </div>
)

export default Spinner
