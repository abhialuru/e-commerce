'use client'
import { productData } from "@/productsData"
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
 
 function page() {

    const params = useParams<{category:string}>()

    const productList = productData.filter((item)=>item.category===params.category)

  return (
    <div className="max-w-6xl mx-auto px-5"> 
    <h1 className="my-5 text-2xl font-bold tracking-tight">Our Products for {productList[0].category}</h1>
    <div className="md:flex  gap-5">
    {
            productList.map((item, i)=>
              <Link key={i} href={`products/${item.slug}`}>
              <div className="w-60 hover:opacity-80" >
              <div className="w-full"> 
                <Image className="w-full h-full object-fit" src={item.images[0]} alt='nike' width={200} height={200} />
            </div>
            <div className="flex justify-between px-1 pt-1" >
              <p className="text-zinc-600 text-sm" >{item.title}</p>
              <p className="text-sm font-medium">₹{item.price}</p>
            </div>
            <p className="text-zinc-500 px-1" >{item.category}</p>
            </div>
            </Link>
            )
          }
    </div>
    </div>
  )
}

export default page