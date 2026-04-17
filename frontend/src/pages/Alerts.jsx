import { AlertTriangleIcon, CoffeeIcon, ShieldIcon, HelpCircleIcon } from 'lucide-react';
import './Alerts.css';

const dummyAlerts = [
  {
    id: 1,
    type: 'danger',
    icon: AlertTriangleIcon,
    title: 'Gate 1 Overcrowded',
    time: '2 mins ago',
    message: 'We request all attendees in Section A to use Gate 2 or 3 for exit to avoid wait times.'
  },
  {
    id: 2,
    type: 'success',
    icon: CoffeeIcon,
    title: 'Stall 4 has no queue',
    time: '10 mins ago',
    message: 'Grab your snacks now! Stall 4 near Section C is currently empty.'
  },
  {
    id: 3,
    type: 'warning',
    icon: ShieldIcon,
    title: 'Washroom near Gate 2 busy',
    time: '15 mins ago',
    message: 'Wait time is currently ~5 mins. Alternative washrooms available near Gate 3.'
  },
  {
    id: 4,
    type: 'info',
    icon: HelpCircleIcon,
    title: 'Match starting in 15 mins',
    time: '20 mins ago',
    message: 'Please take your seats, the national anthems will begin shortly.'
  }
];

const Alerts = () => {
  return (
    <div className="page-container fade-in">
      <header className="page-header" style={{ paddingBottom: 0 }}>
        <h1 className="section-title">Live Updates</h1>
      </header>

      <div className="alerts-feed">
        {dummyAlerts.map(alert => {
          const Icon = alert.icon;
          return (
            <div key={alert.id} className={`alert-card alert-${alert.type}`}>
              <div className="alert-icon-wrapper">
                <Icon size={20} />
              </div>
              <div className="alert-content">
                <div className="alert-header">
                  <h3 className="alert-title">{alert.title}</h3>
                  <span className="alert-time">{alert.time}</span>
                </div>
                <p className="alert-message">{alert.message}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Alerts;
