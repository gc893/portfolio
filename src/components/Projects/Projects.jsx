import React from 'react';
import './Projects.css';

const Projects = (props) => {
    return (
        <div id='p' className='page-section' style={{textAlign: 'center'}}>
            <div id='projects'>
                <h1 id='projects-title'>Projects</h1>
            </div>

            {props.projects.map((project, idx) =>
                <div className='card-section'>
                    {/* The div above should definitely be a component :) */}
                    <div className="card">
                        <div id={`carousel-${idx}`} class="carousel slide" data-ride="carousel" data-interval="false">
                            <div class="carousel-inner">
                            {project.projectImages.map((image, idx) =>
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
                            <h5 className="card-title">{project.projecctTitle}</h5>
                            <hr style={{borderTop: '1px solid #1D140C', color: '#1D140C' }}/>
                            <p className="card-text">{project.projectDescription}</p>
                            <p className="card-text">{project.projectTechnologies.map((tech, idx) => idx < project.projectTechnologies.length -1 ? <span>{tech} | </span> : <span>{tech}</span>)}</p>
                            <p className="card-text"><a href={project.projectGithub} target='_blank' rel="noopener noreferrer"><i class="fab fa-github"  target='_blank' rel="noopener noreferrer"></i></a></p>
                            <a href={project.projectLink} className="btn btn-primary" target='_blank' rel="noopener noreferrer">Go to App</a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
 
export default Projects;