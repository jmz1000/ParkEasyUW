// About.js
import React from "react";
import "../index";  

function About() {
    return (
        <div className="about-container">
            <section className="about-header">
                <h2>About ParkEasyUW</h2>
                <p>
                    ParkEasyUW is an interactive web application designed to assist University of Washington (UW) students, faculty, staff, and visitors in finding available parking spots around the UW campus. Navigating the sprawling campus and its numerous parking facilities can be a challenge, particularly during peak hours. ParkEasyUW aims to alleviate the stress of finding parking by providing a user-friendly interface that highlights parking locations with useful details.
                </p>
            </section>

            <section className="about-mission">
                <h3>Our Mission: Helping the UW Community Park Better</h3>
                <p>
                    Our goal is not just to help you park, but to help you park better. We aim to make the parking experience as seamless and stress-free as possible for everyone at the University of Washington.
                </p>
            </section>

            <section className="about-story">
                <h3>Our Story</h3>
                <p>
                    ParkEasyUW was created out of the need for a simpler way to navigate UW’s parking facilities. Students, faculty, and visitors often struggle to find available parking, particularly during peak times. With ParkEasyUW, we’ve made it easier for everyone to find the nearest spot, saving time and frustration.
                </p>
            </section>

            <section className="about-team">
                <h3>The Team</h3>
                <div className="team-members">
                    <div className="team-member">
                        <h4>Jeffrey Zeng</h4>
                        <p>Full Stack Dev</p>
                    </div>
                    <div className="team-member">
                        <h4>Eric Kim</h4>
                        <p>Full Stack Dev</p>
                    </div>
                    <div className="team-member">
                        <h4>Zerong Wang</h4>
                        <p>Full Stack Dev</p>
                    </div>
                    <div className="team-member">
                        <h4>Abdirahman Mohamed</h4>
                        <p>Full Stack Dev</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;