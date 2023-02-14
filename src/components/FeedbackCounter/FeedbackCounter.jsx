import React from 'react';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Notification } from 'components/Statistics/Notification';

class FeedbackCounter extends React.Component {
   
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }
    
    handleFeedback = options => {
        this.setState(prevState => ({ [options]: prevState[options] + 1 }));
    }
    countTotalFeedback = () => {
        return this.state.bad + this.state.good + this.state.neutral;
    }
    countPositiveFeedbackPercentage = () => {
        return Math.floor(this.state.good / (this.state.good + this.state.neutral + this.state.bad) * 100)
    }

    render() {
        
        if (this.state.good > 0 || this.state.neutral > 0 || this.state.bad > 0) {
            return (
                <>
                    <FeedbackOptions options={['good', 'neutral', 'bad']}
                        onLeaveFeedback={this.handleFeedback}
                    />                
       
                    <Statistics
                        good={this.state.good}
                        neutral={this.state.neutral}
                        bad={this.state.bad}
                        total={this.countTotalFeedback()}
                        positivePercentage={this.countPositiveFeedbackPercentage()}
                    />
                </>
            )
        } else {
            return (
                <>
                    <FeedbackOptions options={['good', 'neutral', 'bad']}
                        onLeaveFeedback={this.handleFeedback} />
                    <Notification message={'There is no feedback'}></Notification>
                </>
            )
        }
    }

}


export default FeedbackCounter;