'use client'
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { products } from "@/assets/frontend_assets/assets";
  
 function page() {

    const params = useParams<{category:string}>()

    const productList = products.filter((item)=>item.category===params.category)

  return (
    <div className="md:max-w-6xl mx-auto px-5"> 
    <h1 className="my-5 text-2xl font-bold tracking-tight">Our Products for {productList[0].category}</h1>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 lg:grid-cols-4 my-5">
    {
            productList.map((item, i)=>
              <Link key={i} href={`products/${item._id}`}>
              <div className="w-full md:w-60" >
              <div className="w-full overflow-hidden"> 
                <Image className="w-full h-full object-fit hover:scale-110" src={item.image[0]} alt='nike' width={200} height={200} />
            </div>
            <div className="flex justify-between px-1 pt-1 text-sm md:text-sm" >
              <p className="text-zinc-600 text-sm line-clamp-1">{item.name}</p>
              <p className="text-sm font-medium">₹{item.price}</p>
            </div>
            <p className="text-zinc-500 px-1 text-sm md:text-sm" >{item.category}</p>
            </div>
            </Link>
            )
          }
    </div>
    </div>
  )
}

export default page