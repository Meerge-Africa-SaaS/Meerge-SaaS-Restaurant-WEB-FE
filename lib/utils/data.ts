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

export interface Banks{
  name: string;
  code: string;
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

export const banks:Banks[] = [
  { name: "Access Bank", code: "044" },
  { name: "Citibank", code: "023" },
  { name: "Diamond Bank", code: "063" },
  { name: "Ecobank Nigeria", code: "050" },
  { name: "Fidelity Bank", code: "070" },
  { name: "First Bank of Nigeria", code: "011" },
  { name: "First City Monument Bank (FCMB)", code: "214" },
  { name: "Guaranty Trust Bank (GTBank)", code: "058" },
  { name: "Heritage Bank", code: "030" },
  { name: "Keystone Bank", code: "082" },
  { name: "Polaris Bank", code: "076" },
  { name: "Providus Bank", code: "101" },
  { name: "Stanbic IBTC Bank", code: "221" },
  { name: "Standard Chartered Bank", code: "068" },
  { name: "Sterling Bank", code: "232" },
  { name: "Suntrust Bank", code: "100" },
  { name: "Union Bank of Nigeria", code: "032" },
  { name: "United Bank for Africa (UBA)", code: "033" },
  { name: "Unity Bank", code: "215" },
  { name: "Wema Bank", code: "035" },
  { name: "Zenith Bank", code: "057" },
];

