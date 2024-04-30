import React from 'react'
import CommonButton from '../../CommonButton'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import PartyTable from './PartyTable';



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

function PartyModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);



    function addPartyDetails() {
        setOpen(true)
    }

    function submitPartyDetail() {
        setOpen(false)
    }
    return (
        <>


            <div className="row">
                <div className="col-10"></div>
                <div className="col-2 mt-2" style={{ marginLeft: "-20px" }}>

                    <CommonButton content={"ADD PARTY"} onClick={addPartyDetails} />

                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <h4>ADD PARTY DETAILS</h4>
                            <br />
                            <div className="party">
                                <label htmlFor="">Party Name</label>
                                <br />
                                <input type="text" name='party_name' />
                                <br />
                                <label htmlFor="">Sort Code</label>
                                <br />
                                <input type="text" name='short_code' />
                                <br />
                                <label htmlFor="">Party Logo</label>
                                <br />
                                <input type="file" name='party_logo' />
                                <br /><br />
                                <div className="row">
                                    <div className="col-4">
                                        <CommonButton onClick={submitPartyDetail} content={"submit"} />
                                    </div>
                                    <div className="col-4">
                                        <CommonButton onClick={handleClose} content={"CLOSE"} />
                                    </div>
                                    <div className="col-4"></div>
                                </div>
                            </div>
                        </Box>
                    </Modal>

                </div>
            </div>
            <PartyTable />
        </>
    )
}

export default PartyModal