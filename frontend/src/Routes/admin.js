import AdminDashboard from "../Pages/Admin/Dashboard"

// Account 
import AdminPasswrod from "../Pages/Admin/Account/Password"
import AdminProfile from "../Pages/Admin/Account/Profile"

// Contact
import AdminContactCreate from "../Pages/Admin/Contact/Create"
import AdminContactList from "../Pages/Admin/Contact/List"
import AdminContactEdit from "../Pages/Admin/Contact/Edit"
import AdminContactDetail from "../Pages/Admin/Contact/Detail"

// Notification
import AdminNotificationList from "../Pages/Admin/Notification/List"
import AdminNotificationDetail from "../Pages/Admin/Notification/Detail"

const adminRoutes = [
    // Dashboard
    { path: "/admin/dashboard", component: AdminDashboard, title: "Dashboard"  },
    // Account
    { path: "/admin/account/password", component: AdminPasswrod, title: "Change Password"  },
    { path: "/admin/account/profile", component: AdminProfile, title: "Profile"  },
    // Contact
    { path: "/admin/contact/create", component: AdminContactCreate, title: "Contact"  },
    { path: "/admin/contact/list", component: AdminContactList, title: "Contact"  },
    { path: "/admin/contact/edit/:id", component: AdminContactEdit, title: "Contact"  },
    { path: "/admin/contact/detail/:id", component: AdminContactDetail, title: "Contact"  },
    // Notifiaction
    { path: "/admin/notification/list", component: AdminNotificationList, title: "Notification"  },
    { path: "/admin/notification/detail/:id", component: AdminNotificationDetail, title: "Notification"  },
]

export default adminRoutes