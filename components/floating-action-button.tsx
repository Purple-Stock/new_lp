import type { LucideIcon } from "lucide-react";

type FloatingActionButtonProps = {
  href: string;
  label: string;
  icon: LucideIcon;
  position: "schedule" | "whatsapp";
};

const styles = {
  schedule: {
    position: "bottom-24",
    bg: "bg-[#9333E9] hover:bg-[#7928CA]",
    expandedWidth: "group-hover:w-[13.5rem]",
  },
  whatsapp: {
    position: "bottom-6",
    bg: "bg-[#25D366] hover:bg-[#20BA5C]",
    expandedWidth: "group-hover:w-[14.5rem]",
  },
} as const;

export function FloatingActionButton({
  href,
  label,
  icon: Icon,
  position,
}: FloatingActionButtonProps) {
  const { position: bottom, bg, expandedWidth } = styles[position];

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`group fixed right-6 z-50 block h-14 w-14 overflow-hidden rounded-full text-white shadow-lg transition-[width,box-shadow,background-color] duration-300 ease-out hover:shadow-xl ${bottom} ${bg} ${expandedWidth}`}
    >
      <span className="absolute inset-y-0 left-0 right-14 flex items-center whitespace-nowrap pl-5 text-sm font-medium opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        {label}
      </span>
      <span className="absolute right-0 top-0 flex h-14 w-14 items-center justify-center transition-transform duration-300 group-hover:scale-110">
        <Icon className="h-6 w-6" />
      </span>
    </a>
  );
}
