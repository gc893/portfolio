import React from 'react';
import './Path.css';

const Path = () => {
    return (
        <div className='page-section' style={{textAlign: 'center'}}>
            <div id='path'>
                <h1 id='path-title'>Path</h1>
            </div>
            <div className='path-section'>
                <div>
                    <p style={{fontSize: '8rem', color: '#D4916C'}}><i className="fas fa-chart-pie"></i></p>
                    <h5>Research Assistant</h5>
                    <p style={{textAlign: 'left', padding: '0.5rem 1rem'}}>&bull; Logged and Analyzed data.</p>
                    <p style={{textAlign: 'left', padding: '0.5rem 1rem'}}>&bull; Wrote reports presenting formulated recommendations for decision makers.</p>
                </div>
                <div>
                    <p style={{fontSize: '8rem', padding: '0', margin: '0', color: '#D4916C'}}><i className="fas fa-project-diagram"></i></p>
                    <h5>Systems &amp; Operations</h5>
                    <p style={{textAlign: 'left', padding: '0.5rem 1rem'}}>&bull; Analyzed and recorded the processes to identify opportunities for improvement, and system requirements.</p>
                    <p style={{textAlign: 'left', padding: '0.5rem 1rem'}}>&bull; Translated requirements into user stories, and assisted during testing with the users.</p>
                    <p style={{textAlign: 'left', padding: '0.5rem 1rem'}}>&bull; Asisted with onboarding and information migration.</p>
                </div>
                <div>
                    <p style={{fontSize: '8rem', padding: '0', margin: '0', color: '#D4916C'}}><i className="fab fa-font-awesome-flag"></i></p>
                    <h5>Founder</h5>
                    <p style={{textAlign: 'left', padding: '0.5rem 1rem'}}>&bull; Coordinated the development of a fully automated order fulfillment system.</p>
                    <p style={{textAlign: 'left', padding: '0.5rem 1rem'}}>&bull; Designed the process and packaging that allowed to succesfully deliver frozen products throughout the east coast.</p>
                </div>
                <div>
                    <p style={{fontSize: '8rem', padding: '0', margin: '0', color: '#D4916C'}}><i className="fas fa-file-code"></i></p>
                    <h5>Software Developer</h5>
                    <p style={{textAlign: 'left', padding: '0.5rem 0 0.5rem 1rem'}}>&bull; Developed 4 quality projects using different stacks, each in under one week.</p>
                    <p style={{textAlign: 'left', padding: '0.5rem 0 0.5rem 1rem'}}>&bull; Refer to the project section above and this portfolio in itself for more information.</p>
                </div>
            </div>
        </div>
    );
}
 
export default Path;