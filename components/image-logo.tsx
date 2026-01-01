import { cn } from "@/lib/utils";

export function ImageLogo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "w-20 h-20 rounded-full overflow-hidden bg-white",
        className,
      )}
    >
      <img
        src="/logo.jpeg"
        alt="TIC logo"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
