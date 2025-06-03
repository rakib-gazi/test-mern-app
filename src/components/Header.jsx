import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { user, setUser } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const handleSignOut = async () => {
    await axiosPublic.post("/auth/signout", {}, { withCredentials: true });
    setUser(null);
    navigate("/signin");
  };
  
  return (
    <Navbar fluid rounded>
      <NavbarBrand href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold">
          Mern App
        </span>
      </NavbarBrand>

      {user ? (
        <div className="flex md:order-2 cursor-pointer">
          <Dropdown
          className=""
            arrowIcon={false}
            inline
            label={
              <Avatar
              className="cursor-pointer"
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            {user.shops.map((s, index) => (
              <DropdownItem key={index}>
                <a href={`http://${s}.localhost:5173`} className="block w-full">
      {s}
    </a>
                </DropdownItem>
            ))}
            <DropdownDivider />
            <DropdownItem onClick={handleSignOut}>Sign out</DropdownItem>
          </Dropdown>
        </div>
      ) : null}

      <NavbarCollapse>
        {!user && (
          
            <>
            <NavbarLink href="/" active>
              Home
            </NavbarLink>
            <NavbarLink href="/signin">Signin</NavbarLink>
            <NavbarLink href="/signup">Signup</NavbarLink>
          </>
          
        )}
      </NavbarCollapse>
    </Navbar>
  );
};

export default Header;
