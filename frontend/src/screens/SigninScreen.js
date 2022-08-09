import Axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {Store} from '../Store';


export default function SigninScreen(){
    const navigate = useNavigate();
    const {search} = useLocation();
    const redirectInUrl = new URLSearchParams(search).get('redirect');
    const redirect = redirectInUrl ? redirectInUrl : '/';

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {state, dispatch: ctxDispatch } = useContext(Store);
    const {userInfo} = state;

    const submitHandler = async (e) => {
        e.preventDefault();
        try{
            const {data} = await Axios.post('/api/users/signin', {
                email,
                password,
            });
          //  console.log(data);
            ctxDispatch({type: 'USER_SIGNIN', payload: data})
            localStorage.setItem('userInfo', JSON.stringify(data));
            navigate(redirect || '/');

        }catch (err) {
            alert('ungültige Email oder Passwort')
        }
    }

    useEffect(()=>{
        if (userInfo) {
            navigate(redirect);
        }
    }, [navigate, redirect, userInfo]);

    return(
        <Container className="small-container">
            <Helmet>
                <title>Anmelden</title>
            </Helmet>
            <h1 className="my-3">Anmelden</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                    type="email" 
                    required  
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Passwort</Form.Label>
                    <Form.Control 
                    type="password" 
                    required  
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <div className="mb-3">
                    <Button type="submit">Anmelden</Button>
                </div>
                <div className="mb-3">
                    Neu hier?{' '}
                    <Link to={`/signup?redirect=${redirect}`}>Konto erstellen</Link>
                </div>
            </Form>
        </Container>
    )
}