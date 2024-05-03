import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Counting() {

    const [electionName, setelectionName] = useState([])
    const [partyName, setpartyName] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/v1/party/list`)
            .then((res) => {
                setpartyName(res.data.data)
            })
    }, [])

    useEffect(() => {
        axios.get(`http://localhost:8000/v1/election/list`)
            .then((res) => {
                setelectionName(res.data.data)

            })
    }, [])

    const [counts, setCounts] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/v1/total/count")
            .then((res) => {
                const dataArray = Object.entries(res.data.data).map(([party, count]) => {
                    return { party, count };
                });
                setCounts(dataArray); // Update state with the transformed array
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
            });

    }, [])


    return (

        <div>
            <h5 style={{ color: "red", marginTop: "30px", marginLeft: "20px", marginBottom: "10px" }}>🔴 Live Counting</h5>
            <div>
                <div className="row">
                    {counts.map(({ party, count }, index) => (
                        <div key={index} className=" col-2" style={{
                            boxShadow: "3px 4px 8px -3px",
                            height: "200px",
                            borderRadius: "12px",
                            marginLeft: "30px",
                            width: "270px"
                        }}>
                            <h3 style={{ fontWeight: 500, margin: "10px" }}>{party}</h3>

                            <h1 style={{ textAlign: 'center', marginTop: "50px" }}>{count + 1998}</h1>

                        </div>

                    ))}
                </div>


                <div className="row">

                    <div className="col-6" style={{ width: "49%" }}>
                        <p style={{ marginTop: "30px", paddingTop: "20px", marginLeft: "11px" }}>Current Election Party</p>
                        <div className="box" style={{ backgroundColor: "rgb(248 248 248)", marginLeft: "10px" }}>

                            <ul style={{ paddingTop: "10px", paddingRight: "20px" }}>
                                {
                                    electionName.map((val, ind) => {
                                        return (

                                            <>
                                                <li style={{ fontSize: "16px", fontWeight: "normal", paddingTop: "2px", margin: "0px" }}> {ind + 1}.&nbsp;&nbsp;&nbsp;&nbsp;{val.election_name}</li>
                                                <hr />
                                            </>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>

                    <div className="col-6" style={{ width: "49%" }}>
                        <p style={{ marginTop: "30px", paddingTop: "20px", marginLeft: "11px" }}>Current  Party list</p>
                        <div className="box" style={{ backgroundColor: "rgb(248 248 248)", marginLeft: "10px" }}>

                            <ul style={{ paddingTop: "10px", paddingRight: "20px" }}>
                                {
                                    partyName.map((val, ind) => {
                                        return (

                                            <>
                                                <li style={{ fontSize: "16px", fontWeight: "normal", paddingTop: "2px", margin: "0px" }}> {ind + 1}.&nbsp;&nbsp;&nbsp;&nbsp;{val.party_name}</li>
                                                <hr />
                                            </>
                                        )
                                    })
                                }
                            </ul>
                        </div>

                    </div>
                </div>

            </div>
        </div >
    )
}

export default Counting