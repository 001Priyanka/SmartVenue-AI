import { HomeIcon, MapIcon, MessageSquareIcon, BellIcon } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ currentTab, onTabChange }) => {
  const tabs = [
    { id: 'home', label: 'Home', icon: HomeIcon },
    { id: 'map', label: 'Map', icon: MapIcon },
    { id: 'chat', label: 'Chat', icon: MessageSquareIcon },
    { id: 'alerts', label: 'Alerts', icon: BellIcon },
  ];

  return (
    <nav className="bottom-navbar">
      <div className="navbar-container">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = currentTab === tab.id;
          return (
            <button
              key={tab.id}
              className={`nav-item ${isActive ? 'active' : ''}`}
              onClick={() => onTabChange(tab.id)}
            >
              <div className="icon-wrapper">
                <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
              </div>
              <span className="nav-label">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
