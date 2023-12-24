import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getAuth, updateProfile } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { useForm } from 'react-hook-form';

const image_hosting_key = 'df7ce54250960719fcb1ff564fe8cd66';
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const location = useLocation();
  const navigate = useNavigate();
  const auth = getAuth();
  const { createUser } = useContext(AuthContext);

  const onSubmit = async (data) => {
    try {
      const { password, name, image, email } = data;

      // Password validation
      if (password.length < 6) {
        toast.error('Password should be at least 6 characters long');
        return;
      }
      if (!/[A-Z]/.test(password)) {
        toast.error('Password should contain at least one capital letter');
        return;
      }
      if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
        toast.error('Password should contain at least one special character');
        return;
      }

      console.log(data);

      // Image upload
      const imageFile = data.image[0];
      const formData = new FormData();
      formData.append('image', imageFile);

      const responseImage = await fetch(image_hosting_api, {
        method: 'POST',
        body: formData,
      });

      if (!responseImage.ok) {
        throw new Error(`HTTP error! Status: ${responseImage.status}`);
      }

      const resImage = await responseImage.json();

      if (!resImage.success) {
        toast.error('Error during image upload');
        return;
      }

      console.log(resImage.data.display_url);

      // Firebase authentication
      createUser(name, resImage.data.display_url, email, password)
        .then(() => {
          updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: resImage.data.display_url,
          })
            .then(() => {
              // Database upload
              const userInfo = {
                name: data.name,
                email: data.email,
                image: resImage.data.display_url,
              };
              console.log(userInfo);
              fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(userInfo),
              })
                .then((res) => res.json())
                .then((data) => {
                  if (data.insertedId) {
                    toast.success('User registered successfully', {
                      position: 'top-center',
                      autoClose: 2000,
                    });

                    reset(); // Clear the form
                    navigate('/dashboard');
                  }
                })
                .catch((error) => {
                  toast.error(`Error posting user info: ${error.message}`);
                });
            })
            .catch((error) => {
              toast.error(`Profile update error: ${error.message}`);
            });
        })
        .catch((error) => {
          toast.error(`User creation error: ${error.message}`);
        });
    } catch (error) {
      toast.error(`Error during form submission: ${error.message}`);
    }
  };

  return (
    <div className=" py-5 ">
      <div className="container mx-auto mt-12 lg:mt-30">
        <div className="max-w-4xl mx-auto drop-shadow flex-1 py-5 ">
          <div className="flex flex-row-reverse">
            <div className='flex-1 flex flex-col '>
              <h2 className="text-2xl font-bold text-center   lg:text-4xl pt-3 ">Register Here !</h2>
              <form onSubmit={handleSubmit(onSubmit)} className=" ">
                <div className="form-control px-12 ">
                  <label className="label">
                    <span className="label-text text-black focus:text-black">Name</span>
                  </label>
                  <input {...register('name', { required: true })} type="text" name='name' placeholder="name" className="input input-bordered" />
                </div>
                <div className="form-control px-12 ">
                  <label className="label">
                    <span className="label-text text-black">Email</span>
                  </label>
                  <input {...register('email', { required: true })} type="text" name='email' placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control px-12 ">
                  <label className="label">
                    <span className="label-text text-black">Image</span>
                  </label>
                  <input {...register('image', { required: true })} type="file" name='image' placeholder="image" className="input input-bordered" />
                </div>
                <div className="form-control px-12 ">
                  <label className="label">
                    <span className="label-text  text-black">Password</span>
                  </label>
                  <input {...register('password', { required: true })} type="password" name='password' placeholder="password" className="input input-bordered" />

                  <p className="text-black py-2">Already have an account? <span className="text-fuchsia-500 font-bold"><Link to="/login">Login</Link></span> here.</p>
                </div>
                <div className="form-control mt-4">
                  <input className="btn bg-fuchsia-500 mx-12 text-black" type="submit" value="Sign Up" />
                </div>
              </form>
            </div>
            <div className='flex-1'>
              <img className='h-full w-full' src="https://i.ibb.co/FmGmm4Q/illustration-login-for-ui-ux-design-vector.jpg" alt="" />
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Register;
