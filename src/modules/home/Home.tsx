import React, { FunctionComponent } from "react";

type HomeProps = {
    title?: string,
    paragraph?: string // add ? for optional
}


export const Home: FunctionComponent<HomeProps> = () => <aside>
    <p>
        Home
    </p>
</aside>
