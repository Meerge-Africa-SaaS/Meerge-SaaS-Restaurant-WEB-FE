export interface Order {
  id: number;
  dish: string;
  orderType: string;
  quantity: number;
  price: string;
  Total: string;
  status: "New" | "Pending" | "Completed"; 
  image: string;
}

export const AllOrderData: Order[] = [
  { id: 1, dish: "Basmati Fried Rice with Curry", orderType: "dine in", quantity: 1, price: "N10,500", Total: "N10,500", status: "New", image: "/images/food/food-1.png" },
  { id: 2, dish: "Basmati Fried Rice with Curry", orderType: "dine in", quantity: 1, price: "N10,500", Total: "N10,500", status: "New", image: "/images/food/food-1.png" },
  { id: 3, dish: "Basmati Fried Rice with Curry", orderType: "dine in", quantity: 1, price: "N10,500", Total: "N10,500", status: "Pending", image: "/images/food/food-1.png" },
  { id: 4, dish: "Basmati Fried Rice with Curry", orderType: "dine in", quantity: 1, price: "N10,500", Total: "N10,500", status: "New", image: "/images/food/food-1.png" },
  { id: 5, dish: "Basmati Fried Rice with Curry", orderType: "dine in", quantity: 1, price: "N10,500", Total: "N10,500", status: "Pending", image: "/images/food/food-1.png" },
  { id: 6, dish: "Basmati Fried Rice with Curry", orderType: "dine in", quantity: 1, price: "N10,500", Total: "N10,500", status: "Completed", image: "/images/food/food-1.png" },
  { id: 7, dish: "Basmati Fried Rice with Curry", orderType: "dine in", quantity: 1, price: "N10,500", Total: "N10,500", status: "Completed", image: "/images/food/food-1.png" },
  { id: 8, dish: "Basmati Fried Rice with Curry", orderType: "dine in", quantity: 1, price: "N10,500", Total: "N10,500", status: "Completed", image: "/images/food/food-1.png" },
  { id: 9, dish: "Basmati Fried Rice with Curry", orderType: "dine in", quantity: 1, price: "N10,500", Total: "N10,500", status: "Completed", image: "/images/food/food-1.png" },
  { id: 10, dish: "Basmati Fried Rice with Curry", orderType: "dine in", quantity: 1, price: "N10,500", Total: "N10,500", status: "New", image: "/images/food/food-1.png" },
  { id: 11, dish: "Basmati Fried Rice with Curry", orderType: "dine in", quantity: 1, price: "N10,500", Total: "N10,500", status: "New", image: "/images/food/food-1.png" },
];

export const numberOptions = Array.from({ length: 50 }, (_, i) => (i + 1).toString());
