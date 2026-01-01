
import Login from "../components/login/login.jsx"



const LoginP= () => {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 50%, #6366F1 100%)',
      padding: '1rem',
      
    }}>
      <Login />
    </div>
  );
};

export default LoginP;
