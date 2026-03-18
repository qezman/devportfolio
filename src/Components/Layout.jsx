import Navbar from "./Navbar";
import StickyCvButton from "./StickyCvButton";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-b from-slate-950 to-black text-white">
      <nav className="w-full">
        <Navbar />
      </nav>
      <main className="flex-1 w-full">
        {children}
      </main>
      <StickyCvButton />
    </div>
  );
};

export default Layout;
