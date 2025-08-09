import { createBrowserRouter } from "react-router";
import { Outlet } from "react-router";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer";
import { Home, About, Subscribe } from "./pages";


export const router = createBrowserRouter([
    {
        element: <PageLayout />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/about', element: <About /> },
            { path: '/subscribe', element: <Subscribe /> },
        ],
    },
    {
        element: <Footer />,
    },
]);



function PageLayout() {
    return (
        <>
            <div className='overflow-wrapper'>
                <Navbar />
                <Outlet />
                <Footer />
            </div>
        </>
    )
}