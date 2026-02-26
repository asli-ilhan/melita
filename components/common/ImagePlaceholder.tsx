import type {ComponentPropsWithoutRef, ReactNode} from "react";

type Props = {
  aspect?: string;
  children?: ReactNode;
} & ComponentPropsWithoutRef<"div">;

export function ImagePlaceholder({aspect = "aspect-[4/3]", children, className = "", ...rest}: Props) {
  return (
    <div
      className={`${aspect} overflow-hidden rounded-xl border border-slate-200 bg-gradient-to-br from-slate-100 to-slate-200 ${className}`}
      {...rest}
    >
      <div className="flex h-full w-full items-center justify-center">
        {children ? (
          <span className="text-xs font-medium tracking-wide text-slate-500">
            {children}
          </span>
        ) : null}
      </div>
    </div>
  );
}

