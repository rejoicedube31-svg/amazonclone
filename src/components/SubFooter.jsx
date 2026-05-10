
import React from "react";

const footerColumns = [
  [
    "Amazon Music",
    "Stream millions",
    "of songs",
    "",
    "Amazon Business",
    "Everything For",
    "Your Business",
    "",
    "IMDbPro",
    "Get Info",
    "Entertainment",
    "Professionals Need",
  ],
  [
    "Amazon Ads",
    "Reach customers",
    "wherever they",
    "spend their time",
    "",
    "AmazonGlobal",
    "Ship Orders",
    "Internationally",
    "",
    "Kindle Direct",
    "Publishing",
    "Indie Digital &",
    "Print Publishing",
    "Made Easy",
    "",
    "eero WiFi",
    "Stream 4K Video",
    "in Every Room",
  ],
  [
    "6pm",
    "Score deals",
    "on fashion brands",
    "",
    "Amazon Web",
    "Services",
    "Scalable Cloud",
    "Computing",
    "Services",
    "",
    "Prime Video Direct",
    "Video Distribution",
    "Made Easy",
    "",
    "Blink",
    "Smart Security",
    "for Every Home",
  ],
  [
    "AbeBooks",
    "Books, art",
    "& collectibles",
    "",
    "Audible",
    "Listen to Books &",
    "Original",
    "Audio",
    "Performances",
    "",
    "Shopbop",
    "Designer",
    "Fashion Brands",
    "",
    "Neighbors App",
    "Real-Time Crime",
    "& Safety Alerts",
  ],
  [
    "ACX",
    "Audiobook",
    "Publishing",
    "Made Easy",
    "",
    "Box Office Mojo",
    "Find Movie",
    "Box Office Data",
    "",
    "Woot!",
    "Deals and",
    "Shenanigans",
    "",
    "PillPack",
    "Pharmacy",
    "Simplified",
  ],
  [
    "Sell on Amazon",
    "Start a Selling",
    "Account",
    "",
    "Goodreads",
    "Book reviews",
    "&",
    "recommendations",
    "",
    "Zappos",
    "Shoes &",
    "Clothing",
  ],
  [
    "Veeqo",
    "Shipping Software",
    "Inventory",
    "Management",
    "",
    "IMDb",
    "Movies, TV",
    "& Celebrities",
    "",
    "Ring",
    "Smart Home",
    "Security Systems",
  ],
];

function FooterColumn({ lines }) {
  const groups = [];
  let current = [];

  lines.forEach((line) => {
    if (line === "") {
      if (current.length) groups.push(current);
      current = [];
    } else {
      current.push(line);
    }
  });

  if (current.length) groups.push(current);

  return (
    <div className="af-column">
      {groups.map((group, i) => (
        <a key={i} href="#" className="af-link">
          <strong>{group[0]}</strong>
          {group.slice(1).map((line, idx) => (
            <span key={idx}>{line}</span>
          ))}
        </a>
      ))}
    </div>
  );
}

export default function AmazonFooter() {
  return (
    <footer className="af-footer">
      <div className="af-top">
        <img
          src="https://pngimg.com/d/amazon_PNG11.png"
          alt="Amazon"
          className="af-logo"
        />

        <div className="af-controls">
          <button className="af-btn">🌐 English ▾</button>
          <button className="af-btn">ZAR South African Rand</button>
          <button className="af-btn">🇺🇸 United States</button>
        </div>
      </div>

      <div className="af-links-grid">
        {footerColumns.map((col, index) => (
          <FooterColumn key={index} lines={col} />
        ))}
      </div>

      <div className="af-bottom">
        <div className="af-bottom-links">
          <a href="#">Conditions of Use</a>
          <a href="#">Privacy Notice</a>
          <a href="#">Consumer Health Data Privacy Disclosure</a>
          <a href="#">Your Ads Privacy Choices</a>
        </div>
        <p>© 1996-2026, Amazon.com, Inc. or its affiliates</p>
      </div>
    </footer>
  );
}