'use client'
import { useDispatch } from "react-redux"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet"  
import { useSelector } from "react-redux"
import { removeCartItem, toggleCart } from "@/store/CreateSlice"
 import Image from "next/image"
import { Key, useState } from "react"
 
   
function PaymentSheet() {

 const dispatch = useDispatch()
 const isOpen = useSelector((state: any)=>state.cart.isSheetOpen)
 const cartITems = useSelector((state:any)=>state.cart.cartItem)

  const [loadingPay, setLoadingPay] = useState(false)
 
 const totalPrice = cartITems.reduce((total:number, item:any)=>{
  return total + item.quantity * item.price
 },0)
 
 function handleRemoveItem(slug:string) {  
     dispatch(removeCartItem(slug))
 }

 async function stripeCheckout() {
  setLoadingPay(true)
  try {
      const response = await fetch('/api/stripe-checkout', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
           body: JSON.stringify({
            amount: totalPrice * 100,
            }),   
      });

      const data = await response.json();

      if (data.url) {
          window.location.href = data.url;   
      } else {
          console.error('Stripe session URL is missing.');
      }
  } catch (error) {
      console.log(error);
  }  finally {
    setLoadingPay(false)
  }   
}

   return (
    <div> 
        <Sheet open={isOpen} onOpenChange={()=>dispatch(toggleCart())} >
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Shopping Cart</SheetTitle>
            </SheetHeader>
          <div className="w-full h-full flex flex-col justify-between">
            <div className="w-full h-[85%]">   
              {  cartITems.length > 0 ?
                cartITems.map((item:any,i: Key)=>
                   <div key={i} className="my-2 flex gap-1" >
                        <div className="w-20 shrink-0">
                          <Image className="w-full h-full object-contain flex-shrink-0" alt="nike" src={item.images} width={200} height={200} />
                        </div>
                        <div className="flex flex-col gap-1">
                        <div className="flex gap-2 justify-between text-sm font-semibold">
                          <p>{item.title}</p>
                          <p>₹{item.price}</p>
                        </div>
                          <p className="text-sm line-clamp-2">{item.description}</p>
                          <div className="flex text-sm justify-between">
                            <p>QTY : {item.quantity}</p>
                             <p onClick={()=>handleRemoveItem(item.slug)} className="font-semibold text-teal-700 cursor-pointer">Remove</p>
                          </div>
                        </div>
                   </div>
                ):
                <div className="w-full h-full flex flex-col gap-2 items-center justify-center">
                <h1 className="text-xl font-mono text-center">Your shopping is empty</h1>
                <p className="text-center text-zinc-700">Be Inspired and discover from over wide range of products</p>
                <button onClick={()=>dispatch(toggleCart())} className="bg-teal-700 text-white/95 px-5 py-2 rounded-sm focus:outline-none cursor-pointer">continue shopping</button>
              </div>
              }    
              </div>
          { cartITems.length !== 0 &&
              <div className="flex flex-col gap-1 my-2" >
                <div className="flex justify-between text-sm font-semibold">
                  <p>SubTotal : </p>
                  <p>₹{totalPrice}</p>
                </div>
                <button onClick={stripeCheckout} className="w-full py-1 bg-teal-700 text-white rounded-sm">{ loadingPay ? ' Processing...': 'Checkout' }</button>
              </div>
}
              </div>
           </SheetContent>
        </Sheet>
    </div>
  )
}

export default PaymentSheet