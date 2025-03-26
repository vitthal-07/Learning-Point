import React from "react";

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">
        About Learning Point
      </h1>
      <p className="text-gray-700 text-lg text-center mb-6">
        Learning Point is an educational platform designed to simplify technical
        education. Our goal is to provide high-quality courses and tutorials on
        various subjects, including Web Development, Data Structures, AI, and
        Cyber Security.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-4 border border-gray-300 rounded-lg">
          <h2 className="text-xl font-semibold text-blue-500">Our Mission</h2>
          <p className="text-gray-600 mt-2">
            To make learning accessible and engaging for everyone through
            structured tutorials, real-world projects, and interactive learning
            experiences.
          </p>
        </div>

        <div className="p-4 border border-gray-300 rounded-lg">
          <h2 className="text-xl font-semibold text-blue-500">What We Offer</h2>
          <p className="text-gray-600 mt-2">
            - Expert-led video tutorials <br />
            - Hands-on coding exercises <br />
            - Free and premium courses <br />- Career guidance and mentorship
          </p>
        </div>
      </div>

      <div className="text-center mt-6">
        <p className="text-gray-700">
          Join us on this journey of knowledge and skill-building!
        </p>
      </div>
    </div>
  );
};

export default About;
