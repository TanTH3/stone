// layout
import config from './../config';

// Pages
import Home from './../pages/Home/Home';
import Product from './../pages/Product/Product';
import Project from './../pages/Project/Project';
import Intro from './../pages/Intro/Intro';
// import Search from './../pages/Search';
import Contact from './../pages/Contact/Contact';

// Public Routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.product, component: Product },
    { path: config.routes.project, component: Project },
    { path: config.routes.intro, component: Intro },
    { path: config.routes.contact, component: Contact },
    // { path: config.routes.search, component: Search },
];

export { publicRoutes };
