import React, { useState } from "react";
import Hero from "../components/Hero";
import ListingCard from "../components/ListingCard";

const Homepage = () => {
    const listings = [
        { id: 1, title: "Brightwoods Cabins", location: "Bridlepath, Ontario, Canada", price: "$658", rating: "4.9", image: "imgCard.svg" },
        { id: 2, title: "Missisuaga Aistream", location: "Missisauga, Ontario, Canada", price: "$502", rating: "4.8", image: "imgCard2.png" },
        { id: 3, title: "Urban Loft", location: "Georgina Bay, Ontario, Canada", price: "$410", rating: "4.5", image: "imgCard3.png" },
        { id: 4, title: "Forestville Cottages", location: "Simcoe, Ontario Canada", price: "$325", rating: "5.0", image: "imgCard4.png" },
        { id: 5, title: "Unionville Logde", location: "Markham, Ontario Canada", price: "$485", rating: "4.6", image: "imgCard5.png" },
        { id: 6, title: "Niagara Homes", location: "Niagara, Ontario, Canada", price: "$655", rating: "4.9", image: "imgCard6.png" },
        { id: 7, title: "Sunny Estate", location: "Barcort, Ontario Canada", price: "$320", rating: "5.0", image: "imgCard7.png" },
        { id: 8, title: "Lawrence Hills", location: "Lawrence, Ontario Canada", price: "$350", rating: "5.0", image: "imgCard8.png" },
        { id: 9, title: "Simcoe Lake Lodge", location: "Simcoe, Ontario, Canada", price: "$395", rating: "5.0", image: "imgCard9.png" },
        { id: 10, title: "Wasaga Beach Home", location: "Georgina Bay, Ontario, Canada", price: "$385", rating: "5.0", image: "imgCard10.png" },
        { id: 11, title: "Banff Hills", location: "Banff, Alberta, Canada", price: "$385", rating: "5.0", image: "imgCard11.png" },
        { id: 12, title: "Creemore Canada", location: "Creemore, Alberta, Canada", price: "$385", rating: "5.0", image: "imgCard12.png" },
        { id: 13, title: "Kawartha Lakes", location: "Kawartha, Alberta, Canada", price: "$385", rating: "5.0", image: "imgCard13.png" },
        { id: 14, title: "Revelstoke Cabin", location: "Revelstoke, Alberta, Canada", price: "$385", rating: "5.0", image: "imgCard14.png" },
        { id: 15, title: "Brightwoods Estate", location: "Brightwoods Estate", price: "$385", rating: "5.0", image: "imgCard15.png" },
        { id: 16, title: "Brightwoods Estate", location: "Brightwoods Estate", price: "$385", rating: "5.0", image: "imgCard16.png" },
    ];
    const [data, setData] = useState(listings);

    const handleShowMore = () => {
        setData((prev) => [...prev, ...listings]);
    };
    return (
        <div className='container mx-auto px-12 p-14'>
            <Hero />

            <div className='flex justify-between py-10 items-center'>
                <div>
                    <p>Stays nearby: <span className="font-bold">Toronto Ontario</span></p>
                </div>
                <div className='flex border border-gray-300 rounded-md overflow-hidden'>
                    <button className='p-2 hover:bg-gray-100'>
                        <img src="/iconCard1.png" alt="grid view" className="w-5 h-5" />
                    </button>
                    <button className='p-2 hover:bg-gray-100 border-gray-600'>
                        <img src="/iconCard2.png" alt="list view" className="w-5 h-5" />
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {data.map((item, index) => (
                    <ListingCard
                        key={`${item.id}-${index}`}
                        title={item.title}
                        location={item.location}
                        price={item.price}
                        rating={item.rating}
                        image={item.image}
                    />
                ))}
            </div>
            <div className="flex justify-center py-10">
                <button
                    onClick={handleShowMore}
                    className="text-emerald-400 border font-bold border-emerald-400 rounded-md px-4 py-2 hover:bg-gray-100"
                >
                    Show more
                </button>
            </div>
        </div>
    )
}

export default Homepage