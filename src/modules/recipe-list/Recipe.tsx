import React, { Component } from 'react';
import RecipeModel from '../../models/RecipeModel';
import Button from 'react-bootstrap/Button';

interface RecipeProps {
    recipeModel: RecipeModel,
    callback: ((id: string) => void)
}

export default class Recipe extends Component<RecipeProps> {
    constructor(props: RecipeProps) {
        super(props);
    }

    render() {
        let { recipeModel, callback } = this.props;
        return (
            <tr>
                <td>{recipeModel.name}</td>
                <td><Button onClick={() => { callback(recipeModel.id) }}>Edit</Button></td>
            </tr>
        )
    }
}