import login from "../../assets/images/login/login.svg";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
const Register = () => {
  const { createUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    const form = e.target;
    form.reset();
    // console.log(data);
    const { email, password } = data;

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200 rounded-xl mb-24">
      <div className="hero-content flex-col lg:flex-row gap-24">
        <div className="text-center lg:text-left ">
          <img src={login} alt="Login Img" />
        </div>
        <div className="card shrink-0 w-full  max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <h1 className="text-5xl font-bold text-center">Register</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input input-bordered"
                {...register("name", { required: true })}
              />
              {errors.name && <span>This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                {...register("email", { required: true })}
              />
              {errors.email && <span>This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                {...register("password", { required: true })}
              />
              {errors.password && <span>This field is required</span>}
            </div>

            <div className="form-control mt-6">
              <button className="btn bg-[#FF3811]">Sign Up</button>
            </div>
            <div className="flex flex-col gap-5 justify-center items-center">
              <p>or Sign in with</p>

              <div className="space-x-6">
                <button className="btn btn-circle">
                  <FaGoogle />
                </button>
                <button className="btn btn-circle">
                  <FaGithub />
                </button>
              </div>
              <p>
                Have an account?{" "}
                <Link className="text-[#FF3811]" to={"/login"}>
                  login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
