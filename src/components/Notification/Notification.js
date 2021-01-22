import React from 'react';

import PropTypes from 'prop-types';

import './Notification.css';

function Notification({message}) {
    return (
        <p className="notification">{message}</p>
    )
}

export default Notification;

Notification.defaultProps = {
    message: 'No message value',
}

Notification.propTypes = {
    message: PropTypes.string,
}