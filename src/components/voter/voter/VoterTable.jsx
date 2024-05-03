import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Navigate, useNavigate } from 'react-router-dom';
import CommonButton from '../../CommonButton';
import { getConnectionData } from "../../../redux-thunk/action/partyListAction"
import { useDispatch, useSelector } from 'react-redux';
import { json } from 'react-router-dom';
import axios from 'axios';
import { LOG_OUT_USER, SUCCESS } from '../../../redux-thunk/type';


function VoterTable() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [party, setParty] = useState('')
    const { connectionData } = useSelector((state) => state.connection)
    const { displayUser } = useSelector((state) => state.user)
    const [user, setUser] = useState('')
    const { isUserLoggedin } = useSelector((state) => state.user)

    useEffect(() => {
        if (!isUserLoggedin) {
            navigate("/UserLoginForm")
        }
    }, [isUserLoggedin])
    function handleVoteChange(e) {
        setParty(e.target.value)
        setUser(displayUser._id)
    }
    function submitVoteData() {
        let voteData = {
            user,
            party
        }
        axios.post(`http://localhost:8000/v1/vote/create`, voteData)
            .then((res) => {
                localStorage.removeItem("userLoginData")
                dispatch({
                    type: LOG_OUT_USER,
                })
            })

    }

    function logout() {
        console.log("logouuy");
        localStorage.removeItem("userLoginData")
        dispatch({
            type: LOG_OUT_USER,
        })
        dispatch({
            type: SUCCESS,
            payload: {
                message: "USER LOGOUT SUCCESSFULLY"
            }
        })

    }

    useEffect(() => {
        dispatch(getConnectionData())
    }, [])

    return (

        <>
            <div style={{ width: "100%", display: "flex", justifyContent: "end", marginTop: "-50px", marginLeft: "210px", marginBottom: "30px" }}>
                <CommonButton content={"vote"} onClick={submitVoteData} /> &nbsp;
                <CommonButton content={"LogOut"} onClick={logout} />

            </div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell><b>Number</b></TableCell>
                            <TableCell><b>Party Name</b></TableCell>
                            <TableCell ><b>Election Name</b></TableCell>
                            <TableCell ><b>Symbole</b></TableCell>
                            <TableCell ><b>Vote</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            connectionData?.filter((v) => v.party && v.election).map((val, ind) => {
                                return (
                                    <TableRow key="ind">
                                        <TableCell>{ind + 1}</TableCell>
                                        <TableCell> {val.party.party_name}</TableCell >
                                        <TableCell> {val.election.election_name}</TableCell >
                                        <TableCell>
                                            <img src={`${val.party.party_logo}`} alt="" style={{ width: "50px", height: "50px" }} />
                                        </TableCell >
                                        <TableCell>
                                            <input type="radio" style={{ fontSize: "20px" }} id={val.party._id} name="party" value={val.party._id} onChange={handleVoteChange} />
                                        </TableCell >

                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default VoterTable