'use client'
import Image from "next/image"
import { Key, useState } from "react"

type productItemType = {
  slug: string;
  images: string[];
  category: string;
  title: string;
  price: number;
  description: string;
} | undefined
 
function ImageGallery({productItem}:{productItem:productItemType}) {

    const [showImage, setShowImage] = useState(productItem?.images[0])

  return (
    <div className="flex flex-col md:flex-row gap-1 mx-auto">
       <div className="w- md:hidden">
    <Image className="w-full h-full object-fit" src={showImage!} alt="product" priority width={500} height={500} />
    </div>
    <div className=" flex md:flex-col gap-1"> 
        {productItem?.images.map((item: any,i: Key)=>
          <div key={i} onClick={()=>setShowImage(item)} className="w-28" >
            <Image  className="w-full h-full object-fit" src={item} alt="product" width={200} height={200} />
          </div>
        )}
    </div>
    <div className="hidden md:block w-80">
    <Image className="w-full h-full object-fit" src={showImage!} alt="product" priority width={500} height={500} />
    </div>
    </div>
  )
}

export default ImageGallery