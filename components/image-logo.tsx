import { cn } from "@/lib/utils";

export function ImageLogo({ className }: { className?: string }) {
  return (
    <div className={cn("w-20 h-20", className)}>
      <img src="/logo.jpeg" alt="TIC logo" className="object-contain" />
    </div>
  );
}
