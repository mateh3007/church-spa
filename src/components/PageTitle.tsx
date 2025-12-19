import { DynamicIcon } from 'lucide-react/dynamic';

interface PageTitleProps {
  icon: any
  title: string
  description: string
}

const PageTitle = ({ icon, title, description }: PageTitleProps) => {
  return (
    <div className="flex items-start gap-2 bg-[#FFF] p-4 rounded-lg border border-slate-200">
      <DynamicIcon name={icon} />
      <div className="flex flex-col">
        <span>{title}</span>
        <span className="text-xs text-slate-500">{description}</span>
      </div>
    </div>
  );
};

export default PageTitle;