import React, { useState } from "react";
import { Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Hero from "../components/Hero";
import ListingCard from "../components/ListingCard";

const Homepage = () => {
  // =========================================================
  // LISTINGS
  // =========================================================

  const listings = [
    {
      id: 1,
      title: "Brightwoods Cabins",
      location: "Bridlepath, Ontario, Canada",
      price: "$658",
      rating: "4.9",
      image: "imgCard.svg",
    },
    {
      id: 2,
      title: "Missisuaga Aistream",
      location: "Mississauga, Ontario, Canada",
      price: "$502",
      rating: "4.8",
      image: "imgCard2.png",
    },
    {
      id: 3,
      title: "Urban Loft",
      location: "Georgina Bay, Ontario, Canada",
      price: "$410",
      rating: "4.5",
      image: "imgCard3.png",
    },
    {
      id: 4,
      title: "Forestville Cottages",
      location: "Simcoe, Ontario, Canada",
      price: "$325",
      rating: "5.0",
      image: "imgCard4.png",
    },
    {
      id: 5,
      title: "Unionville Lodge",
      location: "Markham, Ontario, Canada",
      price: "$485",
      rating: "4.6",
      image: "imgCard5.png",
    },
    {
      id: 6,
      title: "Niagara Homes",
      location: "Niagara, Ontario, Canada",
      price: "$655",
      rating: "4.9",
      image: "imgCard6.png",
    },
    {
      id: 7,
      title: "Sunny Estate",
      location: "Barcort, Ontario, Canada",
      price: "$320",
      rating: "5.0",
      image: "imgCard7.png",
    },
    {
      id: 8,
      title: "Lawrence Hills",
      location: "Lawrence, Ontario, Canada",
      price: "$350",
      rating: "5.0",
      image: "imgCard8.png",
    },
    {
      id: 9,
      title: "Simcoe Lake Lodge",
      location: "Simcoe, Ontario, Canada",
      price: "$395",
      rating: "5.0",
      image: "imgCard9.png",
    },
    {
      id: 10,
      title: "Wasaga Beach Home",
      location: "Georgina Bay, Ontario, Canada",
      price: "$385",
      rating: "5.0",
      image: "imgCard10.png",
    },
    {
      id: 11,
      title: "Banff Hills",
      location: "Banff, Alberta, Canada",
      price: "$385",
      rating: "5.0",
      image: "imgCard11.png",
    },
    {
      id: 12,
      title: "Creemore Canada",
      location: "Creemore, Alberta, Canada",
      price: "$385",
      rating: "5.0",
      image: "imgCard12.png",
    },
    {
      id: 13,
      title: "Kawartha Lakes",
      location: "Kawartha, Alberta, Canada",
      price: "$385",
      rating: "5.0",
      image: "imgCard13.png",
    },
    {
      id: 14,
      title: "Revelstoke Cabin",
      location: "Revelstoke, Alberta, Canada",
      price: "$385",
      rating: "5.0",
      image: "imgCard14.png",
    },
    {
      id: 15,
      title: "Brightwoods Estate",
      location: "Brightwoods Estate",
      price: "$385",
      rating: "5.0",
      image: "imgCard15.png",
    },
    {
      id: 16,
      title: "Brightwoods Estate",
      location: "Brightwoods Estate",
      price: "$385",
      rating: "5.0",
      image: "imgCard16.png",
    },
  ];

  // =========================================================
  // STATES
  // =========================================================

  const [data, setData] = useState(listings);

  const [filters, setFilters] = useState({
    accommodation: "",
    minPrice: "",
    maxPrice: "",
    minRating: "",
  });

  const navigate = useNavigate();

  // =========================================================
  // FAVORITES
  // =========================================================

  const [favorites, setFavorites] = useState(() => {
    const savedFavorites =
      localStorage.getItem("favorites");

    return savedFavorites
      ? JSON.parse(savedFavorites)
      : [];
  });

  // =========================================================
  // FAVORITE ADD / REMOVE
  // =========================================================

  const handleFavorite = (item) => {
    setFavorites((prev) => {
      const alreadyFavorite = prev.some(
        (favorite) => favorite.id === item.id
      );

      let updatedFavorites;

      if (alreadyFavorite) {
        // O'chirish
        updatedFavorites = prev.filter(
          (favorite) => favorite.id !== item.id
        );
      } else {
        // Qo'shish
        updatedFavorites = [
          ...prev,
          item,
        ];
      }

      // localStorage
      localStorage.setItem(
        "favorites",
        JSON.stringify(updatedFavorites)
      );

      return updatedFavorites;
    });
  };

  // =========================================================
  // SHOW MORE
  // =========================================================

  const handleShowMore = () => {
    setData((prev) => [
      ...prev,
      ...listings,
    ]);
  };

  // =========================================================
  // SEARCH
  // =========================================================

  const handleSearch = (newFilters) => {
    setFilters(newFilters);
  };

  // =========================================================
  // FILTER
  // =========================================================

  const filteredListings = data.filter(
    (item) => {
      const query =
        filters.accommodation.toLowerCase();

      // Text
      const matchesText =
        item.title
          .toLowerCase()
          .includes(query) ||
        item.location
          .toLowerCase()
          .includes(query);

      // Price
      const itemPrice = Number(
        item.price.replace("$", "")
      );

      const matchesMinPrice =
        filters.minPrice === "" ||
        itemPrice >=
          Number(filters.minPrice);

      const matchesMaxPrice =
        filters.maxPrice === "" ||
        itemPrice <=
          Number(filters.maxPrice);

      // Rating
      const itemRating =
        Number(item.rating);

      const matchesRating =
        filters.minRating === "" ||
        itemRating >=
          Number(filters.minRating);

      return (
        matchesText &&
        matchesMinPrice &&
        matchesMaxPrice &&
        matchesRating
      );
    }
  );

  // =========================================================
  // RETURN
  // =========================================================

  return (
    <div className="container mx-auto px-6 md:px-12 py-14">

      {/* =====================================================
          HERO
      ====================================================== */}

      <Hero onSearch={handleSearch} />

      {/* =====================================================
          TOP BAR
      ====================================================== */}

      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-5 py-10">

        {/* LOCATION */}

        <div>
          <p className="text-gray-700">
            Stays nearby:{" "}
            <span className="font-bold text-gray-900">
              Toronto Ontario
            </span>
          </p>
        </div>

        {/* =================================================
            ICON BUTTONS
        ================================================== */}

        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-white">

          {/* =================================================
              FAVORITES
          ================================================== */}

          <button
            onClick={() =>
              navigate("/favorites")
            }
            className="
              relative
              w-11
              h-11
              flex
              items-center
              justify-center
              hover:bg-gray-50
              transition
            "
            aria-label="Favorites"
          >

            <Heart
              size={21}
              strokeWidth={2}
              className="text-red-500"
              fill="red"
            />

            {/* FAVORITE COUNT */}

            {favorites.length > 0 && (
              <span
                className="
                  absolute
                  top-1
                  right-1
                  min-w-[16px]
                  h-[16px]
                  px-1
                  rounded-full
                  bg-red-500
                  text-white
                  text-[9px]
                  font-bold
                  flex
                  items-center
                  justify-center
                  leading-none
                "
              >
                {favorites.length}
              </span>
            )}

          </button>

          {/* =================================================
              GRID
          ================================================== */}

          <button
            className="
              w-11
              h-11
              flex
              items-center
              justify-center
              bg-emerald-400
              hover:bg-emerald-500
              transition
            "
            aria-label="Grid view"
          >
            <img
              src="/iconCard1.png"
              alt="grid view"
              className="w-5 h-5"
            />
          </button>

          {/* =================================================
              MAP
          ================================================== */}

          <button
            className="
              w-11
              h-11
              flex
              items-center
              justify-center
              hover:bg-gray-50
              transition
            "
            aria-label="Map view"
          >
            <img
              src="/iconCard2.png"
              alt="map view"
              className="w-5 h-5"
            />
          </button>

        </div>

      </div>

      {/* =====================================================
          LISTINGS
      ====================================================== */}

      {filteredListings.length === 0 ? (

        <div className="text-center py-20">

          <p className="text-gray-500 text-lg">
            Hech narsa topilmadi
          </p>

        </div>

      ) : (

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-7 gap-y-10">

          {filteredListings.map(
            (item, index) => (

              <ListingCard
                key={`${item.id}-${index}`}

                id={item.id}

                title={item.title}

                location={item.location}

                price={item.price}

                rating={item.rating}

                image={item.image}

                item={item}

                isFavorite={favorites.some(
                  (favorite) =>
                    favorite.id ===
                    item.id
                )}

                onFavorite={
                  handleFavorite
                }
              />

            )
          )}

        </div>

      )}

      {/* =====================================================
          SHOW MORE
      ====================================================== */}

      <div className="flex justify-center py-12">

        <button
          onClick={handleShowMore}
          className="
            border
            border-emerald-400
            text-emerald-500
            font-semibold
            rounded-lg
            px-6
            py-2.5
            hover:bg-emerald-50
            transition
          "
        >
          Show more
        </button>

      </div>

    </div>
  );
};

export default Homepage;