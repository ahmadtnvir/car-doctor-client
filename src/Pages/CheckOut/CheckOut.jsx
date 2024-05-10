import { useLoaderData } from "react-router-dom";
import BannerCard from "./BannerCard";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useForm } from "react-hook-form";


const CheckOut = () => {
    const {user} = useContext(AuthContext);
    const service = useLoaderData();
    const {title, price} = service;

    

    const {
        register,
        handleSubmit,
        // formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => {console.log(data)}

    return (
        <div className='space-y-5'>
            <BannerCard></BannerCard>
            <h1 className="text-3xl font-bold text-center">{title}</h1>
            <div>
        <div className="card shrink-0 shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body grid grid-cols-1 md:grid-cols-2 gap-6 ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                defaultValue={user?.displayName}
                placeholder="Name"
                className="input input-bordered"
                {...register("name")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                placeholder="Date"
                className="input input-bordered"
                {...register("date")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                defaultValue={user?.email}
                placeholder="Email"
                className="input input-bordered"
                {...register("email")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Due Amount </span>
              </label>
              <input
                type="text"
                defaultValue={'$'+ price}
                className="input input-bordered"
                {...register("price")}
              />
            </div>
            <div className="form-control col-span-2">
            <textarea className="textarea textarea-bordered" placeholder="Your Message" {...register("message")}></textarea>
            </div>
            <div className="form-control mt-6 col-span-2">
              <button className="btn btn-block ">Order Confirm</button>
            </div>
          </form>
        </div>
      </div>
        </div>
    );
};

export default CheckOut;