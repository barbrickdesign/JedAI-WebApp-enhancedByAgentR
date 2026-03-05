import React, { Component } from 'react'

class Footer extends Component {
    render() {
        const year = new Date().getFullYear();
        return (
            <footer style={{
                backgroundColor: '#343a40',
                color: 'rgba(255,255,255,0.6)',
                textAlign: 'center',
                padding: '16px 20px',
                marginTop: '40px',
                fontSize: '0.875rem'
            }}>
                <span>
                    &copy; {year} JedAI &mdash; Java gEneric DAta Integration Toolkit &nbsp;|&nbsp;
                    <a href="https://jedai.scify.org/" target="_blank" rel="noopener noreferrer"
                        style={{color: 'rgba(255,255,255,0.75)', textDecoration: 'none'}}>
                        Website
                    </a>
                    &nbsp;|&nbsp;
                    <a href="https://github.com/scify/JedAIToolkit" target="_blank" rel="noopener noreferrer"
                        style={{color: 'rgba(255,255,255,0.75)', textDecoration: 'none'}}>
                        <span className="fa fa-github" style={{marginRight: '4px'}} />
                        GitHub
                    </a>
                </span>
            </footer>
        );
    }
}

export default Footer;
