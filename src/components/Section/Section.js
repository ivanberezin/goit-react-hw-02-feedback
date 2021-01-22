import React from 'react';

import PropTypes from 'prop-types';

import './Section.css';

function Section({title, children}) {
    return (
        <section className="section">
            {title && <h2 className="sectionTitle">{title}</h2>}
            {children}
        </section>
    );
}

export default Section;

Section.defaultProps = {
    title: '',
}

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
}