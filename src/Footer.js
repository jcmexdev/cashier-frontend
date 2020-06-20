import React from 'react';
import twitter from './twitter.svg';
import github from './github.svg';
import linkedin from './linkedin.svg';

const Footer = () => (
    <footer>
        <ul>
            <li><a href="https://twitter.com/jcmexdev"><img src={twitter} alt="Twitter"/></a></li>
            <li><a href="https://github.com/jcmexdev"><img src={github} alt="Github"/></a></li>
            <li><a href="https://www.linkedin.com/in/juancarlosgarciaesquivel/"><img src={linkedin} alt="LinkedIn"/></a></li>
        </ul>
    </footer>
);


export default Footer;
