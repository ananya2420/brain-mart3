

export async function GET() {
    const reviews = [
      {
        name: "Samantha D.",
        rating: 4.5,
        comment:
          "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
      },
      {
        name: "Alex M.",
        rating: 5,
        comment:
          "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up.",
      },
      {
        name: "Ethan R.",
        rating: 4.5,
        comment:
          "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect.",
      },
      {
        name: "Olivia P.",
        rating: 5,
        comment:
          "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear.",
      },
    ];
  
    return Response.json(reviews);
  }
  