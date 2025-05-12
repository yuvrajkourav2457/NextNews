'use client';

import Link from 'next/link';
import {
  Settings,
  User,
  FolderKanban,
  House,
  SquarePlus,
  LogOut
} from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="min-w-64 min-h-[calc(100svh-5.1rem)] sticky z-50 bg-white border border-gray-300 rounded-xl text-gray-800 p-6">
      <nav>
        <ul className="space-y-5">
          <li>
            <Link
              href="/dashboard"
              className="flex items-center gap-3 text-md text-gray-800 hover:text-purple-800 transition-colors"
            >
              <House className="w-5 h-5" />
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/feed"
              className="flex items-center gap-3 text-md text-gray-800 hover:text-purple-800 transition-colors"
            >
              <FolderKanban className="w-5 h-5" />
              Feed
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/post"
              className="flex items-center gap-3 text-md text-gray-800 hover:text-purple-800 transition-colors"
            >
              <SquarePlus className="w-5 h-5" />
              Post
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/account"
              className="flex items-center gap-3 text-md text-gray-800 hover:text-purple-800 transition-colors"
            >
              <User className="w-5 h-5" />
              Account
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/settings"
              className="flex items-center gap-3 text-md text-gray-800 hover:text-purple-800 transition-colors"
            >
              <Settings className="w-5 h-5" />
              Settings
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="flex items-center gap-3 text-md text-gray-800 hover:text-purple-800 transition-colors"
            >
              <LogOut className="w-5 h-5" />
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
