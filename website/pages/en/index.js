const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

class Index extends React.Component {
  render() {
    return (
    <div>
      <div className="container">
        <div className="row align-items-center">
          <div className="welcome col-lg-6 col-sm-12"> 
            <h2>
              Your web interface<br/> simply and quickly!
            </h2>
            <h1>
              <span className="color">Simple</span> & <span className="color">light</span> open source CSS framework, including <span className="color">dark theme</span>.
            </h1>
            <p>            
              minstyle.io integrates a set of pre-designed HTML elements, allowing the rapid and simple development of interfaces, for all devices.
              <br/>
              <br/>
              <a href="/docs/installation" className="ms-btn"><i className="fas fa-book"></i> Doc</a>
              &nbsp;
              <a href="https://github.com/Airmime/minstyle.io" className="ms-btn"><i className="fab fa-github"></i> GitHub</a><br/>
              <span className="home-version">V1.1.0</span>
            </p>
          </div>
        
          <div className="picture col-lg-6">
            <img src="https://nsa40.casimages.com/img/2020/08/16/200816083512162642.png" alt="" />
          </div>
        </div>
      </div>
      
      <div className="actions">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="ms-card">
                <div className="ms-card-pic">
                  <i className="fas fa-feather-alt fa-3x"></i>
                </div>
                <div className="ms-card-title">
                  <h2>Lightweight</h2>
                  <span>~10KB gzipped & no JS</span>
                </div>
                <div className="ms-card-text">
                  <p>
                    Simple and lightweight, minstyle.io only integrates the necessary to get started.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="ms-card">
                <div className="ms-card-pic">
                  <i className="fas fa-grip-horizontal fa-3x"></i>
                </div>
                <div className="ms-card-title">
                  <h2>Responsive</h2>
                  <span>Responsive Grid</span>
                </div>
                <div className="ms-card-text">
                  <p>
                    Layout include grid allows to design a responsive interface.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="ms-card">
                <div className="ms-card-pic">
                  <i className="fas fa-moon fa-3x"></i>
                </div>
                <div className="ms-card-title">
                  <h2>Dark Theme</h2>
                  <span>Designated for dark theme.</span>
                </div>
                <div className="ms-card-text">
                  <p>
                    minstyle.io automatically adapts the theme to that of the user's system.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

module.exports = Index;
