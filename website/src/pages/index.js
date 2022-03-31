import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

function HomeBanner() {
  return (
    <div className="home-banner">
      <div className="container">
        <div className="ms-alert ms-light ms-small">
          <p>
            <div className="ms-label ms-border ms-primary">new</div>&nbsp;
            <a href="https://minstyle.io/">minstyle.io</a> 2.0.0 version is
            currently in beta. For a stable version, prefer{" "}
            <a href="https://v1.minstyle.io/" target="_blank">
              1.1.0 version -&gt;
            </a>{" "}
          </p>
        </div>

        <div className="home-content-text ms-flex-direction-column">
          <h1>Your web interface simply and quickly.</h1>
          <h2>
            <span>Simple</span> & <span>light</span> open source CSS framework,
            including <span>dark mode</span>.
          </h2>
          <div>
            <p>
              minstyle.io integrates a set of pre-designed HTML elements,
              allowing the rapid and simple development of interfaces, for all
              devices. With the{" "}
              <a href="https://generator.minstyle.io/">generator</a>, you can
              customize the main colors of the framework, to fit your needs.
            </p>
          </div>
          <div className="home-content-btn">
            <a
              href="docs/get-started/installation"
              className="ms-btn ms-primary ms-medium ms-outline"
            >
              Get Started
            </a>
            <a href="docs/about" className="ms-btn ms-medium">
              Documentation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function HomeElements() {
  return (
    <div className="home-elements">
      <div className="container">
        <div className="row">
          <div className="home-elements-title">
            <h3>What can minstyle.io provides?</h3>
            <p>
              All class, elements and components are grouped in the following
              categories:
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 col-sm-12">
            <div class="ms-card ms-border">
              <div class="ms-card-title">
                <h2>
                  <i class="far fa-pager"></i> Layout
                </h2>
              </div>
              <div class="ms-card-content">
                <p>
                  This section will guide you on the general appearance of your
                  web page.
                </p>
              </div>
              <div class="ms-card-btn">
                <a href="docs/layout" class="ms-btn ms-primary ms-outline">
                  Read -&gt;
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-12">
            <div class="ms-card ms-border">
              <div class="ms-card-title">
                <h2>
                  <i class="fa-solid fa-align-left"></i> Contents
                </h2>
              </div>
              <div class="ms-card-content">
                <p>
                  Use of the main components, native to HTML, such as forms,
                  paragraphs, etc...
                </p>
              </div>
              <div class="ms-card-btn">
                <a href="docs/contents" class="ms-btn ms-primary ms-outline">
                  Read -&gt;
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-12">
            <div class="ms-card ms-border">
              <div class="ms-card-title">
                <h2>
                  <i class="fa-solid fa-arrow-pointer"></i> Elements
                </h2>
              </div>
              <div class="ms-card-content">
                <p>
                  An element is an HTML structure that is independent of others,
                  like button, alert, etc...
                </p>
              </div>
              <div class="ms-card-btn">
                <a href="docs/elements" class="ms-btn ms-primary ms-outline">
                  Read -&gt;
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-12">
            <div class="ms-card ms-border">
              <div class="ms-card-title">
                <h2>
                  <i class="fa-solid fa-code"></i> Components
                </h2>
              </div>
              <div class="ms-card-content">
                <p>
                  Components are complex HTML elements, such as an article,
                  menu, etc...
                </p>
              </div>
              <div class="ms-card-btn">
                <a href="docs/components" class="ms-btn ms-primary ms-outline">
                  Read -&gt;
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div class="ms-card ms-border">
              <div class="ms-card-title">
                <h2>
                  <i class="fa-solid fa-screwdriver-wrench"></i> Helpers
                </h2>
              </div>
              <div class="ms-card-content">
                <p>
                  A helper is a set of CSS class that allow you to quickly
                  format HTML content.
                </p>
              </div>
              <div class="ms-card-btn">
                <a href="docs/helpers" class="ms-btn ms-primary ms-outline">
                  Read -&gt;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HomeInfo() {
  return (
    <div className="home-infos">
      <div className="container">
        <div className="row">
          <div className="home-infos-bloc col-md-4 col-sm-12">
            <lottie-player
              class="home-infos-picture"
              src="lottie/lightweight.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
            <div class="ms-card">
              <div class="ms-card-title">
                <h3>Lightweight</h3>
                <span>~10KB gzipped & no JS.</span>
              </div>
              <div class="ms-card-content">
                <p>
                  Simple and lightweight, minstyle.io only integrates the
                  necessary to get started.
                </p>
              </div>
            </div>
          </div>

          <div className="home-infos-bloc col-md-4 col-sm-12">
            <lottie-player
              class="home-infos-picture"
              src="lottie/perso.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
            <div class="ms-card">
              <div class="ms-card-title">
                <h3>Customizable</h3>
                <span>Generator and dark mode.</span>
              </div>
              <div class="ms-card-content">
                <p>
                  The framework is customizable with the{" "}
                  <a href="https://generator.minstyle.io/">generator</a> and
                  adaptive with the integrated dark mode.
                </p>
              </div>
            </div>
          </div>

          <div className="home-infos-bloc col-md-4 col-sm-12">
            <lottie-player
              class="home-infos-picture"
              src="/lottie/easy.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
            <div class="ms-card">
              <div class="ms-card-title">
                <h3>Easy</h3>
                <span>Easy to set up and use.</span>
              </div>
              <div class="ms-card-content">
                <p>
                  We strive to make the framework as user friendly and
                  accessible as possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer class="ms-footer ms-small">
      <p>
        &copy;Copyright - minstyle.io is an open source CSS framework, under MIT{" "}
        <a href="https://github.com/Airmime/minstyle.io/blob/master/LICENSE">
          Licence
        </a>{" "}
        - <a href="https://github.com/Airmime/minstyle.io">Github</a> -{" "}
        <a href="https://twitter.com/remi_mrn">Twitter</a>
      </p>
    </footer>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Simple & light open source CSS framework, including dark mode.`}
      description="minstyle.io integrates a set of pre-designed HTML elements, allowing the rapid and simple development of interfaces, for all devices. With the generator, you can customize the main colors of the framework, to fit your needs."
    >
      <main>
        <HomeBanner />
        <HomeInfo />
        <HomeElements />
        <Footer />
      </main>
    </Layout>
  );
}
