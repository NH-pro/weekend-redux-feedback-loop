import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export default function Feeling() {

    const dispatch = useDispatch();

    const dispatchFeels = (event) => {
        dispatch({
            type: 'SET_FEELING',
            payload: event.target.value
        })
    }

    return (
        <>
            <h2>How are you feeling today?</h2>
            <label> Feeling?
                <input onChange={dispatchFeels} type="number" min="0" max="5"></input>
            </label>
            <Link to="/understanding">Next</Link>
        </>
    )
};