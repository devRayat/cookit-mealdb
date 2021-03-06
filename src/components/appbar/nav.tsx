import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="navbar sticky top-0 p-2 shadow-md bg-neutral z-appbar mb-2 text-neutral-content rounded-md">
      <div className="px-2 mx-2 navbar-start">
        <Link href="/">
          <a
            className={`
                block my-0 mx-6 font-bold text-2xl
                md:text-3xl md:my-1 md:mx-12
              `}
          >
            MealDB
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
