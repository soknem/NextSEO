import CardProduct from "@/components/CardProduct";
import { Metadata } from "next";

import React from "react";
export const metadata: Metadata = {
  title: "This is Metadata in Service Page",
  description: "Service Metadata",
  openGraph: {
    images:
      "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1iCHFm.img?w=800&h=435&q=60&m=2&f=jpg",
  },
};  
export default function page() {
  return (
    <div>
      <CardProduct />
    </div>
  );
}
