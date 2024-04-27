import React from 'react'
import Navbar from '../../Navbar'
import Sidebar from '../../Sidebar'
import PartyModal from "../party/PartyModal"
function Party() {
    return (
        <>
            <Navbar />
            <div className="row">
                <div className="col-2" >
                    <Sidebar />
                </div>
                <div className="col-10">
                    <PartyModal />
                </div>
            </div>
        </>
    )
}

export default Party