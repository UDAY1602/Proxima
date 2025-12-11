import React, { useEffect, useState } from "react";

const Section6 = () => {

  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmall(window.innerWidth < 1200); // below 1200px → stack
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        overflowX: "hidden",
        background: "#0c0c0ce1"
      }}
    >

      {/* top section */}
      <div
        style={{
          ...styles.columns,
          flexDirection: isSmall ? "column" : "row",
          padding: isSmall ? "40px 20px" : "50px 400px",
          gap: isSmall ? "40px" : "300px",
          alignItems: isSmall ? "flex-start" : "center"
        }}
      >

        {/* Column 1 */}
        <div style={styles.col}>
          <h2 style={styles.companyName}>Proxima Tech</h2>
          <p style={styles.companyDesc}>
            Delivering advanced IT consulting and innovative technology solutions
            that empower businesses worldwide.
          </p>

          <button style={styles.learnBtn}>Learn More</button>
        </div>

        {/* Column 2 */}
        <div style={styles.col}>
          <h3 style={styles.colTitle}>Address</h3>

          <div style={styles.infoRow}>
            <span style={styles.icon}>📍</span>
            <p style={styles.infoText}>
              #501, Seasons By ISTA Homes,<br />
              Plot 544, Avenue-3, Road No.11,<br />
              Kakatiya Hills, Jubilee Hills,<br />
              Hyderabad, Telangana 500033
            </p>
          </div>

          <div style={styles.infoRow}>
            <span style={styles.icon}>📞</span>
            <p style={styles.infoText}>+91 98765 43210</p>
          </div>

          <div style={styles.infoRow}>
            <span style={styles.icon}>📧</span>
            <p style={styles.infoText}>contact@proximasolutions.com</p>
          </div>
        </div>

      </div>

      {/* divider */}
      <div
        style={{
          ...styles.divider,
          margin: isSmall ? "20px auto" : "40px 70px 20px 170px",
          maxWidth: isSmall ? "90%" : "1500px",
        }}
      ></div>

      {/* bottom row */}
      <div style={styles.bottomRow}>
        <p style={styles.copyright}>
          © {new Date().getFullYear()} Proxima Tech Solutions Pvt. Ltd. All Rights Reserved.
        </p>
      </div>

    </div>
  );
};

const styles = {
  columns: {
    width: "100%",
    maxWidth: "1000px",
    display: "flex",
    boxSizing: "border-box",
  },

  col: {
    display: "flex",
    flexDirection: "column",
  },

  companyName: {
    fontSize: "30px",
    fontWeight: "700",
    color: "#76ff7b",
    marginBottom: "10px",
  },

  companyDesc: {
    fontSize: "14px",
    color: "#fefbfbdb",
    lineHeight: "1.6",
    marginBottom: "18px",
  },

  learnBtn: {
    width: "150px",
    padding: "10px 16px",
    background: "#76ff7b",
    color: "#000",
    border: "none",
    borderRadius: "20px",
    fontWeight: "600",
    cursor: "pointer",
  },

  colTitle: {
    fontSize: "27px",
    fontWeight: "600",
    color: "#fefbfbdb",
    marginBottom: "12px",
  },

  infoRow: {
    display: "flex",
    alignItems: "flex-start",
    marginBottom: "10px",
  },

  icon: {
    fontSize: "18px",
    marginRight: "10px",
  },

  infoText: {
    fontSize: "14px",
    color: "#f6efefd8",
    lineHeight: "1.5",
  },

  divider: {
    height: "1px",
    background: "rgba(255,255,255,0.1)",
  },

  bottomRow: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    paddingBottom: "20px",
  },

  copyright: {
    fontSize: "18px",
    color: "#e2dadaeb",
  },
};

export default Section6;
