import {
  RouterProvider,
  createBrowserRouter,
  Link,
  Outlet,
} from "react-router-dom";

// See public/index.html for Outseta configuration

const AuthPage = ({ widgetMode }) => {
  return (
    <>
      {/* Popup Button (Data Attribute) */}
      <button
        data-o-auth="1"
        data-mode="popup"
        data-widget-mode={widgetMode}
        data-registration-defaults={JSON.stringify({
          Subscription: {
            DiscountCouponSubscriptions: [
              {
                DiscountCoupon: {
                  UniqueIdentifier: "DEMO",
                },
              },
            ],
          },
        })}
      >
        {widgetMode} button (Data Attributes)
      </button>

      {/* Popup Button (Code) */}
      <button
        data-o-anonymous
        onClick={() => {
          Outseta.auth.open({
            mode: "popup",
            widgetMode: widgetMode,
            registrationDefaults: JSON.stringify({
              Subscription: {
                DiscountCouponSubscriptions: [
                  {
                    DiscountCoupon: {
                      UniqueIdentifier: "DEMO",
                    },
                  },
                ],
              },
            }),
          });
        }}
      >
        {widgetMode} button (Code)
      </button>

      {/* Embed - Important to add key here so React handles each widget mode as a new component */}
      <div key={widgetMode}>
        <div
          data-o-auth="1"
          data-mode="embed"
          data-widget-mode={widgetMode}
          data-registration-defaults={JSON.stringify({
            Subscription: {
              DiscountCouponSubscriptions: [
                {
                  DiscountCoupon: {
                    UniqueIdentifier: "DEMO",
                  },
                },
              ],
            },
          })}
        ></div>
      </div>
    </>
  );
};

const ProfilePage = ({ tab }) => {
  return (
    <>
      {/* Popup (Data Attribute) */}
      <button data-o-profile="1" data-mode="popup" data-tab={tab}>
        Profile Button (Data Attribute)
      </button>

      {/* Popup (Code) */}
      <button
        data-o-authenticated
        onClick={Outseta.profile.open({ mode: "popup", tab: tab })}
      >
        Profile Button (Code)
      </button>

      {/* Embed - Important to add key here so React handles each widget mode as a new component */}
      <div key={tab}>
        <div data-o-profile="1" data-mode="embed" data-tab={tab}></div>
      </div>
    </>
  );
};

const LeadCapturePage = ({ uid }) => {
  return (
    <>
      {/* Popup (Data Attributes) */}
      <button data-o-lead-capture="1" data-mode="popup" data-form-uid={uid}>
        Register interest (Data Attributes)
      </button>

      {/* Popup (Code) */}
      <button
        onClick={() => {
          Outseta.leadCapture.open({ mode: "popup", formUid: uid });
        }}
      >
        Register interest (Code)
      </button>

      {/* Embed - Important to add key here so React handles each widget mode as a new component */}
      <div key={uid}>
        <div
          data-o-lead-capture="1"
          data-mode="embed"
          data-form-uid={uid}
        ></div>
      </div>
    </>
  );
};

const SupportPage = () => {
  return (
    <>
      {/* Popup (Data Attributes) */}
      <button data-o-support="1" data-mode="popup">
        Ask support (Data Attributes)
      </button>

      {/* Popup (Code) */}
      <button
        onClick={() => {
          Outseta.support.open({ mode: "popup" });
        }}
      >
        Ask support (Code)
      </button>

      {/* Embed - Important to add key here so React handles each widget mode as a new component */}
      <div key="support">
        <div data-o-support="1" data-mode="embed"></div>
      </div>
    </>
  );
};

const EmailListPage = ({ uid }) => {
  return (
    <>
      {/* Popup (Data attributes) */}
      <button data-o-email-list="1" data-mode="popup" data-email-list-uid={uid}>
        Sign up for emails (Data attributes)
      </button>

      {/* Popup (Code) */}
      <button
        onClick={() => {
          Outseta.emailList.open({ mode: "popup", emailListUid: uid });
        }}
      >
        Sign up for emails (Code)
      </button>

      {/* Embed - Important to add key here so React handles each widget mode as a new component */}
      <div key="email">
        <div
          data-o-email-list="1"
          data-mode="embed"
          data-email-list-uid={uid}
        ></div>
      </div>
    </>
  );
};

const MultipleAddOnsPage = () => {
  return (
    <div key="multiple-add-ons">
      <div
        data-o-profile="1"
        data-mode="embed"
        data-tab="purchaseAddOn"
        data-state-props='{ "addOnUid": "vWyXdM9b" }'
      ></div>

      <div
        data-o-profile="1"
        data-mode="embed"
        data-tab="purchaseAddOn"
        data-state-props='{ "addOnUid": "XQY2Yq9P" }'
      ></div>

      <div
        data-o-profile="1"
        data-mode="embed"
        data-tab="purchaseAddOn"
        data-state-props='{ "addOnUid": "OW4pRYWg" }'
      ></div>
    </div>
  );
};

const MembersOnlyPage = () => {
  return <div>Members Only Page</div>;
};

const LogoutPage = () => {
  return (
    <>
      {/* Code */}
      <button data-o-authenticated onClick={() => Outseta.logout()}>
        Logout Button (Code)
      </button>
      {/* Button */}
      <button data-o-logout-link="1">Logout Button (Data Attribute)</button>
      <br />
      {/* Link */}
      <a href="/#o-logout-link">Logout Link</a>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <header>
          <Link to="/">Home</Link>
          <Link to="/signup" data-o-anonymous>
            Signup
          </Link>
          <Link to="/login" data-o-anonymous>
            Login
          </Link>
          <Link to="/signup-login" data-o-anonymous>
            Signup/Login
          </Link>
          <Link to="/my-billing" data-o-authenticated>
            Billing
          </Link>
          <Link to="/my-profile" data-o-authenticated>
            Profile
          </Link>
          <Link to="/my-account" data-o-authenticated>
            Account
          </Link>
          <Link to="/logout" data-o-authenticated>
            Logout
          </Link>
          <Link to="/lead-capture-1">Lead Capture 1</Link>
          <Link to="/lead-capture-2">Lead Capture 2</Link>
          <Link to="/support">Support</Link>
          <Link to="/email-list">Email List</Link>
          <Link to="/multiple-add-ons">Multiple Add Ons</Link>
          <Link to="/members-only">Members Only</Link>
        </header>

        <main>
          <Outlet />
        </main>
      </>
    ),
    children: [
      { path: "/", element: <div>Hello</div> },
      {
        path: "login",
        element: <AuthPage widgetMode="login" />,
      },
      {
        path: "signup",
        element: <AuthPage widgetMode="register" />,
      },
      {
        path: "signup-login",
        element: <AuthPage widgetMode="login|register" />,
      },
      {
        path: "my-billing",
        element: <ProfilePage tab="billing" />,
      },
      {
        path: "my-account",
        element: <ProfilePage tab="account" />,
      },
      {
        path: "my-profile",
        element: <ProfilePage tab="profile" />,
      },
      {
        path: "lead-capture-1",
        element: <LeadCapturePage uid="z9M0zBQ4" />,
      },
      {
        path: "lead-capture-2",
        element: <LeadCapturePage uid="zWZzLMWp" />,
      },
      {
        path: "support",
        element: <SupportPage />,
      },
      {
        path: "email-list",
        element: <EmailListPage uid="vW5xMZ94" />,
      },
      {
        path: "multiple-add-ons",
        element: <MultipleAddOnsPage />,
      },
      {
        path: "logout",
        element: <LogoutPage />,
      },
      {
        path: "members-only",
        element: <MembersOnlyPage />,
      },
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
