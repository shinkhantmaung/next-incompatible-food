import { LinearProgress, Stack, Box } from '@mui/joy';

export default function Loading() {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
            sx={{
                padding: '0 40%',
            }}
        >
            <LinearProgress color="success" />
        </Box>
    );
}