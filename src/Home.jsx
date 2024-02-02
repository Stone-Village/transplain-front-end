import React from "react";
import SearchBar from './SearchBar'

function Home () {


    return (
        <div>
            <h1>An Educational Archive Created By and For Transgender People</h1>
            <SearchBar />
            <div id="three stooges">
                <div className="home-card">
                    <img src="" alt="" />
                    <h3>Basics</h3>
                    <p></p>
                    <button type="button">Go</button>
                </div>
                <div className="home-card">
                    <img src="" alt="" />
                    <h3>MtF</h3>
                    <p></p>
                    <button type="button">Go</button>
                </div>
                <div className="home-card">
                    <img src="" alt="" />
                    <h3>FtM</h3>
                    <p></p>
                    <button type="button">Go</button>
                </div>
            </div>
        </div>
    );
}

export default Home;