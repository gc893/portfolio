import React from 'react';
import './Projects.css';

const Projects = (props) => {
    return (
        <div id='p' className='page-section' style={{textAlign: 'center'}}>
            <div id='projects'>
                <h1 id='projects-title'>Projects</h1>
            </div>

            {props.projects.map((project, idx) =>
                <div key={idx} className='card-section'>
                    {/* The div above should definitely be a component :) */}
                    <div className="card">
                        <div id={`carousel-${idx}`} className="carousel slide" data-ride="carousel" data-interval="false">
                            <div className="carousel-inner">
                            {project.projectImages.map((image, idx) =>
                                idx === 0 ?
                                <div key={idx} className="carousel-item active">
                                <img src={image} className="d-block w-100" alt="..."/>
                                </div> :
                                <div key={idx} className="carousel-item">
                                <img src={image} className="d-block w-100" alt="..."/>
                                </div>
                            )}
                            </div>
                            <a className="carousel-control-prev" href={`#carousel-${idx}`} role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"><i class="fas fa-chevron-left"></i></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href={`#carousel-${idx}`} role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"><i class="fas fa-chevron-right"></i></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{project.projecctTitle}</h5>
                            <hr style={{borderTop: '1px solid #1D140C', color: '#1D140C' }}/>
                            <p className="card-text">{project.projectDescription}</p>
                            <p className="card-text">{project.projectTechnologies.map((tech, idx) => idx < project.projectTechnologies.length -1 ? <span key={idx}>{tech} | </span> : <span key={idx}>{tech}</span>)}</p>
                            <p className="card-text" style={{fontSize: '1.5rem'}}><a href={project.projectGithub} target='_blank' rel="noopener noreferrer"><i className="fab fa-github"  target='_blank' rel="noopener noreferrer"></i></a></p>
                            <a href={project.projectLink} className="btn btn-primary" target='_blank' rel="noopener noreferrer">Go to App</a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
 
export default Projects;