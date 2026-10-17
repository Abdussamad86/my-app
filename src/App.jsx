
import "./App.css";

function App() {
  return (
    <div>
      <nav className="navbar">
        <h2>CodeSpace<span>.</span></h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-btn">Contact Me</a>
      </nav>

      <section className="hero" id="home">
        <div className="hero-text">
          <p className="intro">WELCOME TO MY WORLD</p>

          <h1>
            Ideas become
            <br />
            <span>real websites.</span>
          </h1>

          <p className="description" id="about">
            I'm learning web development and building websites
            one step at a time. I enjoy turning simple ideas
            into useful things people can explore online.
          </p>

          <div className="buttons">
            <a href="#contact" className="hero-btn">
              Let's Connect →
            </a>

            <a href="#about" className="learn-btn">
              Learn More
            </a>
          </div>

          <p className="small-text">
            LEARNING TODAY. BUILDING FOR TOMORROW.
          </p>
        </div>

        <div className="hero-art">
          <div className="circle"></div>

          <div className="code-card">
            <div className="card-top">
              <div className="dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <p>my-first-website.jsx</p>
            </div>

            <div className="code">
              <p><span className="purple">function</span> <span className="blue">Welcome</span>() {"{"}</p>
              <p className="indent">const message = <span className="green">"Hello World!"</span>;</p>
              <p className="indent"><span className="purple">return</span> (</p>
              <p className="indent more">&lt;h1&gt;Keep Learning&lt;/h1&gt;</p>
              <p className="indent">);</p>
              <p>{"}"}</p>
            </div>

            <div className="card-bottom">
              <span>● All systems go</span>
              <span>React</span>
            </div>
          </div>

          <div className="floating-note">
            <span>✦</span>
            <div>
              <strong>Keep creating</strong>
              <p>One line at a time.</p>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact">
        <p>Have an idea? Let's build something together.</p>
      </footer>
    </div>
  );
}

export default App;
