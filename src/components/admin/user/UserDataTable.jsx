import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserDataList, deleteUserData, viewUserData } from "../../../redux-thunk/action/userAction"
import { Receipt } from '@mui/icons-material'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


function UserDataTable() {
    const dispatch = useDispatch()
    const { userDataList } = useSelector((state) => state.user)


    function deleteUser(id) {
        dispatch(deleteUserData(id))
    }

    useEffect(() => {
        dispatch(getUserDataList())

    }, [])

    function viewUser(id) {
        dispatch(viewUserData(id))
    }




    return (


        <>


            <TableContainer component={Paper} style={{ marginTop: "30px" }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>

                            <TableCell> <b>No</b></TableCell>
                            <TableCell ><b>Name</b></TableCell>
                            <TableCell ><b>DOB</b></TableCell>
                            <TableCell ><b>Address</b></TableCell>
                            <TableCell ><b>FatherName</b></TableCell>
                            <TableCell ><b>partNoandName</b></TableCell>
                            <TableCell ><b>Gender</b></TableCell>
                            <TableCell style={{ textAlign: "center" }}><b>Action</b></TableCell>



                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {userDataList?.map((val, ind) => (
                            <TableRow key={ind} >
                                <TableCell >{ind + 1}</TableCell>
                                <TableCell >{val.name}</TableCell>
                                <TableCell >{val.dob}</TableCell>
                                <TableCell >{val.address}</TableCell>
                                <TableCell >{val.fatherName}</TableCell>
                                <TableCell>{val.partNoandName}</TableCell>
                                <TableCell>{val.sex}</TableCell>
                                <TableCell style={{ textAlign: "center", opacity: "0.8", cursor: "pointer" }}>
                                    <DeleteIcon style={{ marginRight: "20px", color: "#ec9191" }} onClick={() => deleteUser(val._id)} />
                                    <EditIcon onClick={() => viewUser(val._id)} />
                                </TableCell>


                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </>
    )
}

export default UserDataTable