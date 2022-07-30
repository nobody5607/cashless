import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Header from './Header';
interface LayoutProps {
    children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
    const [width, setWidth] = useState<number>(0);
    const getWidthHeight = () => {
        setWidth(window.innerWidth);
        window.addEventListener('resize', () => {
            setWidth(window.innerWidth);
        });
        console.log(window.innerWidth);
    };
    useEffect(() => {
        getWidthHeight();
    }, [width]);
    return (
        <>
            <Header width={width} />
                <div className={`${width <= 768 ? 'content-mobile' : 'content'}`}>
                    {children}
                </div>
            <Footer />
        </>
    );
};

export default Layout;