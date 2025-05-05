
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { X, Menu, User, Building, Search, Home, Plus } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <Home className="h-8 w-8 text-estate-navy" />
              <span className="ml-2 text-xl font-bold text-estate-navy">HomeHub</span>
            </Link>
          </div>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/properties" className="px-3 py-2 text-estate-dark-gray hover:text-estate-navy transition-colors">
              Properties
            </Link>
            <Link to="/builders" className="px-3 py-2 text-estate-dark-gray hover:text-estate-navy transition-colors">
              Builders
            </Link>
            <Link to="/reviews" className="px-3 py-2 text-estate-dark-gray hover:text-estate-navy transition-colors">
              Reviews
            </Link>
            
            {isLoggedIn ? (
              <>
                <Link to="/add-property">
                  <Button variant="outline" className="border-estate-teal text-estate-teal hover:bg-estate-teal hover:text-white">
                    <Plus className="mr-2 h-4 w-4" /> List Property
                  </Button>
                </Link>
                <Link to="/profile">
                  <Button variant="ghost" className="text-estate-navy">
                    <User className="mr-2 h-4 w-4" /> Profile
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="ghost" className="text-estate-navy">
                    Login
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button className="bg-estate-teal hover:bg-estate-navy">
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-600 hover:text-gray-900 focus:outline-none">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to="/properties" className="block px-3 py-2 rounded-md text-base font-medium text-estate-dark-gray hover:text-estate-navy">
            Properties
          </Link>
          <Link to="/builders" className="block px-3 py-2 rounded-md text-base font-medium text-estate-dark-gray hover:text-estate-navy">
            Builders
          </Link>
          <Link to="/reviews" className="block px-3 py-2 rounded-md text-base font-medium text-estate-dark-gray hover:text-estate-navy">
            Reviews
          </Link>
          {isLoggedIn ? (
            <>
              <Link to="/add-property" className="block px-3 py-2 rounded-md text-base font-medium text-estate-teal">
                List Property
              </Link>
              <Link to="/profile" className="block px-3 py-2 rounded-md text-base font-medium text-estate-navy">
                Profile
              </Link>
            </>
          ) : (
            <>
              <Link to="/login" className="block px-3 py-2 rounded-md text-base font-medium text-estate-navy">
                Login
              </Link>
              <Link to="/signup" className="block px-3 py-2 rounded-md text-base font-medium text-estate-teal">
                Sign Up
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
