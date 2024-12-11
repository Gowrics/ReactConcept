import React, { useState, useEffect } from 'react';

const UseEffectFilterExample = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const data = [
    { id: 1, name: "Alice", role: "Developer" },
    { id: 2, name: "Bob", role: "Designer" },
    { id: 3, name: "Charlie", role: "Manager" },
    { id: 4, name: "David", role: "Developer" },
    { id: 5, name: "Ella", role: "Tester" },
  ];

  useEffect(() => {
    // Filter data based on the search term
    const results = data.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.role.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredData(results);

    console.log("Filtering data based on search term");

    // Cleanup function (optional, no cleanup needed here)
    return () => {
      console.log("Cleanup after filtering");
    };
  }, [searchTerm]); // Effect runs only when `searchTerm` changes

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Employee Search</h1>
      <input
        type="text"
        placeholder="Search by name or role..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: "10px",
          width: "80%",
          marginBottom: "20px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
      <ul style={{ listStyle: "none", padding: 0 }}>
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <li
              key={item.id}
              style={{
                padding: "10px",
                margin: "5px 0",
                border: "1px solid #ddd",
                borderRadius: "5px",
                textAlign: "left",
              }}
            >
              <strong>Name:</strong> {item.name} <br />
              <strong>Role:</strong> {item.role}
            </li>
          ))
        ) : (
          <li>No results found.</li>
        )}
      </ul>
    </div>
  );
};

export default UseEffectFilterExample;
