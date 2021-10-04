import React from 'react'

const Newsitem = (props)=> {

        let { title, description, imageurl, newsurl, author, date, source } = props;

        return (
            <div>
                <div className="card border-dark" style={{ width: "20rem" }}>
                    <div style={{display:"flex",justifyContent:"flex-end",position:"absolute",right:"0"}}>
                        <span className="badge rounded-pill bg-danger">
                            {source}
                        </span>
                    </div>
                    <img src={!imageurl ? "https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_960_720.jpg" : imageurl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {new Date(date).toGMTString()} </small></p>
                        <a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
}

export default Newsitem
