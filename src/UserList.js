import React from "react";

const MOCKDATA = [
  { name: "bhagya", id: 1, dept: "It", profileImage: "bhagya-dp.jpg" },
  { name: "navya", id: 2, dept: "accounts", profileImage: "navya-dp.jpg" },
  { name: "gowri", id: 3, dept: "finance", profileImage: "gowri-dp.jpg" }
];
const textStyle={
    display:'flex',
}
const UserList = () => {
  const createList = () => {
    return MOCKDATA.map((value, index) => {
      return (
        <li key={index}>
          <img src={value.profileImage} />
          <h2>{value.name}</h2>
          <h3>{value.id}</h3>
          <span>{value.dept}</span>
        </li>
      );
    });
  };
  return (<ul style={textStyle}>
      {createList(MockData)}</ul>
  )
};
export default UserList;
