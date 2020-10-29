import React from 'react';
import './Interests.css';

const Interests = (props) => {
    return (
        <div id='p' className='page-section' style={{textAlign: 'center'}}>
            <div id='interests'>
                <h1 id='projects-title'>Interests</h1>
            </div>

            {props.interests.map((interest, idx) =>
                <div className='card-section'>
                    {/* The div above should definitely be a component :) */}
                    <div className="card">
                        <div id={`carousel-${idx}`} class="carousel slide" data-ride="carousel" data-interval="false">
                            <div class="carousel-inner">
                            {interest.interestImages.map((image, idx) =>
                                idx === 0 ?
                                <div class="carousel-item active">
                                <img src={image} class="d-block w-100" alt="..."/>
                                </div> :
                                <div class="carousel-item">
                                <img src={image} class="d-block w-100" alt="..."/>
                                </div>
                            )}
                            </div>
                            <a class="carousel-control-prev" href={`#carousel-${idx}`} role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href={`#carousel-${idx}`} role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{interest.interestTitle}</h5>
                            <hr style={{borderTop: '1px solid #1D140C', color: '#1D140C' }}/>
                            <p className="card-text">{interest.interestDescription}</p>
                            <p className="card-text">{interest.interestField.map((field, idx) => idx < interest.interestField.length -1 ? <span>{field} | </span> : <span>{field}</span>)}</p>
                            <a href={interest.interestLink} className="btn btn-primary" target='_blank' rel="noopener noreferrer">Learn More</a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
 
export default Interests;