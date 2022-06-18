import { Link } from 'react-router-dom';
export default function Feeling() {
    return (
        <>
            <h2>How are you feeling today?</h2>
            <label> Feeling?
                <input type="number" min="0" max="5"></input>
            </label>
            <Link to="/understanding">Next</Link>
        </>
    )
};