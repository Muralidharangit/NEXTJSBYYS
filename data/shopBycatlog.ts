// types
export type Product = {
  image: string;
  materialName: string;
  category: string; // subcategory display name (e.g., "Harvester")
  price?: number | string;
  popularity?: number | string;
  materialCode?: string;
  details?: string;
};

export type ShopCategory = {
  id: string;
  title: string; // display title
  images: string;
  path: string; // url segment in your data (may have spaces/underscores/mixed case)
  categories: string[]; // subcategory display names (can include "All")
  product: Product[];
};

// uuu

export const SHOP_BY_CATEGORIES: ShopCategory[] = [

  {
    id: "8",
    title: "Fabrication & Customized Products",
    images:
      "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FShop%20By%20Categories%20main%20images%2FFabrication.png?alt=media&token=99131e98-21ed-450b-9b0b-ebaeed34ab97",
    path: "/Fabrication_Customized_Products",
    categories: [
      "Metal Fabrication",
      "Custom Furniture",
      "Welding Services",
      "Sheet Metal Work",
      "Customized Industrial Solutions",
      "All",
    ],
    product: [
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FFabrication_Customized_Products%2Fimage-540x600%20(4).jpg?alt=media&token=c4336aa8-8c8a-4e93-a8ab-a95b1fe34f4b", // Add the image URL here
        popularity: "240",
        price: "500",
        materialName: "Custom Steel Frame",
        materialCode: "FAB001",
        details: "type: steel, dimensions: 200x100cm, thickness: 5mm",
        category: "Metal Fabrication",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FFabrication_Customized_Products%2Fimage-540x600%20(3).jpg?alt=media&token=d2a74d96-0df2-4f31-b462-ff591e7a3572", // Add the image URL here
        popularity: "190",
        price: "1200",
        materialName: "Custom Wooden Desk",
        materialCode: "CST001",
        details: "type: oak wood, size: 120x60cm, finish: varnished",
        category: "Custom Furniture",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FFabrication_Customized_Products%2Fimage-540x600%20(2).jpg?alt=media&token=b3ddc724-9c85-48ec-8573-54bb92ebb792",
        popularity: "220",
        price: "300",
        materialName: "Aluminum Sheet Welding",
        materialCode: "WLD001",
        details: "type: aluminum, thickness: 3mm, service: welding",
        category: "Welding Services",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FFabrication_Customized_Products%2Fimage-540x600%20(1).jpg?alt=media&token=d9073dee-d1f7-4d91-b8d5-57288f955be0", // Add the image URL here
        popularity: "180",
        price: "400",
        materialName: "Stainless Steel Sheet",
        materialCode: "SHT001",
        details: "size: 100x100cm, thickness: 2mm, grade: 304",
        category: "Sheet Metal Work",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FFabrication_Customized_Products%2Fimage-540x600.jpg?alt=media&token=666cf721-83b1-49a8-a2d2-96e2e411bcab", // Add the image URL here
        popularity: "250",
        price: "1500",
        materialName: "Custom Industrial Conveyor",
        materialCode: "IND001",
        details: "type: conveyor system, length: 10m, material: stainless steel",
        category: "Customized Industrial Solutions",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FFabrication_Customized_Products%2Fimage-540x600%20(5).jpg?alt=media&token=603f0610-81c5-4d8a-b525-f769f040a113",
        popularity: "300",
        price: "700",
        materialName: "Metal Staircase",
        materialCode: "FAB002",
        details: "material: mild steel, dimensions: custom, finish: powder coated",
        category: "Metal Fabrication",
      },
    ],
  },
   {
    id: "33",
    title: "Wire Meshes & Perforated Sheets",
    images:
      "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FShop%20By%20Categories%20main%20images%2FWire.png?alt=media&token=141d561e-1740-4246-9e88-ec1d117198ec",
    path: "/Wire_Meshes_Perforated_Sheets",
    categories: [
      "Welded Wire Mesh",
      "Chain Link Fencing",
      "Expanded Metal Mesh",
      "Perforated Sheets",
      "Woven Wire Mesh",
      "All",
    ],
    product: [
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FWire%20Meshes%20%26%20Perforated%20Sheets%2FWoven%20Wire%20Mesh.jpg?alt=media&token=71fec911-aa03-4c53-8f6d-cd67a8cf5c8b", // Add the image URL here
        popularity: "380",
        price: "1500",
        materialName: "Welded Wire Mesh",
        materialCode: "WM001",
        details: "wire diameter: 2.5mm, mesh size: 50x50mm, sheet size: 4ft x 8ft",
        category: "Welded Wire Mesh",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FWire%20Meshes%20%26%20Perforated%20Sheets%2FChain%20Link%20Fencing.jpg?alt=media&token=f89a86c8-4adf-4b6d-845a-d9c31abf4ea5", // Add the image URL here
        popularity: "340",
        price: "1200",
        materialName: "Chain Link Fencing",
        materialCode: "WM002",
        details: "wire diameter: 3mm, height: 6ft, length: 25m",
        category: "Chain Link Fencing",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FWire%20Meshes%20%26%20Perforated%20Sheets%2FExpanded%20Metal%20Mesh.jpg?alt=media&token=78f7feb3-7895-4594-9d72-a7432ab4dca7", // Add the image URL here
        popularity: "300",
        price: "1800",
        materialName: "Expanded Metal Mesh",
        materialCode: "WM003",
        details: "thickness: 1.5mm, mesh size: 25x50mm, sheet size: 4ft x 8ft",
        category: "Expanded Metal Mesh",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FWire%20Meshes%20%26%20Perforated%20Sheets%2FPerforated%20Sheet.jpg?alt=media&token=7f387184-ef2f-424e-8ee7-68c09a816af5", // Add the image URL here
        popularity: "320",
        price: "2500",
        materialName: "Perforated Sheet",
        materialCode: "WM004",
        details: "thickness: 2mm, hole size: 5mm, sheet size: 4ft x 8ft",
        category: "Perforated Sheets",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FWire%20Meshes%20%26%20Perforated%20Sheets%2FWoven%20Wire%20Mesh.jpg?alt=media&token=71fec911-aa03-4c53-8f6d-cd67a8cf5c8b", // Add the image URL here
        popularity: "310",
        price: "1600",
        materialName: "Woven Wire Mesh",
        materialCode: "WM005",
        details: "wire diameter: 1.2mm, mesh size: 10x10mm, material: stainless steel",
        category: "Woven Wire Mesh",
      },
    ],
  },
  {
    id: "25",
    title: "Roofing Sheets",
    images:
      "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FShop%20By%20Categories%20main%20images%2FRoofing.png?alt=media&token=b8807994-81d7-4373-b8ea-46af66ca1d4a",
    path: "/Roofing_Sheets",
    categories: [
      "Corrugated Sheets",
      "Polycarbonate Sheets",
      "Metal Roofing Sheets",
      "Asphalt Sheets",
      "Fiber Cement Sheets",
      "All",
    ],
    product: [
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FRoofing_Sheets%2FCorrugated%20Sheet.jpg?alt=media&token=e5be93ee-7cf2-4256-b7d3-d7fa79cf5c9e", // Add the image URL here
        popularity: "310",
        price: "900",
        materialName: "Corrugated Sheet",
        materialCode: "CRS001",
        details: "material: galvanized steel, thickness: 0.5mm, length: 3m",
        category: "Corrugated Sheets",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FRoofing_Sheets%2FPolycarbonate%20Sheet.jpg?alt=media&token=ec7befad-f2a9-4e7c-8485-a9148f525abf",
        popularity: "280",
        price: "1200",
        materialName: "Polycarbonate Sheet",
        materialCode: "PCS001",
        details: "material: polycarbonate, thickness: 6mm, length: 2.5m",
        category: "Polycarbonate Sheets",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FRoofing_Sheets%2FMetal%20Roofing%20Sheet.jpg?alt=media&token=70ab89da-509b-47de-a3bc-10e83feca154",
        popularity: "350",
        price: "1500",
        materialName: "Metal Roofing Sheet",
        materialCode: "MRS001",
        details: "material: aluminum, thickness: 0.7mm, length: 4m",
        category: "Metal Roofing Sheets",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FRoofing_Sheets%2FAsphalt%20Sheet.jpg?alt=media&token=d120d07a-e8a0-4ffe-b8e3-921cf4945736",
        popularity: "270",
        price: "800",
        materialName: "Asphalt Sheet",
        materialCode: "ASP001",
        details: "material: bitumen, thickness: 2mm, length: 2m",
        category: "Asphalt Sheets",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FRoofing_Sheets%2FFiber%20Cement%20Sheet.jpg?alt=media&token=618f2b21-cd84-4f4e-90e7-1a791e57a8ee", // Add the image URL here
        popularity: "290",
        price: "1000",
        materialName: "Fiber Cement Sheet",
        materialCode: "FCS001",
        details: "material: fiber cement, thickness: 6mm, length: 3.5m",
        category: "Fiber Cement Sheets",
      },
    ],
  },
 {
    id: "16",
    title: "Mild Steel",
    images:
      "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FShop%20By%20Categories%20main%20images%2FMildSteel.png?alt=media&token=6f4bae50-bdc6-41b5-97a3-d4d76daa957b",
    path: "/Mild_Steel",
    categories: [
      "Mild Steel Plates",
      "Mild Steel Pipes",
      "Mild Steel Angles",
      "Mild Steel Rods",
      "Mild Steel Sheets",
      "All",
    ],
    product: [
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FMild_Steel%2FMild%20Steel%20Plate.jpg?alt=media&token=2476682e-6932-4a68-8dba-ca361ec2a875", // Add the image URL here
        popularity: "340",
        price: "500",
        materialName: "Mild Steel Plate",
        materialCode: "MS001",
        details: "thickness: 6mm, size: 2500x1250mm",
        category: "Mild Steel Plates",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FMild_Steel%2FMild%20Steel%20Pipe.jpg?alt=media&token=27b57caf-f7df-4537-b43e-19f48988e90a", // Add the image URL here
        popularity: "280",
        price: "100",
        materialName: "Mild Steel Pipe",
        materialCode: "MS002",
        details: "diameter: 50mm, length: 6m, thickness: 2.5mm",
        category: "Mild Steel Pipes",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FMild_Steel%2FMild%20Steel%20Angle.jpg?alt=media&token=f8c62dcc-10d6-446a-ba04-86ddfefa5832", // Add the image URL here
        popularity: "320",
        price: "200",
        materialName: "Mild Steel Angle",
        materialCode: "MS003",
        details: "size: 50x50mm, thickness: 5mm, length: 6m",
        category: "Mild Steel Angles",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FMild_Steel%2FMild%20Steel%20Rod.jpg?alt=media&token=04889ab9-aec7-481f-aa1d-ca5f56e51530", // Add the image URL here
        popularity: "260",
        price: "150",
        materialName: "Mild Steel Rod",
        materialCode: "MS004",
        details: "diameter: 16mm, length: 6m",
        category: "Mild Steel Rods",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FMild_Steel%2FMild%20Steel%20Sheet.jpg?alt=media&token=fc4d6975-b5d5-4f23-9063-f0ad82f3d640", // Add the image URL here
        popularity: "300",
        price: "400",
        materialName: "Mild Steel Sheet",
        materialCode: "MS005",
        details: "thickness: 4mm, size: 2500x1250mm",
        category: "Mild Steel Sheets",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FMild_Steel%2FMild%20Steel%20Hollow%20Section.jpg?alt=media&token=a4a64b9e-cf6e-4ba6-8414-7651871b0ddc", // Add the image URL here
        popularity: "310",
        price: "120",
        materialName: "Mild Steel Hollow Section",
        materialCode: "MS006",
        details: "size: 40x40mm, thickness: 2.5mm, length: 6m",
        category: "Mild Steel Pipes",
      },
    ],
  },
    {
    id: "29",
    title: "Stainless Steel Products",
    images:
      "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FShop%20By%20Categories%20main%20images%2FStainless.png?alt=media&token=c8a5796f-98f9-4f94-a543-9f57b95c98fd",
    path: "/Stainless_Steel_Products",
    categories: [
      "Stainless Steel Sheets",
      "Stainless Steel Pipes",
      "Stainless Steel Rods",
      "Stainless Steel Plates",
      "Stainless Steel Coils",
      "All",
    ],
    product: [
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FStainless_Steel_Products%2FStainless%20Steel%20Sheet.jpg?alt=media&token=a6b7290a-6cb4-4b44-9de4-df4117b12c88", // Add the image URL here
        popularity: "350",
        price: "2000",
        materialName: "Stainless Steel Sheet",
        materialCode: "SSS001",
        details: "grade: 304, thickness: 2mm, size: 4ft x 8ft",
        category: "Stainless Steel Sheets",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FStainless_Steel_Products%2FStainless%20Steel%20Pipe.jpg?alt=media&token=3129dd2a-9e30-4037-8b81-b435751e9d95", // Add the image URL here
        popularity: "300",
        price: "1500",
        materialName: "Stainless Steel Pipe",
        materialCode: "SSP001",
        details: "grade: 316, diameter: 50mm, length: 6m",
        category: "Stainless Steel Pipes",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FStainless_Steel_Products%2FStainless%20Steel%20Rod.jpg?alt=media&token=26a254bd-5ec5-4035-8e9f-969570aae0fa", // Add the image URL here
        popularity: "320",
        price: "1800",
        materialName: "Stainless Steel Rod",
        materialCode: "SSR001",
        details: "grade: 304, diameter: 25mm, length: 3m",
        category: "Stainless Steel Rods",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FStainless_Steel_Products%2FStainless%20Steel%20Plate.jpg?alt=media&token=2b9dda97-c0cb-4e5e-b337-0f9c62eede32", // Add the image URL here
        popularity: "290",
        price: "2200",
        materialName: "Stainless Steel Plate",
        materialCode: "SSP002",
        details: "grade: 316, thickness: 5mm, size: 5ft x 10ft",
        category: "Stainless Steel Plates",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FStainless_Steel_Products%2FStainless%20Steel%20Coil.jpg?alt=media&token=dcf72af1-6b59-4d13-84df-e522c921c726", // Add the image URL here
        popularity: "310",
        price: "2500",
        materialName: "Stainless Steel Coil",
        materialCode: "SSC001",
        details: "grade: 304, thickness: 1.2mm, width: 1000mm",
        category: "Stainless Steel Coils",
      },
    ],
  },
 {
    id: "21",
    title: "Plates, Sheets, Coils & Rounds",
    images:
      "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FShop%20By%20Categories%20main%20images%2FPlates.png?alt=media&token=438b9164-ff7b-4001-8902-5bde091f712d",
    path: "/Plates_Sheets_Coils_Rounds",
    categories: [
      "Steel Plates",
      "Aluminium Sheets",
      "Copper Coils",
      "Stainless Steel Rounds",
      "Brass Sheets",
      "All",
    ],
    product: [
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FPlates_Sheets_Coils_Rounds%2FSteel%20Plate.jpg?alt=media&token=9c91509a-a62d-4901-8f0e-ebbf17062ed9", // Add the image URL here
        popularity: "240",
        price: "1000",
        materialName: "Steel Plate",
        materialCode: "STP001",
        details: "thickness: 10mm, width: 1500mm, length: 3000mm",
        category: "Steel Plates",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FPlates_Sheets_Coils_Rounds%2FAluminium%20Sheet.jpg?alt=media&token=19196f7e-affc-4baf-91f9-f0d6757a8427", // Add the image URL here
        popularity: "300",
        price: "600",
        materialName: "Aluminium Sheet",
        materialCode: "ALS001",
        details: "thickness: 2mm, width: 1000mm, length: 2000mm",
        category: "Aluminium Sheets",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FPlates_Sheets_Coils_Rounds%2FCopper%20Coil.jpg?alt=media&token=fec8f439-5a9c-424a-a970-755901591745", // Add the image URL here
        popularity: "280",
        price: "1200",
        materialName: "Copper Coil",
        materialCode: "CPC001",
        details: "thickness: 1mm, width: 500mm, length: 100m",
        category: "Copper Coils",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FPlates_Sheets_Coils_Rounds%2FStainless%20Steel%20Round.jpg?alt=media&token=d873439b-8447-4d38-9c62-1a3dc6b94c33", // Add the image URL here
        popularity: "270",
        price: "900",
        materialName: "Stainless Steel Round",
        materialCode: "SSR001",
        details: "diameter: 50mm, length: 6m, grade: 304",
        category: "Stainless Steel Rounds",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FPlates_Sheets_Coils_Rounds%2FBrass%20Sheet.jpg?alt=media&token=9eb35a95-203d-470d-b438-5ff1a5d0e4ff", // Add the image URL here
        popularity: "260",
        price: "750",
        materialName: "Brass Sheet",
        materialCode: "BRS001",
        details: "thickness: 1.5mm, width: 1200mm, length: 2400mm",
        category: "Brass Sheets",
      },
    ],
  },
  {
    id: "18",
    title: "Non Ferrous Products",
    images:
      "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FShop%20By%20Categories%20main%20images%2FNonFerrousProducts.png?alt=media&token=06eccb48-4d87-4f89-8893-02318113e8b2",
    path: "/Non_Ferrous_Products",
    categories: [
      "Aluminium Sheets",
      "Copper Rods",
      "Brass Tubes",
      "Zinc Ingots",
      "Lead Plates",
      "All",
    ],
    product: [
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FNon_Ferrous_Products%2FAluminium%20Sheet.jpg?alt=media&token=e4e99a31-9f60-4240-981f-bf24d711e4ae", // Add the image URL here
        popularity: "250",
        price: "500",
        materialName: "Aluminium Sheet",
        materialCode: "ALU001",
        details: "thickness: 2mm, width: 1000mm, length: 2000mm",
        category: "Aluminium Sheets",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FNon_Ferrous_Products%2FCopper%20Rod.jpg?alt=media&token=61d684b8-9051-4afd-a1d6-a89a4980845e", // Add the image URL here
        popularity: "320",
        price: "700",
        materialName: "Copper Rod",
        materialCode: "COP001",
        details: "diameter: 10mm, length: 3m, purity: 99.9%",
        category: "Copper Rods",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FNon_Ferrous_Products%2FBrass%20Tube.jpg?alt=media&token=ee1240f7-ec10-4fab-b4cf-1a4f4141acbe", // Add the image URL here
        popularity: "290",
        price: "600",
        materialName: "Brass Tube",
        materialCode: "BRS001",
        details: "diameter: 25mm, wall thickness: 1.5mm, length: 2m",
        category: "Brass Tubes",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FNon_Ferrous_Products%2FZinc%20Ingot.jpg?alt=media&token=a3ec23c9-299f-4e1a-b44d-bbea93366441", // Add the image URL here
        popularity: "340",
        price: "800",
        materialName: "Zinc Ingot",
        materialCode: "ZNC001",
        details: "weight: 1kg, purity: 99.995%",
        category: "Zinc Ingots",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FNon_Ferrous_Products%2FLead%20Plate.jpg?alt=media&token=33e2c570-8f5e-4d59-b82d-0aa01d1635ee", // Add the image URL here
        popularity: "270",
        price: "900",
        materialName: "Lead Plate",
        materialCode: "LED001",
        details: "thickness: 3mm, width: 500mm, length: 1000mm",
        category: "Lead Plates",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FNon_Ferrous_Products%2FAluminium%20Sheets.jpg?alt=media&token=b41b5adb-d853-4987-8cc4-6be06dcdd812", // Add the image URL here
        popularity: "300",
        price: "650",
        materialName: "Aluminium Sheet",
        materialCode: "ALU002",
        details: "thickness: 3mm, width: 1200mm, length: 2500mm",
        category: "Aluminium Sheets",
      },
    ],
  },
  {
    id: "22",
    title: "Plumbing, Pipes & Fittings",
    images:
      "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FShop%20By%20Categories%20main%20images%2FPlumbing.png?alt=media&token=6918b001-a061-491a-97b8-fbfd9b58c172",
    path: "/Plumbing_Pipes_Fittings",
    categories: [
      "PVC Pipes",
      "Copper Fittings",
      "Steel Pipes",
      "Brass Valves",
      "Plastic Fittings",
      "All",
    ],
    product: [
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FPlumbing_Pipes_Fittings%2FPVC%20Pipe.jpg?alt=media&token=635f61cc-9548-4572-afb8-429e99ff6972", // Add the image URL here
        popularity: "220",
        price: "300",
        materialName: "PVC Pipe",
        materialCode: "PVC001",
        details: "diameter: 50mm, length: 6m, type: Schedule 40",
        category: "PVC Pipes",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FPlumbing_Pipes_Fittings%2FCopper%20Elbow%20Fitting.jpg?alt=media&token=49c56e9d-1ebf-49bc-8b00-9d7d6b619d36", // Add the image URL here
        popularity: "260",
        price: "150",
        materialName: "Copper Elbow Fitting",
        materialCode: "CPF001",
        details: "diameter: 20mm, angle: 90°, type: press fit",
        category: "Copper Fittings",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FPlumbing_Pipes_Fittings%2FSteel%20Pipe.jpg?alt=media&token=ab2e134a-dcdc-434c-9a16-921c449b9aa6",
        popularity: "300",
        price: "500",
        materialName: "Steel Pipe",
        materialCode: "STL001",
        details: "diameter: 100mm, length: 12m, type: seamless",
        category: "Steel Pipes",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FPlumbing_Pipes_Fittings%2FBrass%20Ball%20Valve.jpg?alt=media&token=74b6c5c3-42ab-4484-972d-26716ef4d4ac",
        popularity: "280",
        price: "400",
        materialName: "Brass Ball Valve",
        materialCode: "BBV001",
        details: "size: 25mm, type: full bore, pressure rating: PN16",
        category: "Brass Valves",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FPlumbing_Pipes_Fittings%2FPlastic%20Tee%20Fitting.jpg?alt=media&token=67906428-268f-4712-b558-821be99c7948", // Add the image URL here
        popularity: "240",
        price: "100",
        materialName: "Plastic Tee Fitting",
        materialCode: "PLT001",
        details: "diameter: 32mm, type: compression",
        category: "Plastic Fittings",
      },
    ],
  },
  {
    id: "24",
    title: "Railway Spares & Equipment",
    images:
      "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FShop%20By%20Categories%20main%20images%2FRailway.png?alt=media&token=a7ca7172-4d5a-426a-ba66-a193a89c55c8",
    path: "/Railway_Spares_Equipment",
    categories: [
      "Brake Blocks",
      "Rail Clips",
      "Fish Plates",
      "Railway Axles",
      "Track Bolts",
      "All",
    ],
    product: [
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FRailway_Spares_Equipment%2FBrake%20Block.jpg?alt=media&token=68c4710b-2cc3-4536-904a-04927cdb128a", // Add the image URL here
        popularity: "320",
        price: "1500",
        materialName: "Brake Block",
        materialCode: "BRB001",
        details: "material: cast iron, type: 6-hole, weight: 8kg",
        category: "Brake Blocks",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FRailway_Spares_Equipment%2FRail%20Clip.jpg?alt=media&token=1287adea-cd07-4f41-bbab-2dd776725f1d", // Add the image URL here
        popularity: "280",
        price: "800",
        materialName: "Rail Clip",
        materialCode: "RCL001",
        details: "material: forged steel, size: standard, type: E-clips",
        category: "Rail Clips",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FRailway_Spares_Equipment%2FFish%20Plate.jpg?alt=media&token=ee8c5fbe-ae02-407d-b157-2f7b6c5129a7", // Add the image URL here
        popularity: "300",
        price: "1200",
        materialName: "Fish Plate",
        materialCode: "FPL001",
        details: "material: carbon steel, length: 650mm, weight: 7.5kg",
        category: "Fish Plates",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FRailway_Spares_Equipment%2FRailway%20Axle.jpg?alt=media&token=4807e577-2aad-47b5-b259-6c46f8dd3e86", // Add the image URL here
        popularity: "350",
        price: "5000",
        materialName: "Railway Axle",
        materialCode: "RAX001",
        details: "material: forged steel, length: 2200mm, weight: 900kg",
        category: "Railway Axles",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FRailway_Spares_Equipment%2FTrack%20Bolt.jpg?alt=media&token=91ea0090-1dc8-4443-88ea-d0b36c21eec4", // Add the image URL here
        popularity: "270",
        price: "400",
        materialName: "Track Bolt",
        materialCode: "TRB001",
        details: "material: high tensile steel, size: M22, length: 100mm",
        category: "Track Bolts",
      },
    ],
  },
  {
    id: "32",
    title: "Welding & Accessories",
    images:
      "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FShop%20By%20Categories%20main%20images%2Fwelder.png?alt=media&token=02c8f65a-8ec0-4c38-b998-73df823dd149",
    path: "/Welding_Accessories",
    categories: [
      "Welding Machines",
      "Electrodes",
      "Welding Helmets",
      "Welding Cables",
      "Welding Rods",
      "All",
    ],
    product: [
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FWelding_Accessories%2FWelding%20Cable.jpg?alt=media&token=129b8102-6ac7-4872-8287-a60d03a9fc83", // Add the image URL here
        popularity: "400",
        price: "7500",
        materialName: "Inverter Welding Machine",
        materialCode: "WEL001",
        details: "power: 200A, input voltage: 220V, type: arc welding",
        category: "Welding Machines",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FWelding_Accessories%2FWelding%20Electrode.jpg?alt=media&token=7b0f49ce-c4b8-42e0-ab4a-8633e809beaa", // Add the image URL here
        popularity: "350",
        price: "1200",
        materialName: "Welding Electrode",
        materialCode: "WEL002",
        details: "diameter: 3.2mm, length: 350mm, material: mild steel",
        category: "Electrodes",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FWelding_Accessories%2FAuto-Darkening%20Welding%20Helmet.jpg?alt=media&token=943bd108-9b70-4f65-b33a-49d0d05b9507", // Add the image URL here
        popularity: "320",
        price: "1500",
        materialName: "Auto-Darkening Welding Helmet",
        materialCode: "WEL003",
        details: "viewing area: 100x50mm, response time: 1/10000 sec, adjustable shade",
        category: "Welding Helmets",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FWelding_Accessories%2FWelding%20Cable.jpg?alt=media&token=129b8102-6ac7-4872-8287-a60d03a9fc83", // Add the image URL here
        popularity: "310",
        price: "500",
        materialName: "Welding Cable",
        materialCode: "WEL004",
        details: "length: 10m, thickness: 25mm², material: copper",
        category: "Welding Cables",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FWelding_Accessories%2FWelding%20Rod.jpg?alt=media&token=693afbb3-9cd5-4b58-98ff-68f1df767afc", // Add the image URL here
        popularity: "330",
        price: "800",
        materialName: "Welding Rod",
        materialCode: "WEL005",
        details: "diameter: 2.5mm, length: 300mm, material: stainless steel",
        category: "Welding Rods",
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
        image: "/assets/images/products/Building_and_Construction_Supplies/Cement01.jpg",
        popularity: "300",
        price: "120",
        materialName: "Portland Cement",
        materialCode: "CEM001",
        details: "type: OPC, grade: 43",
        category: "Cement",
      },
      {
        // image: "/assets/images/products/Building_and_Construction_Supplies/Brick01.jpg",
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
        // image: "/assets/images/products/Building_and_Construction_Supplies/Steel01.jpg",
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
        // image: "/assets/images/products/Building_and_Construction_Supplies/Pipe01.jpg",
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
        // image: "/assets/images/products/Building_and_Construction_Supplies/Brick02.jpg",
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
        // image: "/assets/images/products/Building_and_Construction_Supplies/Cement02.jpg",
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
        // image: "/assets/images/products/Building_and_Construction_Supplies/Steel02.jpg",
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
        // image: "/assets/images/products/Building_and_Construction_Supplies/Pipe02.jpg",
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
        // image: "/assets/images/products/Building_and_Construction_Supplies/Brick03.jpg",
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
    id: "26",
    title: "Safety & PPE Supplies",
    images:
      "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FShop%20By%20Categories%20main%20images%2FSafety.png?alt=media&token=ae79946e-ab21-4413-ba1a-63decc9cbde6",
    path: "/Safety_PPE_Supplies",
    categories: [
      "Safety Helmets",
      "Gloves",
      "Safety Glasses",
      "Hearing Protection",
      "Respirators",
      "All",
    ],
    product: [
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FSafety_PPE_Supplies%2FSafety%20Helmet.jpg?alt=media&token=a36ccee8-b25a-4598-8f0e-23bdd52cce0d", // Add the image URL here
        popularity: "330",
        price: "500",
        materialName: "Safety Helmet",
        materialCode: "SFT001",
        details: "material: ABS, type: with chin strap, color: white",
        category: "Safety Helmets",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FSafety_PPE_Supplies%2FProtective%20Gloves.jpg?alt=media&token=82e963fb-6485-4e6e-876d-7b2ec68e3edf", // Add the image URL here
        popularity: "290",
        price: "100",
        materialName: "Protective Gloves",
        materialCode: "GLV001",
        details: "material: nitrile, size: large, type: chemical resistant",
        category: "Gloves",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FSafety_PPE_Supplies%2FSafety%20Glasses.jpg?alt=media&token=bf8ae6d0-291c-44b2-b62a-841c4c405049", // Add the image URL here
        popularity: "300",
        price: "200",
        materialName: "Safety Glasses",
        materialCode: "SGS001",
        details: "material: polycarbonate, type: anti-fog, UV protection",
        category: "Safety Glasses",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FSafety_PPE_Supplies%2FEar%20Muffs.jpg?alt=media&token=e6370f16-b7d5-49cd-8f4e-8bb9640e2977", // Add the image URL here
        popularity: "270",
        price: "150",
        materialName: "Ear Muffs",
        materialCode: "EAR001",
        details: "material: foam, noise reduction rating: 30dB, type: over-ear",
        category: "Hearing Protection",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FSafety_PPE_Supplies%2FRespirator%20Mask.jpg?alt=media&token=81f6ef70-1325-431c-87ad-54de815cb3aa", // Add the image URL here
        popularity: "310",
        price: "400",
        materialName: "Respirator Mask",
        materialCode: "RSP001",
        details: "material: silicone, type: half-mask, filter: P100",
        category: "Respirators",
      },
    ],
  },

// ghtg

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
        // image: "https://firebasestorage.googleapis.com//b/biyzze.appspot.com/o/website%2FAbrasive01.jpg?alt=media&token=ffab5d92-fd48-45ac-89d6-4758caa601b1",
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
        // image: "/assets/images/products/AgricultureGarden/harvester/harvester2.jpg",
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
        // image: "/assets/images/products/AgricultureGarden/harvester/harvester3.jpg",
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
        // image: "/assets/images/products/AgricultureGarden/brushcutter/brushcutter1.jpg",
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
        // image: "/assets/images/products/AgricultureGarden/brushcutter/brushcutter2.jpg",
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
        // image: "/assets/images/products/AgricultureGarden/brushcutter/brushcutter3.jpg",
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
        // image: "/assets/images/products/AgricultureGarden/Sprayers/sprayers1.jpg",
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
        // image: "/assets/images/products/AgricultureGarden/Sprayers/sprayers2.jpg",
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
        // image: "/assets/images/products/AgricultureGarden/Sprayers/sprayers3.jpg",
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
        // image: "/assets/images/products/AgricultureGarden/grainprocessingmachine/grainprocessingmachine1.jpg",
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
        // image: "/assets/images/products/AgricultureGarden/grainprocessingmachine/grainprocessingmachine2.jpg",
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
        // image: "/assets/images/products/AgricultureGarden/grainprocessingmachine/grainprocessingmachine3.jpg",
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
        // image: "/assets/images/products/AgricultureGarden/chaffcutter/chaffcutter1.jpg",
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
        // image: "/assets/images/products/AgricultureGarden/chaffcutter/chaffcutter2.jpg",
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
        // image: "/assets/images/products/AgricultureGarden/chaffcutter/chaffcutter3.jpg",
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
    // title: "Electrical / Air Coolers and Fans",
    title: "Abrasives, Adhesives & Sealants",
    images:
      "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FShop%20By%20Categories%20main%20images%2FAbrasivesc.png?alt=media&token=9925e0b1-e3bd-4968-9016-684f7c48305e",
    // path: "/aircoolersandfans",
    path: "/Abrasives_Adhesives_and_Sealants",
    // categories:["Aircoolers and Fans","Stabilizers","Cables and Wire"],
    categories: ["Abrasives", "Adhesives", "Sealants", "All"],
    product: [
      {
        // image: "/assets/images/products/Abrasives_Adhesives_and_Sealants/Abrasive01.jpg",
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
        // image: "/assets/images/products/Abrasives_Adhesives_and_Sealants/Abrasive02.jpg",
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
        // image: "/assets/images/products/Abrasives_Adhesives_and_Sealants/Abrasive03.jpg",
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
        // image: "/assets/images/products/Abrasives_Adhesives_and_Sealants/Adhesive01.jpg",
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
        // image: "/assets/images/products/Abrasives_Adhesives_and_Sealants/Adhesive02.jpg",
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
        // image: "/assets/images/products/Abrasives_Adhesives_and_Sealants/Sealant01.jpg",
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
        // image: "/assets/images/products/Abrasives_Adhesives_and_Sealants/Sealant02.jpg",
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
        // image: "/assets/images/products/Abrasives_Adhesives_and_Sealants/Sealant03.jpg",
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
    categories: ["Lubricants", "Engine Oils", "Brake Fluids", "Coolants", "All"],
    product: [
      {
        // image: "/assets/images/products/Automotive_Supplies_and_Lubricants/Lubricant01.jpg",
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
        // image: "/assets/images/products/Automotive_Supplies_and_Lubricants/Lubricant02.jpg",
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
        // image: "/assets/images/products/Automotive_Supplies_and_Lubricants/EngineOil01.jpg",
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
        // image: "/assets/images/products/Automotive_Supplies_and_Lubricants/BrakeFluid01.jpg",
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
        // image: "/assets/images/products/Automotive_Supplies_and_Lubricants/Coolant01.jpg",
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
        // image: "/assets/images/products/Automotive_Supplies_and_Lubricants/EngineOil02.jpg",
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
        // image: "/assets/images/products/Automotive_Supplies_and_Lubricants/BrakeFluid02.jpg",
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
        // image: "/assets/images/products/Automotive_Supplies_and_Lubricants/Lubricant03.jpg",
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
        // image: "/assets/images/products/Automotive_Supplies_and_Lubricants/Coolant02.jpg",
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
        // image: "/assets/images/products/Bearings_and_Power_Transmission/Bearing01.jpg",
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
        // image: "/assets/images/products/Bearings_and_Power_Transmission/Bearing02.jpg",
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
        // image: "/assets/images/products/Bearings_and_Power_Transmission/Belt01.jpg",
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
        // image: "/assets/images/products/Bearings_and_Power_Transmission/Chain01.jpg",
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
        // image: "/assets/images/products/Bearings_and_Power_Transmission/Coupling01.jpg",
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
        // image: "/assets/images/products/Bearings_and_Power_Transmission/Bearing03.jpg",
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
        // image: "/assets/images/products/Bearings_and_Power_Transmission/Belt02.jpg",
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
        // image: "/assets/images/products/Bearings_and_Power_Transmission/Chain02.jpg",
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
        // image: "/assets/images/products/Bearings_and_Power_Transmission/Coupling02.jpg",
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
    id: "6",
    title: "Cleaning Equipment",
    images:
      "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FShop%20By%20Categories%20main%20images%2FCleaning.png?alt=media&token=ca05bb98-9398-4f84-9b84-336d6d7aa15f",
    path: "/Cleaning_Equipment",
    categories: ["Vacuum Cleaners", "Floor Scrubbers", "Pressure Washers", "Mops", "Brooms", "All"],
    product: [
      {
        // image: "/assets/images/products/Cleaning_Equipment/VacuumCleaner01.jpg",
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
        // image: "/assets/images/products/Cleaning_Equipment/FloorScrubber01.jpg",
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FCleaning_Equipment%2FFloorScrubber01.jpg?alt=media&token=fa2f266a-8088-44c3-91f0-108a0f91d961",
        popularity: "280",
        price: "400",
        materialName: "Electric Floor Scrubber",
        materialCode: "SCR001",
        details: "power: 1500W, brush diameter: 17 inches",
        category: "Floor Scrubbers",
      },
      {
        // image: "/assets/images/products/Cleaning_Equipment/PressureWasher01.jpg",
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FCleaning_Equipment%2FPressureWasher01.jpg?alt=media&token=c67419e7-3958-4883-8228-376e3ea28d2d",
        popularity: "300",
        price: "350",
        materialName: "High Pressure Washer",
        materialCode: "PWR001",
        details: "pressure: 1500 PSI, water flow: 5L/min",
        category: "Pressure Washers",
      },
      {
        // image: "/assets/images/products/Cleaning_Equipment/Mop01.jpg",
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FCleaning_Equipment%2FMop01.jpg?alt=media&token=df74fc6a-fcd3-44a7-93d8-bb635599ad55",
        popularity: "220",
        price: "25",
        materialName: "Microfiber Mop",
        materialCode: "MOP001",
        details: "head material: microfiber, handle length: 1.5m",
        category: "Mops",
      },
      {
        // image: "/assets/images/products/Cleaning_Equipment/Broom01.jpg",
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FCleaning_Equipment%2FBroom01.jpg?alt=media&token=82f950ac-704f-404e-ab98-587d11aa89ed",
        popularity: "180",
        price: "15",
        materialName: "Soft Bristle Broom",
        materialCode: "BRM001",
        details: "bristle material: synthetic, handle length: 1.2m",
        category: "Brooms",
      },
      {
        // image: "/assets/images/products/Cleaning_Equipment/VacuumCleaner02.jpg",
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FCleaning_Equipment%2FVacuumCleaner02.jpg?alt=media&token=2674ead3-6b51-4ad2-9812-72d2dc6f6ed4",
        popularity: "400",
        price: "200",
        materialName: "Wet and Dry Vacuum Cleaner",
        materialCode: "VAC002",
        details: "power: 1400W, capacity: 5L",
        category: "Vacuum Cleaners",
      },
      {
        // image: "/assets/images/products/Cleaning_Equipment/FloorScrubber02.jpg",
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FCleaning_Equipment%2FFloorScrubber02.jpg?alt=media&token=066d8121-c14f-4446-ae1a-ad9ddd08cb5a",
        popularity: "310",
        price: "450",
        materialName: "Battery Operated Floor Scrubber",
        materialCode: "SCR002",
        details: "battery runtime: 2 hours, brush diameter: 20 inches",
        category: "Floor Scrubbers",
      },
      {
        // image: "/assets/images/products/Cleaning_Equipment/PressureWasher02.jpg",
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FCleaning_Equipment%2FPressureWasher02.jpg?alt=media&token=f0a2fb16-3bd8-4989-9443-69c50184dfc6",
        popularity: "270",
        price: "300",
        materialName: "Portable Pressure Washer",
        materialCode: "PWR002",
        details: "pressure: 1300 PSI, water flow: 4.5L/min",
        category: "Pressure Washers",
      },
      {
        // image: "/assets/images/products/Cleaning_Equipment/Mop02.jpg",
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FCleaning_Equipment%2FMop02.jpg?alt=media&token=89a634dc-b8a4-41c2-9b7e-84a4733bfe4e",
        popularity: "210",
        price: "20",
        materialName: "Spin Mop",
        materialCode: "MOP002",
        details: "head material: cotton, handle length: 1.4m",
        category: "Mops",
      },
      {
        // image: "/assets/images/products/Cleaning_Equipment/Broom02.jpg",
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FCleaning_Equipment%2FBroom02.jpg?alt=media&token=46e0612d-d580-40ad-b821-b3bf72404b28",
        popularity: "160",
        price: "12",
        materialName: "Angle Broom",
        materialCode: "BRM002",
        details: "bristle material: plastic, handle length: 1.3m",
        category: "Brooms",
      },
    ],
  },
  {
    id: "7",
    title: "Electricals & Electronics",
    images:
      "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FShop%20By%20Categories%20main%20images%2FElectricals.png?alt=media&token=8cbe235f-b135-406c-98b2-e57c94a773d0",
    path: "/Electricals_and_Electronics",
    categories: ["Wires & Cables", "Switches", "Sockets", "Circuit Breakers", "Lighting", "All"],
    product: [
      {
        // image: "/assets/images/products/Electricals_and_Electronics/Wire01.jpg",
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FElectricals_and_Electronics%2FWire01.jpg?alt=media&token=b29ee315-1825-47c3-ae70-2aca8fde274b",
        popularity: "250",
        price: "100",
        materialName: "Copper Electrical Wire",
        materialCode: "WIR001",
        details: "type: single core, length: 90m, gauge: 4mm",
        category: "Wires & Cables",
      },
      {
        // image: "/assets/images/products/Electricals_and_Electronics/Switch01.jpg",
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FElectricals_and_Electronics%2FSwitch01.jpg?alt=media&token=8e204da6-2dc1-435a-bc43-550b6869bf23",
        popularity: "180",
        price: "20",
        materialName: "Modular Switch",
        materialCode: "SWT001",
        details: "type: single pole, rating: 6A",
        category: "Switches",
      },
      {
        // image: "/assets/images/products/Electricals_and_Electronics/Socket01.jpg",
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FElectricals_and_Electronics%2FSocket01.jpg?alt=media&token=9fb1b860-a303-46a2-8c2a-09815a6bbc17",
        popularity: "210",
        price: "30",
        materialName: "Universal Power Socket",
        materialCode: "SCK001",
        details: "type: 3-pin, rating: 16A",
        category: "Sockets",
      },
      {
        // image: "/assets/images/products/Electricals_and_Electronics/CircuitBreaker01.jpg",
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FElectricals_and_Electronics%2FCircuitBreaker01.jpg?alt=media&token=3dac8a22-7371-4d44-a755-77fd2f0c402a",
        popularity: "270",
        price: "50",
        materialName: "Miniature Circuit Breaker (MCB)",
        materialCode: "CBK001",
        details: "type: single pole, rating: 10A",
        category: "Circuit Breakers",
      },
      {
        // image: "/assets/images/products/Electricals_and_Electronics/Lighting01.jpg",
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FElectricals_and_Electronics%2FLighting01.jpg?alt=media&token=07f53ae9-3e1e-40fa-9431-5b4176d5ff64",
        popularity: "320",
        price: "60",
        materialName: "LED Tube Light",
        materialCode: "LGT001",
        details: "length: 4 feet, power: 18W",
        category: "Lighting",
      },
      {
        // image: "/assets/images/products/Electricals_and_Electronics/Wire02.jpg",
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FElectricals_and_Electronics%2FWire02.jpg?alt=media&token=bc8d2f28-54b9-4aad-b1a2-8f12ee02a5d9",
        popularity: "300",
        price: "120",
        materialName: "Multi-core Cable",
        materialCode: "WIR002",
        details: "type: multi-core, length: 100m, gauge: 2.5mm",
        category: "Wires & Cables",
      },
      {
        // image: "/assets/images/products/Electricals_and_Electronics/Switch02.jpg",
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FElectricals_and_Electronics%2FSwitch02.jpg?alt=media&token=1ac9ca93-4617-4ee7-b13e-2147bdf7f7ab",
        popularity: "190",
        price: "25",
        materialName: "Touch Switch",
        materialCode: "SWT002",
        details: "type: capacitive, rating: 10A",
        category: "Switches",
      },
      {
        // image: "/assets/images/products/Electricals_and_Electronics/Socket02.jpg",
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FElectricals_and_Electronics%2FSocket02.jpg?alt=media&token=a38f2111-a689-45d6-bebc-dc1743b97a2d",
        popularity: "230",
        price: "35",
        materialName: "USB Power Socket",
        materialCode: "SCK002",
        details: "type: dual USB, rating: 5V, 2A",
        category: "Sockets",
      },
      {
        // image: "/assets/images/products/Electricals_and_Electronics/CircuitBreaker02.jpg",
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FElectricals_and_Electronics%2FCircuitBreaker02.jpg?alt=media&token=5a08ea88-b616-4e12-b79e-5697b30d7029",
        popularity: "300",
        price: "70",
        materialName: "Residual Current Circuit Breaker (RCCB)",
        materialCode: "CBK002",
        details: "type: 2-pole, rating: 30mA",
        category: "Circuit Breakers",
      },
      {
        // image: "/assets/images/products/Electricals_and_Electronics/Lighting02.jpg",
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FElectricals_and_Electronics%2FLighting02.jpg?alt=media&token=1b03b571-22fd-408e-af86-b0f958d3ef49",
        popularity: "350",
        price: "80",
        materialName: "LED Panel Light",
        materialCode: "LGT002",
        details: "size: 600x600mm, power: 36W",
        category: "Lighting",
      },
    ],
  },

  {
    id: "9",
    title: "Fasteners",
    images:
      "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FShop%20By%20Categories%20main%20images%2FFasteners.png?alt=media&token=b014d08c-ebd1-47c5-8797-cccd045b827d",
    path: "/Fasteners",
    categories: ["Bolts", "Nuts", "Screws", "Washers", "Anchors", "All"],
    product: [
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FFasteners%2FHex%20Bolt.jpg?alt=media&token=476edd64-db14-4693-90da-a044092370ce", // Add the image URL here
        popularity: "320",
        price: "10",
        materialName: "Hex Bolt",
        materialCode: "FST001",
        details: "size: M8, length: 50mm, material: stainless steel",
        category: "Bolts",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FFasteners%2FNylon%20Lock%20Nut.jpg?alt=media&token=553bc5f4-a3ea-4c07-8bf8-302600dbfa23", // Add the image URL here
        popularity: "290",
        price: "5",
        materialName: "Nylon Lock Nut",
        materialCode: "FST002",
        details: "size: M8, material: stainless steel with nylon insert",
        category: "Nuts",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FFasteners%2Fm3-x-10mm-phillips-pan-head-ss-304-screw-989140.jpg?alt=media&token=f7342290-4236-482b-9597-ec46d728c48f", // Add the image URL here
        popularity: "310",
        price: "8",
        materialName: "Phillips Head Screw",
        materialCode: "FST003",
        details: "size: M4, length: 30mm, material: carbon steel",
        category: "Screws",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FFasteners%2FFlat%20Washer.jpg?alt=media&token=9cd4fe70-9c56-40de-9b5c-45d9b33c31ab", // Add the image URL here
        popularity: "280",
        price: "2",
        materialName: "Flat Washer",
        materialCode: "FST004",
        details: "size: M8, outer diameter: 16mm, material: stainless steel",
        category: "Washers",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FFasteners%2FExpansion%20Anchor.jpg?alt=media&token=c4a77535-4870-40d1-a048-bdc7f7c5c85e", // Add the image URL here
        popularity: "270",
        price: "15",
        materialName: "Expansion Anchor",
        materialCode: "FST005",
        details: "size: M6, length: 50mm, material: galvanized steel",
        category: "Anchors",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FFasteners%2FWing%20Nut.jpg?alt=media&token=7d6608ce-feaa-4b71-ae8d-d3adf024de48", // Add the image URL here
        popularity: "350",
        price: "12",
        materialName: "Wing Nut",
        materialCode: "FST006",
        details: "size: M8, material: stainless steel, type: butterfly wing nut",
        category: "Nuts",
      },
    ],
  },
  {
    id: "10",
    title: "Hardware, Cutting & Hand Tools",
    images:
      "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FShop%20By%20Categories%20main%20images%2FHardware.png?alt=media&token=8a514928-addd-4cf6-8644-7cb0b7baf685",
    path: "/Hardware_Cutting_Hand_Tools",
    categories: ["Hammers", "Pliers", "Cutting Tools", "Saws", "Wrenches", "All"],
    product: [
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FHardware_Cutting_Hand_Tools%2FClaw%20Hammer.jpg?alt=media&token=231b206c-9c99-4d92-a165-17813942a6d4", // Add the image URL here
        popularity: "400",
        price: "20",
        materialName: "Claw Hammer",
        materialCode: "HCH001",
        details: "weight: 16oz, handle: fiberglass, head: steel",
        category: "Hammers",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FHardware_Cutting_Hand_Tools%2FCombination%20Pliers.jpg?alt=media&token=ae07f3a3-553b-46ac-870d-6498dbf71afc", // Add the image URL here
        popularity: "350",
        price: "15",
        materialName: "Combination Pliers",
        materialCode: "HCH002",
        details: "length: 8 inches, material: chrome-vanadium steel",
        category: "Pliers",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FHardware_Cutting_Hand_Tools%2FUtility%20Knife.jpg?alt=media&token=73ae214c-ea7c-444e-b3b2-b9166114039a", // Add the image URL here
        popularity: "380",
        price: "25",
        materialName: "Utility Knife",
        materialCode: "HCH003",
        details: "blade: retractable, length: 6 inches, material: stainless steel",
        category: "Cutting Tools",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FHardware_Cutting_Hand_Tools%2FHand%20Saw.jpg?alt=media&token=fcd8a72a-3031-4524-b2c2-855984e3c186", // Add the image URL here
        popularity: "290",
        price: "40",
        materialName: "Hand Saw",
        materialCode: "HCH004",
        details: "blade length: 18 inches, material: high-carbon steel, teeth per inch: 7",
        category: "Saws",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FHardware_Cutting_Hand_Tools%2FAdjustable%20Wrench.jpg?alt=media&token=81a8d11a-c17b-4e94-a4d7-1eeabfaa7ab3", // Add the image URL here
        popularity: "360",
        price: "30",
        materialName: "Adjustable Wrench",
        materialCode: "HCH005",
        details: "size: 12 inches, material: chrome-plated steel",
        category: "Wrenches",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FHardware_Cutting_Hand_Tools%2FHacksaw.jpg?alt=media&token=9724c360-efab-4e32-87b1-3e0a9ab3e98f", // Add the image URL here
        popularity: "370",
        price: "18",
        materialName: "Hacksaw",
        materialCode: "HCH006",
        details: "blade length: 12 inches, material: bi-metal, frame: steel",
        category: "Cutting Tools",
      },
    ],
  },
  {
    id: "11",
    title: "Hydraulics & Pneumatics",
    images:
      "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FShop%20By%20Categories%20main%20images%2FHydraulics.png?alt=media&token=5504d9c4-cba8-42c2-9dd3-72f32ec43767",
    path: "/Hydraulics_Pneumatics",
    categories: [
      "Hydraulic Cylinders",
      "Hydraulic Pumps",
      "Pneumatic Valves",
      "Air Compressors",
      "Hoses",
      "All",
    ],
    product: [
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FHydraulics_Pneumatics%2FHydraulic%20Cylinder.jpg?alt=media&token=f912c1b2-5cd7-4b4a-be0c-ea9e8262018e", // Add the image URL here
        popularity: "420",
        price: "150",
        materialName: "Hydraulic Cylinder",
        materialCode: "HPN001",
        details: "bore size: 100mm, stroke: 300mm, pressure: 2500 PSI",
        category: "Hydraulic Cylinders",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FHydraulics_Pneumatics%2FHydraulic%20Gear%20Pump.jpg?alt=media&token=ee2f64ac-c25d-45a5-98e6-9d6195a4346d", // Add the image URL here
        popularity: "380",
        price: "200",
        materialName: "Hydraulic Gear Pump",
        materialCode: "HPN002",
        details: "displacement: 16 cc/rev, max pressure: 3000 PSI, material: aluminum",
        category: "Hydraulic Pumps",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FHydraulics_Pneumatics%2FPneumatic%20Solenoid%20Valve.jpg?alt=media&token=c43eded8-886d-4f85-88d0-f35debb9d5dd", // Add the image URL here
        popularity: "340",
        price: "90",
        materialName: "Pneumatic Solenoid Valve",
        materialCode: "HPN003",
        details: "size: 1/4 inch, type: 2-way, voltage: 24V DC",
        category: "Pneumatic Valves",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FHydraulics_Pneumatics%2FAir%20Compressor.jpg?alt=media&token=0fdb6c57-ae79-451d-824f-c420aba51ad8", // Add the image URL here
        popularity: "400",
        price: "500",
        materialName: "Air Compressor",
        materialCode: "HPN004",
        details: "capacity: 50L, power: 2 HP, max pressure: 8 bar",
        category: "Air Compressors",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FHydraulics_Pneumatics%2FHydraulic%20Hose.jpg?alt=media&token=dab2408b-beb2-473e-80e9-ac403fe35b4f", // Add the image URL here
        popularity: "360",
        price: "40",
        materialName: "Hydraulic Hose",
        materialCode: "HPN005",
        details: "diameter: 3/8 inch, length: 10m, max pressure: 4000 PSI",
        category: "Hoses",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FHydraulics_Pneumatics%2FPneumatic%20Actuator.jpg?alt=media&token=f5acb00a-224f-42d8-bf70-f877cdda7dc6", // Add the image URL here
        popularity: "390",
        price: "130",
        materialName: "Pneumatic Actuator",
        materialCode: "HPN006",
        details: "type: double-acting, stroke: 50mm, bore: 32mm",
        category: "Pneumatic Valves",
      },
    ],
  },
  {
    id: "12",
    title: "IT Supplies",
    images:
      "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FShop%20By%20Categories%20main%20images%2FITSupplies.png?alt=media&token=37d6cd1f-304f-4054-a2a6-c846c3708cab",
    path: "/IT_Supplies",
    categories: ["Laptops", "Monitors", "Keyboards", "Printers", "Networking Devices", "All"],
    product: [
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FIT_Supplies%2FLaptop%20-%2015.6%20inch.jpg?alt=media&token=a09c2260-181c-47f8-8751-1314a40f1714", // Add the image URL here
        popularity: "450",
        price: "800",
        materialName: "Laptop - 15.6 inch",
        materialCode: "ITS001",
        details: "processor: Intel Core i7, RAM: 16GB, storage: 512GB SSD",
        category: "Laptops",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FIT_Supplies%2FLED%20Monitor%20-%2024%20inch.jpg?alt=media&token=d2e6b323-2e5c-4065-a3b2-f58e50aa6c07", // Add the image URL here
        popularity: "390",
        price: "200",
        materialName: "LED Monitor - 24 inch",
        materialCode: "ITS002",
        details: "resolution: 1080p, refresh rate: 75Hz, ports: HDMI, VGA",
        category: "Monitors",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FIT_Supplies%2FWireless%20Keyboard.jpg?alt=media&token=72860cdb-c6dd-4b00-9366-be1c9deb8778", // Add the image URL here
        popularity: "300",
        price: "30",
        materialName: "Wireless Keyboard",
        materialCode: "ITS003",
        details: "type: membrane, connectivity: wireless, battery life: 12 months",
        category: "Keyboards",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FIT_Supplies%2FLaser%20Printer.jpg?alt=media&token=a21350b3-b707-47fd-bec5-17da616afb35", // Add the image URL here
        popularity: "420",
        price: "150",
        materialName: "Laser Printer",
        materialCode: "ITS004",
        details: "type: monochrome, speed: 30 ppm, connectivity: USB, Wi-Fi",
        category: "Printers",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FIT_Supplies%2FRouter.jpg?alt=media&token=40414e0f-5989-4be6-8e3c-8dfdc41ccca3", // Add the image URL here
        popularity: "380",
        price: "100",
        materialName: "Router",
        materialCode: "ITS005",
        details: "type: dual-band, speed: up to 1200 Mbps, range: 1500 sqft",
        category: "Networking Devices",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FIT_Supplies%2FExternal%20Hard%20Drive.jpg?alt=media&token=71d7cd02-818f-4e35-903a-3b9dcdd48a7b", // Add the image URL here
        popularity: "350",
        price: "50",
        materialName: "External Hard Drive",
        materialCode: "ITS006",
        details: "capacity: 1TB, interface: USB 3.0, speed: 5400 RPM",
        category: "Networking Devices",
      },
    ],
  },

  {
    id: "13",
    title: "Lab Supplies",
    images:
      "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FShop%20By%20Categories%20main%20images%2Flab.png?alt=media&token=161c533d-26d9-4cc0-9e14-8c2995966348",
    path: "/Lab_Supplies",
    categories: [
      "Glassware",
      "Chemicals",
      "Instruments",
      "Protective Gear",
      "Measuring Devices",
      "All",
    ],
    product: [
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FLab_Supplies%2FBeaker%20-%20500ml.jpg?alt=media&token=8e9b5977-fc80-4e6b-9a78-756fc0c3111f", // Add the image URL here
        popularity: "320",
        price: "15",
        materialName: "Beaker - 500ml",
        materialCode: "LAB001",
        details: "material: borosilicate glass, capacity: 500ml, tolerance: ±5%",
        category: "Glassware",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FLab_Supplies%2FLaboratory%20Chemical%20-%20Sulfuric%20Acid.jpg?alt=media&token=83733d77-3f53-4f42-8475-3fabca9c4fed", // Add the image URL here
        popularity: "250",
        price: "80",
        materialName: "Laboratory Chemical - Sulfuric Acid",
        materialCode: "LAB002",
        details: "purity: 98%, volume: 1L, grade: analytical reagent (AR)",
        category: "Chemicals",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FLab_Supplies%2FCentrifuge%20Machine.jpg?alt=media&token=68de5c97-f478-4d96-992c-fe86c3cb45c9", // Add the image URL here
        popularity: "400",
        price: "300",
        materialName: "Centrifuge Machine",
        materialCode: "LAB003",
        details: "capacity: 8 tubes, speed: 4000 RPM, type: benchtop",
        category: "Instruments",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FLab_Supplies%2FLaboratory%20Gloves.jpg?alt=media&token=d6f50165-9a48-4842-8eaf-4c513965c1fe", // Add the image URL here
        popularity: "290",
        price: "25",
        materialName: "Laboratory Gloves",
        materialCode: "LAB004",
        details: "material: nitrile, size: large, quantity: 100 pieces",
        category: "Protective Gear",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FLab_Supplies%2FDigital%20pH%20Meter.jpg?alt=media&token=283fc828-774f-49fc-b3d6-273be550088c", // Add the image URL here
        popularity: "310",
        price: "120",
        materialName: "Digital pH Meter",
        materialCode: "LAB005",
        details: "range: 0-14 pH, accuracy: ±0.01 pH, display: digital",
        category: "Measuring Devices",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FLab_Supplies%2FTest%20Tube%20Rack.jpg?alt=media&token=1bcd4a4a-b36b-4f41-bc99-fd98ed4050e6", // Add the image URL here
        popularity: "350",
        price: "40",
        materialName: "Test Tube Rack",
        materialCode: "LAB006",
        details: "material: polypropylene, capacity: 50 tubes, type: autoclavable",
        category: "Glassware",
      },
    ],
  },
  {
    id: "14",
    title: "Luminaires, LEDs & Lights",
    images:
      "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FShop%20By%20Categories%20main%20images%2Fled.png?alt=media&token=e2b9293a-38f5-49ce-9d55-32725f06b9e7",
    path: "/Luminaires_LEDs_Lights",
    categories: [
      "LED Bulbs",
      "Tube Lights",
      "Panel Lights",
      "Street Lights",
      "Flood Lights",
      "All",
    ],
    product: [
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FLuminaires_LEDs_Lights%2FLED%20Bulb%20-%209W.jpg?alt=media&token=04398a41-2038-47c9-a667-13b60d41ac25", // Add the image URL here
        popularity: "400",
        price: "10",
        materialName: "LED Bulb - 9W",
        materialCode: "LGT001",
        details: "type: LED, power: 9W, color temperature: 6500K (Cool White)",
        category: "LED Bulbs",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FLuminaires_LEDs_Lights%2FLED%20Tube%20Light%20-%2018W.jpg?alt=media&token=e94ca251-819f-4081-a112-6c22356052c2", // Add the image URL here
        popularity: "320",
        price: "15",
        materialName: "LED Tube Light - 18W",
        materialCode: "LGT002",
        details: "length: 4 feet, power: 18W, color temperature: 4000K (Natural White)",
        category: "Tube Lights",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FLuminaires_LEDs_Lights%2FLED%20Panel%20Light.jpg?alt=media&token=ffd5ba5b-6625-4a74-ad18-cc8854e88020",
        popularity: "300",
        price: "80",
        materialName: "LED Panel Light",
        materialCode: "LGT003",
        details: "size: 600x600mm, power: 36W, installation: recessed",
        category: "Panel Lights",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FLuminaires_LEDs_Lights%2FLED%20Street%20Light.jpg?alt=media&token=266fae68-6426-4788-8035-c7e90e67eff5", // Add the image URL here
        popularity: "250",
        price: "120",
        materialName: "LED Street Light",
        materialCode: "LGT004",
        details: "power: 100W, IP rating: IP65, color temperature: 5700K",
        category: "Street Lights",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FLuminaires_LEDs_Lights%2FLED%20Flood%20Light.jpg?alt=media&token=d9bb2961-06b6-4cf0-a998-7786c5baf869", // Add the image URL here
        popularity: "350",
        price: "200",
        materialName: "LED Flood Light",
        materialCode: "LGT005",
        details: "power: 200W, IP rating: IP66, color temperature: 5000K",
        category: "Flood Lights",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FLuminaires_LEDs_Lights%2FSmart%20LED%20Bulb%20-%20RGB.jpg?alt=media&token=9862a6ce-5a76-4556-af10-dc919631b510", // Add the image URL here
        popularity: "390",
        price: "25",
        materialName: "Smart LED Bulb - RGB",
        materialCode: "LGT006",
        details: "power: 10W, smart control: Wi-Fi enabled, color changing: RGB",
        category: "LED Bulbs",
      },
    ],
  },
  {
    id: "15",
    title: "Material Handling & Packaging",
    images:
      "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FShop%20By%20Categories%20main%20images%2FPackaging.png?alt=media&token=d52af5c2-2df2-408d-89f9-96c65c9ea2d2",
    path: "/Material_Handling_Packaging",
    categories: ["Conveyor Belts", "Pallets", "Trolleys", "Stretch Wrap", "Packing Tape", "All"],
    product: [
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FMaterial_Handling_Packaging%2FConveyor%20Belt%20-%20Rubber.jpg?alt=media&token=e4449eb7-ac62-4cc8-ab19-bc3bd485c36d", // Add the image URL here
        popularity: "310",
        price: "150",
        materialName: "Conveyor Belt - Rubber",
        materialCode: "MHP001",
        details: "width: 800mm, material: rubber, length: 100m",
        category: "Conveyor Belts",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FMaterial_Handling_Packaging%2FPlastic%20Pallet.jpg?alt=media&token=74322995-9071-4170-96ac-0f645effa921", // Add the image URL here
        popularity: "220",
        price: "50",
        materialName: "Plastic Pallet",
        materialCode: "MHP002",
        details: "size: 1200x1000mm, material: HDPE, load capacity: 1000kg",
        category: "Pallets",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FMaterial_Handling_Packaging%2FHand%20Trolley.jpg?alt=media&token=3763e32b-1469-42d0-a14f-186b76fa0916", // Add the image URL here
        popularity: "270",
        price: "75",
        materialName: "Hand Trolley",
        materialCode: "MHP003",
        details: "load capacity: 300kg, wheel type: pneumatic, material: steel",
        category: "Trolleys",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FMaterial_Handling_Packaging%2FStretch%20Wrap%20-%20Clear.jpg?alt=media&token=af3d8bc9-7cc5-4fee-b556-b5848d5566cb", // Add the image URL here
        popularity: "340",
        price: "20",
        materialName: "Stretch Wrap - Clear",
        materialCode: "MHP004",
        details: "width: 500mm, length: 300m, thickness: 23 microns",
        category: "Stretch Wrap",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FMaterial_Handling_Packaging%2FPacking%20Tape%20-%20Brown.jpg?alt=media&token=2d121c96-50f4-4b93-9388-0a4fd0990344", // Add the image URL here
        popularity: "290",
        price: "10",
        materialName: "Packing Tape - Brown",
        materialCode: "MHP005",
        details: "width: 48mm, length: 100m, adhesive: acrylic",
        category: "Packing Tape",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FMaterial_Handling_Packaging%2FElectric%20Pallet%20Jack.jpg?alt=media&token=faad3f30-ac58-404a-8b9b-4d149747ef61", // Add the image URL here
        popularity: "250",
        price: "80",
        materialName: "Electric Pallet Jack",
        materialCode: "MHP006",
        details: "load capacity: 2000kg, battery: 24V, fork length: 1150mm",
        category: "Pallets",
      },
    ],
  },
 
  {
    id: "17",
    title: "Motors & Pumps",
    images:
      "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FShop%20By%20Categories%20main%20images%2FMotors.png?alt=media&token=3fc11b41-edcc-4add-9cf5-3ef5e1ab3481",
    path: "/Motors_and_Pumps",
    categories: [
      "Induction Motors",
      "Submersible Pumps",
      "Centrifugal Pumps",
      "Gear Motors",
      "Booster Pumps",
      "All",
    ],
    product: [
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FMotors_and_Pumps%2FInduction%20Motors.jpg?alt=media&token=2e55e3bf-1a36-42a3-b102-88d6b4748db9",
        popularity: "400",
        price: "1200",
        materialName: "Induction Motor",
        materialCode: "MOT001",
        details: "power: 1.5 kW, voltage: 380V, speed: 1440 rpm",
        category: "Induction Motors",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FMotors_and_Pumps%2FSubmersible%20Pump.jpg?alt=media&token=40ceb8a6-5e12-4033-99c1-5383bc3c0f82", // Add the image URL here
        popularity: "370",
        price: "1500",
        materialName: "Submersible Pump",
        materialCode: "PMP001",
        details: "capacity: 3 HP, head: 50m, flow: 200 LPM",
        category: "Submersible Pumps",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FMotors_and_Pumps%2FCentrifugal%20Pump.jpg?alt=media&token=cf749579-09d0-457d-847a-e02dc727620f", // Add the image URL here
        popularity: "420",
        price: "1800",
        materialName: "Centrifugal Pump",
        materialCode: "PMP002",
        details: "power: 2.2 kW, flow rate: 250 LPM, head: 30m",
        category: "Centrifugal Pumps",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FMotors_and_Pumps%2FGear%20Motor.jpg?alt=media&token=ab757f92-788b-44a1-b416-61395a5d29e0", // Add the image URL here
        popularity: "350",
        price: "2200",
        materialName: "Gear Motor",
        materialCode: "MOT002",
        details: "power: 2 kW, torque: 200 Nm, speed: 100 rpm",
        category: "Gear Motors",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FMotors_and_Pumps%2FBooster%20Pump.jpg?alt=media&token=93ef237b-dadb-4404-8fd4-54828edbe774", // Add the image URL here
        popularity: "330",
        price: "1300",
        materialName: "Booster Pump",
        materialCode: "PMP003",
        details: "capacity: 1 HP, flow rate: 180 LPM, head: 20m",
        category: "Booster Pumps",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FMotors_and_Pumps%2FInduction%20Motor.jpg?alt=media&token=d8f11800-2234-439c-92f8-e2de3fe20ec6", // Add the image URL here
        popularity: "390",
        price: "1600",
        materialName: "Induction Motor",
        materialCode: "MOT003",
        details: "power: 2 kW, voltage: 415V, speed: 1500 rpm",
        category: "Induction Motors",
      },
    ],
  },


  {
    id: "19",
    title: "Office Stationery & Admin Supplies",
    images:
      "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FShop%20By%20Categories%20main%20images%2FOfficeStationery.png?alt=media&token=fe85a2d2-01e6-4c4d-a942-577a15441968",
    path: "/Office_Stationery_Admin_Supplies",
    categories: ["Pens", "Notebooks", "Paper Clips", "Folders", "Staplers", "All"],
    product: [
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FOffice_Stationery_Admin_Supplies%2FBallpoint%20Pen.jpg?alt=media&token=997dbd61-f1e2-4f4a-b21b-92df23b470a0", // Add the image URL here
        popularity: "150",
        price: "50",
        materialName: "Ballpoint Pen",
        materialCode: "PEN001",
        details: "color: blue, pack size: 10 pens",
        category: "Pens",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FOffice_Stationery_Admin_Supplies%2FSpiral%20Notebook.jpg?alt=media&token=95b25f49-4ac7-477b-895b-b1da1ac7caf0", // Add the image URL here
        popularity: "200",
        price: "80",
        materialName: "Spiral Notebook",
        materialCode: "NBK001",
        details: "size: A4, pages: 200",
        category: "Notebooks",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FOffice_Stationery_Admin_Supplies%2FPaper%20Clips.jpg?alt=media&token=90a20757-f11f-4d3d-87d3-e9e6b75b71fa", // Add the image URL here
        popularity: "120",
        price: "20",
        materialName: "Paper Clips",
        materialCode: "CLP001",
        details: "size: 28mm, pack size: 100 clips",
        category: "Paper Clips",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FOffice_Stationery_Admin_Supplies%2FDocument%20Folder.jpg?alt=media&token=faf8f3ec-c7f0-41f2-9e40-dd221b01d130", // Add the image URL here
        popularity: "180",
        price: "150",
        materialName: "Document Folder",
        materialCode: "FLD001",
        details: "material: plastic, capacity: 500 sheets",
        category: "Folders",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FOffice_Stationery_Admin_Supplies%2FHeavy-Duty%20Stapler.jpg?alt=media&token=c9e11f1a-7972-48be-a246-cb053bed51f7", // Add the image URL here
        popularity: "100",
        price: "120",
        materialName: "Heavy-Duty Stapler",
        materialCode: "STP001",
        details: "capacity: 50 sheets, color: black",
        category: "Staplers",
      },
    ],
  },
  {
    id: "20",
    title: "Paints, Powders & Coatings",
    images:
      "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FShop%20By%20Categories%20main%20images%2FPaints.png?alt=media&token=3f5025fa-3a07-4ebe-80e1-df7ebe63d970",
    path: "/Paints_Powders_Coatings",
    categories: [
      "Acrylic Paints",
      "Powder Coatings",
      "Epoxy Paints",
      "Polyurethane Paints",
      "Primer Coatings",
      "All",
    ],
    product: [
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FPaints_Powders_Coatings%2FAcrylic%20Paint.jpg?alt=media&token=7a7da424-85e2-48e6-9f45-4d72c6a33e36", // Add the image URL here
        popularity: "220",
        price: "500",
        materialName: "Acrylic Paint",
        materialCode: "ACP001",
        details: "color: white, volume: 1L, type: water-based",
        category: "Acrylic Paints",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FPaints_Powders_Coatings%2FPowder%20Coating.jpg?alt=media&token=884eb8cf-7ecb-4482-8547-abbac70eab6c", // Add the image URL here
        popularity: "310",
        price: "700",
        materialName: "Powder Coating",
        materialCode: "PWC001",
        details: "color: black, weight: 5kg, type: polyester",
        category: "Powder Coatings",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FPaints_Powders_Coatings%2FEpoxy%20Paint.jpg?alt=media&token=c18cfe40-83d8-47b3-8725-573643e258ee", // Add the image URL here
        popularity: "260",
        price: "650",
        materialName: "Epoxy Paint",
        materialCode: "EPP001",
        details: "color: gray, volume: 2L, type: solvent-based",
        category: "Epoxy Paints",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FPaints_Powders_Coatings%2FPolyurethane%20Paint.jpg?alt=media&token=f8fdee7a-4aac-4fde-92c2-cd5e174d74e5", // Add the image URL here
        popularity: "270",
        price: "800",
        materialName: "Polyurethane Paint",
        materialCode: "PUP001",
        details: "color: red, volume: 1.5L, type: high gloss",
        category: "Polyurethane Paints",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FPaints_Powders_Coatings%2FPrimer%20Coating.jpg?alt=media&token=39b0f787-4e08-45cd-85c1-2c0b0e4964b2", // Add the image URL here
        popularity: "230",
        price: "400",
        materialName: "Primer Coating",
        materialCode: "PRC001",
        details: "color: gray, volume: 1L, type: anti-corrosion",
        category: "Primer Coatings",
      },
    ],
  },
 

  {
    id: "23",
    title: "Power Tools",
    images:
      "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FShop%20By%20Categories%20main%20images%2FPowerTools.png?alt=media&token=7d675026-1ac0-401d-b23a-1b75acdb107b",
    path: "/Power_Tools",
    categories: ["Drills", "Angle Grinders", "Saws", "Impact Wrenches", "Sanders", "All"],
    product: [
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FPower_Tools%2FCordless%20Drill.jpg?alt=media&token=d4c52ef6-ca46-48e2-9660-76670df1c369", // Add the image URL here
        popularity: "350",
        price: "1200",
        materialName: "Cordless Drill",
        materialCode: "DRL001",
        details: "power: 18V, battery: 2Ah, speed: 0-1500 RPM",
        category: "Drills",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FPower_Tools%2FAngle%20Grinder.jpg?alt=media&token=ca04557d-105d-4adc-bfae-715734524422", // Add the image URL here
        popularity: "310",
        price: "1000",
        materialName: "Angle Grinder",
        materialCode: "ANG001",
        details: "power: 850W, disc diameter: 115mm, speed: 12000 RPM",
        category: "Angle Grinders",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FPower_Tools%2FCircular%20Saw.jpg?alt=media&token=fc7f8328-fbbb-47b4-9bc7-ee87b1fa20e7", // Add the image URL here
        popularity: "280",
        price: "1500",
        materialName: "Circular Saw",
        materialCode: "SAW001",
        details: "power: 1400W, blade diameter: 185mm, cutting depth: 65mm",
        category: "Saws",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FPower_Tools%2FImpact%20Wrench.jpg?alt=media&token=f7e2d210-97fc-445a-8f4b-c76777e74b65", // Add the image URL here
        popularity: "300",
        price: "2000",
        materialName: "Impact Wrench",
        materialCode: "IMP001",
        details: "power: 18V, torque: 400Nm, speed: 0-2300 RPM",
        category: "Impact Wrenches",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FPower_Tools%2FOrbital%20Sander.jpg?alt=media&token=f8639ef0-7710-46d5-a00f-0e5a1f78d32f", // Add the image URL here
        popularity: "270",
        price: "800",
        materialName: "Orbital Sander",
        materialCode: "SND001",
        details: "power: 300W, speed: 12000 OPM, pad size: 125mm",
        category: "Sanders",
      },
    ],
  },

 



  {
    id: "27",
    title: "Security Equipment",
    images:
      "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FShop%20By%20Categories%20main%20images%2FSolar.png?alt=media&token=abfdc750-fdbe-47b2-8740-4f9cdc797f79",
    path: "/Security_Equipment",
    categories: [
      "CCTV Cameras",
      "Access Control Systems",
      "Alarm Systems",
      "Security Lights",
      "Metal Detectors",
      "All",
    ],
    product: [
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FSecurity_Equipment%2FCCTV%20Camera.jpg?alt=media&token=c1dfcbcf-f795-4837-8122-2677f484e213", // Add the image URL here
        popularity: "350",
        price: "2000",
        materialName: "CCTV Camera",
        materialCode: "CCTV001",
        details: "resolution: 1080p, type: dome, night vision: 30m",
        category: "CCTV Cameras",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FSecurity_Equipment%2FAccess%20Control%20System.jpg?alt=media&token=d10effca-4b29-4641-878b-90acbfd124db", // Add the image URL here
        popularity: "320",
        price: "1500",
        materialName: "Access Control System",
        materialCode: "ACS001",
        details: "type: fingerprint, capacity: 500 users, communication: TCP/IP",
        category: "Access Control Systems",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FSecurity_Equipment%2FBurglar%20Alarm%20System.jpg?alt=media&token=a0a7e1e1-df19-44c3-a627-d67577fd6c33", // Add the image URL here
        popularity: "300",
        price: "1000",
        materialName: "Burglar Alarm System",
        materialCode: "ALM001",
        details: "type: wireless, range: 100m, sensors: 5 included",
        category: "Alarm Systems",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FSecurity_Equipment%2FSecurity%20Light.jpg?alt=media&token=4c024dab-6038-408a-809c-4059f668f703", // Add the image URL here
        popularity: "270",
        price: "800",
        materialName: "Security Light",
        materialCode: "SGL001",
        details: "type: LED, wattage: 50W, motion sensor: included",
        category: "Security Lights",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FSecurity_Equipment%2FHandheld%20Metal%20Detector.jpg?alt=media&token=4015c7b3-689b-4043-8eb3-ca55dfc7101e", // Add the image URL here
        popularity: "310",
        price: "1200",
        materialName: "Handheld Metal Detector",
        materialCode: "MDT001",
        details: "type: handheld, sensitivity: adjustable, detection: 10cm",
        category: "Metal Detectors",
      },
    ],
  },
  {
    id: "28",
    title: "Solar Products",
    images:
      "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FShop%20By%20Categories%20main%20images%2FSolar.png?alt=media&token=abfdc750-fdbe-47b2-8740-4f9cdc797f79",
    path: "/Solar_Products",
    categories: [
      "Solar Panels",
      "Solar Inverters",
      "Solar Batteries",
      "Solar Charge Controllers",
      "Solar Lights",
      "All",
    ],
    product: [
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FSolar_Products%2FSolar%20Panel.jpg?alt=media&token=0e160e12-5c0a-4344-953c-c60f6b44bbf0", // Add the image URL here
        popularity: "400",
        price: "3000",
        materialName: "Solar Panel",
        materialCode: "SOL001",
        details: "power: 300W, type: monocrystalline, efficiency: 20%",
        category: "Solar Panels",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FSolar_Products%2FSolar%20Inverter.jpg?alt=media&token=8f4a3644-fb28-45fc-bc43-4da6414fa622", // Add the image URL here
        popularity: "350",
        price: "5000",
        materialName: "Solar Inverter",
        materialCode: "SIN001",
        details: "power: 5kW, type: grid-tied, voltage: 48V",
        category: "Solar Inverters",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FSolar_Products%2FSolar%20Battery.jpg?alt=media&token=e2f3f70e-ddea-4245-83cf-eda2659c0b47", // Add the image URL here
        popularity: "320",
        price: "2500",
        materialName: "Solar Battery",
        materialCode: "SBT001",
        details: "capacity: 200Ah, type: lithium-ion, voltage: 12V",
        category: "Solar Batteries",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FSolar_Products%2FSolar%20Charge%20Controller.jpg?alt=media&token=1a51c151-0158-42ee-9666-a0cc97781fee", // Add the image URL here
        popularity: "300",
        price: "1200",
        materialName: "Solar Charge Controller",
        materialCode: "SCC001",
        details: "type: MPPT, current: 40A, voltage: 12/24V",
        category: "Solar Charge Controllers",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FSolar_Products%2FSolar%20Street%20Light.jpg?alt=media&token=6b43f344-179e-40ad-bfc9-eba9af13aa41", // Add the image URL here
        popularity: "310",
        price: "1500",
        materialName: "Solar Street Light",
        materialCode: "SSL001",
        details: "power: 100W, battery: 150Ah, lighting time: 12 hours",
        category: "Solar Lights",
      },
    ],
  },

  {
    id: "30",
    title: "Testing & Measuring Instruments",
    images:
      "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FShop%20By%20Categories%20main%20images%2FTesting.png?alt=media&token=4e5cab22-7f99-4cf9-8565-ec5fbb59cb53",
    path: "/Testing_Measuring_Instruments",
    categories: [
      "Multimeters",
      "Calipers",
      "Pressure Gauges",
      "Thermometers",
      "Sound Level Meters",
      "All",
    ],
    product: [
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FTesting_Measuring_Instruments%2FDigital%20Multimeter.jpg?alt=media&token=73083a7e-f4c0-49a4-9a2a-faf3cfc9818b", // Add the image URL here
        popularity: "340",
        price: "1500",
        materialName: "Digital Multimeter",
        materialCode: "TMI001",
        details: "type: digital, range: 600V AC/DC, accuracy: ±0.5%",
        category: "Multimeters",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FTesting_Measuring_Instruments%2FVernier%20Caliper.jpg?alt=media&token=5adb90eb-1a9c-45f2-8a2d-654bf760f279", // Add the image URL here
        popularity: "300",
        price: "1200",
        materialName: "Vernier Caliper",
        materialCode: "TMI002",
        details: "material: stainless steel, range: 0-150mm, accuracy: ±0.02mm",
        category: "Calipers",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FTesting_Measuring_Instruments%2FPressure%20Gauge.jpg?alt=media&token=cf8bfbbd-d54d-4c89-b64b-c304a7429d25", // Add the image URL here
        popularity: "320",
        price: "1000",
        materialName: "Pressure Gauge",
        materialCode: "TMI003",
        details: "range: 0-100 psi, dial size: 2.5 inches, connection: 1/4 inch NPT",
        category: "Pressure Gauges",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FTesting_Measuring_Instruments%2FInfrared%20Thermometer.jpg?alt=media&token=3327ece7-4fc9-41c6-86af-c6b151d6cd97", // Add the image URL here
        popularity: "310",
        price: "800",
        materialName: "Infrared Thermometer",
        materialCode: "TMI004",
        details: "range: -50°C to 550°C, accuracy: ±1°C, response time: 500ms",
        category: "Thermometers",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FTesting_Measuring_Instruments%2FSound%20Level%20Meter.jpg?alt=media&token=07e4ec94-7244-4e32-9dca-d4620173dde6", // Add the image URL here
        popularity: "280",
        price: "2500",
        materialName: "Sound Level Meter",
        materialCode: "TMI005",
        details: "range: 30-130 dB, accuracy: ±1.5 dB, type: digital",
        category: "Sound Level Meters",
      },
    ],
  },
  {
    id: "31",
    title: "Tooling & Cutting",
    images:
      "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FShop%20By%20Categories%20main%20images%2FTooling.png?alt=media&token=29491e42-e5d6-44f1-a631-5c34ce988dad",
    path: "/Tooling_Cutting",
    categories: ["Drill Bits", "Cutting Discs", "End Mills", "Taps & Dies", "Reamers", "All"],
    product: [
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FTooling_Cutting%2FHSS%20Drill%20Bit.jpg?alt=media&token=990ecf0e-c5b2-46a1-bdbc-466ec737a9ca", // Add the image URL here
        popularity: "360",
        price: "500",
        materialName: "HSS Drill Bit",
        materialCode: "TNC001",
        details: "material: high-speed steel, diameter: 10mm, length: 150mm",
        category: "Drill Bits",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FTooling_Cutting%2FCutting%20Disc.jpg?alt=media&token=c0919119-ceee-4f51-83f0-a2b2ac447ba7", // Add the image URL here
        popularity: "320",
        price: "300",
        materialName: "Cutting Disc",
        materialCode: "TNC002",
        details: "diameter: 125mm, thickness: 1.2mm, material: aluminum oxide",
        category: "Cutting Discs",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FTooling_Cutting%2FCarbide%20End%20Mill.jpg?alt=media&token=38b9d26a-8b0a-4960-b6cf-31bdb0ea453a", // Add the image URL here
        popularity: "300",
        price: "1500",
        materialName: "Carbide End Mill",
        materialCode: "TNC003",
        details: "material: carbide, diameter: 8mm, length: 75mm",
        category: "End Mills",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FTooling_Cutting%2FTap%20%26%20Die%20Set.jpg?alt=media&token=86bfe022-bccc-4517-b719-44978e462c31", // Add the image URL here
        popularity: "290",
        price: "1200",
        materialName: "Tap & Die Set",
        materialCode: "TNC004",
        details: "material: alloy steel, thread size: M6-M12, pieces: 20",
        category: "Taps & Dies",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FshopByCategory%2FTooling_Cutting%2FHand%20Reamer.jpg?alt=media&token=62500a8c-2206-409a-97e4-6040e5b308a2", // Add the image URL here
        popularity: "310",
        price: "1800",
        materialName: "Hand Reamer",
        materialCode: "TNC005",
        details: "material: high-speed steel, diameter: 12mm, length: 200mm",
        category: "Reamers",
      },
    ],
  },

 
] as const;

// --- helpers ---
// Slug helpers (keeps routing stable no matter your data casing/underscores)
export const slugify = (s: string): string =>
  s
    .normalize("NFKD") // split diacritics
    .replace(/[\u0300-\u036f]/g, "") // remove diacritics
    .toLowerCase()
    .trim()
    .replace(/&/g, " and ") // avoid dropping '&' into nothing
    .replace(/[_\s]+/g, "-") // spaces/underscores -> hyphen
    .replace(/[^a-z0-9-]/g, "") // strip non-url chars
    .replace(/--+/g, "-") // collapse -- to -
    .replace(/^-+|-+$/g, ""); // trim leading/trailing -
const categoryMatchesSlug = (cat: ShopCategory, slug: string) =>
  slugify(cat.path || cat.title) === slugify(slug);

// ------------------------------------------------------
// API you’re importing in your pages

/** Find the main category by the URL slug (case/underscore agnostic). */
export function getMainBySlug(categorySlug: string): ShopCategory | null {
  const s = slugify(categorySlug);
  return SHOP_BY_CATEGORIES.find((c) => categoryMatchesSlug(c, s)) ?? null;
}

/** Get subcategories as {slug, name} tabs (All first). */
export function getSubcats(categorySlug: string): Array<{ slug: string; name: string }> {
  const main = getMainBySlug(categorySlug);
  if (!main) return [{ slug: "all", name: "All" }];

  const names = main.categories.filter((n) => n.toLowerCase() !== "all");
  const tabs = names.map((name) => ({ name, slug: slugify(name) }));
  return tabs; // you’ll add "All" in the page if you want it first
}

/** Filter products by category + sub-category (slug from ?sub=). */
export function filterProductsBy(categorySlug: string, subSlug: string): Product[] {
  const main = getMainBySlug(categorySlug);
  if (!main) return [];

  const sub = slugify(subSlug || "all");
  if (sub === "all") return main.product;

  // match by product.category display name → convert it to slug and compare
  return main.product.filter((p) => slugify(p.category) === sub);
}

// ------------------------------------------------------
// (Optional) helpers if you need all tabs ready in one call
export function getTabsWithAll(categorySlug: string): Array<{ slug: string; name: string }> {
  return [{ slug: "all", name: "All" }, ...getSubcats(categorySlug)];
}
