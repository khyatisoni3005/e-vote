import React from 'react'
import Sidebar from '../../Sidebar'
import Navbar from '../../Navbar'
import Counting from './Counting'

function DashBoard() {
    return (
        <>
            <Navbar />
            <div className="row">
                <div className="col-2">
                    <Sidebar />
                </div>
                <div className="col-10 mt-4">
                    <h1 >Welcome To DashBoard</h1>
                    <Counting />
                </div>
            </div>
        </>
    )
}

export default DashBoard