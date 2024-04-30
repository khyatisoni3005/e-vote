import React, { useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { getElectionData, deleteElectionData, viewElectionData } from '../../../redux-thunk/action/electionAction';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
function ElectionTable() {

    const dispatch = useDispatch()
    const { electionDataList, viewElectionId } = useSelector((state) => state.election)

    function deleteElection(id) {
        dispatch(deleteElectionData(id))
    }

    function viewElection(id) {
        dispatch(viewElectionData(id))
    }


    useEffect(() => {
        dispatch(getElectionData())
    }, [])
    return (

        <>
            <TableContainer component={Paper} sx={{
                minWidth: 650, background: " rgba(255, 255, 255, 0.90)",
                boxShadow: " 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                backdropfilter: "blur( 4px )",
                borderRadius: " 10px",
                webkitbackdropFilter: "blur( 4px )",
                background: "white",
                border: " 1px solid rgba( 255, 255, 255, 0.18 )"
            }}>
                <Table sx={{
                    minWidth: 650, background: " rgba(255, 255, 255, 0.90)",
                    boxShadow: " 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                    backdropfilter: "blur( 4px )",
                    borderRadius: " 10px",
                    webkitbackdropFilter: "blur( 4px )",
                    background: "white",
                    border: " 1px solid rgba( 255, 255, 255, 0.18 )"
                }} >
                    <TableHead>
                        <TableRow >
                            <TableCell style={{ fontSize: "20px" }} align="center"><b>Number</b></TableCell>
                            <TableCell style={{ fontSize: "20px" }} align="center"><b>Election Name</b></TableCell>
                            <TableCell style={{ fontSize: "20px" }} align="center"><b>Election Date</b></TableCell>
                            <TableCell style={{ fontSize: "20px" }} align="center"><b>Action</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody
                    // style={{
                    //     minWidth: 650, background: " rgba(255, 255, 255, 0.90)",
                    //     boxShadow: " 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                    //     backdropfilter: "blur( 4px )",
                    //     borderRadius: " 10px",
                    //     webkitbackdropFilter: "blur( 4px )",
                    //     background: "transparant",
                    //     border: " 1px solid rgba( 255, 255, 255, 0.18 )"
                    // }}
                    >
                        {
                            electionDataList?.map((val, ind) => {
                                return (
                                    <TableRow key={ind}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                        <TableCell align="center">{ind + 1}</TableCell>
                                        <TableCell align="center">{val.election_name}</TableCell>
                                        <TableCell align="center">{val.date}</TableCell>
                                        <TableCell align="center">
                                            <DeleteIcon style={{ marginRight: "19px" }} onClick={() => deleteElection(val._id)} />
                                            <EditIcon onClick={() => viewElection(val._id)} />
                                        </TableCell>
                                    </TableRow>
                                )
                            })
                        }

                    </TableBody>
                </Table>
            </TableContainer >

        </>
    )
}

export default ElectionTable