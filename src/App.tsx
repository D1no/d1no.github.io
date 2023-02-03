import { useState } from "react";
import { x } from "@xstyled/emotion";

function App() {
  return (
    <x.div className="App">
      <x.div whiteSpace="normal">
        <x.h1 text="xl" fontWeight="600">
          Hello!
        </x.h1>
      </x.div>
      <x.p>Website with xStyled</x.p>
    </x.div>
  );
}

export default App;
