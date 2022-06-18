import { Link } from 'react-router-dom';
export default function Comments() {
    return (
        <>
            <h2>Any comments you want to leave?</h2>
            <label> Comments
                <input type="text"></input>
            </label>
            <Link to="/review">Next</Link>
        </>
    )
};