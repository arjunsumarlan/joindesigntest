import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
    Button,
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem
} from 'reactstrap';
import { fakeAuth } from '../../utils';

export default function Header() {
    let history = useHistory();
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return fakeAuth.isAuthenticated ? (
        <Navbar color="#282c34" light expand="md" fixed="top">
            <NavbarToggler onClick={toggle} style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <Button
                            color="light"
                            style={{ margin: 20 }}
                            onClick={() => {
                                fakeAuth.signout(() => history.push("/login"));
                            }}
                        >
                            Sign out
                        </Button>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    ) : null;
}