'use server';
import RightNav from "@/app/components/RightNav";
import {session} from "@/libs/session";
import {CalendarDays} from "lucide-react";
import Link from "next/link";

export default async function Header() {
  const email = await session().get('email');
  return (
    <header className="flex gap-4 justify-between py-6 text-gray-600">
      <div className="flex items-center gap-10">
        <Link href={'/'} className="text-blue-600 font-bold text-2xl flex gap-1 items-center">
          <CalendarDays size={24}/>
          Calendix
        </Link>
        <nav className="flex gap-4">
          <Link href={'/'}>Features</Link>
          <Link href={'/'}>About</Link>
          <Link href={'/'}>Pricing</Link>
        </nav>
      </div>
      <RightNav email={email} />
    </header>
  );
}