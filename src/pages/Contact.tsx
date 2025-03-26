import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">
        Contact Us
      </h1>
      <p className="text-gray-700 text-lg text-center mb-6">
        Have any questions or feedback? Feel free to reach out to us!
      </p>

      <form className="space-y-4">
        <div>
          <label className="block text-gray-600 font-medium">Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-600 font-medium">Your Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-600 font-medium">
            Your Message
          </label>
          <textarea
            rows={4}
            placeholder="Write your message here..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>

      <div className="text-center mt-6">
        <p className="text-gray-700">
          You can also reach us at: <br />
          <strong>Email:</strong> support@learningpoint.com <br />
          <strong>Phone:</strong> +1 (123) 456-7890
        </p>
      </div>
    </div>
  );
};

export default Contact;
