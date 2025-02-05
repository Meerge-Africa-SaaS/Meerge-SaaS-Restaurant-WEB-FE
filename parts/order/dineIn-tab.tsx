"use client";
import MenuFoodCard from "@/components/cards/menu-food-card";
import OrderTabHeader from "@/components/order/order-tabHeader";
import { numberOptions } from "@/lib/utils/data";

const DineInTab = ({}) => {
  return (
    <div>
      <OrderTabHeader
        name=""
        options={numberOptions}
        placeholder="Please select"
        orderNo="0234"
        showOrderNoDropDown={true}
      />
      <div>
        <h1 className="text-3xl font-thin border-b border-gray-300 pb-2 mb-4">
          Select Menu Item
        </h1>
        <div className="flex gap-5 overflow-x-auto scroll-smooth">
          <MenuFoodCard
            amount="N5,000.00"
            imageUrl="/images/food/food-2.png"
            name="Basmati Fried Rice with Curry"
            onAddToCart={() => ""}
          />
          <MenuFoodCard
            amount="N5,000.00"
            imageUrl="/images/food/food-2.png"
            name="Basmati Fried Rice with Curry"
            onAddToCart={() => ""}
          />
          <MenuFoodCard
            amount="N5,000.00"
            imageUrl="/images/food/food-2.png"
            name="Basmati Fried Rice with Curry"
            onAddToCart={() => ""}
          />
          <MenuFoodCard
            amount="N5,000.00"
            imageUrl="/images/food/food-2.png"
            name="Basmati Fried Rice with Curry"
            onAddToCart={() => ""}
          />
          <MenuFoodCard
            amount="N5,000.00"
            imageUrl="/images/food/food-2.png"
            name="Basmati Fried Rice with Curry"
            onAddToCart={() => ""}
          />
          <MenuFoodCard
            amount="N5,000.00"
            imageUrl="/images/food/food-2.png"
            name="Basmati Fried Rice with Curry"
            onAddToCart={() => ""}
          />
          <MenuFoodCard
            amount="N5,000.00"
            imageUrl="/images/food/food-2.png"
            name="Basmati Fried Rice with Curry"
            onAddToCart={() => ""}
          />
          <MenuFoodCard
            amount="N5,000.00"
            imageUrl="/images/food/food-2.png"
            name="Basmati Fried Rice with Curry"
            onAddToCart={() => ""}
          />
          <MenuFoodCard
            amount="N5,000.00"
            imageUrl="/images/food/food-2.png"
            name="Basmati Fried Rice with Curry"
            onAddToCart={() => ""}
          />
          <MenuFoodCard
            amount="N5,000.00"
            imageUrl="/images/food/food-2.png"
            name="Basmati Fried Rice with Curry"
            onAddToCart={() => ""}
          />
        </div>
      </div>
    </div>
  );
};

export default DineInTab;
