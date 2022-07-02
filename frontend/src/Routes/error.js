import Page400 from "../Pages/Error/Page400"
import Page401 from "../Pages/Error/Page401"
import Page403 from "../Pages/Error/Page403"
import Page404 from "../Pages/Error/Page404"
import Page500 from "../Pages/Error/Page500"
import Page503 from "../Pages/Error/Page503"

const errorRoutes = [
    { path: "/error/400", component: Page400, title: "Bad Request"  },
    { path: "/error/401", component: Page401, title: "Access Denied"  },
    { path: "/error/403", component: Page403, title: "Forbidden"  },
    { path: "/error/404", component: Page404, title: "Page not found"  },
    { path: "/error/500", component: Page500, title: "Internal Server Error"  },
    { path: "/error/503", component: Page503, title: "This site is getting a tune-up"  }
]

export default errorRoutes