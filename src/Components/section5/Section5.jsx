import React, { useState } from "react";

const Section5 = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);

    setSent(true);
    setTimeout(() => setSent(false), 3000);

    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>

        {/* LEFT SECTION */}
        <div style={styles.left}>
          <h1 style={styles.title}>Let's Connect</h1>
          <p style={styles.subtitle}>
            We’re here to answer your questions, collaborate, or start something new.
          </p>

          <div style={styles.infoBlock}>
            <p>📍 Gandhi Nagar, Delhi</p>
            <p>📧 hr@proxima.com</p>
            <p>📞 +1 (848) 997 9937</p>
          </div>
        </div>

        {/* RIGHT SECTION (FORM) */}
        <form onSubmit={handleSubmit} style={styles.right}>
          {sent && (
            <div style={styles.success}>Message Sent Successfully!</div>
          )}

          <div style={styles.fieldGroup}>
            <label style={styles.label}>Full Name</label>
            <input
              type="text"
              name="name"
              style={styles.input}
              value={form.name}
              onChange={handleChange}
              placeholder="John Doe"
              required
            />
          </div>

          <div style={styles.fieldGroup}>
            <label style={styles.label}>Email Address</label>
            <input
              type="email"
              name="email"
              style={styles.input}
              value={form.email}
              onChange={handleChange}
              placeholder="john@example.com"
              required
            />
          </div>

          <div style={styles.fieldGroup}>
            <label style={styles.label}>Phone Number</label>
            <input
              type="text"
              name="phone"
              style={styles.input}
              value={form.phone}
              onChange={handleChange}
              placeholder="+1 000 000 0000"
            />
          </div>

          <div style={styles.fieldGroup}>
            <label style={styles.label}>Message</label>
            <textarea
              name="message"
              style={styles.textarea}
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message..."
              required
            ></textarea>
          </div>

          <button style={styles.button} type="submit">
            Submit
          </button>
        </form>

      </div>
    </div>
  );
};

/* ==================================================
   FINAL RESPONSIVE INLINE CSS (GAP-FREE VERSION)
================================================== */

const styles = {
  wrapper: {
    width: "100%",
    background: "white",
    padding: "40px 20px",
    boxSizing: "border-box",
    display: "block", 
    overflowX: "hidden", 
  },

  card: {
    width: "100%",
    maxWidth: "1100px",
    background: "rgba(242, 234, 234, 0.87)",
    borderRadius: "16px",
    padding: "30px",
    margin: "0 auto",
    display: "flex",
    flexWrap: "wrap", 
    justifyContent: "space-between",
    gap: "20px",
    boxSizing: "border-box",
    overflowX: "hidden",
  },

  left: {
    flex: "1 1 300px",
    minWidth: "200px",   // FIXED (no more gap)
    color: "black",
  },

  right: {
    flex: "1 1 300px",
    minWidth: "200px",   // FIXED (no more gap)
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },

  title: {
    fontSize: "30px",
    fontWeight: "bold",
    marginBottom: "12px",
  },

  subtitle: {
    fontSize: "14px",
    marginBottom: "18px",
    lineHeight: "1.5",
    color: "#111010ee",
  },

  infoBlock: {
    fontSize: "14px",
    lineHeight: "1.6",
    color: "#151515e1",
  },

  fieldGroup: {
    display: "flex",
    flexDirection: "column",
  },

  label: {
    marginBottom: "5px",
    fontSize: "14px",
    fontWeight: "bold",
    color: "#171717de",
  },

  input: {
    padding: "10px 12px",
    borderRadius: "8px",
    background: "#f4ececdf",
    border: "1px solid #333",
    color: "black",
    fontSize: "14px",
  },

  textarea: {
    padding: "10px",
    height: "110px",
    borderRadius: "8px",
    background: "#f0e9e9dc",
    border: "1px solid #333",
    color: "black",
    fontSize: "14px",
  },

  button: {
    padding: "12px",
    background: "#007bff",
    borderRadius: "8px",
    color: "white",
    fontWeight: "600",
    border: "none",
    cursor: "pointer",
    fontSize: "15px",
  },

  success: {
    background: "green",
    color: "white",
    padding: "10px",
    borderRadius: "6px",
    textAlign: "center",
    marginBottom: "8px",
  },
};

export default Section5;
