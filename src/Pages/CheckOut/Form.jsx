const Form = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        {/* <div className=" "> */}
        {/* <div className="text-center ">
            
          </div> */}
        <div className="card shrink-0 w-[80%] shadow-2xl bg-base-100">
          <form className="card-body grid grid-cols-1 md:grid-cols-2 gap-6 ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">First Name</span>
              </label>
              <input
                type="text"
                placeholder="First Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Last Name</span>
              </label>
              <input
                type="text"
                placeholder="Last Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Phone</span>
              </label>
              <input
                type="number"
                placeholder="Your Phone"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control col-span-2">
            <textarea className="textarea textarea-bordered" placeholder="Your Message"></textarea>
            </div>
            <div className="form-control mt-6 col-span-2">
              <button className="btn btn-block ">Order Confirm</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Form;
