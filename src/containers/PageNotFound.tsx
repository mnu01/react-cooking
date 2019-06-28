import React, { FunctionComponent } from "react";

type PageNotFoundProps = {
    title?: string,
    paragraph?: string // add ? for optional
}


export const PageNotFound: FunctionComponent<PageNotFoundProps> = () => <aside>
    <p>
        404
    </p>
</aside>

