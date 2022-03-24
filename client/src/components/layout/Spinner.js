import React from 'react'

const Spinner = () => (
    <div class="d-flex justify-content-center mt-5">
        <div
            class="spinner-border"
            role="status"
            style={{width: '3rem', height: '3rem', color: '#5932ea'}}
        >
            <span class="visually-hidden"></span>
        </div>
    </div>
)

export default Spinner
