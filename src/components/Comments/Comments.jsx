import React from 'react';
import './Comments.css';

const Comments = () => {
    return (
        <div id='p' className='page-section comment-section' style={{textAlign: 'center'}}>
            <div id='comments'>
                <h1 id='comments-title'>Comments</h1>
            </div>
            <div id="comment-carousel" className="carousel slide" data-ride="carousel" data-interval="false">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <p>"Gabriela is proactive, positive, and engaged, and has already demonstrated great leadership in the classroom. She brings important insights and perspectives to the table, and is going to bring a lot to the software engineering industry!"</p>
                        <div className='card-quotee'>
                            <p style={{paddingRight: 0}}><a href="https://www.linkedin.com/in/anna-krieger/" target='_blank' rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></p>
                            <p>Anna Krieger - GA Career Coach</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <p>"Gabriela continually challenges herself with every task she undertakes.  She's resourceful and creative, and everything she builds reflects that."</p>
                        <div className='card-quotee'>
                            <p style={{paddingRight: 0}}><a href="https://www.linkedin.com/in/benjamintmanley/" target='_blank' rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></p>
                            <p>Ben Manley - GA Instructor</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <p>"Gabriela's work is a perfect reflection of her values and spirit. She's always excited and motivated to use every opportunity she's given to explore problems and pursue quality solutions."</p>
                        <div className='card-quotee'>
                            <p style={{paddingRight: 0}}><a href="https://www.linkedin.com/in/david-stinson/" target='_blank' rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></p>
                            <p>David Stinson - GA Instructor</p>
                        </div>
                    </div>
                </div>
                <ol className="carousel-indicators">
                    <li data-target="#comment-carousel" data-slide-to="0" className="active"></li>
                    <li data-target="#comment-carousel" data-slide-to="1"></li>
                    <li data-target="#comment-carousel" data-slide-to="2"></li>
                </ol>
            </div>
        </div>
    );
}
 
export default Comments;