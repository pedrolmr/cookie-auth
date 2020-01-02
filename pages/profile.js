import { getUserProfile } from "../lib/auth";
import Layout from "../components/Layout";

export default class Profile extends React.Component {
    state = {
        user: null
    };
    componentDidMount(){
        getUserProfile().then(user => this.setState({ user }));
    }

    render(){
        const { user } = this.state;
        return(
            <Layout>
                <pre>{JSON.stringify(user, null, 2)}</pre>
            </Layout>
        )
    }
}