"use client"
import { useState, useEffect } from 'react';
import { endpoint, source_link } from '@/utils/endpoint';
import * as React from 'react';

import { Typography, Link } from '@mui/joy';

import TwoSidedTemplate from '@/components/templates/TwoSidedTemplate.jsx';
import Loading from '@/components/atoms/Loading';
import Footer from '@/components/atoms/Footer';
import Form from '@/components/molecules/Form';

export default function Home() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`${endpoint}/foods`)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <Loading />
  if (!data) return <p>No profile data</p>

  return (
    <div>
      <TwoSidedTemplate>
        <Typography
          level="h1"
          fontWeight="xll"
          fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
        >
          စားလို့ရလား ?
        </Typography>

        <Typography textColor="text.secondary">
          လူတို့နေ့စဉ် စားသုံးနေသည့် အဓိကစားသောက်မှုပုံစံများဖြစ်သည့် နံနက်စာ၊ နေ့လယ်စာ နှင့် ညနေစာများသာမက၊ ကြားအချိန်များတွင်ပါ စားသုံးသည့် သားရေစာများ၊ မုန့်များ၊ အသီးအနှံများ စသည်ဖြင့် အမျိုးအစား များစွာရှိပါသည်။ အစားအစာ တစ်ခုနှင့် တစ်ခု တွဲဖက်၍ မစားသင့်သော အစာများလည်း ရှိပေသည်။
        </Typography>

        <Form data={data} />

        <Typography textColor="text.secondary">
          အချက်အလက်များအား {' '}
          <Link color="neutral" href={source_link} target="_blank">
            <b>ဤနေရာ</b>
          </Link>
          မှ ရယူအသုံးပြုထားပါသည်။
        </Typography>

        <Footer/>

      </TwoSidedTemplate>
    </div>
  );
}