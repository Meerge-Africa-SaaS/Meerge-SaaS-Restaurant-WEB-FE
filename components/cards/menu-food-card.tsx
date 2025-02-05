import React from "react";

interface FoodCardProps {
  imageUrl: string;
  name: string;
  amount: string;
  onAddToCart: () => void;
}

const MenuFoodCard: React.FC<FoodCardProps> = ({
  imageUrl,
  name,
  amount,
  onAddToCart,
}) => {
  return (
    <div className="max-w-48 rounded-lg overflow-hidden shadow-sm border border-gray-300">
      <img className="w-full h-40 object-cover" src={imageUrl} alt={name} />
      <div className="p-3">
        <p className="text-sm font-semibold text-gray-800 ">{name}</p>
        <div className="flex items-center justify-between mt-2">
          <p className="text-[#FF4101] text-xs">{amount}</p>
          <button
            onClick={onAddToCart}
            className="bg-[#FF4101] text-white rounded-full w-6 h-6 flex items-center justify-center font-semibold text-sm hover:bg-[#FF4101] transition duration-300 ease-in-out"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuFoodCard;
