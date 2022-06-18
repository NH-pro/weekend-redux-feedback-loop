import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export default function Comments() {

    const dispatch = useDispatch();

    const dispatchComments = (event) => {
        dispatch({
            type: 'SET_COMMENTS',
            payload: event.target.value
        })
    }

    return (
        <>
            <h2>Any comments you want to leave?</h2>
            <label> Comments
                <input onChange={dispatchComments} type="text" maxLength="25"></input>
            </label>
            <Link to="/review">Next</Link>
        </>
    )
};