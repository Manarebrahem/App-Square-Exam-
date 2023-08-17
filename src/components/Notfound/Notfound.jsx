import React from 'react'
import error from '../../images/error.svg'

export default function Notfound() {
    return <>
        <div className="container">
            <img src={error} alt="404" className='w-100' />
        </div></>


}