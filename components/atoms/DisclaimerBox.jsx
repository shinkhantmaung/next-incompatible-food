import * as React from 'react';
import { contribute_link } from '@/utils/endpoint';
import { Typography, Card, Link } from '@mui/joy';
import CampaignIcon from '@mui/icons-material/Campaign';

export default function DisclaimerBox() {
    return (
        <Card
            variant="outlined"
            color="neutral"
            orientation="horizontal"
            sx={{ gap: 2, my: 1, textAlign: 'left', alignSelf: 'stretch' }}
        >
            <CampaignIcon fontSize="xl3" />
            <div>
                <Typography level="body-sm" sx={{ alignSelf: 'stretch' }}>
                    ဖော်ပြပါ အချက်အလက်များသည် သက်ဆိုင်ရာ ပညာရှင်များမှ စစ်ဆေးအတည်ပြုထားခြင်းမရှိပါ။
                    အချက်အလက်များအား ပြင်ဆင်ခြင်း၊ ဖယ်ရှားခြင်းနှင့် အသစ်ထည့်သွင်းခြင်းအတွက် {' '}
                    <Link color="neutral" href={contribute_link} target="_blank">
                        <b>ဤနေရာ</b>
                    </Link>
                    တွင် အသေးစိတ်ဖတ်ရှုနိုင်ပါသည်။
                </Typography>
            </div>
        </Card>
    );
}