import { Link } from "react-router-dom";

export const Error = () => {
    return (
        <div className="paginaError">
            <h1 id="ErrorText">404 PAGE NOT FOUND</h1>
            <p>The page you're looking for doesn't exist.</p>
            <Link className="BackHomeText" to='/'>Back to home</Link>
        </div>
    )
}