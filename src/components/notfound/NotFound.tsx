import { useNavigate } from "react-router-dom";

const Notfound = () => {
    const navigate = useNavigate();
    const backToHome = () => {
        navigate("/developers");
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col_full">
                        <div className="not_found_container">
                            <h1>404 Page Not Found</h1>
                            <br/>
                            <button onClick={backToHome} type="button">Go back to Home</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Notfound;