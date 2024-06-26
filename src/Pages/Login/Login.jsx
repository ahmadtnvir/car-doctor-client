import login from "../../assets/images/login/login.svg";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
const Login = () => {
  const {logIn} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data, e) => {
    const form = e.target;
    form.reset();
    // console.log(data)
    const {email, password} = data;
    logIn(email, password)
      .then(result => {
        console.log(result.user);
        const user = {email};
        // navigate(location?.state ? location?.state : '/')
        //get access token
        axios.post('http://localhost:5000/jwt', user)
          .then(res => {
            console.log(res.data);
          })
      })
      .catch(error => {
        console.error(error);
      })
  }
  return (
    <div className="hero min-h-screen bg-base-200 rounded-xl mb-24">
      <div className="hero-content flex-col lg:flex-row gap-24">
        <div className="text-center lg:text-left ">
          <img src={login} alt="Login Img" />
        </div>
        <div className="card shrink-0 w-full  max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <h1 className="text-5xl font-bold text-center">Login</h1>
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
              <button className="btn bg-[#FF3811]">Login</button>
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
              <p>Have not any account? <Link className="text-[#FF3811]" to={'/register'}>Sign up</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
