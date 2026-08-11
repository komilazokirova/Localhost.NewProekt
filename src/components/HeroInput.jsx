import { useState } from 'react';

function HeroInput({ onSearch }) {
    const [searchData, setSearchData] = useState({
        accommodation: "",
        minPrice: "",
        maxPrice: "",
        minRating: ""
    });

    const handleChange = (field, value) => {
        setSearchData({ ...searchData, [field]: value });
    };

    const handleSearch = () => {
        onSearch(searchData);
    };

    return (
        <div className='flex items-center gap-3 shadow px-6 py-4 bg-white rounded-xl'>

            <div className='border rounded px-4 py-3 flex-1'>
                <input
                    name="accommodation"
                    placeholder="Accommodation"
                    className="outline-none w-full"
                    value={searchData.accommodation}
                    onChange={(e) => handleChange("accommodation", e.target.value)}
                />
            </div>

            <div className='border rounded px-4 py-3'>
                <input
                    type="number"
                    name="minPrice"
                    placeholder="Min price"
                    className="outline-none w-full"
                    value={searchData.minPrice}
                    onChange={(e) => handleChange("minPrice", e.target.value)}
                />
            </div>

            <div className='border rounded px-4 py-3'>
                <input
                    type="number"
                    name="maxPrice"
                    placeholder="Max price"
                    className="outline-none w-full"
                    value={searchData.maxPrice}
                    onChange={(e) => handleChange("maxPrice", e.target.value)}
                />
            </div>

            <div className='border rounded px-4 py-3'>
                <select
                    name="minRating"
                    className="outline-none w-full bg-white"
                    value={searchData.minRating}
                    onChange={(e) => handleChange("minRating", e.target.value)}
                >
                    <option value="">Rating</option>
                    <option value="4">4+ stars</option>
                    <option value="4.5">4.5+ stars</option>
                    <option value="4.8">4.8+ stars</option>
                </select>
            </div>

            <button
                onClick={handleSearch}
                className='bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded font-medium'
            >
                Search
            </button>

        </div>
    );
}
export default HeroInput;