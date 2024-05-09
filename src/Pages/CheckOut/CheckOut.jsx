import { useLoaderData } from "react-router-dom";
import BannerCard from "./BannerCard";
import Form from "./Form";


const CheckOut = () => {
    const service = useLoaderData();
    const {title} = service;

    return (
        <div className='space-y-5'>
            <BannerCard></BannerCard>
            <h1 className="text-3xl font-bold text-center">{title}</h1>
            <Form></Form>
        </div>
    );
};

export default CheckOut;