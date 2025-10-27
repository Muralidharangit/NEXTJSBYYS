"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

// Define the Product and ShopCategory types (You should put these in a separate types file for production)
interface Product {
  image: string;
  popularity: string;
  price: string;
  materialName: string;
  materialCode: string;
  details: string;
  category: string;
}

interface ShopCategory {
  id: string;
  title: string;
  images: string;
  path: string;
  categories: string[];
  product: Product[];
}

// --- Data Definition (Keeping your original structure for now) ---
const SHOP_BY_CATEGORIES: ShopCategory[] = [
  {
    id: "1",
    title: "Agriculture Garden & Landscaping",
    images:
      "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FShop%20By%20Categories%20main%20images%2FAgriculture.png?alt=media&token=ed324fda-ae0c-4ba2-b892-9320286b01b9",
    path: "Agriculture_Garden_Landscaping",
    categories: [
      "Harvester",
      "Brush Cutter",
      "Sprayers",
      "Grain Processing Machine",
      "Chaff Cutter",
      "All",
    ],
    product: [
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FAgricultureGarden%2Fharvester1.jpg?alt=media&token=b48179d9-5c41-4ec8-b942-0a25d95e206a",
        popularity: "222",
        price: "600",
        materialName: "JCP",
        materialCode: "MAT001",
        details: "color:red, 400hp",
        category: "Harvester",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FAgricultureGarden%2Fharvester2.jpg?alt=media&token=288850e7-5adf-4567-b378-ab33003e3a8e",
        popularity: "333",
        price: "800",
        materialName: "Orange Truck",
        materialCode: "MAT002",
        details: "color:orange, 450hp",
        category: "Harvester",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FAgricultureGarden%2Fharvester3.jpg?alt=media&token=57697af1-c5e9-4aa4-a1e0-94b18742a93c",
        popularity: "999",
        price: "600",
        materialName: "Truck",
        materialCode: "MAT003",
        details: "color:green, 420hp",
        category: "Harvester",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FAgricultureGarden%2Fbrushcutter1.jpg?alt=media&token=c3832e7a-f14f-461d-88fb-3c3c16997a9f",
        popularity: "555",
        price: "800",
        materialName: "Brush Cutter 1",
        materialCode: "MAT004",
        details: "color:black, 50hp",
        category: "Brush Cutter",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FAgricultureGarden%2Fbrushcutter2.jpg?alt=media&token=b7108b85-3e85-4778-a14a-b4aa1be155de",
        popularity: "666",
        price: "600",
        materialName: "Brush Cutter 2",
        materialCode: "MAT005",
        details: "color:blue, 55hp",
        category: "Brush Cutter",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FAgricultureGarden%2Fbrushcutter3.jpg?alt=media&token=ff856ad0-3ade-4c0a-b8fc-c4f2659aa0f4",
        popularity: "888",
        price: "800",
        materialName: "Brush Cutter 3",
        materialCode: "MAT006",
        details: "color:red, 60hp",
        category: "Brush Cutter",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FAgricultureGarden%2Fsprayers1.jpg?alt=media&token=9a8f6edb-91eb-4b41-bfb7-032b068bf0a7",
        popularity: "111",
        price: "200",
        materialName: "Sprayer 1",
        materialCode: "MAT007",
        details: "color:white, 15hp",
        category: "Sprayers",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FAgricultureGarden%2Fsprayers2.jpg?alt=media&token=2ee90c60-592d-4649-b500-984b06f3425f",
        popularity: "333",
        price: "200",
        materialName: "Sprayer 2",
        materialCode: "MAT008",
        details: "color:yellow, 20hp",
        category: "Sprayers",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FAgricultureGarden%2Fsprayers3.jpg?alt=media&token=649c4d4d-cfe0-451a-8bec-bad859b94f66",
        popularity: "444",
        price: "400",
        materialName: "Sprayer 3",
        materialCode: "MAT009",
        details: "color:green, 25hp",
        category: "Sprayers",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FAgricultureGarden%2Fgrainprocessingmachine1.jpg?alt=media&token=ff97ec03-9420-40f8-af3d-343e1284fd39",
        popularity: "444",
        price: "600",
        materialName: "Grain Processor 1",
        materialCode: "MAT010",
        details: "color:brown, 80hp",
        category: "Grain Processing Machine",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FAgricultureGarden%2Fgrainprocessingmachine2.jpg?alt=media&token=a5e88a4e-ea70-400b-a18a-5e4dc5c3d551",
        popularity: "888",
        price: "200",
        materialName: "Grain Processor 2",
        materialCode: "MAT011",
        details: "color:red, 90hp",
        category: "Grain Processing Machine",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FAgricultureGarden%2Fgrainprocessingmachine3.jpg?alt=media&token=91e05909-cfc2-4128-962a-614cbc3f8724",
        popularity: "999",
        price: "100",
        materialName: "Grain Processor 3",
        materialCode: "MAT012",
        details: "color:blue, 100hp",
        category: "Grain Processing Machine",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FAgricultureGarden%2Fchaffcutter1.jpg?alt=media&token=9052e3bd-d49b-4a8e-a530-9507b18e0732",
        popularity: "666",
        price: "600",
        materialName: "Chaff Cutter 1",
        materialCode: "MAT013",
        details: "color:orange, 35hp",
        category: "Chaff Cutter",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FAgricultureGarden%2Fchaffcutter2.jpg?alt=media&token=81b0adb4-90c9-4e91-94d7-602a302d7376",
        popularity: "888",
        price: "800",
        materialName: "Chaff Cutter 2",
        materialCode: "MAT014",
        details: "color:black, 40hp",
        category: "Chaff Cutter",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FAgricultureGarden%2Fchaffcutter3.jpg?alt=media&token=48403a69-88fa-4a46-a8af-b51ff77ffb53",
        popularity: "111",
        price: "500",
        materialName: "Chaff Cutter 3",
        materialCode: "MAT015",
        details: "color:gray, 45hp",
        category: "Chaff Cutter",
      },
    ],
  },
  {
    id: "2",
    title: "Abrasives, Adhesives & Sealants",
    images:
      "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FShop%20By%20Categories%20main%20images%2FAbrasivesc.png?alt=media&token=9925e0b1-e3bd-4968-9016-684f7c48305e",
    path: "/Abrasives_Adhesives_and_Sealants",
    categories: ["Abrasives", "Adhesives", "Sealants", "All"],
    product: [
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FAbrasives_Adhesives_and_Sealants%2FAbrasive01.jpg?alt=media&token=d87c20ed-d552-4ff8-8069-3d9178d9d34f",
        popularity: "150",
        price: "50",
        materialName: "Abrasive Wheel",
        materialCode: "ABR001",
        details: "size: 4 inches, grit: 80",
        category: "Abrasives",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FAbrasives_Adhesives_and_Sealants%2FAbrasive02.jpg?alt=media&token=14376459-2c08-4409-b81d-46701653695a",
        popularity: "250",
        price: "70",
        materialName: "Cutting Disc",
        materialCode: "ABR002",
        details: "size: 7 inches, thickness: 3mm",
        category: "Abrasives",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FAbrasives_Adhesives_and_Sealants%2FAbrasive03.jpg?alt=media&token=f26a7c43-15c9-41af-9fe9-fa629b3a47b9",
        popularity: "350",
        price: "90",
        materialName: "Sanding Paper",
        materialCode: "ABR003",
        details: "size: 9x11 inches, grit: 120",
        category: "Abrasives",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FAbrasives_Adhesives_and_Sealants%2FAdhesive01.jpg?alt=media&token=ec7a36cf-a527-44c4-bf64-2249ab3801b6",
        popularity: "200",
        price: "30",
        materialName: "Epoxy Glue",
        materialCode: "ADH001",
        details: "type: two-part, color: clear",
        category: "Adhesives",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FAbrasives_Adhesives_and_Sealants%2FAdhesive02.jpg?alt=media&token=81be6710-e6eb-481c-8074-26d63a722d50",
        popularity: "300",
        price: "40",
        materialName: "Super Glue",
        materialCode: "ADH002",
        details: "type: cyanoacrylate, size: 5g",
        category: "Adhesives",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FAbrasives_Adhesives_and_Sealants%2FSealant01.jpg?alt=media&token=f0acc646-e41b-4f14-a47b-e82521eb25c6",
        popularity: "220",
        price: "60",
        materialName: "Silicone Sealant",
        materialCode: "SEA001",
        details: "color: white, application: bathroom",
        category: "Sealants",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FAbrasives_Adhesives_and_Sealants%2FSealant02.jpg?alt=media&token=44e31aa7-18ed-4cd6-aa2a-b9bf157056ed",
        popularity: "320",
        price: "80",
        materialName: "Acrylic Sealant",
        materialCode: "SEA002",
        details: "color: clear, application: windows",
        category: "Sealants",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FAbrasives_Adhesives_and_Sealants%2FSealant03.jpg?alt=media&token=886d2cc9-6470-4a7a-9807-93f059ca8f69",
        popularity: "420",
        price: "100",
        materialName: "Polyurethane Sealant",
        materialCode: "SEA003",
        details: "color: black, application: automotive",
        category: "Sealants",
      },
    ],
  },
  {
    id: "3",
    title: "Automotive Supplies & Lubricants",
    images:
      "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FShop%20By%20Categories%20main%20images%2FAutomative.png?alt=media&token=896fab3f-ca6b-44a4-9393-dc8a3e8e311c",
    path: "/Automotive_Supplies_and_Lubricants",
    categories: [
      "Lubricants",
      "Engine Oils",
      "Brake Fluids",
      "Coolants",
      "All",
    ],
    product: [
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FAutomotive_Supplies_and_Lubricants%2FLubricant01.jpg?alt=media&token=6b3e27a7-1537-4158-8ce6-bdcdd6b54215",
        popularity: "180",
        price: "60",
        materialName: "Synthetic Lubricant",
        materialCode: "LUB001",
        details: "type: synthetic, viscosity: 5W-30",
        category: "Lubricants",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FAutomotive_Supplies_and_Lubricants%2FLubricant02.jpg?alt=media&token=9e6f15e0-89d3-47b9-988a-adcf3b52cc5a",
        popularity: "240",
        price: "80",
        materialName: "Grease Lubricant",
        materialCode: "LUB002",
        details: "type: lithium-based, color: yellow",
        category: "Lubricants",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FAutomotive_Supplies_and_Lubricants%2FEngineOil01.jpg?alt=media&token=dc6d4199-50b0-45b9-a399-3d417f327b9d",
        popularity: "300",
        price: "100",
        materialName: "Engine Oil",
        materialCode: "EO001",
        details: "type: mineral, viscosity: 10W-40",
        category: "Engine Oils",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FAutomotive_Supplies_and_Lubricants%2FBrakeFluid01.jpg?alt=media&token=e9abe1be-2b57-484b-b0b7-6cc924e4301b",
        popularity: "220",
        price: "50",
        materialName: "Brake Fluid DOT 4",
        materialCode: "BF001",
        details: "type: DOT 4, capacity: 500ml",
        category: "Brake Fluids",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FAutomotive_Supplies_and_Lubricants%2FCoolant01.jpg?alt=media&token=a7a74fa9-ba31-49a6-8643-137a9019f0e0",
        popularity: "350",
        price: "70",
        materialName: "Engine Coolant",
        materialCode: "COO001",
        details: "type: ethylene glycol, capacity: 1L",
        category: "Coolants",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FAutomotive_Supplies_and_Lubricants%2FEngineOil02.jpg?alt=media&token=f7c2c44e-699d-4a4b-ad2e-4296fd4e7bee",
        popularity: "320",
        price: "90",
        materialName: "Fully Synthetic Oil",
        materialCode: "EO002",
        details: "type: fully synthetic, viscosity: 0W-20",
        category: "Engine Oils",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FAutomotive_Supplies_and_Lubricants%2FBrakeFluid02.jpg?alt=media&token=bb2d2624-556e-4133-9350-565ac577185b",
        popularity: "260",
        price: "55",
        materialName: "Brake Fluid DOT 3",
        materialCode: "BF002",
        details: "type: DOT 3, capacity: 500ml",
        category: "Brake Fluids",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FAutomotive_Supplies_and_Lubricants%2FLubricant03.jpg?alt=media&token=99bad75c-386e-4618-9a37-c5af68c122b2",
        popularity: "400",
        price: "120",
        materialName: "High Temp Grease",
        materialCode: "LUB003",
        details: "type: high temp, application: automotive bearings",
        category: "Lubricants",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FAutomotive_Supplies_and_Lubricants%2FCoolant02.jpg?alt=media&token=cb553b19-3471-4fcf-935b-d99f74cd9617",
        popularity: "280",
        price: "85",
        materialName: "Antifreeze Coolant",
        materialCode: "COO002",
        details: "type: propylene glycol, capacity: 1L",
        category: "Coolants",
      },
    ],
  },
  {
    id: "4",
    title: "Bearings & Power Transmission",
    images:
      "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FShop%20By%20Categories%20main%20images%2FBearings.png?alt=media&token=2b8cf9c1-78d7-4559-933a-8315cd2a4d54",
    path: "/Bearings_and_Power_Transmission",
    categories: ["Bearings", "Belts", "Chains", "Couplings", "All"],
    product: [
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FBearings_and_Power_Transmission%2FBearing01.jpg?alt=media&token=c541ed73-e834-4a0a-8ff7-ddf118caed38",
        popularity: "200",
        price: "40",
        materialName: "Ball Bearing",
        materialCode: "BRG001",
        details: "type: deep groove, size: 6203",
        category: "Bearings",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FBearings_and_Power_Transmission%2FBearing02.jpg?alt=media&token=be6ccc38-c14e-4ac8-9120-e1d6970a56d8",
        popularity: "250",
        price: "60",
        materialName: "Roller Bearing",
        materialCode: "BRG002",
        details: "type: cylindrical roller, size: 30205",
        category: "Bearings",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FBearings_and_Power_Transmission%2FBelt01.jpg?alt=media&token=9c478362-4c4d-4e89-96d0-bac2e88cc523",
        popularity: "150",
        price: "30",
        materialName: "V-Belt",
        materialCode: "BLT001",
        details: "type: A-section, length: 1000mm",
        category: "Belts",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FBearings_and_Power_Transmission%2FChain01.jpg?alt=media&token=a5e6ba78-3443-48f8-8880-02d1cd3f262b",
        popularity: "300",
        price: "75",
        materialName: "Roller Chain",
        materialCode: "CHN001",
        details: "pitch: 12.7mm, type: single strand",
        category: "Chains",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FBearings_and_Power_Transmission%2FCoupling01.jpg?alt=media&token=b9855ba5-7444-4695-b8ea-094bdbfb6648",
        popularity: "180",
        price: "50",
        materialName: "Flexible Coupling",
        materialCode: "CPL001",
        details: "type: jaw coupling, bore: 25mm",
        category: "Couplings",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FBearings_and_Power_Transmission%2FBearing03.jpg?alt=media&token=6a0949d7-3f63-4961-a013-dfa3647613ab",
        popularity: "280",
        price: "80",
        materialName: "Tapered Roller Bearing",
        materialCode: "BRG003",
        details: "size: 32007, load capacity: heavy duty",
        category: "Bearings",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FBearings_and_Power_Transmission%2FBelt02.jpg?alt=media&token=20008697-9116-44e6-b8d0-052bfc51d7c4",
        popularity: "190",
        price: "35",
        materialName: "Timing Belt",
        materialCode: "BLT002",
        details: "type: HTD, length: 1200mm",
        category: "Belts",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FBearings_and_Power_Transmission%2FChain02.jpg?alt=media&token=a3be1bad-23db-4567-805a-2a27dbfd2db2",
        popularity: "350",
        price: "90",
        materialName: "Double Roller Chain",
        materialCode: "CHN002",
        details: "pitch: 15.875mm, type: double strand",
        category: "Chains",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FBearings_and_Power_Transmission%2FCoupling02.jpg?alt=media&token=3b2179b2-af69-4f06-8968-0c8be1c2824c",
        popularity: "220",
        price: "70",
        materialName: "Rigid Coupling",
        materialCode: "CPL002",
        details: "type: clamp style, bore: 30mm",
        category: "Couplings",
      },
    ],
  },

  {
    id: "5",
    title: "Building & Construction Supplies",
    images:
      "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FShop%20By%20Categories%20main%20images%2FBuilding.png?alt=media&token=cc2b1c5b-3fc6-475b-90f2-94b0aa18f0b6",
    path: "/Building_and_Construction_Supplies",
    categories: ["Cement", "Bricks", "Steel", "Pipes", "All"],
    product: [
      {
        image:
          "/assets/images/products/Building_and_Construction_Supplies/Cement01.jpg",
        popularity: "300",
        price: "120",
        materialName: "Portland Cement",
        materialCode: "CEM001",
        details: "type: OPC, grade: 43",
        category: "Cement",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FBuilding_and_Construction_Supplies%2FBrick01.jpg?alt=media&token=6b0c9a72-1f49-4588-b4a7-2f57063e8f73",
        popularity: "180",
        price: "50",
        materialName: "Clay Brick",
        materialCode: "BRK001",
        details: "type: solid, size: standard",
        category: "Bricks",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FBuilding_and_Construction_Supplies%2FSteel01.jpg?alt=media&token=cc2685d3-f5ab-40ce-b8fc-dcb514e5e0e8",
        popularity: "220",
        price: "200",
        materialName: "Steel Rebar",
        materialCode: "STL001",
        details: "type: TMT, diameter: 12mm",
        category: "Steel",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FBuilding_and_Construction_Supplies%2FPipe01.jpg?alt=media&token=a6c56e00-3033-4772-8f54-7212982e1455",
        popularity: "250",
        price: "100",
        materialName: "PVC Pipe",
        materialCode: "PIP001",
        details: "type: schedule 40, diameter: 2 inches",
        category: "Pipes",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FBuilding_and_Construction_Supplies%2FBrick02.jpg?alt=media&token=a1efcbb0-d5a1-4258-8944-12386604f0a1",
        popularity: "210",
        price: "60",
        materialName: "Fly Ash Brick",
        materialCode: "BRK002",
        details: "type: hollow, size: standard",
        category: "Bricks",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FBuilding_and_Construction_Supplies%2FCement02.jpg?alt=media&token=e4c258df-219d-498e-9ac7-c8637744b6fe",
        popularity: "320",
        price: "130",
        materialName: "Pozzolana Cement",
        materialCode: "CEM002",
        details: "type: PPC, grade: 53",
        category: "Cement",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FBuilding_and_Construction_Supplies%2FSteel02.jpg?alt=media&token=de8a6c6c-89ea-4be2-85b7-c12512396ce9",
        popularity: "270",
        price: "250",
        materialName: "Mild Steel Bar",
        materialCode: "STL002",
        details: "type: MS, diameter: 10mm",
        category: "Steel",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FBuilding_and_Construction_Supplies%2FPipe02.jpg?alt=media&token=5cab8d33-7caa-4128-9989-8872ecdc9d0f",
        popularity: "230",
        price: "120",
        materialName: "Galvanized Steel Pipe",
        materialCode: "PIP002",
        details: "type: GI, diameter: 3 inches",
        category: "Pipes",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FBuilding_and_Construction_Supplies%2FBrick03.jpg?alt=media&token=780379c7-523a-4ef3-ac74-3e099c70d061",
        popularity: "260",
        price: "70",
        materialName: "Concrete Block",
        materialCode: "BRK003",
        details: "type: hollow, size: 8x8x16 inches",
        category: "Bricks",
      },
    ],
  },
  {
    id: "6",
    title: "Cleaning Equipment",
    images:
      "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FShop%20By%20Categories%20main%20images%2FCleaning.png?alt=media&token=ca05bb98-9398-4f84-9b84-336d6d7aa15f",
    path: "/Cleaning_Equipment",
    categories: [
      "Vacuum Cleaners",
      "Floor Scrubbers",
      "Pressure Washers",
      "Mops",
      "Brooms",
      "All",
    ],
    product: [
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FCleaning_Equipment%2FVacuumCleaner01.jpg?alt=media&token=cf9194e3-141b-4d3e-adb7-292065e17e45",
        popularity: "320",
        price: "150",
        materialName: "Upright Vacuum Cleaner",
        materialCode: "VAC001",
        details: "power: 1200W, capacity: 2L",
        category: "Vacuum Cleaners",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FCleaning_Equipment%2FFloorScrubber01.jpg?alt=media&token=fa2f266a-8088-44c3-91f0-108a0f91d961",
        popularity: "280",
        price: "400",
        materialName: "Walk-Behind Scrubber",
        materialCode: "FSC001",
        details: "brush width: 20 inches, tank: 15L",
        category: "Floor Scrubbers",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FCleaning_Equipment%2FPressureWasher01.jpg?alt=media&token=3b3c3c12-70b3-4f2b-8a1a-c454e4f5d21a",
        popularity: "350",
        price: "250",
        materialName: "Electric Pressure Washer",
        materialCode: "PWA001",
        details: "pressure: 2000 PSI, flow: 1.4 GPM",
        category: "Pressure Washers",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FCleaning_Equipment%2FMop01.jpg?alt=media&token=f0d2c0b4-3a7c-4a3e-b873-1d0e1458e65e",
        popularity: "150",
        price: "20",
        materialName: "Microfiber Mop",
        materialCode: "MOP001",
        details: "head size: 18 inches, handle: metal",
        category: "Mops",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FCleaning_Equipment%2FBroom01.jpg?alt=media&token=09c4f1c9-6f9a-4c9f-8d2b-6b2a0c6a51d4",
        popularity: "120",
        price: "10",
        materialName: "Push Broom",
        materialCode: "BRO001",
        details: "bristle material: synthetic, width: 24 inches",
        category: "Brooms",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FCleaning_Equipment%2FVacuumCleaner02.jpg?alt=media&token=80b33b81-d250-424a-89a9-3992b1f845a7",
        popularity: "300",
        price: "180",
        materialName: "Canister Vacuum Cleaner",
        materialCode: "VAC002",
        details: "power: 1400W, capacity: 3L",
        category: "Vacuum Cleaners",
      },
    ],
  },
];

// --- Data Processing for a flat product list and unique categories ---
// 1. Flatten the product list
const ALL_PRODUCTS = SHOP_BY_CATEGORIES.flatMap((category) =>
  category.product.map((product) => ({
    ...product,
    // Add a unique ID for React keys and use a dummy rating for display
    id: `${product.materialCode}-${Math.floor(Math.random() * 1000)}`,
    rating: (Math.random() * (5.0 - 3.5) + 3.5).toFixed(1), // Random rating between 3.5 and 5.0
  }))
);

// 2. Collect all unique sub-categories
const ALL_SUB_CATEGORIES = [
  "All", // Always include the 'All' option first
  ...new Set(
    SHOP_BY_CATEGORIES.flatMap((category) =>
      category.product.map((product) => product.category)
    )
  ),
].filter((cat) => cat !== "All"); // Ensure 'All' is not duplicated if it was manually added to sub-category lists

// Final list of categories with 'All' at the start
const CATEGORY_LIST = ["All", ...ALL_SUB_CATEGORIES];

// --- ShopPage Component ---
export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentProducts, setCurrentProducts] = useState(
    ALL_PRODUCTS.slice(0, 10) // Show first 10 products on initial load
  );

  // Pagination states (Keeping them for completeness, though they are not used in the final filtered product list logic below)
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  // Filtering Logic
  useEffect(() => {
    let filteredProducts = ALL_PRODUCTS;

    if (activeCategory !== "All") {
      filteredProducts = ALL_PRODUCTS.filter(
        (product) => product.category === activeCategory
      );
    }

    // Filter to a maximum of 10 products
    setCurrentProducts(filteredProducts.slice(0, 10));
    setCurrentPage(1); // Reset to first page on category change
  }, [activeCategory]);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  // The rest of the pagination logic is now slightly simplified since we cap the filtered products at 10.
  // We can re-implement proper pagination if the cap of 10 is removed. For now, we only show up to 10.

  // NOTE: Pagination logic for productsPerPage is now skipped since we only show a max of 10 products (as requested)

  return (
    <>
      {/* <Header /> */}
      <main>
        {/* 🛠️ SHOP GRID SECTION - TITLE ADDED */}
        <section className="px-5 lg:px-20 py-16">
          <h2 className="text-3xl font-bold text-[#0a1529] mb-8 text-center">
            {activeCategory === "All"
              ? "All Products"
              : `${activeCategory} Products`}
          </h2>
        </section>

        {/* 🛠️ SHOP GRID SECTION - MODERN DESIGN */}
        <section className="px-5 lg:px-20 pb-20 flex flex-col lg:flex-row gap-10">
          {/* LEFT GRID */}
          <div className="container lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-3xl border border-gray-100 shadow-md hover:shadow-lg transition-all duration-500 flex flex-col overflow-hidden h-[380px]"
                data-aos="fade-up"
              >
                {/* 🖼️ IMAGE SECTION */}
                <div className="relative w-full h-[250px] bg-gray-50 flex items-center justify-center overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.materialName}
                    className="w-full h-full object-contain"
                  />
                  {/* Category Tag */}
                  <span className="absolute top-4 left-4 bg-gradient-to-r from-[#067afe] to-[#60a5fa] text-white text-xs px-3 py-1 rounded-full shadow-md">
                    {product.category}
                  </span>
                </div>

                {/* 🧾 CONTENT */}
                <div className="flex flex-col justify-between p-4 flex-grow">
                  <div>
                    <h3 className="text-base font-semibold text-[#0a1529] leading-tight line-clamp-2 mb-2">
                      {product.materialName}
                    </h3>
                    <div className="flex items-center justify-between text-sm">
                      {/* <span className="text-[#067afe] font-semibold">
                        ₹{product.price || "999"}
                      </span>
                      <span className="text-amber-400 flex items-center">
                        ⭐ {product.rating || 4.7}
                      </span> */}
                    </div>
                  </div>

                  {/* Add Button */}
                  <button className="mt-3 bg-[#067afe] hover:bg-[#055cd8] text-white text-sm font-medium py-2 rounded-full transition-all">
                    Add Now
                  </button>
                </div>
              </div>
            ))}
          </div>

 {/* RIGHT SIDEBAR (Scrollable categories) */}
  <aside className="w-full lg:w-1/4 h-[100vh] overflow-y-auto">
    <div className="bg-white p-6 rounded-3xl shadow-md border border-gray-100 sticky top-0">
      <h3 className="text-xl font-semibold text-[#0a1529] mb-4">
        Product Categories
      </h3>
      <ul className="space-y-2">
        {CATEGORY_LIST.map((cat) => (
          <li
            key={cat}
            onClick={() => handleCategoryClick(cat)}
            className={`px-4 py-2.5 rounded-full text-sm font-medium cursor-pointer border transition-all
              ${
                activeCategory === cat
                  ? "bg-[#067afe] text-white border-transparent shadow-md"
                  : "bg-gray-50 text-[#0a1529] border-gray-200 hover:bg-[#f0f6ff]"
              }`}
          >
            {cat}
          </li>
        ))}
      </ul>
    </div>
  </aside>
        </section>

        {/* Pagination placeholder (hidden for now as we cap products at 10) */}
        {/* If you remove the .slice(0, 10) in useEffect, you can re-enable and expand the pagination */}
        {/*
        <section className="flex justify-center py-10">
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300">Previous</button>
            <button className="px-4 py-2 bg-[#067afe] text-white rounded-full">1</button>
            <button className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300">Next</button>
          </div>
        </section>
        */}
      </main>
      {/* <Footer /> */}
    </>
  );
}
