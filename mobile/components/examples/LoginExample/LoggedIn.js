import FireAuth from '../../../common/fire-auth';

const LoggedIn = class extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.props.user.getToken()
            .then((token)=> {
                fetch('https://f5269c1e.ngrok.io/fb/test', {
                    method: 'GET',
                    body: null,
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
            });
    }

    render() {
        const {profile} = this.props;
        const logout = <Button onPress={FireAuth.logout}><Text>Logout</Text></Button>;

        if (!profile) {
            return <Loader/>;
        }

        return profile.emailVerified ? (
            <Flex>
                <Text>
                    Hi {profile.email}
                </Text>
                {logout}
            </Flex>
        ) : <Flex>
            <Text>
                Your email address is not verified!
            </Text>
            <Button onPress={FireAuth.resendVerification}>
                <Text>Resend Verification Email</Text>
            </Button>
            {logout}
        </Flex>;
    }
};

LoggedIn.propTypes = {
    user: OptionalObject,
    profile: OptionalObject,
};

export default LoggedIn;
