import { NextRequest, NextResponse } from "next/server";

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

export async function POST(req: NextRequest) {
    try {

        const {amount} = await req.json()

        const session = await stripe.checkout.sessions.create({
            success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/Success`,
            cancel_url: 'https://example.com/cancel',  
            line_items: [
                {
                    price_data: {
                        product_data: {
                            name: 'GoShop',
                            description: "You've made the perfect choice. With GoShop, you're not just shopping—you're embracing a world of endless possibilities",
                         },
                        currency: 'inr',
                        unit_amount: amount,   
                    },
                    quantity: 1,
                }
            ],
            mode: 'payment',
        });

         return NextResponse.json({
            url: session.url
        });
    } catch (error) {
        console.error('Error creating checkout session', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}