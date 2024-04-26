import { useState } from "react";
import List from "../src/components/List";
import data from "./data";

function App() {
  const [people, setPeople] = useState(data);

  return (
    <>
      <main>
        <section className="container">
          <h3>{people.length} Birthday Today</h3>
          <List people={people} setPeople={setPeople} />

          {people.length > 0 ? (
            <button onClick={() => setPeople([])}>Clear all</button>
          ) : (
            <button onClick={() => setPeople(data)}>Reset</button>
          )}
        </section>
      </main>
    </>
  );
}

export default App;
