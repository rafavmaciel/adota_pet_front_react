import axios from "axios";
import PageHeader from "../template/pageHeader";

export default (props) => {

    const redirectGogleSSO = async () => {
        const googleLoginUrl = "https://localhost:3003/auth/google";
        const newWindow = window.open(googleLoginUrl, "_blank", 'width=600,height=600');
    }

    return (
        <div>
            <PageHeader name="login" />
            <div className="row">
                <div className="col-md-12">
                    <button
                        className="btn btn-primary"
                        onClick={redirectGogleSSO}
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};
