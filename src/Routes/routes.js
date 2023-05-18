import LandingPage from "Pages/LandingPage";
import NotFound from "Pages/NotFound/loadable";
import MainLayout from "Layout/MainLayout";


const routes = [
    {
        path: "/",
        layout: MainLayout,
        component: LandingPage,
    },

    { path: "*", component: NotFound, layout: MainLayout },
];

export default routes;