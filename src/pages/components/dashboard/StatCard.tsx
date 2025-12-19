import { ArrowDown, ArrowUp, Wallet } from "lucide-react";
import { Percent } from "lucide-react";
import React from "react";

interface StatCardProps {
  title: string
  value: string
  change: string
  type: 'up' | 'down' | 'neutral' | 'percent'
}


const StatCard = ({ title, value, change, type }: StatCardProps) => {
  const icons: Record<StatCardProps['type'], React.ReactElement> = {
    up: <ArrowUp className="text-emerald-500 bg-emerald-100 p-1 rounded" size={24} />,
    down: <ArrowDown className="text-red-500 bg-red-100 p-1 rounded" size={24} />,
    neutral: <Wallet className="text-red-500 bg-red-100 p-1 rounded" size={24} />,
    percent: <Percent className="text-cyan-500 bg-cyan-100 p-1 rounded" size={24} />
  };

  return (
    <div className="bg-white p-4 rounded-xl border border-slate-200">
      <div className="flex justify-between items-start mb-2">
        <div>
          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">{title}</p>
          <h3 className="text-lg font-bold text-slate-800 mt-1">{value}</h3>
        </div>
        {icons[type]}
      </div>
      <p className={`text-[10px] flex items-center gap-1 ${type === 'percent' ? 'text-slate-400' : 'text-emerald-500'}`}>
        {type !== 'percent' && <ArrowUp size={10} />} {change}
      </p>
    </div>
  );
};

export default StatCard;