import React, { useState } from 'react';
import { Button, TextField, Stack } from '@mui/material';
import { Container } from './styles';

export default function Report({ userInformation }) {
    const [startDate, setStartDate] = useState('');
    const [toDate, setToDate] = useState('');
    console.log(userInformation)
    const handleDownload = () => {
        if (!startDate || !toDate) {
            alert('Please select both start and end dates.');
            return;
        }

        const url = `https://77.37.51.25/restaurants/report/generate-report?restaurant_id=${userInformation?.restaurant_id}&startDate=${startDate}&toDate=${toDate}`;
        window.open(url, '_blank');
    };

    return (
        <Container>
            <Stack spacing={2} direction="column" sx={{ maxWidth: 300, marginTop: 4 }}>
                <TextField
                    label="Start Date"
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    InputLabelProps={{ shrink: true }}
                />
                <TextField
                    label="End Date"
                    type="date"
                    value={toDate}
                    onChange={(e) => setToDate(e.target.value)}
                    InputLabelProps={{ shrink: true }}
                />
                <Button
                 variant="contained" 
                 onClick={handleDownload} 
                 sx={{ backgroundColor: 'turquoise', '&:hover': { backgroundColor: '#4b949a' } }}
                >
                    Download Report
                </Button>
            </Stack>
        </Container>
    );
}
