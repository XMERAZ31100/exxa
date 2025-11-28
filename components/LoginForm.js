function LoginForm() {
  try {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState('');
    const [loading, setLoading] = React.useState(false);

    const handleLogin = async (e) => {
      e.preventDefault();
      setError('');
      setLoading(true);

      try {
        console.log('Attempting login for user:', username);
        const user = await authenticateUser(username, password);
        
        if (user) {
          console.log('Login successful, redirecting to dashboard');
          localStorage.setItem('currentUser', JSON.stringify(user));
          window.location.href = 'dashboard.html';
        } else {
          console.log('Login failed: invalid credentials');
          setError('Usuario o contraseña incorrectos. Verifica las credenciales de prueba.');
        }
      } catch (err) {
        console.error('Login error:', err);
        setError('Error al conectar con la base de datos. Por favor, intente de nuevo.');
      } finally {
        setLoading(false);
      }
    };

    return (
      <div className="card-glass p-8 w-full max-w-md relative z-10" data-name="login-form" data-file="components/LoginForm.js">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-[var(--primary-color)] to-[var(--accent-color)] rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
            <div className="icon-sparkles text-3xl text-white"></div>
          </div>
          <h1 className="text-3xl font-bold text-[var(--text-dark)] mb-2">Bienvenida</h1>
          <p className="text-gray-600">Sistema de Gestión v1.0</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-[var(--text-dark)] mb-2">
              Usuario
            </label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <div className="icon-user text-[var(--primary-color)]"></div>
              </div>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="input-field pl-10"
                placeholder="Ingresa tu usuario"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--text-dark)] mb-2">
              Contraseña
            </label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <div className="icon-lock text-[var(--primary-color)]"></div>
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field pl-10"
                placeholder="Ingresa tu contraseña"
                required
              />
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border-l-4 border-red-400 p-3 rounded">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full"
          >
            {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
          </button>
        </form>

        <div className="mt-8 p-4 bg-[var(--secondary-color)] rounded-lg">
          <p className="text-xs font-semibold text-[var(--text-dark)] mb-2">Credenciales de prueba:</p>
          <div className="text-xs space-y-1 text-gray-700">
            <p><strong>Superusuario:</strong> super_maria / super123</p>
            <p><strong>Admin:</strong> admin_sofia / admin123</p>
            <p><strong>Usuario:</strong> user_carmen / user123</p>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('LoginForm component error:', error);
    return null;
  }
}