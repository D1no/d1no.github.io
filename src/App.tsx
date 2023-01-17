import { useState } from "react";
import { x } from "@xstyled/emotion";

function App() {
  return (
    <div className="App">
      <x.div whiteSpace="normal">
        <x.h1 text="xl">Hello!</x.h1>
      </x.div>
      <x.p>Website with xStyled</x.p>
    </div>
  );
}

export default App;
