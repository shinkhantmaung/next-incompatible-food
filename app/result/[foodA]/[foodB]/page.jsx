'use client'
import * as React from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { endpoint } from '@/utils/endpoint';
import {Typography,Link,Avatar,Button,Stack} from '@mui/joy';

import TwoSidedTemplate from '@/components/templates/TwoSidedTemplate';
import Loading from '@/components/atoms/Loading';
import DisclaimerBox from '@/components/atoms/DisclaimerBox';
import Footer from '@/components/atoms/Footer';

import ArrowBack from '@mui/icons-material/ArrowBack';
import MoodIcon from '@mui/icons-material/Mood';
import MoodBadIcon from '@mui/icons-material/MoodBad';

export default function Page({ params }) {

    const { foodA, foodB } = params
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)
    const router = useRouter() // Access the router

    const handleClick = () => {
        router.replace('/'); // Redirect to result page with selected foods
      };

    useEffect(() => {
        fetch(`${endpoint}/result/${foodA}/${foodB}`)
            .then((res) => res.json())
            .then((data) => {
                setLoading(false)
                setData(data)
            })
    }, [])

    if (isLoading) return <Loading />
    if (!data) return <p>No profile data</p>

    return (
        <TwoSidedTemplate>
            <Stack direction="row" spacing={1} justifyContent="center" alignItems="center">
                <Avatar
                    color={data.mood ? 'success' : 'danger'}
                    variant="soft"
                    size="lg">
                    {data.mood ? <MoodIcon /> : <MoodBadIcon />}
                </Avatar>
                <Typography
                    level="h3"
                    fontWeight="xl"
                    fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
                >
                    {data.type}
                </Typography>
            </Stack>

            <Typography textColor="text.secondary">
                {data.message}
            </Typography>

            <DisclaimerBox />

            <Button
                size="lg"
                color="success"
                startDecorator={<ArrowBack />}
                sx={{ alignSelf: 'stretch' }}
                onClick={handleClick}
            >
                ပြန်လည် ရှာဖွေမည်။
            </Button>


            <Typography textColor="text.secondary">
                အချက်အလက်များအား {' '}
                <Link color="neutral">
                    <b>ဤနေရာ</b>
                </Link>
                မှ ရယူအသုံးပြုထားပါသည်။
            </Typography>
            
            <Footer/>

        </TwoSidedTemplate>
    );
}
