import { useLoaderData } from "react-router-dom";
import BannerCard from "./BannerCard";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const CheckOut = () => {
    const {user} = useContext(AuthContext);
    const service = useLoaderData();
    const {title, price, _id, img} = service;

    

    
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        // const price = form.price.value;
        // const message = form.message.value;
        const booking = {
          img,
          customerName: name, 
          date, 
          email, 
          price: price, 
          // message: message,
          service: title,
          service_id: _id
        }
        console.log(booking);

        fetch('http://localhost:5000/bookings', {
          method: "POST",
          headers: {
            'content-type' : 'application/json'
          },
          body: JSON.stringify(booking)
        })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            if(data.insertedId){
              alert('Service Booked Successfully!')
            }

          })
      }

    return (
        <div className='space-y-5'>
            <BannerCard></BannerCard>
            <h1 className="text-3xl font-bold text-center">{title}</h1>
            <div>
        <div className="card shrink-0 shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body grid grid-cols-1 md:grid-cols-2 gap-6 ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                defaultValue={user?.displayName}
                placeholder="Name"
                name="name"
                className="input input-bordered"
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
                name="date"
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
                name="email"
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
              />
            </div>
            {/* <div className="form-control col-span-2">
            <textarea className="textarea textarea-bordered" placeholder="Your Message" name="message"></textarea>
            </div> */}
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