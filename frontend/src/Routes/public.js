import PublicAbout from "../Pages/Public/About"
import PublicBlog from "../Pages/Public/Blog"
import PublicBlogDetail from "../Pages/Public/BlogDetail"
import PublicContact from "../Pages/Public/Contact"
import PublicFaq from "../Pages/Public/Faq"
import PublicHome from "../Pages/Public/Home"
import PublicPortfolio from "../Pages/Public/Portfolio"
import PublicPortfolioDetail from "../Pages/Public/PortfolioDetail"
import PublicPricing from "../Pages/Public/Pricing"
import PublicChangePassword from "../Pages/Public/ChangePassword"
import PublicProfile from "../Pages/Public/Profile"

const publicRoutes = [
    { path: "/about", component: PublicAbout, title: "About"  },
    { path: "/blog", component: PublicBlog, title: "Blog"  },
    { path: "/blog/:slug", component: PublicBlogDetail, title: "Blog"  },
    { path: "/contact", component: PublicContact, title: "Contact"  },
    { path: "/faq", component: PublicFaq, title: "Faq"  },
    { path: "/home", component: PublicHome, title: "Home"  },
    { path: "/portfolio", component: PublicPortfolio, title: "Portfolio"  },
    { path: "/portfolio/:slug", component: PublicPortfolioDetail, title: "Portfolio"  },
    { path: "/pricing", component: PublicPricing, title: "Pricing"  },
    { path: "/account/password", component: PublicChangePassword, title: "Change Password"  },
    { path: "/account/profile", component: PublicProfile, title: "Edit Profile"  }
]

export default publicRoutes