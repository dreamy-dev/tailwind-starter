import NavBar from "./NavBar";
import TopNav from "./TopNav";

export default function Header() {
  return (
    <header className="bg-darkBlue">
      <div className="flex flex-col-reverse w-full lg:flex-col">
        <TopNav />
        <NavBar />
      </div>
    </header>
  );
}
