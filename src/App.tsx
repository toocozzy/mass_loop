import Navbar from "./components/Navbar/Navbar";
import WelcomeSection from "./components/WelcomeSection/WelcomeSection";
import CalculatorSection from "./components/CalculatorSection/CalculatorSection";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <WelcomeSection />
        <CalculatorSection />
      </main>
    </>
  );
}

export default App;
