import { useSelector } from "react-redux";
import axios from 'axios';
import { useHistory } from "react-router-dom";

export default function Review() {
    const feelings = useSelector(storeInstance => storeInstance.feelingReducer);
    const understanding = useSelector(storeInstance => storeInstance.understandingReducer);
    const support = useSelector(storeInstance => storeInstance.supportReducer);
    const comments = useSelector(storeInstance => storeInstance.commentsReducer);

    const history = useHistory();

    const feedback = {
        feelings,
        understanding,
        support,
        comments
    };

    const submitFeedback = () => {
        axios.post('/feedback', feedback)
            .then(() => {
                console.log(`/feedback POST Success!`, feedback);
            })
            .catch(err => {
                console.log(`/feedback POST Failed!`, err);
            })

        history.push('/thankYou');
    }

    return (
        <>
            <p>Feelings: {feelings}</p>
            <p>Understanding: {understanding}</p>
            <p>Support: {support}</p>
            <p>Comments: {comments}</p>
            <button onClick={submitFeedback}>Submit</button>
        </>
    )
};