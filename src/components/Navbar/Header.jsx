import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react';
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.webp"
import { PiSignOutBold} from 'react-icons/pi';
import { AuthContext } from '../../Context/AuthProvider';
import { useContext} from "react";

const Header = () => {

  const { user, userLogOut } = useContext(AuthContext);

  const handleLogOut = () => {
    userLogOut()
      .then()
      .catch()
  }

  return (
    <div>
      <Navbar fluid rounded>
       
        <Navbar.Brand >
          <img src={logo} className="mr-3 h-6 rounded-lg sm:h-9" alt="Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">HarvestSwap</span>
        </Navbar.Brand>

        <div className="flex md:order-2">

       
        {
          user ? 
          <>
           <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt="User settings" img={user.photoURL} rounded />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Name: {user.displayName} </span>
              <span className="block truncate text-sm font-medium">Email: {user.email}</span>
            </Dropdown.Header>
            <Dropdown.Divider />
            <Dropdown.Item><Button color="gray" pill onClick={handleLogOut }>
                 SignOut <span className='ml-2'><PiSignOutBold></PiSignOutBold></span>
      </Button></Dropdown.Item>
          </Dropdown>
          
          </>
          :
          <>
          </>

        }

         
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link active>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-white md:text-red-400" : ""
              }
            >
              Home
            </NavLink>
          </Navbar.Link>      
         
          <Navbar.Link >
            <NavLink
              to="/avaiblefoods"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-white md:text-red-400" : ""
              }
            >
               Available Foods
            </NavLink>

          </Navbar.Link>

          <Navbar.Link >
            <NavLink
              to="/addfood"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-white md:text-red-400 " : ""
              }
            >
               Add Food
            </NavLink>

          </Navbar.Link>

          <Navbar.Link >
            <NavLink
              to="/managefood"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-white md:text-red-400" : ""
              }
            >
               Manage My Foods
            </NavLink>

          </Navbar.Link>

          <Navbar.Link >
            <NavLink
              to="/foodrequest"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-white md:text-red-400" : ""
              }
            >
               My Food Request
            </NavLink>

          </Navbar.Link>
          
       {
        user ?
        <>
        </>
        :
        <>
           <Navbar.Link >
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-white md:text-red-400" : ""
              }
            >
             Login
            </NavLink>

          </Navbar.Link>

          <Navbar.Link >
            <NavLink
              to="/register"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-white md:text-red-400" : ""
              }
            >
             Register
            </NavLink>

          </Navbar.Link>
        </>
       }
 

        </Navbar.Collapse>
      </Navbar>

    </div>
  );
};

export default Header;