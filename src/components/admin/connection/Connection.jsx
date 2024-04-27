import React from 'react'
import Navbar from '../../Navbar'
import Sidebar from '../../Sidebar'

export default function Connection() {


    return (
        <>
            <Navbar />
            <div className="row">
                <div className="col-2">
                    <Sidebar />
                </div>
                <div className="col-10">
                    <h1>connectio</h1>
                </div>
            </div>
        </>
    )
}
