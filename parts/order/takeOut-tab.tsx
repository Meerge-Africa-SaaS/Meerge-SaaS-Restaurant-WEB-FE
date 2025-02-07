import OrderTabHeader from "@/components/order/order-tabHeader";
import { numberOptions } from "@/lib/utils/data";
import React from "react";

const TakeOutTab = () => {
  return (
    <div>
      <OrderTabHeader
        name="Take Out"
        options={numberOptions}
        orderNo=""
        showOrderNoDropDown={false}
        placeholder=""
      />
    </div>
  );
};

export default TakeOutTab;
