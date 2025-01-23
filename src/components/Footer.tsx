 
 
function Footer() {
  return (
    <footer className='bg-white w-full h-11 border-t border-gray-200 px-5 shrink-0'>
           <div className='max-w-4xl mx-auto px-5 h-full text-muted-foreground text-sm text-center lg:flex justify-between items-center'>
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