import { NextRequest, NextResponse } from "next/server";

const stripe = require('stripe')('sk_test_51QcjkAJLaqa0JDRVKIzl9HY9D2PeMn15merRzJoAXSaHH2760TEdacUvYC0a7hVGKB413QLJUcn3CQeIqjdlDwcR00emNl8w1O')

export async function POST(req: NextRequest) {
    try {

        const {amount} = await req.json()

        const session = await stripe.checkout.sessions.create({
            success_url: 'http://localhost:3000',
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