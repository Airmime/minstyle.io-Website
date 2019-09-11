const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

class Index extends React.Component {
  render() {
    return (
    <div>
      <div class="homecontainer">
        <div class="welcome"> 
          <h1>
            Simple & <span class="light">light</span><br/> open source <span class="css">CSS</span><br/> framework <span class="ms-text-gray">:)</span>
          </h1>
          <p>            
            minstyle.io integrates a set of pre-designed HTML elements, allowing the rapid and simple development of interfaces, for all devices.
          </p>
          <button class="ms-btn ms-outline ms-medium"><i class="fas fa-book"></i> Doc</button>&nbsp;
          <button class="ms-btn ms-outline ms-medium"><i class="fab fa-github"></i> GitHub</button>
        </div>
      </div>

      <div class="actions">

      </div>
    </div>
    );
  }
}

module.exports = Index;
