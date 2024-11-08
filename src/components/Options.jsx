const Options = ({updateVal, total, resetVal}) => {
    return (
        <div style={{display: "flex", gap: "10px", justifyContent: "center"}}>
            <button onClick={() => {updateVal('good')}}>Good</button>
            <button onClick={() => {updateVal('neutral')}}>Neutral</button>
            <button onClick={() => {updateVal('bad')}}>Bad</button>
            {total > 0 && <button onClick={resetVal}>Reset</button>}
        </div>
    );
};

export default Options;