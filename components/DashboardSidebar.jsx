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
    <aside className="min-w-64 min-h-[calc(100svh-4.8rem)] sticky z-50 bg-white border border-gray-200 rounded-xl text-gray-800 p-6">
      <nav>
        <ul className="space-y-4">
          <li>
            <Link
              href="/dashboard"
              className="flex items-center gap-3 text-md text-gray-800 hover:text-lg transition-colors"
            >
              <House className="w-5 h-5" />
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/feed"
              className="flex items-center gap-3 text-md text-gray-800 hover:text-lg transition-colors"
            >
              <FolderKanban className="w-5 h-5" />
              Feed
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/post"
              className="flex items-center gap-3 text-md ttextgxl00 hover:text-lg transition-colors"
            >
              <SquarePlus className="w-5 h-5" />
              Post
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/account"
              className="flex items-center gap-3 text-md text-gray-800 hover:text-lg transition-colors"
            >
              <User className="w-5 h-5" />
              Account
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/settings"
              className="flex items-center gap-3 text-md text-gray-800 hover:text-lg transition-colors"
            >
              <Settings className="w-5 h-5" />
              Settings
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="flex items-center gap-3 text-md text-gray-800 hover:text-lg transition-colors"
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
