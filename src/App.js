import "./App.css";

import {Container} from "./components/index";
import {Header, Hero, MostPopular} from "./sections/index";

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Hero />   
        <p>Mohanedd</p>
     </Container>
    </>
  );
};

export default App;
