import React, { Component } from "react";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

type RecipeProps = {

}

export default class Recipe extends Component<RecipeProps> {

    constructor(props: RecipeProps) {
        super(props);
        // 
    }

    render() {
        return (
            <>
                <div className="container-flex">
                    <div className="row justify-content-center">
                        <div className="col-sm-6 justify-content-center">
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Recipe name</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                            </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group controlId="formBasicChecbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                        </Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}