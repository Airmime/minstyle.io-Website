const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

class Index extends React.Component {
  render() {
    return (
    <div>
      <div class="container">
        <div class="welcome ms_col--3-of-6 ms_col--m-4-of-4 ms_col"> 
          <h2>
            Your web interface<br/> simply and quickly!
          </h2>
          <h1>
            <span class="color">Simple</span> & <span class="color">light</span> open source CSS framework.
          </h1>
          <p>            
            minstyle.io integrates a set of pre-designed HTML elements, allowing the rapid and simple development of interfaces, for all devices.
            <br/>
            <br/>
            <a href="/docs/installation" class="ms-btn"><i class="fas fa-book"></i> Doc</a>
            &nbsp;
            <a href="https://github.com/Airmime/minstyle.io" class="ms-btn"><i class="fab fa-github"></i> GitHub</a><br/>
            <span class="home-version">V1.0.2</span>
          </p>
        </div>
        
        <div class="picture ms_col--3-of-6 ms_col--m-4-of-4 ms_col">
          <img src="https://nsa40.casimages.com/img/2019/09/12//190912094856437687.png" alt="" />
        </div>
      </div>
      
      <div class="actions">
        <div class="container">
          <div class="ms_col--2-of-6 ms_col--m-4-of-4 ms_col">
            <div class="ms-card">
              <div class="ms-card-pic">
                <i class="fas fa-feather-alt fa-3x"></i>
              </div>
              <div class="ms-card-title">
                <h2>Lightweight</h2>
                <span>~10KB gzipped & no JS</span>
              </div>
              <div class="ms-card-text">
                <p>
                  Simple and lightweight, minstyle.io only integrates the necessary to get started.
                </p>
              </div>
            </div>
          </div>
          
          <div class="ms_col--2-of-6 ms_col--m-4-of-4 ms_col">
            <div class="ms-card">
              <div class="ms-card-pic">
                <i class="fas fa-grip-horizontal fa-3x"></i>
              </div>
              <div class="ms-card-title">
                <h2>Responsive</h2>
                <span>Responsive Grid</span>
              </div>
              <div class="ms-card-text">
                <p>
                  Layout include grid allows to design a responsive interface.
                </p>
              </div>
            </div>
          </div>

          <div class="ms_col--2-of-6 ms_col--m-4-of-4 ms_col">
            <div class="ms-card">
              <div class="ms-card-pic">
                <i class="far fa-grin-hearts fa-3x"></i>
              </div>
              <div class="ms-card-title">
                <h2>Easy to use</h2>
                <span>Easy to handle</span>
              </div>
              <div class="ms-card-text">
                <p>
                  minstyle.io is developed to simplify your web interface creation.
                </p>
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
