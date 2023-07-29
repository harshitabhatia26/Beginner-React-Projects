
import { useState } from "react";
import { useEffect } from "react";

function Form() {
    const[meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemeImages, setAllMemeImages] = useState([])
    
    useEffect(() => {
            fetch("https://api.imgflip.com/get_memes")
                .then(res=> res.json())
                .then(data => setAllMemeImages(data.data.memes))
    }, [])

    function getMeme() {
        const randomNumber = Math.floor(Math.random() * allMemeImages.length);
        const url = allMemeImages[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event) {
        setMeme(prevState => {
            return {
                ...prevState,
                [event.target.name]: event.target.value
            }
        })
    }

    return (
            <div className="d-flex mx-auto my-5 justify-content-center align-items-center">
                <div className="form-group d-flex flex-column d-md-block">
                    <input type="text" placeholder="Enter heading text" onChange={handleChange} name="topText" value={meme.topText} className="toptext my-3">
                    </input>
                    <input type="text" placeholder="Enter bottom text" onChange={handleChange} name="bottomText" value={meme.bottomText} className="my-3">
                    </input>
                    <button type="submit" onClick={getMeme} className="btn btn-primary btn-lg btn-block mx-auto my-1.5 font-weight-bold">Get a new meme image</button>
                    <div className="meme">
                        <img className="meme--image my-4" src={meme.randomImage} />
                        <h2 className="meme--text top">{meme.topText}</h2>
                        <h2 className="meme--text bottom">{meme.bottomText}</h2>
                    </div>

                </div>

        </div>
    )
}

export default Form;