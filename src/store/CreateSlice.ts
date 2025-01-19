import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface cartItemType {
    slug: string
    images: any;
    category: string;
    title: string;
    price: number;
    description: string;
    quantity: number
}

interface initialType {
    cartItem: cartItemType[],
    isSheetOpen: boolean,
 }

const initialState: initialType = {
    cartItem: JSON.parse(localStorage.getItem('cartItems') || '[]'),
    isSheetOpen: false,
 }

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        toggleCart(state){
            state.isSheetOpen =!state.isSheetOpen
        },
        addtoCart(state, action){
            const existingItemIndex = state.cartItem.findIndex((item)=>item.slug===action.payload.slug)            
            state.isSheetOpen =!state.isSheetOpen

            if (existingItemIndex >=0) {
                state.cartItem[existingItemIndex].quantity += action.payload.quantity
            }else state.cartItem.push(action.payload)
            

            localStorage.setItem('cartItems', JSON.stringify(state.cartItem) )
        },
        removeCartItem(state, action){
            const existingItemIndex = state.cartItem.findIndex((item)=>item.slug===action.payload)            
             if (state.cartItem[existingItemIndex].quantity > 1) {
                state.cartItem[existingItemIndex].quantity -=  1;
            }else{
                state.cartItem = state.cartItem.filter(item => item.slug !== action.payload);
            }

            localStorage.setItem('cartItems', JSON.stringify(state.cartItem) )

        }
        }
    }
)

export const {toggleCart, addtoCart, removeCartItem} = cartSlice.actions;
 export default cartSlice.reducer;