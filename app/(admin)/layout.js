import SideNav from "./components/SideNav";

export default function AdminLayout({ children }) {
  return (
    <div className="bg-slate-50 h-screen relative w-full flex">
      <aside>
        <SideNav />
      </aside>

      <div className="w-full pt-5 px-8">{children}</div>
    </div>
  );
}
