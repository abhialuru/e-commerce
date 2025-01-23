 
 
function Footer() {
  return (
    <footer className='bg-white h-11 border-t border-gray-200 px-5 max-w-4xl mx-auto mt-10'>
           <div className='w-full h-full text-muted-foreground text-sm text-center lg:flex justify-between items-center'>
            <div>
              &copy;2024 All right reserved
              </div>
              <ul className='flex gap-5 justify-center'>
                <li>Terms</li>
                <li>Private policy</li>
                <li>Cookie policy</li>
              </ul>
            </div>
     </footer>
  )
}

export default Footer