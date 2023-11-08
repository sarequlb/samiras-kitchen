
import discountBanner from '../../../assets/discount banner.jpg'
import './Discount.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Discount = () => {
    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const discount = form.discount.value;
        toast('Succesfully Colleted Our Offer')
        form.reset('')
    }
    return (
        <div className="carousel w-full h-full lg:h-80 relative mb-40 rounded-xl">
            <div id="slide1" className="carousel-item discount-img relative w-full">
                <img src={discountBanner} alt='' className="  w-full" />
            </div>
            <div className='absolute  transform -translate-y-1/2 lg:left-1/3 lg:top-1/3 top-1/4 left-1/4'>
                <h1 className='lg:text-5xl  text-2xl font-medium'>Join us to Get 30% Discount</h1>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 lg:left-1/2 top-2/3 left-1/4 right-1/3">
                <form onSubmit={handleSubmit} className="input-group">
                    <input type="email" name='discount' placeholder="Enter Your Mail" className="input input-bordered w-full max-w-xs text-sm" required />
                    <button type='submit' className="btn btn-active btn-secondary text-white">Submit</button>
                </form>
            </div>
            <ToastContainer position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"></ToastContainer>
        </div>
    );
};

export default Discount;