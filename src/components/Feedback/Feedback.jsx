import React from "react";
import { useState } from "react";
import { ButtonsFeedback } from "components/ButtonsFeedback/ButtonsFeedback";
import { Statistics } from "components/Statistics/Statistics";
import { Notification } from "components/Notification/Notification";
import s from "./Feedback.module.css";
import PropTypes from "prop-types";

function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBed] = useState(0);

  //number of clicks
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  //percentage of answers
  const countPositiveFeedbackPercentage = () => {
    return Math.round((good * 100) / countTotalFeedback()) || 0;
  };

  //+1 on click
  const leaveFeedback = (value) => {
    const feedbackButtonElement = (prevState) => prevState + 1;

    switch (value) {
      case "good":
        setGood(feedbackButtonElement);
        break;

      case "neutral":
        setNeutral(feedbackButtonElement);
        break;

      case "bad":
        setBed(feedbackButtonElement);
        break;

      default:
        return;
    }
  };

  return (
    <div className={s.feedback}>
      <h1 className={s.title}>Please leave feedback </h1>

      <ButtonsFeedback
        className={s.customBtn}
        options={["good", "neutral", "bad"]}
        onLeaveFeedback={leaveFeedback}
      />

      <section>
        {countTotalFeedback() === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positiveFeedback={countPositiveFeedbackPercentage()}
          />
        )}
      </section>
    </div>
  );
}

Feedback.propTypes = {
  Good: PropTypes.number,
  Neutral: PropTypes.number,
  Bad: PropTypes.number,
  total: PropTypes.number,
  positiveFeedback: PropTypes.number,
};

export { Feedback };
