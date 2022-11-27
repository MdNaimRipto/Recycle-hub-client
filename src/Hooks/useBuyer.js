import { useEffect, useState } from "react"

export const useBuyer = (email) => {
    const [isBuyer, setIsBuyer] = useState(false)
    const [isBuyerLoading, setIsBuyerLoading] = useState(true)
    useEffect(() => {
        fetch(`http://localhost:5000/users/buyer/${email}`)
            .then(res => res.json())
            .then(data => {
                if (data.isBuyer === true) {
                    setIsBuyer(data.isBuyer)
                    setIsBuyerLoading(false)
                }
            })
    }, [email, isBuyerLoading])
    return [isBuyer, isBuyerLoading]
}