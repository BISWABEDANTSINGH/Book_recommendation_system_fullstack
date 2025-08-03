import React, { useState } from "react";

// Dummy data for demonstration
const allBooks = [
  // Free
  {
    name: "The Lost Jungle",
    title: "An epic adventure",
    price: 200,
    image: "./images/Adv1.jfif",
    category: "Free",
  },
  {
    name: "Ocean Depths",
    title: "Thrilling dive",
    price: 250,
    image: "./images/Adv2.jfif",
    category: "Free",
  },
  {
    name: "Fear Factor",
    title: "A psychological thriller",
    price: 400,
    image: "./images/th1.jfif",
    category: "Free",
  },

  // Fantasy
  {
    name: "Dragon's Quest",
    title: "Magic and mystery",
    price: 320,
    image: "./images/fantasy1.jfif",
    category: "Fantasy",
  },
  {
    name: "Elven Chronicles",
    title: "A journey through elven lands",
    price: 350,
    image: "./images/fantasy2.jfif",
    category: "Fantasy",
  },
  {
    name: "The Dark Tower",
    title: "Battle for the realm",
    price: 370,
    image: "./images/fantasy3.jfif",
    category: "Fantasy",
  },

  // Horror
  {
    name: "Nightmare Alley",
    title: "Horrors unleashed",
    price: 280,
    image: "./images/horror1.jfif",
    category: "Horror",
  },
  {
    name: "Ghost Whisperer",
    title: "Secrets of the dead",
    price: 300,
    image: "./images/horror2.jfif",
    category: "Horror",
  },
  {
    name: "The Haunting Hour",
    title: "Fear in the dark",
    price: 310,
    image: "./images/horror3.jfif",
    category: "Horror",
  },

  // Music
  {
    name: "Melody Makers",
    title: "Journey into sound",
    price: 220,
    image: "./images/music1.jfif",
    category: "Music",
  },
  {
    name: "Rhythm and Blues",
    title: "The heart of music",
    price: 230,
    image: "./images/music2.jfif",
    category: "Music",
  },
  {
    name: "Symphony Secrets",
    title: "Mastering the classics",
    price: 250,
    image: "./images/music3.jfif",
    category: "Music",
  },

  // Romance
  {
    name: "Love in Paris",
    title: "A romantic tale",
    price: 300,
    image: "./images/r1.jfif",
    category: "Romance",
  },
  {
    name: "Forever Yours",
    title: "A love story",
    price: 280,
    image: "./images/r2.jfif",
    category: "Romance",
  },
  {
    name: "Hearts Entwined",
    title: "Destined lovers",
    price: 290,
    image: "./images/r3.jfif",
    category: "Romance",
  },

  // Technology
  {
    name: "AI Revolution",
    title: "Future tech trends",
    price: 400,
    image: "./images/tech1.jfif",
    category: "Technology",
  },
  {
    name: "Coding Mastery",
    title: "Learn to code",
    price: 350,
    image: "./images/tech2.jfif",
    category: "Technology",
  },
  {
    name: "Cybersecurity 101",
    title: "Protect your data",
    price: 370,
    image: "./images/tech3.jfif",
    category: "Technology",
  },

  // Self-Help
  {
    name: "Mindfulness Guide",
    title: "Peace and clarity",
    price: 200,
    image: "./images/selfhelp1.jfif",
    category: "Self-Help",
  },
  {
    name: "Goal Crusher",
    title: "Achieve your dreams",
    price: 210,
    image: "./images/selfhelp2.jfif",
    category: "Self-Help",
  },
  {
    name: "Confidence Boost",
    title: "Believe in yourself",
    price: 220,
    image: "./images/selfhelp3.jfif",
    category: "Self-Help",
  },

  // History
  {
    name: "Ancient Empires",
    title: "World history overview",
    price: 300,
    image: "./images/history1.jfif",
    category: "History",
  },
  {
    name: "The Great War",
    title: "Tales from WWI",
    price: 320,
    image: "./images/history2.jfif",
    category: "History",
  },
  {
    name: "Revolutionary Times",
    title: "Change makers",
    price: 310,
    image: "./images/history3.jfif",
    category: "History",
  },

  // Finance
  {
    name: "Money Matters",
    title: "Personal finance basics",
    price: 280,
    image: "./images/finance1.jfif",
    category: "Finance",
  },
  {
    name: "Investment Guide",
    title: "Grow your wealth",
    price: 350,
    image: "./images/finance2.jfif",
    category: "Finance",
  },
  {
    name: "Retirement Planning",
    title: "Secure your future",
    price: 300,
    image: "./images/finance3.jfif",
    category: "Finance",
  },

  // Science Fiction
  {
    name: "Galactic Odyssey",
    title: "Space adventures",
    price: 400,
    image: "./images/scifi1.jfif",
    category: "Science Fiction",
  },
  {
    name: "Time Warp",
    title: "Time travel tales",
    price: 380,
    image: "./images/scifi2.jfif",
    category: "Science Fiction",
  },
  {
    name: "Alien Encounter",
    title: "First contact",
    price: 390,
    image: "./images/scifi3.jfif",
    category: "Science Fiction",
  },
];

function Cards({ item }) {
  const [showRecommendations, setShowRecommendations] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const toggleRecommendations = () => {
    setShowRecommendations(!showRecommendations);
  };

  const handleConfirmPayment = () => {
    alert("Payment Successful! (Simulated)");
    setShowPaymentModal(false);
  };

  const handleCancelPayment = () => {
    setShowPaymentModal(false);
  };

  const recommendedBooks = allBooks.filter(
    (book) => book.category === item.category && book.name !== item.name
  );

  return (
    <div className="mt-4 my-3 p-3 relative">
      <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
        <figure>
          <img src={item.image} alt={item.name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">${item.price}</div>
            <button
              className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200"
              onClick={() => setShowPaymentModal(true)}
            >
              Buy Now
            </button>
          </div>

          <button
            className="mt-2 text-sm text-blue-600 underline"
            onClick={toggleRecommendations}
          >
            {showRecommendations ? "Hide" : "Show"} Recommended Books
          </button>

          {showRecommendations && (
            <div className="mt-4 bg-gray-100 dark:bg-slate-800 p-3 rounded shadow-sm">
              <h3 className="font-semibold text-sm mb-2">
                Recommended in {item.category}:
              </h3>
              {recommendedBooks.length > 0 ? (
                recommendedBooks.map((book, index) => (
                  <div key={index} className="flex items-center mb-2 gap-3">
                    <img
                      src={book.image}
                      alt={book.name}
                      className="w-10 h-14 object-cover rounded"
                    />
                    <div>
                      <div className="text-sm font-medium">{book.name}</div>
                      <div className="text-xs text-gray-600 dark:text-gray-300">
                        ${book.price}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-600">No other books found.</p>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-lg text-center max-w-sm">
            <h2 className="text-lg font-bold mb-3">Confirm Payment</h2>
            <p className="mb-4">Do you want to pay ${item.price} for "{item.name}"?</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleConfirmPayment}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
              >
                Pay
              </button>
              <button
                onClick={handleCancelPayment}
                className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cards;
