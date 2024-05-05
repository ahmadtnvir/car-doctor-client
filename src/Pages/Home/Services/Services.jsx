import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    } , [])
    return (
        <div className="text-center mb-24">
            <h3 className="text-5 text-[#FF3811] font-bold mb-5">Service</h3>
            <h1 className="text-[#151515] text-5xl font-bold">Our Service Area</h1>
            <p className="text-[#737373] w-1/2 mx-auto capitalize my-8">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <ServicesCard  key={service._id} service={service}></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;