import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";
export default function Login() {

    return (
        <div>
        <p>You must log in to view the page at /routerApp/admin</p>
        <Button variant="outline-info"><Link to="/admin">Log In</Link></Button>
        </div>
    
    );
}
  
