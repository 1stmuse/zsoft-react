import {createContext, useEffect, useState} from 'react'
import {useGetOrders} from './hooks/orderHooks'


export const orderContext = createContext()



export default function ({children}){
    const {orders} = useGetOrders()
    return(
        <orderContext.Provider value={{orders}} >
            {children}
        </orderContext.Provider>
    )
}