'use client'
import store from "@/store/store"
import { ReactNode } from "react"
import { Provider } from "react-redux"

 
function GlobalState({children}:{children:ReactNode}) {
  return (
     <Provider store={store}>
         {children}
     </Provider>
  )
}

export default GlobalState