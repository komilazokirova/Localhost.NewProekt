import logo from '../assets/logo.svg';

function Navbar() {
    return (
        <div>
            <div className='flex justify-between container mx-auto px-12 p-6'>
                <img src={logo} alt="localhost logo" className="h-8" />
                <div className='flex gap-5 font-bold '>
                    <p>Home</p>
                    <p>Stays</p>
                    <p>Become a host</p>
                </div>
            </div>
        </div>
    );
}
export default Navbar