import React, { useEffect, useState } from 'react'
const ArrayMethodsExample = () => {
const [searchTerm, setsearchTerm] = useState("")
const [filteredData, setFilterdData] = useState([])
const [findEmp, setfindEmp] = useState("") 
const [findedEmp, setFindedEmp] = useState("") 

const data= [
    { id: 1, name: "Alice", role: "Developer", age: 23,salary:10000 },
    { id: 2, name: "Bob", role: "Designer", age: 33,salary:12000 },
    { id: 3, name: "Charlie", role: "Manager", age: 43,salary:22000 },
    { id: 4, name: "Ravid", role: "Developer", age: 25,salary:21000 },
    { id: 5, name: "John", role: "Testing", age: 28,salary:31000},
    { id: 6, name: "Jlice", role: "Developer" , age: 33,salary:24000},
    { id: 7, name: "Bob", role: "Designer" , age: 31,salary:33000},
    { id: 8, name: "Bharlie", role: "Manager" , age: 33,salary:31000},
    { id: 9, name: "David", role: "Developer" , age: 19,salary:12000},
    { id: 10, name: "Aohn", role: "Testing", age: 23,salary:14000}
]

//--------------------------------reduce method--------------------------------------------------r

const groupedByRole = data.reduce((acc, curr) => {
     if (!acc[curr.role]) { 
        acc[curr.role] = []; 
    }
     acc[curr.role].push(curr); return acc; 
    }, {});
     console.log(groupedByRole)

const totalSalary =data.reduce((currentValue,item) =>{
    return item.salary+currentValue;
} ,0);
console.log("totalSalary  :" ,totalSalary);


//--------------------------------filter method--------------------------------------------------r

useEffect(()=>{
    const results=data.filter((item)=>     
//--------------------------------include method--------------------------------------------------r

                item.name.toLowerCase().includes(searchTerm.toLowerCase())||           // includes is used to partial matching in the word
        item.role.toLowerCase().includes(searchTerm.toLowerCase())     
    );
setFilterdData(results);

return () => {
console.log(filteredData) 
 }

},[searchTerm]);
  
//------------------------forEach method----------------------------------------------

useEffect(() => {
  data.forEach((item) =>{                  
    console.log(`Hello ${item.name}, your role as a ${item.role} is very important to our team!`);
  })
  
}, [data])


// ------------------------some method---------------------------------------
const age = data.some((item)=>{             //its return boolean value
     return item.age < 30
});
console.log(age);

// ------------------------every method---------------------------------------

const age1 = data.every((item)=>{             //its check all ages should be less than 44  
    return item.age < 44
});
console.log(age1);

//-------------------find method---------------------------------
const handleSearch =() =>{
    const empRes = data.find((item) =>     
        item.name.toLowerCase() === findEmp.toLowerCase() );                     // === is used to exact match word only 
    setFindedEmp(empRes); 
 };
  return (
    <div>ArrayMethodsExample
    <h1>Employee Details</h1>
    <input type='text'placeholder='search by name or role' onChange={(e) => setsearchTerm(e.target.value)}  style={{padding:'10px'}}  />
    <input type='text'placeholder='find employee' onChange={(e) => setfindEmp(e.target.value)}  style={{padding:'10px', margin:'10px'}}  /> 
    <button onClick={handleSearch}>Find</button>
    {findedEmp ? (
  <h1>
    <strong>Name: </strong>{findedEmp.name} <br />
    <strong>Role: </strong>{findedEmp.role}
  </h1>
) : (
  <h1>No employee found</h1>
)}


    <ul>   {filteredData.length > 0 ? (
        //--------------------------map-----------------------------------
        filteredData.map((item) => (                    
            <li key={item.id} style={{textAlign:'left',padding:'10px', margin:'10px' }}> 
                <strong>Name :</strong>{item.name} <br/>
                <strong>Role :</strong>{item.role} 
            </li>
        ))
    ) :(<li>No results are found</li> )}
</ul>
    </div>
  )
}
export default ArrayMethodsExample;
