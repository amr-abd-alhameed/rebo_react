import "./App.css";

import {Container} from "./components/index";
import {Header, Hero, MostPopular} from "./sections/index";

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Hero />   
     </Container>
    </>
  );
};

export default App;
