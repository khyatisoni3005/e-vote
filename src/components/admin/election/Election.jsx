import React from 'react'
import Navbar from '../../Navbar'
import Sidebar from '../../Sidebar'
import ElectionModal from './ElectionModal'
import back_image from "../../../img/e-vote.png"
import ElectionTable from './ElectionTable'
function Election() {
    return (
        <div >
            <Navbar />
            <div className="row">
                <div className="col-2" >
                    <Sidebar />
                </div>
                <div className="col-10" style={{ backgroundImage: `url(${back_image})`, backgroundSize: "cover", marginLeft: "-13px", backgroundBlendMode: "color-burn", backgroundColor: " rgba(0, 0, 0, 0.2)" }}>
                    <ElectionModal />
                    <br />

                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-8 mt-5"  >
                            <ElectionTable style={{ backgroundColor: "transparent" }} />
                        </div>
                        <div className="col-2"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Election