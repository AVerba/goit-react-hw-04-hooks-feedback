import React, { useState, useEffect } from 'react';

import { Container } from './Container';
import { Section } from './Section';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistic } from './Statistics';
import { Title } from './ui/Title';
import styles from './App.module.css';

export const App = () => {
  const [stats, setStats] = useState({ good: 0, neutral: 0, bad: 0 });
  const [totalStats, setTotalStats] = useState(0);
  const [positiveStats, setPositiveStats] = useState(0);

  useEffect(() => {
    const { good, neutral, bad } = stats;
    setTotalStats(good + neutral + bad);
  }, [stats]);

  useEffect(() => {
    if (totalStats)
      setPositiveStats(Math.floor((stats.good * 100) / totalStats));
  }, [totalStats, stats.good]);

  const feedbackHandler = event => {
    const name = event.target.name;
    setStats(stats => ({ ...stats, [name]: stats[name] + 1 }));
  };
  const options = Object.keys(stats);
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
        {totalStats ? (
          <>
            <Title className="statisticBody" title="Statistics" />
            <Statistic
              good={stats.good}
              bad={stats.bad}
              neutral={stats.neutral}
              total={totalStats}
              positivePercentage={positiveStats}
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
