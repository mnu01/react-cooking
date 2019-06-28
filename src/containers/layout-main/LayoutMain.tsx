import React, { FunctionComponent } from "react";

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

import { LinkContainer } from 'react-router-bootstrap';

import PICTURES from '../../constants/PICTURES';
import ROUTES from "../../constants/ROUTES";

import './LayoutMain.scss';

type LayoutMainProps = {
    title?: string,
    paragraph?: string // add ? for optional
}


export const LayoutMain: FunctionComponent<LayoutMainProps> = () => <aside>
    <Navbar bg="light" expand="lg">
        <Navbar.Brand href={ROUTES.HOME}>
            <img src={PICTURES.HOME} width="24" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <LinkContainer to={ROUTES.RECIPE_LIST}>
                    <NavItem className="nav-link nav-link-custom">Recipes</NavItem>
                </LinkContainer>
                <LinkContainer to={ROUTES.RECIPE + "/test"}>
                    <NavItem className="nav-link nav-link-custom">Recipe</NavItem>
                </LinkContainer>
                <LinkContainer to={ROUTES.PAGE_NOT_FOUND}>
                    <NavItem className="nav-link nav-link-custom">404</NavItem>
                </LinkContainer>
                {/*
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                */}
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search recipe" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
            </Form>
        </Navbar.Collapse>
    </Navbar>
</aside>



/* <Nav className="mr-auto">
    <Nav.Link href="#home">Home</Nav.Link>
    <Nav.Link href="#link">Link</Nav.Link>
    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
    </NavDropdown>
</Nav>
<Form inline>
    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
    <Button variant="outline-success">Search</Button>
</Form> */