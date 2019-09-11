/**
* Copyright (c) 2017-present, Facebook, Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/

const React = require('react');

class Footer extends React.Component {
  render() {
    return (
    <footer className="ms-footer">
      <div class="container">
        <div class="ms_col ms_col--11-of-12 ms_col--centered" >
            <section className="copyright">{this.props.config.copyright}</section>
        </div>
      </div>
    </footer>
    );
  }
}

module.exports = Footer;