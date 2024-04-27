import React from 'react'
import CommonButton from '../../CommonButton'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function ElectionModal() {




    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    function submitElection() {
        setOpen(false)
    }

    function addElection() {
        setOpen(true)
    }

    return (


        <>
            <div className="row">
                <div className="col-10"></div>
                <div className="col-2 mt-2" style={{ marginLeft: "-20px" }} >
                    <CommonButton content={"ADD ELECTION"} onClick={addElection} />

                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <div className='election'>

                                <h4>ADD ELECTION</h4>
                                <label htmlFor="">Election Name</label>
                                <br />
                                <input type="text" name='election_name' />
                                <br />
                                <label htmlFor="">Election date</label>
                                <br />
                                <input type="text" name='date' />

                                <br />


                                <div class="form-check form-switch">
                                    <label class="form-check-label" style={{ marginLeft: "-40px" }} for="flexSwitchCheckChecked">Active</label><br /><br />
                                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" /><br />

                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-4">
                                    <CommonButton content={"SUBMIT"} onClick={submitElection} />
                                </div>
                                <div className="col-4">
                                    <CommonButton content={"close"} onClick={handleClose} />
                                </div>
                                <div className="col-4"></div>
                            </div>

                        </Box>
                    </Modal>
                </div>
            </div >
        </>
    )
}

export default ElectionModal