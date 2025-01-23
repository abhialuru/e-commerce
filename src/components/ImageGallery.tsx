'use client'
import Image, { StaticImageData } from "next/image"
import { Key, useState } from "react"

type productItemType = {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: StaticImageData[];
  category: string;
  subCategory: string;
  sizes: string[];
  date: number;
  bestseller: boolean;
} | undefined
 
function ImageGallery({productItem}:{productItem:productItemType}) {

    const [showImage, setShowImage] = useState(productItem?.image[0])

  return (
    <div className="flex flex-col-reverse mx-auto md:flex-row gap-1">
      
    <div className="flex md:flex-col flex-row justify-between gap-1"> 
        {productItem?.image.map((item: any,i: Key)=>
          <div key={i} onClick={()=>setShowImage(item)} className="w-20 h-1/4" >
            <Image  className="w-full h-full object-fit" src={item} alt="product" width={200} height={200} />
          </div>
        )}
    </div>
     <div className="w-full md:w-80 h-96">
    <Image className="w-full h-full object-fit" src={showImage!} alt="product" priority width={500} height={500} />
    </div>
    </div>
  )
}

export default ImageGallery