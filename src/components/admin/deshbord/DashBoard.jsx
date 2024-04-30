import React from 'react'
import Sidebar from '../../Sidebar'
import Navbar from '../../Navbar'

function DashBoard() {
    return (
        <>
            <Navbar />
            <div className="row">
                <div className="col-2">
                    <Sidebar />
                </div>
                <div className="col-10">

                </div>
            </div>
        </>
    )
}

export default DashBoard