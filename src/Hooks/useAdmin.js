import { useEffect, useState } from "react"

export const useAdmin = (email) => {
    const [isAdmin, setIsAdmin] = useState(false)
    const [isAdminLoading, setIsAdminLoading] = useState(true)
    useEffect(() => {
        fetch(`https://recycle-hub-server.vercel.app/users/admin/${email}`)
            .then(res => res.json())
            .then(data => {
                if (data.isAdmin === true) {
                    setIsAdmin(data.isAdmin)
                    setIsAdminLoading(false)
                }
            })
    }, [email, isAdminLoading])
    return [isAdmin, isAdminLoading]
}