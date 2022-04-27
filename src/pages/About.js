import React from 'react'
import '../styles/about.css'

  const About = () => {
    return (
        <div className="about-us">
            
            <div className="content">
                <h1 className="title">About us</h1>
                <p>
                    The SWOT project was created by two aspiring Web Developers currently studying at the Ironhack's Bootcamp. 
                    Our main goal is to make a platform that helps our clients to plan their business or personal life using swot analysis as a tool to better organize this process. 
                </p>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Developers</th>
                            <th>From</th>
                            <th>More about me</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Thais Fernandes</td>
                            <td>Brazilian living in Portugal</td>
                            <td>I want to become a Web Developer and a great mom!</td>
                        </tr>
                        <tr>
                            <td>Matheus Benamor</td>
                            <td>Brazilian from Brasília, but currently living in Portugal.</td>
                            <td>My passions are travel, watch series and play games.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default About