import React, { createContext, useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [storedToken, setStoredToken] = useState(
        localStorage.getItem('token')
    )

    //Update value of token if the token in localStorage changes
    useEffect(() => {
        if(storedToken){
            setStoredToken(storedToken)
            const decoded = jwtDecode(storedToken)
            setUser({ id: decoded.id, userName: decoded.userName})
        }
    }, [storedToken])


    const isTokenExpired = (token) => {
        if(!token){
            return true
        }
        try{
            const decoded = jwtDecode(token)
            const currentTime = Date.now() / 1000

            return decoded.exp < currentTime
        }catch(err){
            console.log(err)
            return true
        }
    }

    return(
        <AuthContext.Provider value={{user, setUser, storedToken, isTokenExpired}}>
            {children}
        </AuthContext.Provider>
    )
}