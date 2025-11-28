function Topbar({ user, toggleSidebar, setCurrentView }) {
  try {
    const [showUserMenu, setShowUserMenu] = React.useState(false);

    return (
      <header 
        className="bg-white shadow-md border-b border-[var(--secondary-color)] sticky top-0 z-30"
        data-name="topbar"
        data-file="components/Topbar.js"
      >
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={toggleSidebar}
              className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-[var(--secondary-color)] transition-all duration-300"
            >
              <div className="icon-menu text-xl text-[var(--text-dark)]"></div>
            </button>
            <h1 className="text-xl font-bold text-[var(--text-dark)]">Sistema de Gestión</h1>
          </div>

          <div className="flex items-center gap-4">
            <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-[var(--secondary-color)] transition-all duration-300">
              <div className="icon-bell text-xl text-[var(--text-dark)]"></div>
            </button>

            <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-[var(--secondary-color)] transition-all duration-300">
              <div className="icon-mail text-xl text-[var(--text-dark)]"></div>
            </button>

            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[var(--secondary-color)] transition-all duration-300"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-[var(--primary-color)] to-[var(--accent-color)] rounded-full flex items-center justify-center">
                  <div className="icon-user text-white"></div>
                </div>
                <div className="text-left">
                  <p className="font-semibold text-sm text-[var(--text-dark)]">{user.fullName}</p>
                  <p className="text-xs text-gray-500 capitalize">{user.role}</p>
                </div>
                <div className="icon-chevron-down text-sm text-gray-500"></div>
              </button>

              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-[var(--secondary-color)] py-2">
                  <button
                    onClick={() => {
                      setCurrentView('profile');
                      setShowUserMenu(false);
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-[var(--secondary-color)] flex items-center gap-3"
                  >
                    <div className="icon-user text-[var(--primary-color)]"></div>
                    <span>Mi Perfil</span>
                  </button>
                  <button
                    onClick={() => {
                      setCurrentView('settings');
                      setShowUserMenu(false);
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-[var(--secondary-color)] flex items-center gap-3"
                  >
                    <div className="icon-settings text-[var(--primary-color)]"></div>
                    <span>Configuración</span>
                  </button>
                  <hr className="my-2 border-[var(--secondary-color)]" />
                  <button
                    onClick={logout}
                    className="w-full text-left px-4 py-2 hover:bg-red-50 flex items-center gap-3 text-red-500"
                  >
                    <div className="icon-log-out"></div>
                    <span>Cerrar Sesión</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    );
  } catch (error) {
    console.error('Topbar error:', error);
    return null;
  }
}