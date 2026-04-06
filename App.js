import React, { useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [query, setQuery] = useState("");

  const mockResults = [
    {
      regulation: "All customer data must be encrypted at rest and in transit.",
      policy:
        "Customer data should be protected using industry-standard security measures.",
      status: "Gap Detected",
      severity: "High",
    },
    {
      regulation: "User consent must be obtained before data collection.",
      policy: "We collect user data to improve services.",
      status: "Partial Coverage",
      severity: "Medium",
    },
  ];

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>AI Legal Gap Analysis Dashboard</h1>

      <div style={{ marginBottom: 20 }}>
        <input
          style={{ padding: 10, width: "70%" }}
          placeholder="Search regulation or policy..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button style={{ padding: 10, marginLeft: 10 }}>Analyze</button>
      </div>

      <div>
        {mockResults.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              border: "1px solid #ccc",
              padding: 15,
              marginBottom: 10,
              borderRadius: 10,
            }}
          >
            <p><strong>Regulation:</strong> {item.regulation}</p>
            <p><strong>Policy:</strong> {item.policy}</p>

            <div style={{ marginTop: 10 }}>
              <strong>{item.status}</strong> | Severity: {item.severity}
            </div>

            <button style={{ marginTop: 10 }}>
              View Suggested Fix
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}