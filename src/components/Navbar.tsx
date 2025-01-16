'use client'
import { ShoppingCart } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "./ui/button"

  
 function Navbar() {

    const Links = [
        {name: 'Home', href: '/' },
        {name: 'Men', href: '/Men'},
        {name: 'Women', href: '/Women'},
        {name: 'Teens', href: '/Teens'}
    ]

    const pathname = usePathname()

   return (
      <header className="border-b mb-5">
        <div className="flex justify-between items-center mx-auto max-w-2xl px-5 md:max-w-6xl" >
        <div className="text-3xl font-bold" >Go<span className="text-teal-700" >Shop</span></div>
        <nav className="hidden md:flex gap-6 font-semibold">
          {Links.map((item)=>
          <div className={`${pathname === item.href ? 'text-teal-700':'text-zinc-900'} transition duration-100 hover:text-teal-700`} key={item.name} >
               <Link href={item.href} >
                {item.name}
               </Link>
          </div>
        )}
        </nav>

        <div>
             <Button className="flex flex-col gap-1 size-16" variant={"outline"} > 
            <ShoppingCart />
             </Button> 
        </div>
        </div>
      </header>
   )
 }
 
 export default Navbar