function ProfileView({ user }) {
  try {
    return (
      <div className="max-w-4xl mx-auto space-y-6" data-name="profile-view" data-file="components/ProfileView.js">
        <h2 className="text-2xl font-bold text-[var(--text-dark)]">Mi Perfil</h2>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent-color)] h-32"></div>
          
          <div className="px-8 pb-8">
            <div className="flex items-end -mt-16 mb-6">
              <div className="w-32 h-32 bg-gradient-to-br from-[var(--primary-color)] to-[var(--accent-color)] rounded-full border-4 border-white flex items-center justify-center shadow-xl">
                <div className="icon-user text-5xl text-white"></div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="text-sm font-medium text-gray-600">Nombre Completo</label>
                <p className="text-lg font-semibold text-[var(--text-dark)] mt-1">{user.fullName}</p>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-600">Usuario</label>
                <p className="text-lg font-semibold text-[var(--text-dark)] mt-1">{user.username}</p>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-600">Email</label>
                <p className="text-lg font-semibold text-[var(--text-dark)] mt-1">{user.email}</p>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-600">Rol</label>
                <span className="inline-block mt-1 px-4 py-2 bg-[var(--secondary-color)] text-[var(--accent-color)] rounded-lg font-semibold capitalize">
                  {user.role}
                </span>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-600">Versión del Sistema</label>
                <p className="text-lg font-semibold text-[var(--text-dark)] mt-1">{user.version}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('ProfileView error:', error);
    return null;
  }
}
