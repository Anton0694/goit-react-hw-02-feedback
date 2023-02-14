import PropTypes from 'prop-types';
import {BtnContainer, Button} from './FeedbackOptions.styled'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (<BtnContainer>
        <h2>Please leave feedback</h2>
        {options.map((option) => (
            <Button type="button" onClick={()=> onLeaveFeedback(option)} >{option}</Button>
        ))}
             
            
        </BtnContainer>)
}

FeedbackOptions.propTypes = {
    option: PropTypes.string,
    onLeaveFeedback: PropTypes.func.isRequired,
};
