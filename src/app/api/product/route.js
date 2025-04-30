// app/api/products/route.js

export async function GET() {
    const product = [
      {
        name: "Grey Acid Wash Wide Leg Jogger",
        rating: 4.5,
        reviews: 212,
        colorOptions: ["black", "teal", "navy"],
        selectedColor: "Black",
        sizes: [6, 8, 10, 12, 14, 16, 18, 20, 22],
        selectedSize: 6,
        originalPrice: "BDT 290.00",
        discountedPrice: "BDT 215.00",
        discountPercent: "26%",
        image: "/images/payment.png"
      }
    ];
  
    return Response.json(product);
  }
  