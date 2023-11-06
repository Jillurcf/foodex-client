

import { useEffect, useState } from "react";


const useServices = () => {
    
   const [services, setServices] = useState([])
   console.log(services);
   useEffect(()=>{
    fetch('https://assignment11-server-side-chi.vercel.app/services')
    .then(res=> res.json())
    .then(data => setServices(data))
   }, [])

   return services;
};

export default useServices;