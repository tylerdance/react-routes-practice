import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import ProjectDetails from './components/ProjectDetails'
import Contact from './components/Contact'
import Nav from './components/Nav'

function App() {
  const projectList = [
    {
      name: 'Asteroids',
      description: 'Single player mini shooter',
    },
    {
      name: 'Trail Finder',
      description: 'Off-road bike trail finding app',
    }
  ]

  return (
    <BrowserRouter>
      <div className="App">
        <Nav />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route exact path="/projects" render={() => {
          return <Projects projectList={projectList} />
        }} />
        <Route path="/projects/:id" render={(routeProps) => {
          // console.log(routeProps.match.params);
          const id = routeProps.match.params.id
          const targetProject = projectList.find((p) => p.id === parseInt(id))
          return <ProjectDetails project={targetProject} />
        }} />
      </div>
    </BrowserRouter>
  );
}

export default App;
