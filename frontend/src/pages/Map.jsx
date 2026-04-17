import { MapPinIcon } from 'lucide-react';
import Card from '../components/Card';
import './Map.css';

const Map = () => {
  return (
    <div className="page-container fade-in">
      <h1 className="section-title">Venue Map</h1>
      
      <div className="map-container">
        <div className="stadium-shape">
          <div className="field"></div>
          
          {/* Markers */}
          <div className="marker marker-gate1 bg-danger">
            <span className="pulse"></span>
            Gate 1
          </div>
          <div className="marker marker-gate2 bg-success">
            Gate 2
          </div>
          <div className="marker marker-stall3 bg-warning">
            Stall 3
          </div>
          <div className="marker marker-stall5 bg-success">
            Stall 5
          </div>
          <div className="marker marker-wc bg-danger">
            WC
          </div>
        </div>
        
        <div className="map-legend">
          <div className="legend-item"><span className="dot bg-danger"></span> Crowded</div>
          <div className="legend-item"><span className="dot bg-warning"></span> Moderate</div>
          <div className="legend-item"><span className="dot bg-success"></span> Free</div>
        </div>
      </div>

      <div className="map-insights">
        <h2 className="section-title">Nearby You</h2>
        <Card 
          title="Nearest Food" 
          value="Stall 3" 
          subtitle="5 min walk • 5 min wait"
          colorClass="text-warning bg-warning"
          icon={MapPinIcon}
        />
        <Card 
          title="Gate Status" 
          value="Gate 1 Crowded" 
          subtitle="Consider using exit Gate 2"
          colorClass="text-danger bg-danger"
          icon={MapPinIcon}
        />
      </div>
    </div>
  );
};

export default Map;
