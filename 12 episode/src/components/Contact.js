import React, { useState } from 'react';

const Contact = () => {
  const [suggestion, setSuggestion] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (suggestion.trim()) {
      setResponseMessage('Thank you for your message!');
      setSuggestion('');
    } else {
      setResponseMessage('Please enter a suggestion before submitting!');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-8 my-[120px]">
      <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">Contact Us</h1>
        <div className="text-gray-700 mb-6">
          <p><strong>Developer Name:</strong> Rahul Yadav</p>
          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:rahulydv1227@gmail.com" className="text-blue-600">
              rahulydv1227@gmail.com
            </a>
          </p>
          <p>
            <strong>Phone:</strong>{' '}
            <a href="tel:+918869938463" className="text-blue-600">
              +91-8869938463
            </a>
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label htmlFor="suggestion" className="block text-gray-700 font-medium">
            Your Suggestion:
          </label>
          <textarea
            id="suggestion"
            name="suggestion"
            value={suggestion}
            onChange={(e) => setSuggestion(e.target.value)}
            rows="4"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your suggestion here..."
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition"
          >
            Submit Message
          </button>
        </form>
        {responseMessage && (
          <p
            className={`mt-4 ${
              responseMessage.includes('Thank you') ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {responseMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default Contact;
