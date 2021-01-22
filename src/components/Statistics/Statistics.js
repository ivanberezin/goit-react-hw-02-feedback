import React from 'react';

import PropTypes from 'prop-types';

import Notification from '../Notification/Notification';

const Statistics = ({good, neutral, bad, total, percentage}) => {
    return(
        <>
            { total > 0
                ? <ul className="statisticsView">
                    <li>Good: {good}</li>
                    <li>Neutral: {neutral}</li>
                    <li>Bad: {bad}</li>
                    <li>Total: {total}</li>
                    <li>Positive feedback: {percentage}%</li>
                </ul>
                : <Notification message="No feedback given" />
            }
        </>
    )
}

export default Statistics;

Statistics.defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
}

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
}