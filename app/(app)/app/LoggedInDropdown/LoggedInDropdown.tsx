import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useSession, signOut } from "next-auth/react";
import { PropsWithChildren } from "react";
import { LogOut } from "lucide-react";

export type LoggedInDropdownProps = PropsWithChildren<{}>;

const LoggedInDropdown = (props: LoggedInDropdownProps) => {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <div className="mt-2 z-10">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>{props.children}</DropdownMenuTrigger>
          <DropdownMenuContent>
            <form>
              <DropdownMenuItem asChild>
                <button
                  onClick={() => signOut()}
                  className="flex items-center px-4 py-2 text-sm text-gray-100 hover:bg-red-800 cursor-pointer"
                >
                  <LogOut size={16} className="mr-2" />
                  Se déconnecter
                </button>
              </DropdownMenuItem>
            </form>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
  }
  return null;
};

export default LoggedInDropdown;
