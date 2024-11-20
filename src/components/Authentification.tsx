import  { ChangeEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, loginUser } from '../stores/authSlice';
import { AppDispatch, RootState } from '../stores/store';
import { useNavigate } from 'react-router-dom';
type prop = {
  onClose: ()=> void
}
const Authentification = ({onClose}:prop) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  })
  const [form, setForm] = useState("Login")
  const dispatch = useDispatch<AppDispatch>(); 
  const { loading, error } = useSelector((state: RootState) => state.auth); 
  const navigate = useNavigate()
  // const [isSubmitting, setIsSubmitting] = useState(false); 

  const handeleOnChange = (e: ChangeEvent<HTMLInputElement>)=>{
    const {name, value} = e.target
    setFormData((prev)=> ({...prev, [name]: value}))
  }

  // Handle form submission
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    const {email, password} =formData
    e.preventDefault();
    if(form === "Login"){
      dispatch(loginUser({email, password}))
      setFormData({
        name: "",
        email: "",
        password: ""
      })
      onClose()
      navigate('/products')
    }else{
      dispatch(registerUser(formData));
      setFormData({
        name: "",
        email: "",
        password: ""
      })
      onClose()
      navigate('/products')
    }
    
  };

  return (
    <div className="flex justify-center items-center bg-gray-100">
      <div className="bg-white px-8 pb-6 rounded-lg text-black shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-semibold mb-6 text-background-light text-start">{form === "Login" ? "Login" : "Register"}</h2>

        {error && <div className="bg-red-200 text-red-600 p-2 mb-4 text-sm">{error}</div>}

  
        <form onSubmit={handleSubmit}>
          {form !== "Login" && <div className="mb-4">
            <label htmlFor="name" className="block text-start text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              id="name"
              type="text"
              name='name'
              value={formData.name}
              onChange={handeleOnChange}
              placeholder="Enter your name"
              required
              className="w-full mt-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>}

          <div className="mb-4">
            <label htmlFor="email" className="block text-start text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              name='email'
              value={formData.email}
              onChange={handeleOnChange}
              placeholder="Enter your email"
              required
              className="w-full mt-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-start text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              name='password'
              value={formData.password}
              onChange={handeleOnChange}
              placeholder="Enter your password"
              required
              className="w-full mt-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className={`w-full py-2 text-white bg-blue-500 rounded-md`}
            
          >
            {!loading 
              ? form === "Login" 
                ? 'Signing In...' 
                : 'Signin'
              : form === "Register" 
                ? 'Signing Up...' 
                : 'Sign Up' 
            }
          </button>
        </form>

        {form === "Login" 
          ? 
            <p className="mt-4 text-center text-sm text-gray-600">
              Don't have an account? <span onClick={()=> setForm("Register")} className="text-blue-500 cursor-pointer">Sign Up</span>
            </p> 
          : 
            <p className="mt-4 text-center text-sm text-gray-600">
              Already have an account? <span onClick={()=> setForm("Login")} className="text-blue-500 cursor-pointer">Sign In</span>
            </p> 
        }
      </div>
    </div>
  );
};

export default Authentification

