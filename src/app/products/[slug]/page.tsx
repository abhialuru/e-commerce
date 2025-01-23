'use client' 
import ImageGallery from "@/components/ImageGallery"
import { Button } from "@/components/ui/button"
 import { addtoCart } from "@/store/CreateSlice"
import { Star, Truck } from "lucide-react"
import { useParams } from "next/navigation"
import React from "react"
import { useDispatch } from "react-redux"
import { products } from "@/assets/frontend_assets/assets"
   
 function page() {

    const params = useParams()
    const productItem = products.find((item)=>item._id==params.slug)
    const dispatch = useDispatch()
  
    function handleAddItem() {
    
        const Item = {
            images: productItem?.image[0],
            category: productItem?.category,
            price: productItem?.price,
            title: productItem?.name,
            description: productItem?.description,
            quantity: 1,
            slug: productItem?._id
        }
      
            dispatch(addtoCart(Item))
        
        
    }

    return (
    <div className="max-w-6xl mx-auto px-5">
       <div className="flex flex-col lg:flex-row gap-5">
            <ImageGallery  productItem={productItem} />
            <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
                <p className="text-zinc-600">{productItem?.category}</p>
                <p className="text-xl font-bold">{productItem?.name}</p>
                <div className=" py-1 px-4 w-20 rounded-full bg-teal-700 text-white flex gap-2 items-center justify-center text-sm">4.2 <span><Star className="size-4" /></span></div>
            </div>
            <div>
            <div className="flex gap-3 items-center">
                <p className="font-semibold text-lg">₹{productItem?.price}</p>
                 <p className="text-red-500 line-through text-sm">₹{productItem!.price+500}</p>
            </div>
            <p className="text-sm text-zinc-500">Incl. all tax shopping</p>
            </div>
            <div className="flex flex-col gap-4">
                <p className="flex gap-4"><Truck/><span className="text-sm text-zinc-600">2-3 Day shipping</span></p>
                <div className="text-sm">
                     <Button onClick={()=>handleAddItem()} className="bg-teal-700 text-white">Add to Cart</Button>
                 </div>
            </div>
            <div  className="text-zinc-800 tracking-tight max-w-2xl">{productItem?.description}</div>
            </div>
        </div> 
        
    </div>
  )
}

export default page


 