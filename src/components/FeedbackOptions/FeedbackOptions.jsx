import 'components/FeedbackOptions/FeedbackOptions.css'
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (<div className="BtnContainer">
        <h2>Please leave feedback</h2>
        {options.map((option) => (
            <button type="button" onClick={()=> onLeaveFeedback(option)} >{option}</button>
        ))}
             
            
        </div>)
}

FeedbackOptions.propTypes = {
    option: PropTypes.string,
    onLeaveFeedback: PropTypes.func.isRequired,
};
