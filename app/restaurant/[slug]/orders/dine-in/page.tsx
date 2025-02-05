import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DineInTab from "@/parts/order/dineIn-tab";
import React from "react";

const DineInPage = () => {
  return (
    <div>
      <Tabs defaultValue="accplace-orderunt" >
        <TabsList>
          <TabsTrigger value="place-order">Place Order</TabsTrigger>
          <TabsTrigger value="view-order">View Order Summary & Make Payment</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>
        <TabsContent value="place-order" className="bg-white m-5 rounded-lg">
          <DineInTab/>
        </TabsContent>
        <TabsContent value="view-order">Change your password here.</TabsContent>
        <TabsContent value="completed">Completed</TabsContent>
      </Tabs>
    </div>
  );
};

export default DineInPage;
