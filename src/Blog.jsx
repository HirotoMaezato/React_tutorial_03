import React from 'react';
import Article from './Article';


class Blog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isPublished: false,
            order: 0
        }
    }

    togglePublished = () => {
        this.setState({
            isPublished: !this.state.isPublished
        })
    }

    orderIncrement = () => {
        this.setState({
            order: this.state.order + 1
        })
    }

    render() {
        const authorName = 'HirotoMaezato';
        return(
            <>
                <Article    title = {"React,Redux"}
                            isPublished = {this.state.isPublished}
                            // stateで定義したデータをpropsの形で渡している
                            toggle = {() => this.togglePublished()}
                            // ↑関数をpropsでArticle.jsxに渡している
                            // 関数の渡し方があるから注意しよう
                            hasOrder = {this.state.order}
                            buy = {() => this.orderIncrement()}

                            
                />
            </>
        );
    }
}

export default Blog;