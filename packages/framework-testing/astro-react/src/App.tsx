import "./App.css";

import {
  RuxContainer,
  RuxDatetimePicker,
  RuxGlobalStatusBar,
} from "@astrouxds/react";

function App() {
  return (
    <>
      <RuxGlobalStatusBar appName="Astro" appVersion="React" />
      <main className="grid gap-4 p-4 grid-cols-1 lg:grid-cols-12">
        <RuxContainer className="lg:col-span-2">
          <header slot="header">Header</header>
        </RuxContainer>

        <RuxContainer className="lg:col-span-10">
          <header slot="header">Header</header>
          <div className="w-1/4 m-auto">
            <RuxDatetimePicker></RuxDatetimePicker>
          </div>
        </RuxContainer>
      </main>
    </>
  );
}

export default App;
