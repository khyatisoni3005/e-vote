import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Counting() {

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
            <h5 style={{ color: "red", marginTop: "30px" }}>🔴 Live Counting</h5>
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

            </div>
        </div >
    )
}

export default Counting