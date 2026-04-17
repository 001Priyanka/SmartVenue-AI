import './Card.css';

const Card = ({ title, value, icon: Icon, colorClass, highlightText, subtitle, onClick }) => {
  return (
    <div className={`smart-card ${onClick ? 'clickable' : ''}`} onClick={onClick}>
      <div className="card-header">
        {Icon && <div className={`card-icon ${colorClass}`}><Icon size={20} /></div>}
        {title && <h3 className="card-title">{title}</h3>}
        {highlightText && <span className={`card-badge ${colorClass}`}>{highlightText}</span>}
      </div>
      <div className="card-content">
        {value && <div className="card-value">{value}</div>}
        {subtitle && <div className="card-subtitle">{subtitle}</div>}
      </div>
    </div>
  );
};

export default Card;
