import { useState } from 'react';
import { UserIcon, MailIcon, LockIcon, ArrowRightIcon } from 'lucide-react';
import './Auth.css';

const Signup = ({ onLogin, onNavigateLogin }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && password) {
      setIsLoading(true);
      // Dummy fake loading delay
      setTimeout(() => {
        setIsLoading(false);
        onLogin(); // onSignup -> navigate to home directly as per logic
      }, 1500);
    }
  };

  return (
    <div className="auth-container fade-in">
      <div className="auth-header">
        <h1 className="auth-title">Create Account</h1>
        <p className="auth-subtitle">Welcome! Please fill in the details to get started.</p>
      </div>

      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <UserIcon size={20} className="input-icon" />
          <input 
            type="text" 
            placeholder="Full Name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <MailIcon size={20} className="input-icon" />
          <input 
            type="email" 
            placeholder="Email address" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        <div className="input-group">
          <LockIcon size={20} className="input-icon" />
          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="auth-button primary" disabled={isLoading || !name || !email || !password}>
          {isLoading ? <span className="spinner"></span> : (
            <>
              Create Account <ArrowRightIcon size={18} />
            </>
          )}
        </button>
      </form>

      <p className="auth-link-text">
        Already have an account?{' '}
        <span className="auth-link" onClick={onNavigateLogin}>Login</span>
      </p>
    </div>
  );
};

export default Signup;
