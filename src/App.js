import Layout from "./pages/Layout";
import { BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Layout />
      </Switch>
    </Router>
  );
}

export default App;
