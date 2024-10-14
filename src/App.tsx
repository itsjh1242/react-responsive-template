import "./App.css";
import Layout from "./components/layout";
import { MediaQueryProvider } from "./context/MediaQueryContext";

function App() {
  return (
    <MediaQueryProvider>
      <Layout />
    </MediaQueryProvider>
  );
}

export default App;
