import React from 'react'
import Navbar from '../../Navbar'
import Sidebar from '../../Sidebar'
import ElectionModal from './ElectionModal'
function Election() {
    return (
        <>
            <Navbar />
            <div className="row">
                <div className="col-2" >
                    <Sidebar />
                </div>
                <div className="col-10">
                    <ElectionModal />
                </div>
            </div>
        </>
    )
}

export default Election