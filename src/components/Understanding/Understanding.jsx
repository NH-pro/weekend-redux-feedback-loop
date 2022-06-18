import { Link } from 'react-router-dom';
export default function Understanding() {
    return (
        <>
            <h2>How well are you understanding the content?</h2>
            <label> Understanding?
                <input type="number" min="0" max="5"></input>
            </label>
            <Link to="/supported">Next</Link>
        </>
    )
};