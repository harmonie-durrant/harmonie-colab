import NoteListCard from "@/components/NoteListCard";
import { Page } from "@/types/Page";

export default function Home() {

  const recents: Page[] = [
    {
      "emoji": "📋",
      "title": "Class Notes"
    },
    {
      "emoji": "📚",
      "title": "Reading List"
    },
    {
      "emoji": "📝",
      "title": "To-Do List"
    },
    {
      "emoji": "💸",
      "title": "Finance Tracker is really long"
    }
  ]

  return (
    <div className="flex flex-col items-center justify-center py-24 w-full">
      <div className="flex flex-col items-center justify-center py-8 w-full max-w-3xl">
        <h1 className="text-md font-bold text-gray-300 text-start w-full">
          🕖 Recent Activity
        </h1>
        <div className="flex flex-row gap-4 mt-4 h-auto w-full overflow-x-scroll">
          {recents.map((item, index) => (
            <NoteListCard
              key={index}
              page={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
