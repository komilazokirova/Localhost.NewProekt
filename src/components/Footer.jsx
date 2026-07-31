import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="bg-gray-100 px-16 py-10">
        <div className="flex justify-between">
        
          <div className="flex flex-col gap-2">
            <h4 className="font-bold">Support</h4>

            <NavLink
              to="/help-centre"
              className={({ isActive }) =>
                isActive ? "text-emerald-500 font-bold" : "text-gray-600"
              }
            >
              Help Centre
            </NavLink>

            <NavLink
              to="/aircover"
              className={({ isActive }) =>
                isActive ? "text-emerald-500 font-bold" : "text-gray-600"
              }
            >
              AirCover
            </NavLink>

            <NavLink
              to="/discrimination"
              className={({ isActive }) =>
                isActive ? "text-emerald-500 font-bold" : "text-gray-600"
              }
            >
              Combating discrimination
            </NavLink>

            <NavLink
              to="/supporting"
              className={({ isActive }) =>
                isActive ? "text-emerald-500 font-bold" : "text-gray-600"
              }
            >
              Supporting people with disabilities
            </NavLink>

            <NavLink
              to="/cancellation"
              className={({ isActive }) =>
                isActive ? "text-emerald-500 font-bold" : "text-gray-600"
              }
            >
              Cancellation options
            </NavLink>
          </div>

          {/* Hosting */}
          <div className="flex flex-col gap-2">
            <h4 className="font-bold">Hosting</h4>

            <NavLink
              to="/local-home"
              className={({ isActive }) =>
                isActive ? "text-emerald-500 font-bold" : "text-gray-600"
              }
            >
              Local home
            </NavLink>

            <NavLink
              to="/cover-for-hosts"
              className={({ isActive }) =>
                isActive ? "text-emerald-500 font-bold" : "text-gray-600"
              }
            >
              Cover for hosts
            </NavLink>

            <NavLink
              to="/hosting-resources"
              className={({ isActive }) =>
                isActive ? "text-emerald-500 font-bold" : "text-gray-600"
              }
            >
              Hosting resources
            </NavLink>

            <NavLink
              to="/community-forum"
              className={({ isActive }) =>
                isActive ? "text-emerald-500 font-bold" : "text-gray-600"
              }
            >
              Community forum
            </NavLink>

            <NavLink
              to="/hosting-responsibly"
              className={({ isActive }) =>
                isActive ? "text-emerald-500 font-bold" : "text-gray-600"
              }
            >
              Hosting responsibly
            </NavLink>
          </div>

          {/* Localhost */}
          <div className="flex flex-col gap-2">
            <h4 className="font-bold">Localhost</h4>

            <NavLink
              to="/newsroom"
              className={({ isActive }) =>
                isActive ? "text-emerald-500 font-bold" : "text-gray-600"
              }
            >
              Newsroom
            </NavLink>

            <NavLink
              to="/new-features"
              className={({ isActive }) =>
                isActive ? "text-emerald-500 font-bold" : "text-gray-600"
              }
            >
              New Features
            </NavLink>

            <NavLink
              to="/careers"
              className={({ isActive }) =>
                isActive ? "text-emerald-500 font-bold" : "text-gray-600"
              }
            >
              Careers
            </NavLink>

            <NavLink
              to="/investors"
              className={({ isActive }) =>
                isActive ? "text-emerald-500 font-bold" : "text-gray-600"
              }
            >
              Investors
            </NavLink>

            <NavLink
              to="/gift-cards"
              className={({ isActive }) =>
                isActive ? "text-emerald-500 font-bold" : "text-gray-600"
              }
            >
              Gift Cards
            </NavLink>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex justify-between items-center px-16 py-4  border-gray-300 bg-white">
        <p className="text-gray-600">
          © 2023 Localhost, Inc. All Rights Reserved
        </p>

        <div className="flex gap-6">
          <NavLink
            to="/privacy-policy"
            className={({ isActive }) =>
              isActive ? "text-emerald-500 font-bold" : "text-gray-600"
            }
          >
            Privacy Policy
          </NavLink>

          <NavLink
            to="/terms"
            className={({ isActive }) =>
              isActive ? "text-emerald-500 font-bold" : "text-gray-600"
            }
          >
            Terms & Conditions
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-emerald-500 font-bold" : "text-gray-600"
            }
          >
            Contact Us
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Footer;