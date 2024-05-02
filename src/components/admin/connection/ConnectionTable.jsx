import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getConnectionData } from '../../../redux-thunk/action/partyListAction'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper'

function ConnectionTable() {
    const dispatch = useDispatch()
    const { connectionData } = useSelector((state) => state.connection)

    useEffect(() => {
        dispatch(getConnectionData())
    }, [])

    return (
        <div>
            <div className="row">
                <div className="col-1"></div>
                <div className="col-10">
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell><b>Number</b></TableCell>
                                    <TableCell><b>Party Name</b></TableCell>
                                    <TableCell><b>Election Name</b></TableCell>
                                    <TableCell ><b>Symbole</b></TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    connectionData?.filter((v) => v.party && v.election).map((val, ind) => {
                                        return (
                                            <TableRow key={ind}>
                                                <TableCell>{ind + 1}</TableCell>
                                                <TableCell>{val.party?.party_name || ''}</TableCell>
                                                <TableCell>{val.election?.election_name || ''}</TableCell>
                                                <TableCell>
                                                    <img src={`${val.party?.party_logo || ''}`} style={{ width: "50px", height: "50px" }} alt="" />
                                                </TableCell>

                                            </TableRow>
                                        )
                                    })
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <div className="col-1"></div>
            </div>

        </div>
    )
}

export default ConnectionTable