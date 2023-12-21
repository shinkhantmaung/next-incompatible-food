import incompatiablefoods from '@/data/incompatiblefood'
import { NextResponse } from 'next/server'

export async function GET(req, { params }) {
    try {
        const { foodA, foodB } = params;

        const incompatibleFood = incompatiablefoods.data.find(
            ({ foodA: entryFoodA, foodB: entryFoodB }) =>
                (foodA.includes(entryFoodA) && foodB.includes(entryFoodB)) ||
                (foodA.includes(entryFoodB) && foodB.includes(entryFoodA))
        );

        return NextResponse.json({
            foodA,
            foodB,
            mood: !incompatibleFood,
            type: incompatibleFood?.description ?? 'မတွေ့ပါ။', // Use optional chaining for type
            message: `${foodA} နဲ့ ${foodB} စားရင် ${incompatibleFood?.description ?? 'ဘာမှမဖြစ်ဟန် ရပါတယ်။ ကျွန်ုပ်တို့ဆီမှာတော့ မတွေ့ပါ။ အချက်အလက်မပြည့်စုံခြင်းကြောင့်လည်း ဖြစ်နိုင်ပါတယ်။'}` // Combine message parts
        });
    } catch (error) {
        console.error('Error fetching incompatible food:', error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}