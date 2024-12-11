import React from 'react';

const ReduceMethodsExample = () => {
  const data = [
    { id: 1, name: 'Alice', role: 'Developer' },
    { id: 2, name: 'Bob', role: 'Designer' },
    { id: 3, name: 'Charlie', role: 'Manager' },
    { id: 4, name: 'Ravid', role: 'Developer' },
    { id: 5, name: 'John', role: 'Testing' },
    { id: 6, name: 'Jlice', role: 'Developer' },
    { id: 7, name: 'Bob', role: 'Designer' },
    { id: 8, name: 'Bharlie', role: 'Manager' },
    { id: 9, name: 'David', role: 'Developer' },
    { id: 10, name: 'Aohn', role: 'Testing' },
  ];

  // Grouping employees by role using reduce
  const groupedByRole = data.reduce((acc, curr) => {
    if (!acc[curr.role]) {
      acc[curr.role] = [];
    }
    acc[curr.role].push(curr);
    return acc;
  }, {});

  return (
    <div>
      <h1>Employees Grouped by Role</h1>
      {Object.entries(groupedByRole).map(([role, employees]) => (
        <div key={role} style={{ marginBottom: '20px' }}>
          <h2>{role}</h2>
          <ul>
            {employees.map((employee) => (
              <li key={employee.id} style={{ textAlign: 'left', padding: '10px', margin: '10px' }}>
                <strong>Name: </strong> {employee.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ReduceMethodsExample;
