
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectPage from "./pages/ProjectPage";
import ContactPage from "./pages/ContactPage";



function App() {
  return (
    
    <Router>
     
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/projets">
          <ProjectsPage />
        </Route>
        <Route path="/projets/:id">
          <ProjectPage />
        </Route>
        <Route exact path="/contact">
          <ContactPage />
        </Route>
       
   
    </Router>
  );
}

export default App;
