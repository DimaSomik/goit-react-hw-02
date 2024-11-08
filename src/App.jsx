import './App.css'
import Options from './components/Options';
import Feedback from './components/Feedback';
import { useState } from 'react';
import { useEffect } from 'react';
import Notification from './components/Notification';

function App() {
  const [values, setValues] = useState(() => {
    const savedFeedback = localStorage.getItem('feedback');
    return savedFeedback
      ? JSON.parse(savedFeedback)
      : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(values));
  }, [values]);

  const updateFeedback = feedbackType => {
    setValues({
      ...values,
      [feedbackType]: values[feedbackType] + 1
    });
  };

  const resetAll = () => {
    setValues({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };
   
  const totalFeedback = values.good + values.neutral + values.bad;
  const positiveFeedback = Math.round(((values.good + values.neutral) / totalFeedback) * 100);

  return (
    <div>
      <h1>Sip Happens Café</h1>
      <p>Please leave your feedback about our service by selecting one of the options below.</p>
      <Options updateVal={updateFeedback}
               total={totalFeedback}
               resetVal={resetAll}/>
      {/* <Feedback  values={values}/> */}
      {totalFeedback > 0 ? 
      (<Feedback values={values}
                 total={totalFeedback}
                 percentage={positiveFeedback} />) :
      <Notification message={"No feedback yet"} />
      }
    </div>
  )
}

export default App
