import { useEffect, useState } from "react"

export const useSeller = (email) => {
    const [isSeller, setIsSeller] = useState(false)
    const [isSellerLoading, setIsSellerLoading] = useState(true)
    useEffect(() => {
        fetch(`https://recycle-hub-server.vercel.app/users/seller/${email}`)
            .then(res => res.json())
            .then(data => {
                if (data.isSeller === true) {
                    setIsSeller(data.isSeller)
                    setIsSellerLoading(false)
                }
            })
    }, [email, isSellerLoading])
    return [isSeller, isSellerLoading]
}