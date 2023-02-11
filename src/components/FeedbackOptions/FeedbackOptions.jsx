import 'components/FeedbackOptions/FeedbackOptions.css'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (<div className="BtnContainer">
        <h2>Please leave feedback</h2>
        {options.map((option) => (
            <button type="button" onClick={()=> onLeaveFeedback(option)} >{option}</button>
        ))}
             
            
        </div>)
}


