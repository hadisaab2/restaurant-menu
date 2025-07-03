import React, { useState } from 'react';
import { Button, TextField, Stack } from '@mui/material';
import { Container } from './styles';

export default function Report({ userInformation }) {
    const [startDate, setStartDate] = useState('');
    const [toDate, setToDate] = useState('');
    const [isDownloading, setIsDownloading] = useState(false);
    const handleDownload = async () => {
        if (!startDate || !toDate) {
            alert('Please select both start and end dates.');
            return;
        }

        const url = `https://77.37.51.25/restaurants/report/generate-report?restaurant_id=${userInformation?.restaurant_id}&startDate=${startDate}&toDate=${toDate}`;

        try {
            setIsDownloading(true); // 🔄 Show loader
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    // Add any required headers here (e.g., Authorization)
                }
            });

            if (!response.ok) {
                throw new Error('Failed to download file');
            }

            const blob = await response.blob();
            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = 'report.pdf'; // filename shown to user
            document.body.appendChild(link);
            link.click();
            link.remove();
        } catch (error) {
            console.error('Download failed:', error);
            alert('Could not download the report.');
        } finally {
            setIsDownloading(false); // ✅ Hide loader
        }
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
                    sx={{ backgroundColor: 'turquoise', '&:hover': { backgroundColor: '#4b949a' },'&:focus': { outline: 'none' } }}
                >
                    {isDownloading ? 'Downloading...' : 'Download Report'}

                </Button>
            </Stack>
        </Container>
    );
}
