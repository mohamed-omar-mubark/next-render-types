import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

// components
import { Button } from "primereact/button";

const Header = () => {
  const { data: session } = useSession();

  return (
    <header className="mb-4 bg-white">
      <div className="container p-4 flex-between-center">
        <Link href="/" className="logo text-3xl font-bold text-primary">
          Render Types
        </Link>

        <nav>
          <ul className="flex-between-center gap-4">
            <li>
              <Link
                href="/"
                className="font-semibold text-gray-700 hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/ssr-users"
                className="font-semibold text-gray-700 hover:text-primary">
                SSR Users
              </Link>
            </li>
            <li>
              <Link
                href="/ssg-posts"
                className="font-semibold text-gray-700 hover:text-primary">
                SSG Posts
              </Link>
            </li>
            <li>
              <Link
                href="/isr-users"
                className="font-semibold text-gray-700 hover:text-primary">
                ISR Users
              </Link>
            </li>
            <li>
              <Link
                href="/csr-posts"
                className="font-semibold text-gray-700 hover:text-primary">
                CSR Posts
              </Link>
            </li>
            {session ? (
              <Button
                icon="pi pi-sign-out"
                label="Sign Out"
                size="small"
                onClick={() => signOut()}
              />
            ) : (
              <Button
                icon="pi pi-sign-in"
                label="Sign In"
                size="small"
                onClick={() => signIn()}
              />
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
