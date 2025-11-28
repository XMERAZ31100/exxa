function SettingsView({ user }) {
  try {
    const [notifications, setNotifications] = React.useState(true);
    const [emailAlerts, setEmailAlerts] = React.useState(false);
    const [darkMode, setDarkMode] = React.useState(false);

    const settingsSections = [
      {
        title: 'Notificaciones',
        items: [
          { id: 'notifications', label: 'Activar notificaciones', value: notifications, setter: setNotifications },
          { id: 'emailAlerts', label: 'Alertas por correo', value: emailAlerts, setter: setEmailAlerts }
        ]
      },
      {
        title: 'Apariencia',
        items: [
          { id: 'darkMode', label: 'Modo oscuro', value: darkMode, setter: setDarkMode }
        ]
      }
    ];

    return (
      <div className="max-w-4xl mx-auto space-y-6" data-name="settings-view" data-file="components/SettingsView.js">
        <h2 className="text-2xl font-bold text-[var(--text-dark)]">Configuración</h2>

        {settingsSections.map((section, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-bold text-[var(--text-dark)] mb-4">{section.title}</h3>
            <div className="space-y-4">
              {section.items.map(item => (
                <div key={item.id} className="flex items-center justify-between p-4 bg-[var(--bg-light)] rounded-lg">
                  <span className="font-medium text-[var(--text-dark)]">{item.label}</span>
                  <button
                    onClick={() => item.setter(!item.value)}
                    className={`relative w-14 h-7 rounded-full transition-all duration-300 ${
                      item.value ? 'bg-[var(--primary-color)]' : 'bg-gray-300'
                    }`}
                  >
                    <div
                      className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-all duration-300 ${
                        item.value ? 'transform translate-x-7' : ''
                      }`}
                    ></div>
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-bold text-[var(--text-dark)] mb-4">Información del Sistema</h3>
          <div className="space-y-3 text-sm text-gray-600">
            <p><strong>Versión:</strong> {user.version}</p>
            <p><strong>Última actualización:</strong> 27 Nov 2025</p>
            <p><strong>Rol actual:</strong> <span className="capitalize">{user.role}</span></p>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('SettingsView error:', error);
    return null;
  }
}