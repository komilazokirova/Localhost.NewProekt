import React from 'react'
import ListingCard from '../components/ListingCard'


const Homepage = () => {
    const listings = [
        { title: "Brightwoods Cabins", location: "Bridlepath, Ontario, Canada", price: "$658", rating: "4.9", image: "imgCard.svg" },
        { title: "Missisuaga Aistream", location: "Missisauga, Ontario, Canada", price: "$502", rating: "4.8", image: "imgCard2.png" },
        { title: "Urban Loft", location: "Georgina Bay, Ontario, Canada", price: "$410", rating: "4.5", image: "imgCard3.png" },
        { title: "Forestville Cottages", location: "Simcoe, Ontario Canada", price: "$325", rating: "5.0", image: "imgCard4.png" },
        { title: "Unionville Logde", location: "Markham, Ontario Canada", price: "$485", rating: "4.6", image: "imgCard5.png" },
        { title: "Niagara Homes", location: "Niagara, Ontario, Canada", price: "$655", rating: "4.9", image: "imgCard6.png" },
        { title: "Sunny Estate", location: "Barcort, Ontario Canada", price: "$320", rating: "5.0", image: "imgCard7.png" },
        { title: "Lawrence Hills", location: "Lawrence, Ontario Canada", price: "$350", rating: "5.0", image: "imgCard8.png" },
        { title: "Simcoe Lake Lodge", location: "Simcoe, Ontario, Canada", price: "$395", rating: "5.0", image: "imgCard9.png" },
        { title: "Wasaga Beach Home", location: "Georgina Bay, Ontario, Canada", price: "$385", rating: "5.0", image: "imgCard10.png" },
        { title: "Banff Hills", location: "Banff, Alberta, Canada", price: "$385", rating: "5.0", image: "imgCard11.png" },
        { title: "Creemore Canada", location: "Creemore, Alberta, Canada", price: "$385", rating: "5.0", image: "imgCard12.png" },
        { title: "Kawartha Lakes", location: "Kawartha, Alberta, Canada", price: "$385", rating: "5.0", image: "imgCard13.png" },
        { title: "Revelstoke Cabin", location: "Revelstoke, Alberta, Canada", price: "$385", rating: "5.0", image: "imgCard14.png" },
        { title: "Brightwoods Estate", location: "Brightwoods Estate", price: "$385", rating: "5.0", image: "imgCard15.png" },
        { title: "Brightwoods Estate", location: "Brightwoods Estate", price: "$385", rating: "5.0", image: "imgCard16.png" },
    ];
    return (
        <div className='container mx-auto px-12 p-14 '>
            <div className='flex justify-between items-center'>
                <div>
                    <p>Stays nearby: <span className="font-bold">Toronto Ontario</span></p>
                </div>
                <div className='flex border border-gray-300 rounded-md overflow-hidden'>
                    <button className='p-2 hover:bg-gray-100'>
                        <img src="/iconCard1.png" alt="grid view" className="w-5 h-5" />
                    </button>
                    <button className='p-2 hover:bg-gray-100  border-gray-600'>
                        <img src="/iconCard2.png" alt="list view" className="w-5 h-5" />
                    </button>
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-6 relative'>
                {listings.map((item) => <ListingCard key={item.title} title={item.title} location={item.location} price={item.price} rating={item.rating} image={item.image} />)}
            </div>

            <div className='flex justify-center'>
                <button className='text-emerald-400 border font-bold
                 border-emerald-400 rounded-md px-4 py-2 hover:bg-gray-100'>
                    Show more
                </button>
            </div>
        </div>
    )
}

export default Homepage