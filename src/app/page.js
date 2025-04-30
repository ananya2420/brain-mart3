import Image from "next/image";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import OffersGrid from "./components/OfferGrid";
import ProductCard from "./components/ProductCard";
import ReviewsGrid from "./components/ReviewsGrid";
import SignupSection from "./components/SignUp";
import Footer from "./components/Footer";

export default function Home() {
  return (
   <div>
    <Navbar />
    <Header />
    <OffersGrid />
    <ProductCard />
    <ReviewsGrid />
    <SignupSection />
    <Footer />
   </div>
  );
}
