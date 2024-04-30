import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getPartyList } from "../../../redux-thunk/action/partyAction"


function PartyTable() {


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPartyList())
    }, [])

    return (


        <div>
            <TableContainer component={Paper} className='mt-5'>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell > <b>Number</b></TableCell>
                            <TableCell ><b>Indian Political Party</b> </TableCell>
                            <TableCell ><b>Symbole</b></TableCell>
                            <TableCell ><b>Action</b></TableCell>
                            <TableCell ></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell align="right">{row.protein}</TableCell>
                            </TableRow>
                        ))} */}

                        <TableCell>

                        </TableCell>
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    )
}

export default PartyTable