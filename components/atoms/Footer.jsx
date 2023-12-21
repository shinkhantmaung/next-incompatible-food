import * as React from 'react';
import { source_link } from '@/utils/endpoint';
import { Typography, Link } from '@mui/joy';

export default function Footer() {
    return (
        <Typography
            level="body-sm"
            sx={{
                position: 'absolute',
                bottom: '2rem',
                left: '50%',
                transform: 'translateX(-50%)',
            }}
        >
            Discovered a glitch? Kindly, initiate {' '}
            <Link color="neutral" href={source_link} target="_blank">
                <b>a new issue.</b>
            </Link>
        </Typography>
    );
}