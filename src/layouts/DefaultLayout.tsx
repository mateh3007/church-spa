import { useState } from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { 
  LayoutDashboard, Building2, Church, Users, Heart, 
  Tags, Receipt, Repeat, BarChart3, Calendar, 
  CalendarClock, LogOut, Menu, X
} from 'lucide-react'

const DefaultLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  const handleLogout = () => {
    // Aqui você pode adicionar lógica de logout
    navigate('/login')
  }

  const isActive = (path: string) => location.pathname === path

  return (
    <div className="flex min-h-screen bg-surface font-sans relative">
      {/* Overlay para Mobile (Fundo escuro ao abrir menu) */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-[#0f172a] text-slate-300 flex flex-col
        transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:relative lg:translate-x-0
      `}>
        <div className="p-6 flex items-center justify-between text-white border-b border-slate-700/50">
          <div className="flex items-center gap-3">
            <Church className="w-8 h-8 text-blue-400" />
            <span className="font-bold text-lg text-nowrap">Church Manager</span>
          </div>
          {/* Botão fechar (apenas mobile) */}
          <button onClick={toggleSidebar} className="lg:hidden p-1 hover:bg-slate-800 rounded">
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          <NavItem 
            icon={<LayoutDashboard size={20}/>} 
            label="Dashboard" 
            active={isActive('/dashboard')}
            onClick={() => navigate('/dashboard')}
          />
          <NavItem 
            icon={<Building2 size={20}/>} 
            label="Empresas"
            active={isActive('/empresas')}
            onClick={() => navigate('/empresas')}
          />
          <NavItem 
            icon={<Church size={20}/>} 
            label="Igrejas"
            onClick={() => navigate('/igrejas')}
          />
          <NavItem 
            icon={<Users size={20}/>} 
            label="Usuários"
            onClick={() => navigate('/usuarios')}
          />
          <NavItem 
            icon={<Heart size={20}/>} 
            label="Ministérios"
            onClick={() => navigate('/ministerios')}
          />
          
          <div className="pt-4 pb-2 px-2 text-[10px] font-bold uppercase tracking-wider text-slate-500">Financeiro</div>
          <NavItem 
            icon={<Tags size={20}/>} 
            label="Categorias"
            onClick={() => navigate('/categorias')}
          />
          <NavItem 
            icon={<Receipt size={20}/>} 
            label="Lançamentos"
            onClick={() => navigate('/lancamentos')}
          />
          <NavItem 
            icon={<Repeat size={20}/>} 
            label="Recorrentes"
            onClick={() => navigate('/recorrentes')}
          />
          <NavItem 
            icon={<BarChart3 size={20}/>} 
            label="Relatórios"
            onClick={() => navigate('/relatorios')}
          />

          <div className="pt-4 pb-2 px-2 text-[10px] font-bold uppercase tracking-wider text-slate-500">Calendário</div>
          <NavItem 
            icon={<Calendar size={20}/>} 
            label="Eventos"
            onClick={() => navigate('/eventos')}
          />
          <NavItem 
            icon={<CalendarClock size={20}/>} 
            label="Eventos Recorrentes"
            onClick={() => navigate('/eventos-recorrentes')}
          />
        </nav>

        <div className="p-4 border-t border-slate-700/50 flex items-center justify-between">
          <div className="flex items-center gap-3 text-sm">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">RR</div>
            <div>
              <p className="font-medium text-white leading-none">Renan Reis</p>
              <p className="text-[10px] text-blue-400 mt-1">Administrador</p>
            </div>
          </div>
          <button 
            onClick={handleLogout}
            className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
          >
            <LogOut size={18} />
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 lg:px-8">
          <div className="flex items-center gap-4">
            {/* Botão Hambúrguer (apenas mobile) */}
            <button 
              onClick={toggleSidebar}
              className="p-2 lg:hidden hover:bg-slate-100 rounded-md text-slate-600"
            >
              <Menu size={24} />
            </button>
          </div>
          <div className="bg-slate-100 px-3 py-1 rounded text-xs text-slate-500 border hidden sm:block">
            Igreja de Jesus
          </div>
        </header>

        <div className="p-4 lg:p-8 space-y-6 overflow-y-auto">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

interface NavItemProps {
  icon: React.ReactNode
  label: string
  active?: boolean
  onClick?: () => void
}

const NavItem = ({ icon, label, active = false, onClick }: NavItemProps) => (
  <div 
    className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-all ${
      active ? 'bg-blue-600 text-white' : 'hover:bg-slate-800'
    }`}
    onClick={onClick}
  >
    {icon}
    <span className="text-sm font-medium">{label}</span>
  </div>
)

export default DefaultLayout

