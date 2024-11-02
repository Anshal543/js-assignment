import React, { useEffect, useState } from 'react'

const UseIsOnline = () => {
    const [isOnline, setIsOnline] = useState(window.navigator.onLine);
    useEffect(()=>{
        window.addEventListener('online',()=>setIsOnline(true));
        window.addEventListener('offline',()=>setIsOnline(false));
    },[])
  return (
    isOnline
  )
}

export default UseIsOnline