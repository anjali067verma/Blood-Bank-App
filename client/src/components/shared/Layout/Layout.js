import React from "react";
import Header from "./Header";
import Menubar from "./Menubar";

const Layout = ({ children }) => {
    return (
        <>
            <div className="header">
                <Header />
            </div>
            <div className="row g-0">
                <div className="col-md-3">
                    <Menubar />
                </div>
                <div className="col-md-9">{children}</div>
            </div>
        </>
    );
};
export default Layout;