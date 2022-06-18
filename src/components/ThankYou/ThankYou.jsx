import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export default function ThankYou() {

    const dispatch = useDispatch();
    const history = useHistory();

    const startNewFeedback = () => {
        dispatch({
            type: 'RESET_STATE'
        })

        history.push('/');
    }

    return (
      <div>
        <h2>Thank You!</h2>
        <h3>Your feedback is important and appreciated.</h3>
        <button onClick={startNewFeedback}>Leave New Feedback</button>
      </div>
    )
};