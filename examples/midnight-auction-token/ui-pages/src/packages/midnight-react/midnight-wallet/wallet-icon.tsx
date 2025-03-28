import Image from "next/image";
import {
  Tooltip,
  TooltipContent,  
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function WalletIcon({
  icon,
  name,
  action,
  iconReactNode,
}: {
  icon?: string;
  name: string;
  action: () => void;
  iconReactNode?: React.ReactNode;
}) {
  return (
    <Tooltip delayDuration={0} defaultOpen={false}>
      <TooltipTrigger asChild>
        <button
          className="flex items-center justify-center rounded-lg w-10 h-10 bg-neutral-50 border border-zinc-700 hover:border-zinc-200 cursor-pointer"
          onClick={action}
        >
          {icon && <Image src={icon} alt={name} className="w-8 h-8"/>}
          {iconReactNode && iconReactNode}
        </button>
      </TooltipTrigger>
      <TooltipContent>
        <p>{name}</p>
      </TooltipContent>
    </Tooltip>
  );
}
