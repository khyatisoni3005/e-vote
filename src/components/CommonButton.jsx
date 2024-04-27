import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function CommonButton({ onClick, content }) {
    return (
        <Stack direction="row" spacing={2}>
            <Button variant="contained" onClick={onClick} style={{ width: "100%", backgroundColor: "rgb(18, 20, 129" }} >{content}</Button>
        </Stack>
    );
}