import React, {Component} from 'react';

import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';

class App extends Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    handleIncrement = e => {
        this.setState((prevState) => {
            return {
                [e.target.name]: prevState[e.target.name] + 1,
            }
        })
    }

    countTotalFeedbacks() {
        const {good, neutral, bad} = this.state;
        const total = good + neutral + bad;
        return total ? total : 0;
    }

    countPositiveFeedbacksPercentage() {
        const {good} = this.state;
        const percent = Math.round((good/this.countTotalFeedbacks())*100);
        return percent;
    }

    render() {
        const {good, neutral, bad} = this.state;
        const totalFeedbacks = this.countTotalFeedbacks();
        const positivePercentage = this.countPositiveFeedbacksPercentage();
        return (
            <>
                <Section title="Please leave feedback">
                    <FeedbackOptions onLeaveFeedback={this.handleIncrement} />
                </Section>
                <Section title="Statistics">
                    {<Statistics good={good} neutral={neutral} bad={bad} total={totalFeedbacks} percentage={positivePercentage} />}
                </Section>
            </>
        )
    }
}

export default App;