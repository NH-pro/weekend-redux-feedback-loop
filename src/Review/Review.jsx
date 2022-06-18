import { useSelector } from "react-redux";
import axios from 'axios';

export default function Review() {
    const feelings = useSelector(storeInstance => storeInstance.feelingReducer);
    const understanding = useSelector(storeInstance => storeInstance.understandingReducer);
    const support = useSelector(storeInstance => storeInstance.supportReducer);
    const comments = useSelector(storeInstance => storeInstance.commentsReducer);

    const feedback = {
        feelings,
        understanding,
        support,
        comments
    };

    const submitFeedback = () => {
        axios.post('/feedback', feedback)
            .then(() => {
                console.log(`/feedback POST Success!`)
            })
            .catch(err => {
                console.log(`/feedback POST Failed!`, err);
            })
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