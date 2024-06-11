import Link from "next/link";
import { FC } from "react";

import MenuItem from "~/components/ui/navbar/MenuIte";

import { menu } from "~/components/ui/navbar/menu.data";

import styles from "./Navbar.module.scss";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  return (
    <header className="mb-8 border-b">
      <div className={styles.wrapper}>
        <Link href="/">
          <h1 className="text-3xl font-bold text-violet-600">ECommerce</h1>
        </Link>

        <nav className="hidden gap-12 lg:flex 2xl:ml-16">
          {menu.map((item) => (
            <MenuItem key={item.link} item={item} />
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
