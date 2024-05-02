import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getPartyList, deletepartyData, viewPartyData } from "../../../redux-thunk/action/partyAction"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
function PartyTable() {
    const { partyList } = useSelector((state) => state.party)

    const dispatch = useDispatch()

    function viewParty(id) {
        dispatch(viewPartyData(id))
    }

    function deleteParty(id) {
        dispatch(deletepartyData(id))
    }
    useEffect(() => {
        dispatch(getPartyList())
    }, [])

    return (


        <div>
            <div className="row">
                <div className="col-1"></div>
                <div className="col-10">
                    <TableContainer component={Paper} className='mt-5'>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell > <b>Number</b></TableCell>
                                    <TableCell ><b>Indian Political Party</b> </TableCell>
                                    <TableCell ><b>Short Code</b></TableCell>
                                    <TableCell ><b>Symbole</b></TableCell>

                                    <TableCell align="left"><b>Action</b></TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>

                                {
                                    partyList.map((val, ind) => {
                                        return (
                                            <TableRow key={ind} >
                                                <TableCell>
                                                    {ind + 1}
                                                </TableCell>
                                                <TableCell>{val.party_name}</TableCell>
                                                <TableCell>{val.short_code}</TableCell>

                                                <TableCell>

                                                    {val.party_logo ? (
                                                        <img src={`${val.party_logo}`} style={{ width: "50px", height: "50px" }} />
                                                    ) : (
                                                        <span>No logo available</span>
                                                    )}
                                                </TableCell>

                                                <TableCell align="left">
                                                    <DeleteIcon style={{ marginRight: "20px" }} onClick={() => deleteParty(val._id)} />
                                                    <EditIcon onClick={() => viewParty(val._id)} />
                                                </TableCell>
                                            </TableRow>
                                        )
                                    })
                                }
                                <TableCell>

                                </TableCell>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <div className="col-1"></div>
            </div>


        </div>
    )
}

export default PartyTable