import React, { Component } from "react";
import axios from 'axios';

import API from '../../constants/API';
import RecipeModel from "../../models/RecipeModel";

// type RecipeListProps = {
//     title?: string,
//     paragraph: string // add ? for optional
// }

export default class RecipeList extends Component {
    state = {
        recipes: []
    }

    componentDidMount() {
        const url: string = API.build(API.RECIPES);
        console.log(`GET from ${url}`);
        axios.get(url).then(result => {
            let recipes: RecipeModel[] = result.data;
            console.log(`Receive ${recipes.length} items`);
            this.setState({ recipes });
        }, reject => {
            console.log(reject);
        })
    }

    render() {
        return (<ul>
            {this.state.recipes.map((recipe: RecipeModel) => <li>{recipe.name}</li>)}
        </ul>);
    }
}
