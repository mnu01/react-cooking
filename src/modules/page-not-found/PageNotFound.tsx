import React, { Component } from "react";
import PICTURES from '../../constants/PICTURES';

type PageNotFoundProps = {

}

export default class PageNotFound extends Component<PageNotFoundProps> {

    constructor(props: PageNotFoundProps) {
        super(props);
        // 
    }

    render() {
        return (
            <>
                {/* <Button variant="primary" onClick={() => { this.props.history.goBack() }}>Go back</Button>
                <Button variant="primary" onClick={() => { this.props.history.push(ROUTE.DASHBOARD) }}>Go to dashboard</Button> */}
                <img src={PICTURES.PAGE_NOT_FOUND} alt="page not found" />
            </>
        );
    }
}

// = () => <aside>
//     <p>
//         404
//     </p>
// </aside>

// export default class RecipeList extends Component {
//     state = {
//         recipes: []
//     }

//     componentDidMount() {
//         const url: string = API.build(API.RECIPES);
//         console.log(`GET from ${url}`);
//         axios.get(url).then(result => {
//             let recipes: RecipeModel[] = result.data;
//             console.log(`Receive ${recipes.length} items`);
//             this.setState({ recipes });
//         }, reject => {
//             console.log(reject);
//         })
//     }

//     render() {
//         return (<ul>
//             {this.state.recipes.map((recipe: RecipeModel) => <li>{recipe.name}</li>)}
//         </ul>);
//     }
// }