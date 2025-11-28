function DashboardView({ user }) {
  try {
    const chartRef = React.useRef(null);
    const chartInstance = React.useRef(null);

    React.useEffect(() => {
      if (chartRef.current) {
        const ctx = chartRef.current.getContext('2d');
        const ChartJS = window.Chart;
        
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }

        chartInstance.current = new ChartJS(ctx, {
          type: 'line',
          data: {
            labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
            datasets: [{
              label: 'Actividad',
              data: [12, 19, 15, 25, 22, 30],
              borderColor: '#f3b8d2',
              backgroundColor: 'rgba(243, 184, 210, 0.1)',
              tension: 0.4,
              fill: true
            }]
          },
          options: {
            responsive: true,
            plugins: {
              legend: { display: false }
            }
          }
        });
      }

      return () => {
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }
      };
    }, []);

    const stats = [
      { icon: 'users', label: 'Usuarios', value: '1,234', color: 'from-pink-400 to-pink-600' },
      { icon: 'chart-bar', label: 'Reportes', value: '856', color: 'from-purple-400 to-purple-600' },
      { icon: 'file-text', label: 'Documentos', value: '432', color: 'from-blue-400 to-blue-600' },
      { icon: 'trending-up', label: 'Crecimiento', value: '+23%', color: 'from-green-400 to-green-600' }
    ];

    return (
      <div className="space-y-6" data-name="dashboard-view" data-file="components/DashboardView.js">
        <div>
          <h2 className="text-2xl font-bold text-[var(--text-dark)] mb-2">Bienvenida, {user.fullName}!</h2>
          <p className="text-gray-600">Aquí está el resumen de tu sistema</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className={`w-14 h-14 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-4`}>
                <div className={`icon-${stat.icon} text-2xl text-white`}></div>
              </div>
              <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
              <p className="text-3xl font-bold text-[var(--text-dark)]">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-bold text-[var(--text-dark)] mb-4">Actividad Mensual</h3>
            <canvas ref={chartRef}></canvas>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-bold text-[var(--text-dark)] mb-4">Calendario</h3>
            <div className="space-y-3">
              {['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'].map((day, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-[var(--secondary-color)] rounded-lg">
                  <span className="font-medium">{day}</span>
                  <span className="text-sm text-gray-600">{20 + idx} Nov</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('DashboardView error:', error);
    return null;
  }
}