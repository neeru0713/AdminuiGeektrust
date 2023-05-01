
import React, { useState, useEffect } from 'react';


function Admintable(){
  const [data, setData] = useState([]);

  async function fetchData () {
    try {
      const response = await fetch(
        "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
      );
      const jsonData = await response.json();
      setData(jsonData);
      
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    fetchData();
  }, []);



  return (
    <table>
    <thead>
      <tr className="tablerows">
        <th>
          <input type="checkbox"></input>
        </th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody> 
        <tr>
          <td></td>
          <td>{data[0].id}</td>
          <td>{data[0].name}</td>
          <td>{data[0].email}</td>
          <td>{data[0].role}</td>
        </tr>
         
    </tbody>
  </table>
);
    
  
}

export default Admintable