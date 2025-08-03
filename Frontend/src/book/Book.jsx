import React from "react";
import "./product_style.css";
import { Link, useLocation } from "react-router-dom";

const books = {
  Adventure: [
    { title: "Mountain Quest", src: "/images/Adv1.jfif", price: 200 },
    { title: "Jungle Trail", src: "/images/Adv2.jfif", price: 250 },
    { title: "Desert Storm", src: "/images/Adv3.jfif", price: 180 },
    { title: "River Run", src: "/images/Adv4.jfif", price: 460 },
    { title: "Lost Island", src: "/images/Adv5.jfif", price: 390 },
    { title: "Forest Call", src: "/images/adv7.jfif", price: 304 },
    { title: "Hidden Valley", src: "/images/adv8.jfif", price: 340 },
  ],
  Thriller: [
    { title: "Fear Factor", src: "/images/th1.jfif", price: 120 },
    { title: "Dark Secrets", src: "/images/th2.jfif", price: 402 },
    { title: "Mind Maze", src: "/images/th3.jfif", price: 299 },
    { title: "Twisted Fate", src: "/images/th4.jfif", price: 150 },
    { title: "Behind Shadows", src: "/images/th5.jfif", price: 300 },
    { title: "Silent Howl", src: "/images/th6.jfif", price: 389 },
    { title: "Vanished", src: "/images/th7.jfif", price: 269 },
    { title: "Crimson Truth", src: "/images/th8.jfif", price: 451 },
  ],
  Romantic: [
    { title: "Love in Paris", src: "/images/r1.jfif", price: 250 },
    { title: "Sweet Embrace", src: "/images/r2.jfif", price: 300 },
    { title: "Heartstrings", src: "/images/r3.jfif", price: 450 },
    { title: "Kiss in the Rain", src: "/images/r4.jfif", price: 299 },
    { title: "Valentine Vibes", src: "/images/r5.jfif", price: 105 },
    { title: "Forever Yours", src: "/images/r6.jfif", price: 199 },
    { title: "Endless Love", src: "/images/r7.jfif", price: 299 },
    { title: "Moonlit Date", src: "/images/r8.jfif", price: 349 },
  ],
  Comedy: [
    { title: "Laugh Riot", src: "/images/c1.jfif", price: 400 },
    { title: "Joke Junction", src: "/images/c2.jfif", price: 299 },
    { title: "Stand-up Storm", src: "/images/c3.jfif", price: 349 },
    { title: "Hilarious Hours", src: "/images/c4.jfif", price: 299 },
    { title: "Witty World", src: "/images/c5.jfif", price: 199 },
    { title: "Comic Timing", src: "/images/c6.jfif", price: 149 },
    { title: "Crazy Tales", src: "/images/c7.jfif", price: 349 },
    { title: "Laugh Lounge", src: "/images/c8.jfif", price: 250 },
  ],
};


function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Book = () => {
  const query = useQuery();
  const searchTerm = query.get("search")?.toLowerCase() || "";

  const filteredBooks = searchTerm
    ? Object.entries(books).reduce((acc, [category, items]) => {
        const matches = items.filter((book) =>
          book.title.toLowerCase().includes(searchTerm)
        );
        if (matches.length > 0) acc[category] = matches;
        return acc;
      }, {})
    : books;

  return (
    <div>
      <nav className="navbar">
        <div className="nav-right">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/Login">Login</Link></li>
          <li><Link to="/Signup">Create Account</Link></li>
        </div>
      </nav>

      <div className="section-body">
        <div className="vertical-nav">
          <ul>
            <h4>Category</h4>
            {Object.keys(books).map((category) => (
              <li key={category}>
                <a href={`#${category}`}>{category}</a>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="gallery-main"
          style={{ marginLeft: "25%", padding: "1px 16px", height: "1000px" }}
        >
          {Object.keys(filteredBooks).length === 0 ? (
            <h2>No books found</h2>
          ) : (
            Object.entries(filteredBooks).map(([category, items]) => (
              <div className={category} id={category} key={category}>
                <h2>{category}</h2>
                <div className="gallery">
                  {items.map((book, idx) => (
                    <div className="image-holder" key={idx}>
                      <a href="#">
                        <img src={book.src} alt={book.title} />
                      </a>
                      <div className="desc">
                        <strong>{book.title}</strong>
                        <br />
                        Price: {book.price}
                        <br />
                        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                        <button>Buy</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}

          <br />
          <Link to="/" className="btn">
            Back <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </Link>
          <Link to="/Book" className="btn">
            ShowMore <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Book;
