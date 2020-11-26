import {useEffect, useState} from 'react'

export const useGetOrders = ()=>{
    const [orders, setOrders] = useState()
    const [errors, setErrors]= useState('')
    const getOrders = async()=>{
        try {
            const reponse = await fetch('https://indapi.kumba.io/webdev/assignment')
            const data = await reponse.json()
            setOrders(data)
        } catch (error) {
            setErrors('something occured')
        }
    }
    // getOrders()
    // useEffect(()=>{
    //     getOrders()
    // },[])
    return {
        orders,
        errors
    }
}