import React from 'react'

  const About = () => {
    return (
        <div id="about-us">
            <figure className="content">
                <img src={logo} alt="logo" />
            </figure>
            <div className="content">
                <h1 className="title">About us</h1>
                <p>
                    Our project was created by two aspiring Web Developers currently studying at the Ironhack's
                    Bootcamp. Here you can make your own SOWT Analysis to help your business or personal life.
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