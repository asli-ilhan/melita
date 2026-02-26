import Image from "next/image";
import type {ComponentPropsWithoutRef} from "react";

type Props = {
  src: string;
  alt: string;
  /**
   * Optional extra classes on the outer wrapper (e.g. aspect ratio).
   */
  wrapperClassName?: string;
  /**
   * Show Melita logo badge in the top-left corner.
   */
  showLogo?: boolean;
  priority?: boolean;
} & Omit<ComponentPropsWithoutRef<"div">, "children">;

export function BrandedImage({
  src,
  alt,
  wrapperClassName = "",
  showLogo = true,
  priority,
  className,
  ...rest
}: Props) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-200/80 ${wrapperClassName}`}
      {...rest}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 480px, 100vw"
        priority={priority}
        className={`h-full w-full object-cover ${className ?? ""}`}
      />
      {showLogo ? (
        <div className="pointer-events-none absolute left-3 top-3 rounded-full bg-white/92 px-3 py-1 shadow-sm ring-1 ring-slate-200/70">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Melita Laundry Services logo"
              width={24}
              height={24}
              className="h-6 w-6 object-contain"
            />
            <span className="text-[11px] font-semibold tracking-wide text-slate-700">
              Melita Laundry
            </span>
          </div>
        </div>
      ) : null}
    </div>
  );
}

