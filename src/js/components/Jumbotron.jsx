import React from "react";

const Jumbotron = () => {
    return (
        <div className="p-5 mb-4 bg-dark text-white">
            <div className="container py-5 text-center">
                <h1 className="display-4 fw-bold">Welcome to my Portfolio</h1>
                <p className="col-md-8 mx-auto fs-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button className="btn btn-success btn-lg">Get Started</button>
            </div>
        </div>
    );
};

export default Jumbotron;