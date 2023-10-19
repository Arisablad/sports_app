import { cn } from "@/lib/utils.ts";

export default function LoadingSpinner({ className }: { className?: string }) {
  return (
    <div className="spinner-container ml-auto mr-auto">
      <div className={cn("loading-spinner w-[50px] h-[50px]", className)}></div>
    </div>
  );
}
