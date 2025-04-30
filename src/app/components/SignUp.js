"use client";

function SignupSection() {
  return (
    <section className="py-12 bg-blue-50">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">SIGN UP and get 25% OFF</h2>
        <p className="text-gray-700 mb-6">
          Sign up to our email to be the first to hear about latest trends, new arrivals, and exclusive offers. 
          You can unsubscribe at any time. <span className="underline">T&Cs apply</span>.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
          Sign me up
        </button>
      </div>
    </section>
  );
}

export default SignupSection;