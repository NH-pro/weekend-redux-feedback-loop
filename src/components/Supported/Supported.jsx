import { Link } from 'react-router-dom';
export default function Supported() {
    return (
        <>
            <h2>How well are you being supported?</h2>
            <label> Understanding?
                <input type="number" min="0" max="5"></input>
            </label>
            <Link to="/comments">Next</Link>
        </>
    )
};