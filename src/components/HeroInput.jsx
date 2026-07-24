

function HeroInput() {
    return (
        <div className='flex items-center gap-3 shadow px-6 py-4 bg-white rounded-xl'>

            <div className='border rounded px-4 py-3 flex-1'>
                <input name="accommodation" placeholder="Accommodation" className="outline-none w-full" />
            </div>

            <div className='border rounded px-4 py-3'>
                <input name="checkIn" placeholder="Check-in" className="outline-none w-full" />
            </div>

            <div className='border rounded px-4 py-3'>
                <input name="checkOut" placeholder="Check-out" className="outline-none w-full" />
            </div>

            <div className='border rounded px-4 py-3'>
                <input name="guest" placeholder="Guest" className="outline-none w-full" />
            </div>

            <button className='bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded font-medium'>
                Search
            </button>

        </div>
    );
}
export default HeroInput;

