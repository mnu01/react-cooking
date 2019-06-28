import React, { FunctionComponent } from "react";

type RecipeListProps = {
    title?: string,
    paragraph?: string // add ? for optional
}


export const RecipeList: FunctionComponent<RecipeListProps> = () => <aside>
    <p>
        RecipeList
    </p>
</aside>
