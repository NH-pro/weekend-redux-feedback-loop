import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export default function Supported() {

    const dispatch = useDispatch();

    const dispatchSupport = (event) => {
        dispatch({
            type: 'SET_SUPPORT',
            payload: event.target.value
        })
    }

    return (
        <>
            <h2>How well are you being supported?</h2>
            <label> Support?
                <input onChange={dispatchSupport} type="number" min="0" max="5"></input>
            </label>
            <Link to="/comments">Next</Link>
        </>
    )
};