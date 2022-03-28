import React from "react";

 const MOCKDATA = ["Apple", "Grapes", "Mango"];

const List = () => {
  const createList = (MockData) => {
    return MockData.map((value, index) => {
      return <li key={index}><h2>{value.name}</h2></li>
     });
  };
  return (
    <ul>
        {createList(MockData)}
        </ul>
  )
}
export default List;
