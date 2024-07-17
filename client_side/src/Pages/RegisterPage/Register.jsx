
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { saveEmailInLocalStroage } from '../../Utils/localStroage';

const Register = () => {
    const navigate = useNavigate()
    const handleRegister= async(e)=> {
        e.preventDefault()
        const form = e.target
        const name = form.name.value;
        const email = form.email.value;
        const phoneNumber = form.phone.value;
        const roleRequest = true;
        const requstedRole = form.joinas.value;
        const pin = form.pin.value;
        const user = {
            name,email,phoneNumber,requstedRole,roleRequest,pin
        }
       await axios.post('http://localhost:5000/user',user).then(res=>{
            console.log(res.data);
            saveEmailInLocalStroage(JSON.stringify(email))
            axios.post('http://localhost:5000/jwt',{email},{withCredentials:true})
            .then( res => {
                console.log(res.data);
            } )
            .catch(error => {
                console.log(error);
            })
            if(res.data.insertedId){
                navigate('/home')
            }
        })
    }
    return (
        <section className='min-h-[calc(100vh-70px)] px-3 w-full flex justify-center items-center'>
        <div className='w-full'>
        <div className='w-full shadow-slate-400 shadow-2xl bg-slate-100 p-5 rounded-2xl'>
        <h1 className='text-2xl text-center font-semibold py-3'>Register Now</h1>
        <form onSubmit={handleRegister}>
            <div className='mt-3 text-xl'>
            <label className='block font-medium mb-1' htmlFor='name'>Full Name</label>
            <input name='name' className='block w-full h-10 px-3 py-1  rounded-md' required type='text' id='name' placeholder='Full Name'></input>
            </div>
            <div className='mt-3 text-xl'>
            <label className='block font-medium mb-1' htmlFor='email'>Email</label>
            <input name='email' className='block w-full h-10 px-3 py-1  rounded-md' required type='email' id='email' placeholder='jhondeo@gmail.com'></input>
            </div>
            <div className='mt-3 text-xl'>
            <label className='block font-medium mb-1' htmlFor='phone'>Phone Number</label>
            <input name='phone' className='block w-full h-10 px-3 py-1  rounded-md' required type='tel' id='phone' placeholder='01XXXXX'></input>
            </div>
            <div className='text-xl'>
                <p className='font-medium mb-1 mt-3'>Join As</p>
                <div className='flex items-center justify-around'>
                    <div className='flex items-center justify-center flex-col gap-y-2'>
                    <label className='block font-medium mb-1 '   htmlFor='agent'>Agent</label>
                <input name='joinas' required value='agent' type='radio' id='agent'></input>
                
                    </div>
                    <div className='flex items-center justify-center flex-col gap-y-2'>
                    <label  className='block font-medium mb-1' htmlFor='user'>User</label>
                    <input name='joinas' required value='user' type='radio' id='user'></input>
                    </div>
                </div>
            </div>
            <div className='mt-3 text-xl'>
            <label className='block font-medium mb-1' htmlFor='pin'>Enter Your PIN</label>
            <input name='pin' type='password' className='block w-full h-10 px-3 py-1  rounded-md' required id='pin' placeholder='PIN'></input>
            </div>
            <div>
                <button type='submit' className='text-xl w-full py-2 bg-blue-500 rounded-xl text-white mt-2'>Sign Up</button>
            </div>
        </form>
        <div className="divider">Or</div>
            <p className='text-xl mt-2 flex items-center text-center justify-center gap-x-2'>Already have a account? <Link className='font-medium text-blue-500' to='/'>Login</Link></p>
        </div>
        </div>
        </section>
    );
};

export default Register;