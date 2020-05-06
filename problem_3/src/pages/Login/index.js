import React, { useState, useEffect } from "react";
import {
    useHistory,
    useLocation
} from "react-router-dom";
import {
    Container,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';
import { fakeAuth, emailRegex } from '../../utils';

function Login() {
    const history = useHistory();
    const location = useLocation();
    const [state, setState] = useState({ email: "", password: "" });
    const [validate, setValidate] = useState("");

    const { from } = location.state || { from: { pathname: "/" } };

    const login = (e) => {
        e.preventDefault();

        const { email, password } = state;
        const isValidLogin = (validate === '' || validate === 'has-success') && email !== '' && password !== '';
        if (isValidLogin) {
            fakeAuth.authenticate({ email, password }, (isValid) => {
                if (isValid) history.replace(from);
                else alert('User not found')
            });
        } else {
            alert('Please provide email and password')
        }
    };

    function validateEmail(e) {
        if (emailRegex.test(e.target.value)) {
            setValidate('has-success');
        } else {
            setValidate('has-danger');
        }
    }

    async function handleChange(e) {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    }

    useEffect(() => {
        (async function () {
            if (await fakeAuth.getAuthentication()) {
                location.href = '/';
                history.replace(from);
            }
        })();
    }, [location, history, from]);

    return (
        <div className="LoginWrapper">
            <Container className="App">
                <h2><span role="img" aria-label="wavehand">👋</span> Welcome...</h2>
                <Form id="form" className="form" onSubmit={login}>
                    <Col>
                        <FormGroup>
                            <Label>Email</Label>
                            <Input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter email"
                                value={state.email}
                                valid={validate === 'has-success'}
                                invalid={validate === 'has-danger'}
                                onChange={(e) => {
                                    validateEmail(e)
                                    handleChange(e)
                                }}
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label>Password</Label>
                            <Input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Enter password"
                                value={state.password}
                                onChange={handleChange}
                            />
                        </FormGroup>
                    </Col>
                    <Button data-testid="loginBtn" className="LoginBtn" onClick={login}>Login</Button>
                </Form>
            </Container>
        </div>
    );
}

export default Login;
