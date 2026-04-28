import { Calendar } from "lucide-react"

export function ScheduleButton() {
  const calendlyUrl = "https://calendly.com/matheus-puppe/purple-stock"

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
  )
}
