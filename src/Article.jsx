import React from 'react';

const Article = (props) => {
    // let publishState = "";
    // if(props.isPablished) {
    //     publishState = "公開"
    // } else {
    //     publishState = "非公開"
    // }

    return(
        <div>
            <h2>{props.title}</h2>
            {/* <p>注文数は{props.order}です</p>
            <p>著者は{props.author}です</p>
            <p>{publishState}</p>
             */}
        </div>
    )
}

export default Article;