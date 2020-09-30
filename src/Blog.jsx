import React from 'react';
import Article from './Article';


class Blog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isPublished: false,
            count: 0
        }
    }

    componentDidMount() {
        document.getElementById('counter').addEventListener('click', this.countUp)
    }

    componentDidUpdate() {
        if (this.state.count >= 10) {
            this.setState({
                count: 0
            })
        }
    }

    componentWillUnmount() {
        document.getElementById('counter').removeEventListener('click', this.countUp)
    }

    togglePublished = () => {
        this.setState({
            isPublished: !this.state.isPublished
        })
    }

    
    countUp = () => {
        this.setState({
            count: this.state.count + 1
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
                            count = {this.state.count}
                            
                />
            </>
        );
    }
}

export default Blog;