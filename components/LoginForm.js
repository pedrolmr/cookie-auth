import { loginUser } from "../lib/auth";
import Router from "next/router";

class LoginForm extends React.Component {
    state = {
        email: "Sincere@april.biz",
        password: "hildegard.org",
        error: "",
        isLoading: false
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = e => {
        const { email, password } = this.state;
        e.preventDefault();
        this.setState({ error: "", isLoading: true});
        loginUser(email, password).then(() => {
            Router.push("/profile");
        })
        .catch(this.showError);
    }

    showError = err => {
        console.error(err);
        const error = err.response && err.response.data || err.message;
        this.setState({ error, isLoading:false });
    }

    render(){
        const { email, password, error, isLoading } = this.state;
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input 
                        name="email" 
                        type="email" 
                        placeholder="email"
                        value={email}
                        onChange={this.handleChange}
                    />
                </div>

                <div>
                    <input 
                        name="password" 
                        type="password" 
                        placeholder="password"
                        value={password}
                        onChange={this.handleChange}
                    />
                </div>
                <button disabled={isLoading} type="submit">{isLoading ? "Loading..." : "Submit"}</button>
                { error && <div>{error}</div>}
            </form>
        )
    }
}

export default LoginForm;