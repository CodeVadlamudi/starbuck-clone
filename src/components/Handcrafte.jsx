import React from "react";

function Handcrafte() {
  const Foods = [
    { img: "./images/bestseller.jpg", name: "Bestseller" },
    { img: "./images/drinks.jpg", name: "Drinks" },
    { img: "./images/food.jpg", name: "Food" },
    { img: "./images/merchandise.jpg", name: "Merchandise" },
    { img: "./images/coffeeAtHome.jpg", name: "Coffee At Home" },
    { img: "./images/readyToEat.jpg", name: "Ready to Eat" },
  ];
  return (
    <div>
      <div className="bg-[#1e3932] px-10 hidden lg:block">
        <div className="max-w-5xl lg:max-w-7xl mx-auto cursor-pointer flex items-center justify-between py-6 text-white">
          <h2 className="text-xl">
            A world of rewards awaits you! Sign up now.
          </h2>
          <button className="border rounded-full px-4 py-1 font-medium text-sm text-gray-200 hover:text-white">
            Know More
          </button>
        </div>
      </div>

      {/* Handcrafted Curations */}
      <div className="max-w-5xl lg:max-w-7xl mx-auto px-5 my-10">
        <h2 className="text-2xl font-bold text-[#1e3932] mb-4">
          Handcrafted Curations
        </h2>
        <div className="flex items-center justify-between flex-wrap space-y-4">
          {Foods.map((food) => (
            <div className="flex items-center justify-center flex-col space-y-2">
              <img
                src={food.img}
                alt="food-img"
                className="w-28 h-28 object-contain rounded-full"
              />
              <h4 className="font-medium">{food.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Handcrafte;
