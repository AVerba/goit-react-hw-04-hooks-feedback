import React, { useState, useEffect } from 'react';

import { Container } from './Container';
import { Section } from './Section';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistic } from './Statistics';
import { Title } from './ui/Title';
import styles from './App.module.css';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbackHandler = event => {
    const name = event.target.name;
    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };
  const countTotalFeedback = () => {
    const result = good + neutral + bad;
    return result;
  };
  const countPositiveFeedbackPercentage = () => {
    const allGoals = countTotalFeedback();
    const positiveFeedback = Math.round((good * 100) / allGoals);
    return positiveFeedback;
  };

  const PositiveFeedbackPercent = countPositiveFeedbackPercentage();
  const options = ['good', 'neutral', 'bad'];
  const allGoal = countTotalFeedback();
  return (
    <Container className={styles.feedBack}>
      <Section className="options">
        <Title className="optionsBody" title="Please leave feedback" />
        <FeedbackOptions
          options={options}
          feedbackHandler={feedbackHandler}
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
};
