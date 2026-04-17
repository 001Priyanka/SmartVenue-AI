import { useState } from 'react';
import Home from './pages/Home';
import Map from './pages/Map';
import Chat from './pages/Chat';
import Alerts from './pages/Alerts';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authView, setAuthView] = useState('login'); // 'login' or 'signup'
  const [currentTab, setCurrentTab] = useState('home');

  // Dummy logic: if not logged in, show auth screens
  if (!isLoggedIn) {
    if (authView === 'login') {
      return (
        <div className="app-container">
          <Login 
            onLogin={() => setIsLoggedIn(true)} 
            onNavigateSignup={() => setAuthView('signup')} 
          />
        </div>
      );
    }
    
    // else show signup
    return (
      <div className="app-container">
        <Signup 
          onLogin={() => setIsLoggedIn(true)} 
          onNavigateLogin={() => setAuthView('login')} 
        />
      </div>
    );
  }

  // Active App Flow
  const renderScreen = () => {
    switch (currentTab) {
      case 'home': return <Home />;
      case 'map': return <Map />;
      case 'chat': return <Chat />;
      case 'alerts': return <Alerts />;
      default: return <Home />;
    }
  };

  return (
    <div className="app-container">
      <div className="page-content">
        {renderScreen()}
      </div>
      <Navbar currentTab={currentTab} onTabChange={setCurrentTab} />
    </div>
  );
}

export default App;
