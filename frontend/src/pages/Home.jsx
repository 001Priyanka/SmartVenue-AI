import { MapPinIcon, UsersIcon, CoffeeIcon, DoorOpenIcon, UtensilsIcon, NavigationIcon } from 'lucide-react';
import Card from '../components/Card';
import './Home.css';

const Home = () => {
  return (
    <div className="page-container home-page fade-in">
      <header className="page-header">
        <div className="live-badge">
          <span className="pulse-dot"></span> LIVE
        </div>
        <h1 className="event-title">India vs Australia</h1>
        <div className="location-info">
          <MapPinIcon size={16} className="text-secondary" />
          <span>Gate 3, Section B</span>
        </div>
      </header>

      <section className="dashboard-section">
        <h2 className="section-title">Quick Insights</h2>
        <div className="cards-grid">
          <Card 
            title="Crowd Level" 
            value="High" 
            icon={UsersIcon} 
            colorClass="text-danger bg-danger"
          />
          <Card 
            title="Best Food Stall" 
            value="Stall 5" 
            subtitle="2 min wait"
            icon={CoffeeIcon} 
            colorClass="text-success bg-success"
          />
          <Card 
            title="Suggested Exit" 
            value="Gate 2" 
            subtitle="Fastest route"
            icon={DoorOpenIcon} 
            colorClass="text-warning bg-warning"
          />
        </div>
      </section>

      <section className="dashboard-section">
        <h2 className="section-title">Quick Actions</h2>
        <div className="actions-grid">
          <button className="action-button">
            <UtensilsIcon size={20} />
            <span>Find Food</span>
          </button>
          <button className="action-button">
            <div className="icon-badge">WC</div>
            <span>Find Washroom</span>
          </button>
          <button className="action-button primary">
            <NavigationIcon size={20} />
            <span>Navigate to Seat</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
