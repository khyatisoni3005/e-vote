import React, { useEffect, useState } from 'react'
import CommonButton from '../../CommonButton'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import PartyTable from './PartyTable';
import { useDispatch, useSelector } from 'react-redux';

import { submitPartyData, updatePartyData } from '../../../redux-thunk/action/partyAction';
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
};

function PartyModal() {
    const { viewPartyId } = useSelector((state) => state.party)
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [partyData, setPartyData] = useState({});
    const [logoPreviewUrl, setLogoPreviewUrl] = useState('');

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        setLogoPreviewUrl('');
        setPartyData({});
    };

    function handlePartyData(e) {


        const { name, value } = e.target;
        setPartyData({ ...partyData, [name]: value });
    }

    function handleLogoChange(e) {
        const file = e.target.files[0];
        if (file) {
            setPartyData({ ...partyData, party_logo: file });
            const reader = new FileReader();
            reader.onloadend = () => {
                setLogoPreviewUrl(reader.result);
            };
            reader.readAsDataURL(file);
        }
    }

    function submitPartyDetail() {
        const formData = new FormData();
        Object.keys(partyData).forEach(key => {
            formData.append(key, partyData[key]);
        });

        dispatch(submitPartyData(formData));  // Make sure your action handles FormData
        setOpen(false);
        setLogoPreviewUrl('');
    }

    function updateParty(partyData) {
        dispatch(updatePartyData(partyData))
        setOpen(false)
    }

    useEffect(() => {
        if (viewPartyId) {
            axios.get(`http://localhost:8000/v1/party/findId/${viewPartyId}`)
                .then(res => {
                    const fetchedData = res.data.data;
                    setPartyData(fetchedData);
                    if (fetchedData.party_logo && typeof fetchedData.party_logo === 'string') {
                        // Assuming the backend sends a URL to the logo
                        setLogoPreviewUrl(fetchedData.party_logo);
                    }
                })
            setOpen(true);
        }
    }, [viewPartyId]);

    useEffect(() => {
        if (!open) {
            dispatch({
                type: EMPTY_ID,
                payload: ''
            })
            setPartyData({})

        }
    }, [open])
    return (
        <>


            <div className="row">
                <div className="col-10"></div>
                <div className="col-2 mt-2" style={{ marginLeft: "-20px" }}>

                    <CommonButton content={"ADD PARTY"} onClick={handleOpen} />

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
                                <input type="text" name='party_name' value={partyData.party_name} onChange={handlePartyData} />
                                <br />
                                <label htmlFor="">Sort Code</label>
                                <br />
                                <input type="text" name='short_code' value={partyData.short_code} onChange={handlePartyData} />
                                <br />
                                <label htmlFor="">Party Logo</label>
                                <br />
                                <input type="file" name="party_logo" onChange={handleLogoChange} />
                                {logoPreviewUrl && <img src={logoPreviewUrl} alt="Logo Preview" style={{ width: '10%', marginTop: '10px' }} value={partyData.party_logo} />}
                                <br /><br />
                                <div className="row">
                                    <div className="col-4">
                                        <CommonButton onClick={() => {
                                            if (partyData && partyData._id) {
                                                updateParty(partyData)
                                            }
                                            else {
                                                submitPartyDetail()
                                            }
                                        }} content={"submit"} />
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