import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export default function Understanding() {

    const dispatch = useDispatch();

    const dispatchUnder = (event) => {
        dispatch({
            type: 'SET_UNDER',
            payload: event.target.value
        })
    }

    return (
        <>
            <h2>How well are you understanding the content?</h2>
            <label> Understanding?
                <input onChange={dispatchUnder} type="number" min="0" max="5"></input>
            </label>
            <Link to="/supported">Next</Link>
        </>
    )
};