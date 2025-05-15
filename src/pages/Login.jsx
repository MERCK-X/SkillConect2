const Login = () => {
  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2>Iniciar Sesión</h2>
        <form className="auth-form">
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input 
              type="email" 
              id="email" 
              placeholder="tu@email.com" 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input 
              type="password" 
              id="password" 
              placeholder="••••••••" 
            />
          </div>
          
          <button type="submit" className="btn-primary">
            Ingresar
          </button>
          
          <div className="auth-footer">
            <p>¿No tienes cuenta? <a href="/register">Regístrate</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;