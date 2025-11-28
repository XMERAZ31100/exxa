function Sidebar({ currentView, setCurrentView, isOpen }) {
  try {
    const [expandedMenu, setExpandedMenu] = React.useState(null);

    const menuItems = [
      { id: 'dashboard', icon: 'layout-dashboard', label: 'Dashboard' },
      { id: 'profile', icon: 'user', label: 'Perfil' },
      { id: 'settings', icon: 'settings', label: 'Configuración' },
      { id: 'reports', icon: 'file-text', label: 'Reportes' },
      { id: 'users', icon: 'users', label: 'Usuarios' }
    ];

    return (
      <aside 
        className={`fixed left-0 top-0 h-full bg-white shadow-xl transition-all duration-300 z-40 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
        style={{ width: 'var(--sidebar-width)' }}
        data-name="sidebar"
        data-file="components/Sidebar.js"
      >
        <div className="p-6 border-b border-[var(--secondary-color)]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-[var(--primary-color)] to-[var(--accent-color)] rounded-xl flex items-center justify-center shadow-lg">
              <div className="icon-sparkles text-xl text-white"></div>
            </div>
            <div>
              <h2 className="font-bold text-lg text-[var(--text-dark)]">Sistema</h2>
              <p className="text-xs text-gray-500">v1.0</p>
            </div>
          </div>
        </div>

        <nav className="p-4 space-y-2">
          {menuItems.map(item => (
            <div key={item.id}>
              <div
                onClick={() => setCurrentView(item.id)}
                className={`sidebar-item ${currentView === item.id ? 'sidebar-item-active' : ''}`}
              >
                <div className={`icon-${item.icon} text-lg`}></div>
                <span className="font-medium">{item.label}</span>
              </div>
            </div>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-[var(--secondary-color)]">
          <button
            onClick={logout}
            className="sidebar-item w-full text-red-500 hover:bg-red-50"
          >
            <div className="icon-log-out text-lg"></div>
            <span className="font-medium">Cerrar Sesión</span>
          </button>
        </div>
      </aside>
    );
  } catch (error) {
    console.error('Sidebar error:', error);
    return null;
  }
}