import React, { useEffect, useState } from "react";

const ExampleFilterConcept2 = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [searchItem, setSearchItem] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const Employees = [
    {
      id: 1,
      name: "Raj",
      role: "Developer",
      dept: "IT",
      image: "authors/1.jpg",
    },
    {
      id: 2,
      name: "Taj",
      role: "Designer",
      dept: "Hr",
      image: "authors/2.jpg",
    },
    {
      id: 3,
      name: "Saj",
      role: "Manager",
      dept: "Finance",
      image: "authors/3.jpg",
    },
    {
      id: 4,
      name: "Gaj",
      role: "Tester",
      dept: "Admin",
      image: "authors/4.jpg",
    },
    {
      id: 5,
      name: "Raj",
      role: "Developer",
      dept: "IT",
      image: "authors/5.jpg",
    },
    { id: 6, name: "Taj", role: "Manager", dept: "Hr", image: "authors/6.jpg" },
    {
      id: 7,
      name: "Saj",
      role: "Designer",
      dept: "Finance",
      image: "authors/7.jpg",
    },
    {
      id: 8,
      name: "Gaj",
      role: "Manager",
      dept: "Admin",
      image: "authors/8.jpg",
    },
    {
      id: 9,
      name: "Raj",
      role: "Designer",
      dept: "IT",
      image: "authors/4.jpg",
    },
    {
      id: 10,
      name: "Taj",
      role: "Manager",
      dept: "Hr",
      image: "authors/2.jpg",
    },
    {
      id: 11,
      name: "Saj",
      role: "Designer",
      dept: "Finance",
      image: "authors/1.jpg",
    },
    {
      id: 12,
      name: "Gaj",
      role: "Designer",
      dept: "Admin",
      image: "authors/4.jpg",
    },
  ];

  useEffect(() => {
    let results = Employees;
    if (selectedDepartment !== "all") {
      results = results.filter((emp) => emp.dept === selectedDepartment);
    }
    if (searchItem !== "") {
      results = results.filter(
        (emp) =>
          emp.name.toLowerCase().includes(searchItem.toLowerCase()) ||
          emp.role.toLowerCase().includes(searchItem.toLowerCase())
      );
    }
    setFilteredData(results);
  }, [selectedDepartment, searchItem]);

  const handleFilterClick = (dept) => {
    setSelectedDepartment(dept);
  };


  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          margin: "10px",
          gap: "20px",
        }}
      >
        <button
          className="btn btn-primary"
          onClick={() => handleFilterClick("all")}
        >
          ALL
        </button>
        <button
          className="btn btn-primary"
          onClick={() => handleFilterClick("Hr")}
        >
          HR
        </button>
        <button
          className="btn btn-primary"
          onClick={() => handleFilterClick("IT")}
        >
          IT
        </button>
        <button
          className="btn btn-primary"
          onClick={() => handleFilterClick("Finance")}
        >
          FINANCE
        </button>
        <button
          className="btn btn-primary"
          onClick={() => handleFilterClick("Admin")}
        >
          ADMIN
        </button>
        <input
          type="text"
          placeholder="Search by name or role"
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
          style={{ padding: "10px", marginLeft: "10px", width: "250px" }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          textAlign: "left",
          gap: "20px",
        }}
      >
        {filteredData.map((employee) => (
          <div
            key={employee.id}
            style={{
              margin: "10px",
              width: "25%",
              padding: "20px",
              border: "2px solid red",
            }}
          >
            <h3>Emp Id: {employee.id}</h3>
            <h3>Emp Name: {employee.name}</h3>
            <h3>Emp Role: {employee.role}</h3>
            <h3>Emp Dept: {employee.dept}</h3>
            <h3>Emp Image: </h3>
            <img
              src={require(`../assets/img/${employee.image}`)}
              alt={employee.name}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default ExampleFilterConcept2;
