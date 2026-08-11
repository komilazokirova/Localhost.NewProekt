import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Heart,
  Share2,
  Star,
  MapPin,
  Wifi,
  Car,
  Waves,
  Wind,
  Tv,
  Utensils,
  Snowflake,
  ShieldCheck,
  CalendarCheck,
  UserRound,
  ChevronRight,
  Check,
} from "lucide-react";

const ListingDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const item = location.state;

  // ================= FAVORITE =================

  const [isFavorite, setIsFavorite] = useState(() => {
    const saved =
      JSON.parse(localStorage.getItem("favorites")) || [];

    return saved.some(
      (favorite) => favorite.id === item?.id
    );
  });

  const handleFavorite = () => {
    const saved =
      JSON.parse(localStorage.getItem("favorites")) || [];

    const exists = saved.some(
      (favorite) => favorite.id === item.id
    );

    let updatedFavorites;

    if (exists) {
      updatedFavorites = saved.filter(
        (favorite) => favorite.id !== item.id
      );
      setIsFavorite(false);
    } else {
      updatedFavorites = [...saved, item];
      setIsFavorite(true);
    }

    localStorage.setItem(
      "favorites",
      JSON.stringify(updatedFavorites)
    );
  };

  // ================= SHARE =================

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(
        window.location.href
      );

      alert("Link nusxalandi!");
    } catch (error) {
      alert("Linkni nusxalab bo'lmadi");
    }
  };

  // ================= IF NO DATA =================

  if (!item) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">
          Property topilmadi
        </h1>

        <button
          onClick={() => navigate("/")}
          className="mt-5 bg-emerald-400 hover:bg-emerald-500 text-white px-6 py-3 rounded-lg"
        >
          Home'ga qaytish
        </button>
      </div>
    );
  }

  // ================= GALLERY =================

  const galleryImages = [
    item.image,
    "imgCard2.png",
    "imgCard3.png",
    "imgCard4.png",
    "imgCard5.png",
  ];

  // ================= AMENITIES =================

  const amenities = [
    {
      icon: <Wifi size={20} />,
      title: "Wi-Fi",
    },
    {
      icon: <Car size={20} />,
      title: "Free parking",
    },
    {
      icon: <Utensils size={20} />,
      title: "Kitchen",
    },
    {
      icon: <Wind size={20} />,
      title: "Air conditioning",
    },
    {
      icon: <Tv size={20} />,
      title: "TV",
    },
    {
      icon: <Waves size={20} />,
      title: "Swimming pool",
    },
    {
      icon: <Snowflake size={20} />,
      title: "Heating",
    },
    {
      icon: <ShieldCheck size={20} />,
      title: "Security",
    },
  ];

  // ================= FEATURES =================

  const features = [
    {
      icon: <CalendarCheck size={23} />,
      title: "Dedicated workspace",
      description:
        "A private workspace equipped with Wi-Fi",
    },
    {
      icon: <UserRound size={23} />,
      title: "Self check-in",
      description:
        "Check in easily with your own key",
    },
    {
      icon: <ShieldCheck size={23} />,
      title: "Free cancellation",
      description:
        "Cancel before check-in for free",
    },
  ];

  // ================= PRICE =================

  const price = Number(
    item.price.replace("$", "")
  );

  const nights = 5;
  const cleaningFee = 30;
  const serviceFee = 25;

  const total =
    price * nights +
    cleaningFee +
    serviceFee;

  return (
    <div className="bg-white">

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-8">

        {/* =====================================================
            BACK
        ====================================================== */}

        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-black mb-6 transition"
        >
          <ArrowLeft size={18} />
          Back
        </button>

        {/* =====================================================
            TITLE
        ====================================================== */}

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-6">

          <div>

            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              {item.title}
            </h1>

            <div className="flex flex-wrap items-center gap-2 mt-3 text-sm">

              <span className="flex items-center gap-1 font-semibold">
                <Star
                  size={15}
                  fill="currentColor"
                />
                {item.rating}
              </span>

              <span className="text-gray-400">
                ·
              </span>

              <span className="underline font-medium">
                120 reviews
              </span>

              <span className="text-gray-400">
                ·
              </span>

              <span className="flex items-center gap-1 text-gray-500">
                <MapPin size={15} />
                {item.location}
              </span>

            </div>

          </div>

          {/* SHARE + FAVORITE */}

          <div className="flex gap-3">

            <button
              onClick={handleShare}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 text-sm font-medium transition"
            >
              <Share2 size={17} />
              Share
            </button>

            <button
              onClick={handleFavorite}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 text-sm font-medium transition"
            >
              <Heart
                size={18}
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

              {isFavorite
                ? "Saved"
                : "Save"}
            </button>

          </div>

        </div>

        {/* =====================================================
            GALLERY
        ====================================================== */}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 h-auto md:h-[470px]">

          {/* BIG IMAGE */}

          <div className="md:col-span-2 md:row-span-2 overflow-hidden rounded-2xl">

            <img
              src={`/${galleryImages[0]}`}
              alt={item.title}
              className="w-full h-full min-h-[300px] md:min-h-0 object-cover hover:scale-[1.02] transition duration-500"
            />

          </div>

          {/* IMAGE 2 */}

          <div className="overflow-hidden rounded-2xl">

            <img
              src={`/${galleryImages[1]}`}
              alt=""
              className="w-full h-[230px] object-cover hover:scale-105 transition duration-500"
            />

          </div>

          {/* IMAGE 3 */}

          <div className="overflow-hidden rounded-2xl">

            <img
              src={`/${galleryImages[2]}`}
              alt=""
              className="w-full h-[230px] object-cover hover:scale-105 transition duration-500"
            />

          </div>

          {/* IMAGE 4 */}

          <div className="overflow-hidden rounded-2xl">

            <img
              src={`/${galleryImages[3]}`}
              alt=""
              className="w-full h-[230px] object-cover hover:scale-105 transition duration-500"
            />

          </div>

          {/* IMAGE 5 */}

          <div className="relative overflow-hidden rounded-2xl">

            <img
              src={`/${galleryImages[4]}`}
              alt=""
              className="w-full h-[230px] object-cover hover:scale-105 transition duration-500"
            />

            <button className="absolute bottom-4 right-4 bg-white/95 backdrop-blur px-4 py-2 rounded-lg shadow text-sm font-semibold hover:bg-white transition">
              Show all photos
            </button>

          </div>

        </div>

        {/* =====================================================
            PROPERTY INFO + BOOKING
        ====================================================== */}

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 mt-10">

          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <div>

            {/* PROPERTY SUMMARY */}

            <div className="border-b pb-7">

              <h2 className="text-2xl font-bold">
                {item.title}
              </h2>

              <p className="text-gray-500 mt-2">
                Entire place · Great location · Highly rated
              </p>

            </div>

            {/* =================================================
                ABOUT
            ================================================== */}

            <section className="py-8 border-b">

              <h2 className="text-xl font-bold mb-4">
                About this home
              </h2>

              <p className="text-gray-600 leading-7">
                Welcome to this beautiful property in{" "}
                <span className="font-medium text-gray-800">
                  {item.location}
                </span>
                . This comfortable home is perfect for
                couples, families and travelers looking for
                a peaceful and relaxing stay.
              </p>

              <p className="text-gray-600 leading-7 mt-4">
                Enjoy a comfortable interior, beautiful
                surroundings and convenient access to
                everything you need during your stay.
                Whether you are visiting for a short trip
                or a longer vacation, this property provides
                a comfortable place to relax.
              </p>

              <button className="mt-4 font-semibold underline hover:text-emerald-500">
                Show more
              </button>

            </section>

            {/* =================================================
                FEATURES
            ================================================== */}

            <section className="py-8 border-b">

              <h2 className="text-xl font-bold mb-7">
                What this place offers
              </h2>

              <div className="space-y-6">

                {features.map(
                  (feature, index) => (
                    <div
                      key={index}
                      className="flex gap-4"
                    >

                      <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-500 flex items-center justify-center shrink-0">
                        {feature.icon}
                      </div>

                      <div>

                        <h3 className="font-semibold text-gray-900">
                          {feature.title}
                        </h3>

                        <p className="text-sm text-gray-500 mt-1">
                          {feature.description}
                        </p>

                      </div>

                    </div>
                  )
                )}

              </div>

            </section>

            {/* =================================================
                AMENITIES
            ================================================== */}

            <section className="py-8 border-b">

              <h2 className="text-xl font-bold mb-7">
                Amenities
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6">

                {amenities.map(
                  (amenity, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 text-gray-700"
                    >

                      <div className="text-gray-500">
                        {amenity.icon}
                      </div>

                      <span>
                        {amenity.title}
                      </span>

                    </div>
                  )
                )}

              </div>

              <button className="mt-8 border border-gray-300 rounded-lg px-5 py-3 font-semibold hover:bg-gray-50 transition">
                Show all amenities
              </button>

            </section>

            {/* =================================================
                HOST
            ================================================== */}

            <section className="py-8">

              <h2 className="text-xl font-bold mb-6">
                Hosted by Michael
              </h2>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">

                <div className="flex items-center gap-4">

                  <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center">
                    <UserRound
                      size={27}
                      className="text-emerald-500"
                    />
                  </div>

                  <div>

                    <h3 className="font-bold">
                      Michael Ward
                    </h3>

                    <p className="text-sm text-gray-500 mt-1">
                      ⭐ 4.9 · 120 reviews
                    </p>

                  </div>

                </div>

                <button className="border border-gray-300 rounded-lg px-5 py-2.5 font-semibold hover:bg-gray-50">
                  Contact host
                </button>

              </div>

            </section>

          </div>

          {/* =================================================
              RIGHT BOOKING CARD
          ================================================== */}

          <div>

            <div className="sticky top-6">

              <div className="border border-gray-200 rounded-2xl p-6 shadow-[0_6px_25px_rgba(0,0,0,0.08)] bg-white">

                {/* PRICE */}

                <div className="flex items-center justify-between">

                  <div>

                    <span className="text-2xl font-bold">
                      {item.price}
                    </span>

                    <span className="text-gray-500">
                      {" "}
                      / night
                    </span>

                  </div>

                  <div className="flex items-center gap-1 text-sm">
                    <Star
                      size={15}
                      fill="currentColor"
                    />
                    <span className="font-semibold">
                      {item.rating}
                    </span>
                  </div>

                </div>

                {/* CHECK IN */}

                <div className="border border-gray-300 rounded-xl mt-6 overflow-hidden">

                  <div className="grid grid-cols-2">

                    <div className="p-4 border-r border-gray-300">

                      <p className="text-[11px] font-bold">
                        CHECK-IN
                      </p>

                      <p className="text-sm text-gray-400 mt-1">
                        Add date
                      </p>

                    </div>

                    <div className="p-4">

                      <p className="text-[11px] font-bold">
                        CHECK-OUT
                      </p>

                      <p className="text-sm text-gray-400 mt-1">
                        Add date
                      </p>

                    </div>

                  </div>

                  <div className="border-t border-gray-300 p-4">

                    <p className="text-[11px] font-bold">
                      GUESTS
                    </p>

                    <p className="text-sm text-gray-400 mt-1">
                      1 guest
                    </p>

                  </div>

                </div>

                {/* BOOK BUTTON */}

                <button
                  onClick={() =>
                    alert("Booking coming soon!")
                  }
                  className="w-full mt-5 bg-emerald-400 hover:bg-emerald-500 text-white font-bold py-3.5 rounded-xl transition"
                >
                  Book this home
                </button>

                <p className="text-center text-xs text-gray-400 mt-3">
                  You won't be charged yet
                </p>

                {/* PRICE BREAKDOWN */}

                <div className="mt-7 space-y-4 text-sm">

                  <div className="flex justify-between">

                    <span className="underline">
                      {item.price} × {nights} nights
                    </span>

                    <span>
                      ${price * nights}
                    </span>

                  </div>

                  <div className="flex justify-between">

                    <span className="underline">
                      Cleaning fee
                    </span>

                    <span>
                      ${cleaningFee}
                    </span>

                  </div>

                  <div className="flex justify-between">

                    <span className="underline">
                      Service fee
                    </span>

                    <span>
                      ${serviceFee}
                    </span>

                  </div>

                  <div className="border-t pt-4 flex justify-between font-bold text-base">

                    <span>
                      Total
                    </span>

                    <span>
                      ${total}
                    </span>

                  </div>

                </div>

              </div>

              {/* SAFE BOOKING */}

              <div className="flex gap-3 items-center justify-center mt-5 text-sm text-gray-500">

                <ShieldCheck
                  size={18}
                  className="text-emerald-500"
                />

                <span>
                  Your booking is protected
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* =====================================================
            WHERE YOU'LL BE
        ====================================================== */}

        <section className="border-t mt-8 pt-10">

          <h2 className="text-2xl font-bold">
            Where you'll be
          </h2>

          <p className="flex items-center gap-2 text-gray-500 mt-2">
            <MapPin size={17} />
            {item.location}
          </p>

          {/* MAP */}

          <div className="relative mt-6 h-[350px] rounded-2xl overflow-hidden bg-gray-100">

            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('/map.png')",
              }}
            />

            {/* MAP OVERLAY */}

            <div className="absolute inset-0 bg-black/5" />

            {/* MARKER */}

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">

              <div className="relative">

                <div className="w-12 h-12 bg-emerald-400 text-white rounded-full flex items-center justify-center shadow-xl border-4 border-white">
                  <MapPin size={22} />
                </div>

                <div className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-20" />

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            SIMILAR STAYS
        ====================================================== */}

        <section className="border-t mt-12 pt-10 pb-16">

          <div className="flex justify-between items-center mb-7">

            <div>

              <h2 className="text-2xl font-bold">
                Similar stays
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                You may also like these properties
              </p>

            </div>

            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-1 font-semibold text-sm hover:text-emerald-500"
            >
              Show all
              <ChevronRight size={17} />
            </button>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">

            <SimilarCard
              image="/imgCard2.png"
              title="Missisuaga Aistream"
              location="Mississauga, Ontario"
              price="$502"
              rating="4.8"
            />

            <SimilarCard
              image="/imgCard3.png"
              title="Urban Loft"
              location="Georgina Bay, Ontario"
              price="$410"
              rating="4.5"
            />

            <SimilarCard
              image="/imgCard4.png"
              title="Forestville Cottages"
              location="Simcoe, Ontario"
              price="$325"
              rating="5.0"
            />

            <SimilarCard
              image="/imgCard5.png"
              title="Unionville Lodge"
              location="Markham, Ontario"
              price="$485"
              rating="4.6"
            />

          </div>

        </section>

      </div>
    </div>
  );
};


// ============================================================
// SIMILAR CARD
// ============================================================

const SimilarCard = ({
  image,
  title,
  location,
  price,
  rating,
}) => {
  return (
    <div className="group cursor-pointer">

      <div className="relative overflow-hidden rounded-xl">

        <img
          src={image}
          alt={title}
          className="w-full h-[210px] object-cover group-hover:scale-105 transition duration-500"
        />

        <button
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="absolute top-3 right-3 bg-white w-9 h-9 rounded-full flex items-center justify-center shadow hover:scale-105 transition"
        >
          <Heart
            size={18}
            className="text-red-500"
          />
        </button>

      </div>

      <div className="pt-3">

        <div className="flex justify-between gap-2">

          <h3 className="font-semibold text-gray-900">
            {title}
          </h3>

          <div className="flex items-center gap-1 text-sm shrink-0">

            <Star
              size={14}
              fill="currentColor"
            />

            {rating}

          </div>

        </div>

        <p className="text-sm text-gray-500 mt-1">
          {location}
        </p>

        <p className="font-semibold mt-2">
          {price}
          <span className="font-normal text-gray-500 text-sm">
            {" "}
            / night
          </span>
        </p>

      </div>

    </div>
  );
};

export default ListingDetails;