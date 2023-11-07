import React from "react";

function Handcrafte() {
  const Foods = [
    {id: 1, img: "./images/Bestseller.jpg", name: "Bestseller"},
    {id: 2, img: "./images/drinks.jpg", name: "Drinks"},
    {id: 3, img: "./images/food.jpg", name: "Food"},
    {id: 4, img: "./images/merchandise.jpg", name: "Merchandise"},
    {id: 5, img: "./images/coffeeAtHome.jpg", name: "Coffee At Home"},
    {id: 6, img: "./images/readyToEat.jpg", name: "Ready to Eat"},
  ];
  return (
    <section>
      <div className="bg-[#1e3932] px-10 hidden lg:block">
        <div className="max-w-screen-lg lg:max-w-screen-xl mx-auto cursor-pointer flex items-center justify-between py-6 text-white">
          <h2 className="text-xl">
            A world of rewards awaits you! Sign up now.
          </h2>
          <button className="border rounded-full px-4 py-1 font-medium text-sm text-gray-200 hover:text-white">
            Know More
          </button>
        </div>
      </div>

      {/* Handcrafted Curations */}
      <div className="max-w-screen-lg lg:max-w-screen-xl mx-auto px-5 my-10 space-y-6">
        <h2 className="text-xl sm:text-2xl lg:text-start font-bold text-[#1e3932] text-center">
          Handcrafted Curations
        </h2>
        <div className="flex items-center justify-center flex-wrap lg:justify-between space-x-4 sm:space-x-8">
          {Foods.map((food) => (
            <div
              key={food.id}
              className="flex items-center justify-center flex-col space-y-2"
            >
              <img
                src={food.img}
                alt="food-img"
                className="w-28 h-28 lg:w-36 lg:h-36 object-contain rounded-full"
              />
              <h4 className="font-medium">{food.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Handcrafte;
