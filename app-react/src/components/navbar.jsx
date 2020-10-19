import React from "react";

// stateless functional component

const Navbar = ({counters}) => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <span className="navbar-brand">Navbar</span>
                    <span
                        className="navbar-brand badge-pill badge-secondary">{counters.filter(c => c.value > 0).length}</span>
                </div>
            </nav>
        </React.Fragment>
    );
}

export default Navbar; // global
