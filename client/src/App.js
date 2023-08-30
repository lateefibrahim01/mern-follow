import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import UserProfilePage from './pages/UserProfilePage';
import CreatePostPage from './pages/CreatePostPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <header className="bg-blue-500 text-white py-4">
          <div className="container mx-auto text-center">
            <h1 className="text-3xl font-semibold">My Social App</h1>
          </div>
        </header>
        <main className="container mx-auto my-4 flex-grow">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/profile/:userId" component={UserProfilePage} />
            <Route path="/create-post/:userId" component={CreatePostPage} />
          </Switch>
        </main>
        <footer className="bg-gray-200 py-2 text-center">
          <p>&copy; {new Date().getFullYear()} My Social App. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
