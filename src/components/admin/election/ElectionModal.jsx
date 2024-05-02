import React, { useState, useEffect } from 'react'
import CommonButton from '../../CommonButton'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { submitElectionData, updateElectionData } from "../../../redux-thunk/action/electionAction"
import axios from 'axios';
import { EMPTY_ID } from '../../../redux-thunk/type';
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
    borderRedious: "12px"
};

function ElectionModal() {

    const { viewElectionId } = useSelector((state) => state.election)

    const dispatch = useDispatch()
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [electionData, setElectionData] = useState({})


    function addElection() {
        setOpen(true)
    }

    function handleElection(e) {
        setElectionData({ ...electionData, [e.target.name]: e.target.value })
    }

    function submitElection() {
        dispatch(submitElectionData(electionData))
        setOpen(false)
    }

    function updateElection(electionData) {
        dispatch(updateElectionData(electionData))
        setOpen(false)
    }


    useEffect(() => {
        if (!open) {
            dispatch({
                type: EMPTY_ID,
                payload: ""
            })
        }
    }, [open])

    useEffect(() => {
        if (viewElectionId) {
            axios.get(`http://localhost:8000/v1/election/findId/${viewElectionId}`)
                .then((res) => {
                    setOpen(true)
                    setElectionData(res.data.data)

                })
        }
    }, [viewElectionId])
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
                                <input type="text" name='election_name' onChange={handleElection} value={electionData.election_name} />
                                <br />
                                <label htmlFor="">Election date</label>
                                <br />
                                <input type="date" name='date' onChange={handleElection} value={electionData.date} />

                                <br />

                            </div>
                            <br />
                            <div className="row">
                                <div className="col-4">
                                    <CommonButton content={"SUBMIT"} onClick={() => {
                                        if (electionData && electionData._id) {
                                            updateElection(electionData)
                                        }
                                        else {
                                            submitElection()
                                        }
                                    }} />
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