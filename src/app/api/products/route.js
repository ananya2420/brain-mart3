// app/api/products/route.js

export async function GET() {
    const products = [
      {
        name: "Grey Acid Wash Wide Leg Jogger",
        img: "/images/jogger-1.png",
        discountPercent: "26%",
        originalPrice: "BDT 290.00",
        discountedPrice: "BDT 215.00",
        spaces: "Sizes: 6 to 22"
      },
      // Add more mock products if needed
    ];
  
    return Response.json(products);
  }
  