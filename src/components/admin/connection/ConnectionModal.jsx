import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';
import CommonButton from "../../CommonButton"
import { useDispatch, useSelector } from 'react-redux';
import { submitConnectionPartyListData } from '../../../redux-thunk/action/partyListAction';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;


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

function ConnectionModal() {
    const dispatch = useDispatch()
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [localStateData, setLocalStateData] = useState([])
    const [party, setPartyName] = useState({})
    const [election, setElectionName] = useState({})
    const [localElectionData, setLocalElectionData] = useState([])

    function submitConnectionData() {
        let connectionData = {
            party,
            election
        }
        setOpen(false)

        dispatch(submitConnectionPartyListData(connectionData))

    }

    const handleChangeParty = (event) => {
        setPartyName(event.target.value)
    };

    const handleChangeElection = (event) => {
        setElectionName(event.target.value)
    }


    useEffect(() => {
        axios.get(`http://localhost:8000/v1/party/list`)
            .then((res) => {
                setLocalStateData(res.data.data)
            })
    }, [])

    useEffect(() => {
        axios.get(`http://localhost:8000/v1/election/list`)
            .then((res) => {
                setLocalElectionData(res.data.data)

            })
    }, [])
    return (
        <>
            <div>
                {/* <Button onClick={handleOpen}>Open modal</Button> */}

                <div style={{ marginTop: "20px", width: "90%" }}>
                    <CommonButton onClick={handleOpen} content={"MAKE CONNECTION"} />
                </div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <div>
                            <FormControl sx={{ m: 1, width: 300 }}>


                                <InputLabel id="party-multiple-name-label">Party Name</InputLabel>
                                <Select
                                    labelId="party-multiple-name-label"
                                    id="party-multiple-name"
                                    name="party"
                                    value={party}
                                    onChange={handleChangeParty}
                                    input={<OutlinedInput label="Party Name" />}
                                // MenuProps={MenuProps}
                                >
                                    {
                                        localStateData.map((val, ind) => {
                                            return (
                                                <MenuItem style={{ textTransform: "capitalize", fontWeight: "bold", fontSize: "20px" }} key={ind} value={val._id}>
                                                    {val.party_name}
                                                </MenuItem>
                                            )
                                        })
                                    }
                                </Select>

                                {/* election */}
                                <br />
                                <InputLabel style={{ position: "relative", marginBottom: "-21px" }} id="election-multiple-name-label">Election Name</InputLabel>
                                <Select
                                    labelId="election-multiple-name-label"
                                    id="election-multiple-name2"
                                    name="election"
                                    value={election}
                                    onChange={handleChangeElection}
                                    input={<OutlinedInput label="Election Name" />}
                                // MenuProps={MenuProps}
                                >
                                    {
                                        localElectionData?.map((val, ind) => {
                                            return (
                                                <MenuItem style={{ textTransform: "capitalize", fontWeight: "bold", fontSize: "20px" }} key={ind} value={val._id}>
                                                    {val.election_name}
                                                </MenuItem>
                                            )
                                        })
                                    }
                                </Select>
                            </FormControl>
                        </div>
                        <div style={{ width: "94%", display: "flex", justifyContent: "end", marginTop: "10px" }}>
                            <CommonButton onClick={submitConnectionData} content={"submit"} />
                            &nbsp;
                            <CommonButton onClick={handleClose} content={"close"} />
                        </div>
                    </Box>
                </Modal>
            </div>
        </>
    )
}

export default ConnectionModal