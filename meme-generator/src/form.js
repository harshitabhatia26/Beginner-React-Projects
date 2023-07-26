import memesdata from "./memesdata";
import { useState } from "react";

function Form() {
    const [memeImage, setMemeImage] = useState("");
    function getMeme() {
        const memesArray = memesdata.data.memes;
        const randomNumber = Math.floor(Math.random * memesArray.length);
        setMemeImage(memesArray[randomNumber].url);
        console.log("hey")
    }
    return (
        <div>
            <form className="d-flex mx-auto my-5 justify-content-center">
                <div className="form-group d-flex flex-column d-md-block">
                    <input type="text" placeholder="Enter heading text" className="mr-3 my-3">
                    </input>
                    <input type="text" placeholder="Enter bottom text" className=" my-3">
                    </input>
                    <button type="submit" onClick={getMeme} className="btn btn-primary btn-lg btn-block mx-auto my-1.5 font-weight-bold">Get a new meme image</button>
                </div>
                <img src={memeImage} />
            </form>
        </div>
    )
}

export default Form;