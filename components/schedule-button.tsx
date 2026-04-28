import { Calendar } from "lucide-react";
import { getCalendlyUrl } from "@/lib/contact";

export function ScheduleButton() {
  const calendlyUrl = getCalendlyUrl();

  return (
    <a
      href={calendlyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-6 z-50 flex items-center gap-2 rounded-full bg-[#9333E9] p-4 text-white shadow-lg transition-transform hover:scale-110 hover:bg-[#7928CA]"
      aria-label="Agende uma reunião"
      title="Agende uma reunião"
    >
      <Calendar className="h-6 w-6" />
    </a>
  );
}
