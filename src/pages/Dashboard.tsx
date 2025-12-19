import { 
  BarChart3, 
  AlertCircle, Bell, Info
} from 'lucide-react';
import StatCard from './components/dashboard/StatCard';
import Alert from '../components/Alert';
import PageTitle from '../components/PageTitle';

const Dashboard = () => {
  return (
    <>
      <PageTitle icon="chart-area" title="Dashboard" description="Visualize os dados do sistema" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Receitas" value="R$ 0,00" change="0.0% vs mês anterior" type="up" />
        <StatCard title="Despesas" value="R$ 15,00" change="100.0% vs mês anterior" type="down" />
        <StatCard title="Saldo" value="-R$ 15,00" change="100.0% vs mês anterior" type="neutral" />
        <StatCard title="Margem de Lucro" value="0.0%" change="Lucro sobre receitas" type="percent" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-slate-200">
          <div className="flex items-center gap-2 mb-8 text-slate-700 font-medium text-sm">
            <BarChart3 size={18} className="text-blue-500" />
            <span>Evolução Mensal</span>
          </div>

          <div className="h-48 border-l border-b border-slate-100 relative flex items-end justify-center">
            <div className="w-20 sm:w-32 h-full bg-red-500 rounded-t-sm"></div>
            <span className="absolute -bottom-6 text-xs text-slate-400">Dez</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200">
          <div className="flex items-center gap-2 mb-4 text-slate-700 font-medium text-sm">
            <Bell size={18} className="text-blue-500" />
            <span>Alertas</span>
          </div>
          <div className="space-y-3">
            <Alert color="bg-cyan-50 border-cyan-100" icon={<Info className="text-cyan-500" size={16}/>} title="Receitas Estáveis" desc="As receitas de Dezembro permaneceram estáveis." />
            <Alert color="bg-red-50 border-red-100" icon={<AlertCircle className="text-red-500" size={16}/>} title="Saldo Negativo" desc="Atenção urgente: O saldo de Dezembro foi negativo." />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;