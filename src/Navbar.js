import React from 'react'
import Navbar from 'react-bootstrap/Navbar';


export default function Nav() {
    return (
        <div>           
             <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home"> 
                Shopping List app
                </Navbar.Brand>
            </Navbar>
        </div>
    )
}
