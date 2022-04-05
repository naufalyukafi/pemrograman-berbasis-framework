import React from 'react';
import { Link, BrowserRouter, Route, Switch } from 'react-router-dom';
import CustomFormDemo from './CustomForm/CustomFormDemo';
import GenericContainerDemo from './GenericContainer/GenericContainerDemo';
import LoaderDemo from './LoadDemo/LoaderDemo';
import ProtectedRoutesDemo from './ProtectedRoutes/ProtectedRoutesDemo';
import RefsDemo from './RefsDemo/RefsDemo';

const App  = () => {
    return (
      <BrowserRouter>
        <Navbar />
        <div className='container mt-5 justify-content-center align-content-center'>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/loaderdemo" component={LoaderDemo} />
          <Route path="/genericcontainer" component={GenericContainerDemo} />
          <Route path="/customform" component={CustomFormDemo} />
          <Route path="/refsdemo" component={RefsDemo} />
          <Route path="/requireauth" component={ProtectedRoutesDemo} />
        </Switch>
        </div>
      </BrowserRouter>
    );
}

const Navbar = () => {
  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="container navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item"><Link className="nav-link active" to="/">Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/genericcontainer">Generic Container</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/customform">CustomForm</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/loaderdemo">Loader Demo</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/requireauth">Protected Routes Demo</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/refsdemo">Refs Demo</Link></li>
        </ul>
      </nav>
  )
}

const Home = () => {
  return (
    <div> Home Page </div>)
}

export default App;
