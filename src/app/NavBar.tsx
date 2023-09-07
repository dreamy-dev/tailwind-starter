import { Navbar } from "flowbite-react";

export default function NavBar() {
  return (
    <Navbar fluid={true} rounded={true} style={{ zIndex: "12" }}>
      <Navbar.Brand href="https://flowbite.com/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Stadler_Rail_logotype.svg/2560px-Stadler_Rail_logotype.svg.png"
          className="mr-1 h-4 sm:h-6"
          alt="Flowbite Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/navbars" active={true}>
          Home
        </Navbar.Link>
        <Navbar.Link href="/navbars">About</Navbar.Link>
        <Navbar.Link href="/navbars">Services</Navbar.Link>
        <Navbar.Link href="/navbars">Pricing</Navbar.Link>
        <Navbar.Link href="/navbars">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
