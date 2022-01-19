import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import './assets/scss/style.scss';
import Repositories from './components/repositories/Repositories';
import Developers from './components/developers/Developers';
import NotFound from './components/notfound/NotFound';


function App() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          {/*  component={Repos} */}
          <Router>
            <Routes>
              <Route path="/repositories" element={<Repositories title="Trending"
                description="See what the GitHub community is most excited Today." />} />
              <Route path="/developers" element={<Developers title="Trending"
                description="These are the developers building the hot tools today." />} />
              <Route path="*" element={<NotFound/>} />
              {/* <Navigate to="/repositories" /> */}
            </Routes>
          </Router>
        </div>
      </div>
    </>
  );
}

export default App;
