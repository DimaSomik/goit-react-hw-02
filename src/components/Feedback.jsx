const Feedback = ({values, total, percentage}) => {
    return (
        <div>
            <p>Good: {values.good}</p>
            <p>Neutral: {values.neutral}</p>
            <p>Bad: {values.bad}</p>
            <p>Total: {total}</p>
            <p>Positive: {percentage}%</p>
        </div>
    );
};

export default Feedback;