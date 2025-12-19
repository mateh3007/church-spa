interface AlertProps {
  color: string
  icon: React.ReactNode
  title: string
  desc: string
}

const Alert = ({ color, icon, title, desc }: AlertProps) => (
  <div className={`p-3 rounded-lg border flex gap-3 ${color}`}>
    <div className="mt-0.5 shrink-0">{icon}</div>
    <div>
      <h4 className="text-[11px] font-bold text-slate-800 leading-tight">{title}</h4>
      <p className="text-[10px] text-slate-600 mt-0.5 leading-snug">{desc}</p>
    </div>
  </div>
);

export default Alert;