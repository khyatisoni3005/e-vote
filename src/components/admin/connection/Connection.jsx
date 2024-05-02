import React from 'react'
import Navbar from '../../Navbar'
import Sidebar from '../../Sidebar'
import ConnectionTable from './ConnectionTable'
import ConnectionModal from './ConnectionModal'


export default function Connection() {


    return (
        <>
            <Navbar />
            <div className="row">
                <div className="col-2">
                    <Sidebar />
                </div>
                <div className="col-10">
                    <div className="row">
                        <div className="col-9" style={{ marginTop: "40px" }}>
                            <ConnectionTable />
                        </div>
                        <div className="col-3 mt-4">
                            <ConnectionModal />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
