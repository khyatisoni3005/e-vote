import React from 'react'
import CommonButton from '../../CommonButton'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import CloseIcon from '@mui/icons-material/Close';

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

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    function handleUserData() {
        setOpen(true)
    }

    function submitUserData() {
        setOpen(false)
    }

    return (
        <>
            <div className="row">
                <div className="col-10"></div>
                <div className="col-2 mt-2">

                    <CommonButton content={"ADD USER"} onClick={handleUserData} />


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
                                    <input type="text" name='cardNo' />
                                    <br />
                                    <label htmlFor="">name</label><br />
                                    <input type="text" name='name' />
                                    <br />
                                    <label htmlFor="">fatherName</label><br />
                                    <input type="text" name='fatherName' />
                                    <br />
                                    <label htmlFor="">role</label><br />
                                    <input type="text" name='role' />
                                    <br />
                                    <label htmlFor="">password</label><br />
                                    <input type="text" name='password' />
                                    <br />
                                    <label htmlFor="">Gender</label><br />
                                    <input type="radio" id="male" name="gender" value="male" className='me-2' />
                                    <label for="male" className='me-3'>male</label>
                                    <input type="radio" id="female" name="gender" value="female" className='me-2' />
                                    <label for="female">female</label><br />
                                    <input type="radio" id="other" name="gender" value="other" className='me-2' />
                                    <label for="other">other</label>

                                    <br />
                                </div>
                                <div className="col-6 user-lable">
                                    <label htmlFor="">DOB</label><br />
                                    <input type="text" name='dob' />
                                    <br />
                                    <label htmlFor="">Address</label><br />
                                    <input type="text" name='address' />
                                    <br />
                                    <label htmlFor="">AssemblyNoandName</label><br />
                                    <input type="text" name='assemblyNoandName' />
                                    <br />
                                    <label htmlFor="">partNoandName</label><br />
                                    <input type="text" name='partNoandName' />
                                    <br />
                                    <label htmlFor="">Token</label><br />
                                    <input type="text" name='token' />
                                    <br />
                                    <br />

                                    <div className='mt-2'>
                                        <CommonButton content={"SUMBIT"} onClick={submitUserData} />
                                    </div>
                                </div>
                            </div>


                        </Box>
                    </Modal>

                </div>
            </div>
        </>
    )
}

export default UserModal