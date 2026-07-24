import React from 'react'
import ListingCard from '../components/ListingCard'


const Homepage = () => {
    return (
        <div>

            <ListingCard
                title="Brightwoods Cabins"
                location="Bridlepath, Ontario, Canada"
                price="$658"
                rating="4.9"
                image="imgCard.svg"
            />
              <ListingCard
                title="Missisuaga Aistream"
                location="Missisauga, Ontario, Canada"
                price="$502"
                rating="4.8"
                image="imgCard2.png"
            />
              <ListingCard
                title="Urban Loft"
                location="Georgina Bay, Ontario, Canada"
                price="$410"
                rating="4.5"
                image="imgCard3.png"
            />
              <ListingCard
                title="Forestville Cottages"
                location="Simcoe, Ontario Canada"
                price="$$325"
                rating="5.0"
                image="imgCard4.png"
            />




        </div>
    )
}

export default Homepage