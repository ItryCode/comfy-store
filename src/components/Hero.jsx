import { Link } from "react-router-dom";

import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";

const Hero = () => {
  const carouselImages = [hero1, hero2, hero3, hero4];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
          You wish for it,We have it!
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8">
          Text about products and how we deliver them fast and proper
        </p>
        <div className="mt-10">
          <Link className="btn btn-primary" to="/products">
            Our Products
          </Link>
        </div>
      </div>
      <div className="h-96  carousel carousel-vertical rounded-box lg:ml-20">
        {carouselImages.map((image, index) => {
          return (
            <div key={image} className="carousel-item h-full">
              <img
                src={image}
                className="rounded-box h-full w-80  object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
