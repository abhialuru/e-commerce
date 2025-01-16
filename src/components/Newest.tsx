import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

 
function Newest() {

  const products = [
                      {image: '/ProductFour/nike1.jpg', title: 'Nike Windrunnner', category: 'Men', price: 3999, slug:'nike-windrunner'},
                      {image: '/ProductOne/airnike1.jpeg', title: "Nike Air Force 1'07", category: 'Teens', price: 7999, slug: 'nike-air-force'},
                      {image: '/ProductTwo/sweatshirt1.png', title: 'Nike Sportswear Pheonix Fieece', category: 'Women', price: 2750, slug: 'nike-sportswear-pheonix-fieece'},
                      {image: '/ProductThree/nikewhite1.jpg', title: 'Nike Air Vapormax 2023 Flynit', category: 'Men', price: 6089, slug: 'nike-air-vapormax'},
                  ]
 
  return (
    <div className="max-w-6xl mx-auto px-5 my-24"> 
      <div className="flex justify-between">
        <div className="text-xl font-bold tracking-tight">Our Newest Products</div>
        <div className="flex gap-1 items-center">
            <p className="text-lg">See All</p>
            <ArrowRight/>
        </div>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:flex justify-between my-5">
          {
            products.map((product, i)=>
              <Link key={i} href={`api/product/${product.slug}`}>
              <div className="w-60 hover:opacity-80" >
              <div className="w-full"> 
                <Image className="w-full h-full object-fit" src={product.image} alt='nike' width={200} height={200} />
            </div>
            <div className="flex justify-between px-1 pt-1" >
              <p className="text-zinc-600 text-sm" >{product.title}</p>
              <p className="text-sm font-medium">₹{product.price}</p>
            </div>
            <p className="text-zinc-500 px-1" >{product.category}</p>
            </div>
            </Link>
            )
          }
        
          </div>
    </div>
  )
}


export default Newest