import React from 'react'
import Navbar from '../../Navbar'
import Sidebar from '../../Sidebar'
import CommonButton from "../../CommonButton"
import UserModal from "./UserModal"

function User() {



    return (
        <>
            <Navbar />
            <div className="row">
                <div className="col-2">
                    <Sidebar />
                </div>
                <div className="col-10">
                    <div className="row">
                        <div className="col-10"></div>
                        <UserModal />
                    </div>
                </div>
            </div>
        </>
    )
}

export default User