import React from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useSelector } from 'react-redux';

function UserDetailModal() {
    const { displayUser } = useSelector((state) => state.user)
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 320, height: 500 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >


            <List>
                <img src={`https://ui-avatars.com/api/?name=${displayUser ? displayUser.name : ''}&size=45    &background=0D8ABC&color=fff`} alt="" style={{ borderRadius: "50%", marginLeft: "130px", marginTop: "10px" }} />

                <h5 style={{ textAlign: "center", marginTop: "10px" }}>{displayUser ? displayUser.name : ''}
                    <br />

                    <span style={{ marginTop: "20px", fontSize: "16px" }}>  ( {displayUser ? displayUser.sex : ''})</span>
                </h5>

            </List>
            <Divider />
            <List style={{ marginLeft: "16px" }} className='userdetails'>
                <label htmlFor="">Father Name</label>
                <p>{displayUser ? displayUser.fatherName : ''}</p>

                <label htmlFor="">address</label>
                <p>{displayUser ? displayUser.address : ''}</p>
                <label htmlFor="">date of birth</label>
                <p>{displayUser ? displayUser.dob : ''}</p>
                <label htmlFor="">assemblyNoandName</label>
                <p>{displayUser ? displayUser.assemblyNoandName : ''}</p>

                <label htmlFor="">partNoandName</label>
                <p>{displayUser ? displayUser.partNoandName : ''}</p>

            </List>
        </Box>
    );

    console.log(displayUser, "display user");
    return (
        <>

            <div>
                {['right'].map((anchor) => (
                    <React.Fragment key={anchor}>
                        <Button onClick={toggleDrawer(anchor, true)}> <img src={`https://ui-avatars.com/api/?name=${displayUser ? displayUser.name : ''}&size=45    &background=0D8ABC&color=fff`} alt="" style={{ borderRadius: "50%" }} /></Button>
                        <Drawer
                            anchor={anchor}
                            open={state[anchor]}
                            onClose={toggleDrawer(anchor, false)}
                        >
                            {list(anchor)}
                        </Drawer>
                    </React.Fragment>
                ))}
            </div>
        </>
    )
}

export default UserDetailModal