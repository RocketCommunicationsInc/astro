import "./App.css";
import { RuxIndeterminateProgress } from "@astrouxds/react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <RuxIndeterminateProgress />
        </div>
        <p>
          Welcome to Astro UXDS web components in React! You're ready to start
          building. <br></br> Check out the README.md for more information on
          getting started.
        </p>
        <a
          className="App-link"
          href="https://astrouxds.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          astrouxds.com
        </a>
      </header>
    </div>
  );
}

export default App;
