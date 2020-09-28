import React from 'react';
import Article from './Article';


class Blog extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const authorName = 'HirotoMaezato';
        return(
            <>
                <Article    title = {"React,Redux"}
                            
                />
                <Article    title = {"Laravel,Bootstrap"}
                            
                />
                <Article    title = {"Vue.js,javascript"}
                            
                />
            </>
        );
    }
}

export default Blog;