import AuthConfirmation from "../Pages/Auth/Confirmation"
import AuthForgotPassword from "../Pages/Auth/ForgotPassword"
import AuthLogin from "../Pages/Auth/Login"
import AuthLogout from "../Pages/Auth/Logout"
import AuthRegister from "../Pages/Auth/Register"
import AuthResetPassword from "../Pages/Auth/ResetPassword"

const authRoutes = [
    { path: "/email/confirmation/:token", component: AuthConfirmation, title: "Email Confirmation"  },
    { path: "/email/forgot", component: AuthForgotPassword, title: "Reset Email"  },
    { path: "/login", component: AuthLogin, title: "Sign In"  },
    { path: "/logout", component: AuthLogout, title: "Sign Out"  },
    { path: "/register", component: AuthRegister, title: "Register"  },
    { path: "/email/reset/:token", component: AuthResetPassword, title: "Reset Email"  },
]

export default authRoutes