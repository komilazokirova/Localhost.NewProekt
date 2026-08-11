import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

import Homepage from "./pages/Homepage";
import Favorites from "./pages/Favorites";
import ListingDetails from "./pages/ListingDetails";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">

      {/* NAVBAR */}
      <Navbar />

      {/* MAIN */}
      <main className="flex-1">
        <Routes>

          {/* SIGN IN - OCHIQ */}
          <Route
            path="/signin"
            element={<SignIn />}
          />

          {/* SIGN UP - OCHIQ */}
          <Route
            path="/signup"
            element={<SignUp />}
          />

          {/* HOME - FAQAT LOGIN QILGAN USER */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Homepage />
              </ProtectedRoute>
            }
          />

          {/* FAVORITES - FAQAT LOGIN QILGAN USER */}
          <Route
            path="/favorites"
            element={
              <ProtectedRoute>
                <Favorites />
              </ProtectedRoute>
            }
          />

          {/* LISTING DETAILS - FAQAT LOGIN QILGAN USER */}
          <Route
            path="/listing/:id"
            element={
              <ProtectedRoute>
                <ListingDetails />
              </ProtectedRoute>
            }
          />

        </Routes>
      </main>

      {/* FOOTER */}
      <Footer />

    </div>
  );
};

export default App;