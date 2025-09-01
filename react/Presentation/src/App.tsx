import PresentationCard from "./components/cards/cards";
import photoPath from "./assets/react.svg"
function App() {
  return (
    <PresentationCard
      role="Desarrollador Backend"
      name="Claudio"
      contacts={["Twitter: @clau", "GitHub: /clau-dev", "LinkedIn: Claudio"]}
      photo={photoPath}
      etc={["extra1", "extra2"]}
    />
  );
}

export default App;

