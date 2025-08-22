import { Page } from "@/types/Page";

export default function NavBar() {
    return (
        <div className="flex flex-row items-center justify-between p-2">
            <label htmlFor="navigation-drawer" className="drawer-button p-1 hover:cursor-pointer hover:text-zinc-400">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                    <path fill="currentColor" d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z"></path>
                </svg>
            </label>
        </div>
    );
}