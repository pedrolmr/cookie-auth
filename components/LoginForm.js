import { loginUser } from '../lib/auth';

class LoginForm extends React.Component {
    state = {
        email: "",
        password: ""
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = e => {
        const { email, password } = this.state;
        e.preventDefault();
        loginUser(email, password);
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input 
                        name="email" 
                        type="email" 
                        placeholder="email" 
                        onChange={this.handleChange}
                    />
                </div>

                <div>
                    <input 
                        name="password" 
                        type="password" 
                        placeholder="password" 
                        onChange={this.handleChange}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default LoginForm;