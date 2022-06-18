import { useSelector } from "react-redux";

export default function Review() {
    const feelings = useSelector(storeInstance => storeInstance.feelingReducer);
    const understanding = useSelector(storeInstance => storeInstance.understandingReducer);
    const support = useSelector(storeInstance => storeInstance.supportReducer);
    const comments = useSelector(storeInstance => storeInstance.commentsReducer);


    return (
        <>
            <p>Feelings: {feelings}</p>
            <p>Understanding: {understanding}</p>
            <p>Support: {support}</p>
            <p>Comments: {comments}</p>
        </>
    )
};