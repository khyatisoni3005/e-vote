import React, { useEffect, useId, useState } from 'react'
import CommonButton from '../../CommonButton'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { userDataAction, updateUserDataAction, emptyViewId } from '../../../redux-thunk/action/userAction';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "40%",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,

};

function UserModal() {

    const { userId } = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {

        setOpen(false)
    };
    const [userData, setUserData] = useState({})
    function handleUserDataModal() {
        setOpen(true)
    }

    function handleUserData(e) {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }

    function submitUserData() {
        console.log("submited");
        dispatch(userDataAction(userData))
        setOpen(false)
        setUserData({
            name: "",
            sex: "",
            fatherName: "",
            cardNo: "",
            dob: "",
            password: "",
            assemblyNoandName: "",
            partNoandName: ""
        })
    }


    function updateUserData(userData) {
        dispatch(updateUserDataAction(userData))
        setOpen(false)
        setUserData({
            name: "",
            sex: "",
            fatherName: "",
            cardNo: "",
            dob: "",
            password: "",
            assemblyNoandName: "",
            partNoandName: ""
        })
        setOpen(false)

    }

    useEffect(() => {
        if (!open) {
            setUserData({
                name: "",
                sex: "",
                fatherName: "",
                cardNo: "",
                dob: "",
                password: "",
                assemblyNoandName: "",
                partNoandName: ""
            })
            dispatch(emptyViewId())
        }
    }, [open])

    useEffect(() => {
        console.log("userId", userId)
        if (userId) {
            axios.get(`http://localhost:8000/v1/user/finduser/${userId}`)
                .then((res) => {
                    setOpen(true)
                    setUserData(res.data.data)
                })
        }
    }, [userId])

    return (
        <>
            <div className="row">
                <div className="col-10"></div>
                <div className="col-2 mt-2">

                    <CommonButton content={"ADD USER"} onClick={handleUserDataModal} />


                    <Modal

                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <div className="row">
                                <div className="col-6"><h2>USER DATA</h2></div>
                                <div className="col-4"></div>
                                <div className="col-2 " >
                                    <span style={{ marginLeft: "20px" }}>
                                        <CloseIcon onClick={handleClose} />
                                    </span>
                                </div>
                            </div>

                            <br />
                            <div className="row">
                                <div className="col-6 user-lable">
                                    <label htmlFor="">cardNo</label><br />
                                    <input type="text" name='cardNo' onChange={handleUserData} value={userData.cardNo} />
                                    <br />
                                    <label htmlFor="">name</label><br />
                                    <input type="text" name='name' onChange={handleUserData} value={userData.name} />
                                    <br />
                                    <label htmlFor="">fatherName</label><br />
                                    <input type="text" name='fatherName' onChange={handleUserData} value={userData.fatherName} />
                                    <br />
                                    <label htmlFor="">assemblyNoandName</label><br />
                                    <input type="text" name='assemblyNoandName' onChange={handleUserData} value={userData.assemblyNoandName} />
                                    <br />

                                    <label htmlFor="">Gender</label><br />
                                    <input type="radio" id="male" name="sex" value="male" className='me-2' onChange={handleUserData} checked={userData.sex === "male"} />
                                    <label for="male" className='me-3'>male</label>
                                    <input type="radio" id="female" name="sex" value="female" className='me-2' onChange={handleUserData} checked={userData.sex === "female"} />
                                    <label for="female">female</label><br />
                                    <input type="radio" id="other" name="sex" value="other" className='me-2' onChange={handleUserData} checked={userData.sex === "other"} />
                                    <label for="other">other</label>
                                    <br />
                                </div>
                                <div className="col-6 user-lable">
                                    <label htmlFor="">DOB</label><br />
                                    <input type="text" name='dob' onChange={handleUserData} value={userData.dob} />
                                    <br />
                                    <label htmlFor="">Address</label><br />
                                    <input type="text" name='address' onChange={handleUserData} value={userData.address} />
                                    <br />
                                    <label htmlFor="">password</label><br />
                                    <input type="text" name='password' onChange={handleUserData} value={userData.password} />
                                    <br />
                                    <label htmlFor="">partNoandName</label><br />
                                    <input type="text" name='partNoandName' onChange={handleUserData} value={userData.partNoandName} />
                                    <br />



                                    <div className='mt-2'>
                                        <CommonButton content={"SUMBIT"} onClick={() => {
                                            if (userData._id && userData) {
                                                updateUserData(userData)
                                            } else {
                                                submitUserData()
                                            }
                                        }} />
                                    </div>
                                </div>
                            </div>


                        </Box>
                    </Modal >

                </div>
            </div>
        </>
    )
}

export default UserModal