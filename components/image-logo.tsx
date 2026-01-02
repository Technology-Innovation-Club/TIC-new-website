import { cn } from "@/lib/utils";
import Image from "next/image";

export function ImageLogo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "w-10 h-10 rounded-full overflow-hidden bg-white flex-shrink-0",
        className,
      )}
    >
      <Image
        src="/logo.jpeg"
        alt="TIC logo"
        className="w-full h-full object-cover"
        width={40}
        height={40}
      />
    </div>
  );
}
