import React from "react";
import styles from "./index.module.css";

const Page = () => {
  return (
    <div
      className={styles.tweetContainer}
      style={{
        background: 'url("/images/bg-ocean-1.svg")',
        backgroundSize: "cover",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#ffffff",
        padding: "50px 20px",
        lineHeight: "1.6",
      }}
    >
      <div style={{ maxWidth: "800px", textAlign: "center", backgroundColor: "rgba(0, 0, 0, 0.5)", padding: "20px", borderRadius: "10px" }}>
        <h1 style={{ color: "#FFD700", fontSize: "4rem", marginBottom: "20px" }}>
          About Bitcoin Indonesia
        </h1>
        <p style={{ fontSize: "1.8rem", marginBottom: "30px" }}>
          Bitcoin Indonesia is a vibrant and growing community dedicated to Bitcoin enthusiasts and advocates across the country. Explore our events and learn more about us!
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              backgroundImage: 'url("https://example.com/bitcoin-event.jpg")', // Replace with actual Bitcoin event image URL
              backgroundSize: "cover",
              backgroundPosition: "center",
              padding: "20px",
              borderRadius: "10px",
              cursor: "pointer",
              transition: "transform 0.3s",
              color: "#ffffff",
            }}
            onClick={() => window.open("https://www.eventbrite.com/o/bitcoin-indonesia-77347246053", "_blank")}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <h3 style={{ color: "#FFD700", fontSize: "2rem" }}>Upcoming Events</h3>
            <p style={{ fontSize: "1.5rem" }}>Join our exciting Bitcoin meetups happening across 26 cities!</p>
          </div>
          <div
            style={{
              backgroundImage: 'url("https://example.com/bitcoin-website.jpg")', // Replace with actual Bitcoin website image URL
              backgroundSize: "cover",
              backgroundPosition: "center",
              padding: "20px",
              borderRadius: "10px",
              cursor: "pointer",
              transition: "transform 0.3s",
              color: "#ffffff",
            }}
            onClick={() => window.open("https://bitcoinindonesia.xyz", "_blank")}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <h3 style={{ color: "#FFD700", fontSize: "2rem" }}>Visit Bitcoin Indonesia</h3>
            <p style={{ fontSize: "1.5rem" }}>Learn more about our mission, vision, and values.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
