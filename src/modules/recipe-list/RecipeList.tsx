import React, { Component } from "react";
import axios from 'axios';

import API from '../../constants/API';
import RecipeModel from "../../models/RecipeModel";
import Recipe from './Recipe';

// type RecipeListProps = {
//     title?: string,
//     paragraph?: string // add ? for optional
// }

export default class RecipeList extends Component {
    state = {
        id: '',
        recipes: []
    }

    handleClick = (id: string) => {
        console.log(id);
        this.setState({
            id: id
        });
    }

    componentDidMount() {
        const url: string = API.build(API.RECIPES);
        console.log(`GET from ${url}`);
        axios.get(url).then(result => {
            let recipes: RecipeModel[] = result.data;
            console.log(recipes);
            console.log(`Receive ${recipes.length} items`);
            this.setState({ recipes });
        }, reject => {
            console.log(reject);
        })
    }

    render() {
        return (<table>
            <tbody>
                {this.state.recipes.map((recipe: RecipeModel, index: number) => <Recipe key={index} callback={this.handleClick} recipeModel={recipe} />)}
            </tbody>
        </table>);
    }
}
