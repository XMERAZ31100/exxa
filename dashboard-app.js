class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Algo salió mal</h1>
            <button onClick={() => window.location.reload()} className="bg-[var(--primary-color)] text-white px-6 py-2 rounded-lg">
              Recargar
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function DashboardApp() {
  try {
    const [currentView, setCurrentView] = React.useState('dashboard');
    const [sidebarOpen, setSidebarOpen] = React.useState(true);
    const [user, setUser] = React.useState(null);

    React.useEffect(() => {
      const currentUser = getCurrentUser();
      if (!currentUser) {
        window.location.href = 'index.html';
      } else {
        setUser(currentUser);
      }
    }, []);

    if (!user) return null;

    const renderView = () => {
      switch(currentView) {
        case 'dashboard':
          return <DashboardView user={user} />;
        case 'profile':
          return <ProfileView user={user} />;
        case 'settings':
          return <SettingsView user={user} />;
        default:
          return <DashboardView user={user} />;
      }
    };

    return (
      <div className="min-h-screen flex" data-name="dashboard-app" data-file="dashboard-app.js">
        <Sidebar 
          currentView={currentView}
          setCurrentView={setCurrentView}
          isOpen={sidebarOpen}
        />
        
        <div className="flex-1 flex flex-col" style={{ marginLeft: sidebarOpen ? 'var(--sidebar-width)' : '0' }}>
          <Topbar 
            user={user}
            toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
            setCurrentView={setCurrentView}
          />
          
          <main className="flex-1 p-6">
            {renderView()}
          </main>
        </div>
      </div>
    );
  } catch (error) {
    console.error('DashboardApp error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <DashboardApp />
  </ErrorBoundary>
);