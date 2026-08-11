import React, { useState } from "react";
import { Heart, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

import ListingCard from "../components/ListingCard";

const Favorites = () => {
  const navigate = useNavigate();

  const [favorites, setFavorites] = useState(() => {
    const savedFavorites =
      localStorage.getItem("favorites");

    return savedFavorites
      ? JSON.parse(savedFavorites)
      : [];
  });

  // ❤️ Sevimlidan olib tashlash
  const handleFavorite = (item) => {
    setFavorites((prev) => {
      const updatedFavorites = prev.filter(
        (favorite) => favorite.id !== item.id
      );

      localStorage.setItem(
        "favorites",
        JSON.stringify(updatedFavorites)
      );

      return updatedFavorites;
    });
  };

  return (
    <div className="container mx-auto px-12 py-14">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-10">

        <div className="flex items-center gap-4">

          {/* ORQAGA */}
          <button
            onClick={() => navigate("/")}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <ArrowLeft size={22} />
          </button>

          <div>
            <h1 className="text-2xl font-bold">
              Sevimlilar
            </h1>

            <p className="text-gray-500 text-sm mt-1">
              {favorites.length} ta saqlangan joy
            </p>
          </div>

        </div>

        {/* YURAK */}
        <Heart
          size={28}
          className="text-red-500"
          fill="red"
        />

      </div>

      {/* SEVIMLILAR */}
      {favorites.length === 0 ? (

        <div className="flex flex-col items-center justify-center py-20">

          <Heart
            size={60}
            className="text-gray-300"
          />

          <h2 className="text-xl font-semibold mt-5">
            Sevimlilar bo'sh
          </h2>

          <p className="text-gray-500 mt-2">
            Yoqtirgan joylaringizni ❤️ orqali saqlang
          </p>

          <button
            onClick={() => navigate("/")}
            className="mt-6 bg-emerald-400 text-white px-5 py-2 rounded-md hover:bg-emerald-500"
          >
            Uylarni ko'rish
          </button>

        </div>

      ) : (

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {favorites.map((item) => (
            <ListingCard
              key={item.id}
              id={item.id}
              title={item.title}
              location={item.location}
              price={item.price}
              rating={item.rating}
              image={item.image}
              item={item}
              isFavorite={true}
              onFavorite={handleFavorite}
            />
          ))}

        </div>

      )}

    </div>
  );
};

export default Favorites;