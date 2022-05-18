import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { Container } from './Container';
import { Section } from './Section';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistic } from './Statistics';
import { Title } from './ui/Title';
import styles from './App.module.css';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  feedbackHandler = event => {
    const name = event.target.name;
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const result = good + neutral + bad;
    return result;
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const allGoals = this.countTotalFeedback();
    const positiveFeedback = Math.round((good * 100) / allGoals);
    return positiveFeedback;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const key = Object.keys(this.state);
    const PositiveFeedbackPercent = this.countPositiveFeedbackPercentage();
    const allGoal = this.countTotalFeedback();
    return (
      <Container className={styles.feedBack}>
        <Section className="options">
          <Title className="optionsBody" title="Please leave feedback" />
          <FeedbackOptions
            options={key}
            feedbackHandler={this.feedbackHandler}
          ></FeedbackOptions>
        </Section>
        <Section className="statistic">
          {allGoal ? (
            <>
              <Title className="statisticBody" title="Statistics" />
              <Statistic
                good={good}
                bad={bad}
                neutral={neutral}
                total={allGoal}
                positivePercentage={PositiveFeedbackPercent}
              ></Statistic>
            </>
          ) : (
            <Title
              className="statisticNotification"
              title="There is no feedback"
            />
          )}
        </Section>
      </Container>
    );
  }
}
