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