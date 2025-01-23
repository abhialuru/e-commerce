 import Image from "next/image"
import Link from "next/link"
import { products } from "@/assets/frontend_assets/assets"
  
function Newest() {

  return (
    <div className="max-w-6xl mx-auto px-5 my-20"> 
         <div className="w-full text-center text-xl font-bold tracking-tight underline underline-offset-2">Our Newest Products</div>
        <div className="md:flex gap-5 w-fit mx-auto items-center hidden">
          <div className="w-28 h-px bg-gray-300" />
         <p className="w-fit text-center tracking-tight">Unveil our newest products, designed to elevate your experience!</p>
         <div className="w-28 h-px bg-gray-300" />
         </div>
         <div className="w-full md:w-fit md:mx-auto">
                 <div className="grid w-full md:grid-cols-3 gap-2 lg:grid-cols-4 my-5">
           {
            products.slice(0, 12).map((item, i)=>
              <div key={i}  className="w-full md:w-60 shrink-0 relative" >
            <p className="text-xs px-2 w-fit absolute top-0 left-0 z-10 bg-gray-800 text-slate-200 rounded-br-sm">Exclusive</p>

              <Link  href={`products/${item._id}`}>
             
              <div className="w-full overflow-hidden"> 
                <Image className="w-full h-full object-fit hover:scale-110" src={item.image[0]} alt='nike' width={500} height={500} />
            </div>
            <div className="flex justify-between px-1 pt-1" >
              <p className="text-zinc-600 text-sm line-clamp-1" >{item.name}</p>
              <p className="text-sm font-medium">₹{item.price}</p>
            </div>
            <p className="text-zinc-500 px-1" >{item.category}</p>
            </Link>
            </div>
             )
          }
          </div>
             </div> 
    </div>
  )
}


export default Newest