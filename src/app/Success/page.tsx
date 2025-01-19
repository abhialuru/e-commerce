import { CheckCheck } from "lucide-react"
import Link from "next/link"

 
function page() {
  return (
    <div className="w-full h-[60vh] flex flex-col gap-10 justify-center items-center px-2">
        <div className="max-w-2xl flex flex-col items-center gap-1">
            <div className="size-10"><CheckCheck className="w-full h-full text-green-500" /></div>
            <h3 className="text-3xl text-green-500 font-medium">Payment Successfull!</h3>
        </div>
        <div className="max-w-xl space-y-3">
       <h3 className="text-3xl font-semibold text-gray-700">Thank You for Your Purchase!</h3> 
       <p className="font-semibold text-gray-500"> Your order has been successfully processed. We truly appreciate your support and trust in us. We are preparing your items and will notify you once your order is on its way.</p>
       <div className="text-xl font-semibold text-gray-700"><p>Enjoy your purchase!</p></div>
       <button className="text-xl text-gray-600 font-semibold underline hover:text-gray-700"><Link href='/'>Home</Link></button>
        
        </div>
    </div>
  )
}

export default page