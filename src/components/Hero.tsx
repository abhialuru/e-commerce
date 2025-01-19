 import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"

 
function Hero() {

   const Links = [
      {name: 'Men', href: '/Men'},
      {name: 'Women', href: '/Women'},
      {name: 'Teens', href: '/Teens'}
  ]

  return (
     <section className="max-w-6xl px-5 mx-auto">
      <div className="flex flex-col-reverse lg:flex-row flex-wrap justify-between mb-24 mt-5">
         <div className="flex flex-col max-w-lg lg:w-1/3  gap-3 mt-20 pt-10" >
          <h1 className="text-5xl font-bold" >Style That Speaks to You </h1>
          <p className="text-zinc-600 leading-5" >Discover the latest trends and elevate your wardrobe with our exclusive collection of fashion-forward clothing.</p>
          </div>
          <div className="flex justify-center w-full lg:w-2/3">
             <div className="size-60 md:w-80 md:h-96 relative overflow-hidden top-14 left-5 lg:left-20 z-20 rounded-lg">
               <Image className="w-full h-full object-fit" src='/rspb.jpg' alt="phtoo" width={500} height={500}/>
             </div>
             <div className="size-60 md:w-80 md:h-96 overflow-hidden rounded-lg">
               <Image className="w-full h-full object-fit" src='/hero.jpg' alt="phtoo" width={500} height={500}/>
             </div>
          </div>
         </div> 

         <div className="flex md:mt-28">
            {Links.map((item, i)=>
            <Button variant={"outline"} key={i} >
               <Link href={item.href}>
                   {item.name}
               </Link>
            </Button>
            )}
            </div>  
     </section>
  )
}

export default Hero