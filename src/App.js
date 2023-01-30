import React from "react";
import { Route, Routes } from "react-router-dom";
import ConfirmPassword from "./components/auth/ConfirmPassword";
import EmailVerification from "./components/auth/EmailVerification";
import ForgetPassword from "./components/auth/ForgetPassword";
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Footer from "./components/user/Footer";
import MovieReviews from "./components/user/MovieReviews";
import Navbar from "./components/user/Navbar";
import SearchMovies from "./components/user/SearchMovies";
import SingleMovie from "./components/user/SingleMovie";
import { useAuth } from "./hooks";
import AdminNavigator from "./navigator/AdminNavigator";

export default function App() {
  const { authInfo } = useAuth();
  const isAdmin = authInfo.profile?.role === "admin";

  if (isAdmin) return <AdminNavigator />;

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/signin" element={<Signin />} />
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/auth/verification" element={<EmailVerification />} />
        <Route path="/auth/forget-password" element={<ForgetPassword />} />
        <Route path="/auth/reset-password" element={<ConfirmPassword />} />
        <Route path="/movies/:movieId" element={<SingleMovie />} />
        <Route path="/movie/reviews/:movieId" element={<MovieReviews />} />
        <Route path="/movie/search/" element={<SearchMovies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}
