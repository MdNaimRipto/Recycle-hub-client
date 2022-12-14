import { useEffect, useState } from "react"

export const useToken = (email) => {
    const [token, setToken] = useState('')
    useEffect(() => {
        fetch(`https://recycle-hub-server.vercel.app/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
                if (data.accessToken) {
                    localStorage.setItem("token", data.accessToken)
                    setToken(data.accessToken)
                }
            })
    }, [email])
    return [token]
}