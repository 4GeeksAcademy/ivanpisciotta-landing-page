import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Jumbotron />
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-4">
                        <Card 
                            title="Card One"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                            imageUrl="https://picsum.photos/400/200?random=1"
                        />
                    </div>
                    <div className="col-md-4">
                        <Card 
                            title="Card Two"
                            description="Sed do eiusmod tempor incididunt ut labore et dolore magna."
                            imageUrl="https://picsum.photos/400/200?random=2"
                        />
                    </div>
                    <div className="col-md-4">
                        <Card 
                            title="Card Three"
                            description="Ut enim ad minim veniam, quis nostrud exercitation ullamco."
                            imageUrl="https://picsum.photos/400/200?random=3"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;