import Image from "next/image";
import { cn } from "@/lib/utils";

export function ImageLogo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "w-10 h-10 rounded-full overflow-hidden bg-white flex-shrink-0 relative",
        className,
      )}
    >
      <Image
        src="/logo.webp"
        alt="TIC logo"
        fill
        className="object-cover"
        sizes="40px"
        priority
      />
    </div>
  );
}
