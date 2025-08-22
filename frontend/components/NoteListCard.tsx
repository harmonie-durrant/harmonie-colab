import { Page } from "@/types/Page";

export default function NoteListCard({ page }: { page: Page }) {
    return (
        <div className="w-30 h-30 bg-zinc-800 flex px-4 rounded-xl border-1 border-zinc-700 hover:border-zinc-500 cursor-pointer flex-col justify-center items-start gap-4">
            <div className="text-2xl font-bold">{page.emoji}</div>
            <div className="text-sm font-bold overflow-hidden line-clamp-2 h-10">{page.title}</div>
        </div>
    );
}