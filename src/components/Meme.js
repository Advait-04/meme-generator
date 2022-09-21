import React from "react";
import "./../styles/meme.css";

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
    });

    const [allMemes, setallMemes] = React.useState(meme);

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then((res) => res.json())
            .then((obj) => setallMemes(obj.data.memes));
    }, []);

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[randomNumber].url;
        setMeme((prevMeme) => {
            return {
                ...prevMeme,
                randomImage: url,
            };
        });
        console.log(setMeme);
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setMeme((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });
    }

    return (
        <div className="main">
            <div className="form">
                <input
                    type="text"
                    placeholder="Top Text"
                    className="form-input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Bottom Text"
                    className="form-input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button className="form-button" onClick={getMemeImage}>
                    Get a new meme image 🖼️
                </button>
            </div>
            <div className="memeDiv">
                <img src={meme.randomImage} className="memeImage" alt="" />
                <h2 className="memetext meme-toptext">{meme.topText}</h2>
                <h2 className="memetext meme-bottomtext">{meme.bottomText}</h2>
            </div>
        </div>
    );
}
