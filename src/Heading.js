import React from 'react';
import PropTypes from 'prop-types';

const Heading = ({heading}) => {
    return(
        <h1>{heading}</h1>
    )
}
Heading.defaultProps = {
    heading: "this is a sample heading"
}
Heading.propTypes = {
    heading:PropTypes.string
};

export default Heading;