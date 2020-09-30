import React from 'react';
import Article from './Article';


class Blog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isPublished: false
        }
    }

    render() {
        const authorName = 'HirotoMaezato';
        return(
            <>
                <Article    title = {"React,Redux"}
                            isPublished = {this.state.isPublished}
                            
                />
            </>
        );
    }
}

export default Blog;