"use client";
import { Navbar } from "flowbite-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <Navbar
      className="font-customBlack"
      style={{
        marginTop: "30px",
        marginBottom: "30px",
        backgroundColor: "white",
      }}
    >
      <Navbar.Brand href="#" as={Link}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Stadler_Rail_logotype.svg/2560px-Stadler_Rail_logotype.svg.png"
          className="mr-1 h-4 sm:h-6"
          alt="Flowbite Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="main-navbar" />
      <Navbar.Collapse id="main-navbar">
        <Navbar.Link as={Link} href="/">
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} href="/solutions">
          Solutions
        </Navbar.Link>
        <Navbar.Link as={Link} href="/career">
          Career
        </Navbar.Link>
        <Navbar.Link as={Link} href="/company">
          Company
        </Navbar.Link>
        <Navbar.Link as={Link} href="/medien">
          Media
        </Navbar.Link>
        <Navbar.Link as={Link} href="/zulieferer">
          Supplier
        </Navbar.Link>
        <Navbar.Link as={Link} href="/full-service">
          Full Service
        </Navbar.Link>
        <Navbar.Link as={Link} href="/product">
          Product
        </Navbar.Link>
        <Navbar.Link as={Link} href="/lieferanten">
          Lieferanten
        </Navbar.Link>
        {/* <Navbar.Link as={Link} href="/unternehmen">
          Unternehmen
        </Navbar.Link> */}
      </Navbar.Collapse>
    </Navbar>
  );
}
