import React from "react";
import PropTypes from 'prop-types';

const MockData=[
    {
        'name':'WeekendOffer',
        'image':'https://images.takecdn.com/Cdn/production/Images/c8dc9c97-d178-49dd-8d9d-0cee38a0e834.jpg'
     },
     {
         'name':'WomensDayOffer',
         'image':'https://cdnblog.webkul.com/blog/wp-content/uploads/2020/04/224862-1.png'
     },
];
const Banner = ({title,value}) => {
    const createList=()=>{
        return MockData.map((value,index)=>{
            return <p key={index}><img src={value.image} alt={value.name} height="500px" width="100%"/></p>
        })
    }

return(
<>
<h1>{title}</h1>
<h5>{value}</h5>
{createList(MockData)}
</>
);
};
Banner.defaultProps={
    value:"Props Warning... expected number!"
}
Banner.propTypes={
    value:PropTypes.number
}
export default Banner;