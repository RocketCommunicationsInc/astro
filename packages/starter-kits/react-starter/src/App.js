import "./App.css";
import { RuxProgress } from "@astrouxds/react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <RuxProgress />
        </div>
        <p>
          Welcome to Astro UXDS web components in React! Check out the README.md
          for more information on getting started.
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
