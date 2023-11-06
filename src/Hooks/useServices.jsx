

import { useEffect, useState } from "react";


const useServices = () => {
    
   const [services, setServices] = useState([])
   console.log(services);
   useEffect(()=>{
    fetch('https://car-doctor-server61.vercel.app/services')
    .then(res=> res.json())
    .then(data => setServices(data))
   }, [])

   return services;
};

export default useServices;