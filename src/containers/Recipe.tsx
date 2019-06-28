import React, { FunctionComponent } from "react";

type RecipeProps = {
    id: string,
}


export const Recipe: FunctionComponent<RecipeProps> = ({ id }) => <aside>
    <p>
        Recipe{id}
    </p>
</aside>
