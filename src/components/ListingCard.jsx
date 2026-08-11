import React from "react";
import { Heart, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ListingCard = ({
  id,
  title,
  location,
  price,
  rating,
  image,
  isFavorite,
  onFavorite,
  item,
}) => {
  const navigate = useNavigate();

  const openDetails = () => {
    navigate(`/listing/${id}`, {
      state: item,
    });
  };

  return (
    <div
      onClick={openDetails}
      className="cursor-pointer"
    >

      {/* IMAGE */}
      <div className="relative">

        <img
          src={`/${image}`}
          alt={title}
          className="w-full h-[250px] object-cover rounded-xl"
        />

        {/* ❤️ */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onFavorite(item);
          }}
          className="absolute top-3 right-3 bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:scale-105 transition"
        >
          <Heart
            size={21}
            className={
              isFavorite
                ? "text-red-500"
                : "text-gray-700"
            }
            fill={
              isFavorite
                ? "red"
                : "none"
            }
          />
        </button>

      </div>

      {/* INFO */}
      <div className="pt-3">

        <div className="flex justify-between">

          <h3 className="font-semibold text-lg">
            {title}
          </h3>

          <div className="flex items-center gap-1">

            <Star
              size={15}
              fill="currentColor"
            />

            <span className="text-sm">
              {rating}
            </span>

          </div>

        </div>

        <p className="text-gray-500 text-sm mt-1">
          {location}
        </p>

        <p className="font-semibold mt-2">
          {price}
          <span className="text-gray-500 font-normal">
            {" "}
            / night
          </span>
        </p>

      </div>

    </div>
  );
};

export default ListingCard;