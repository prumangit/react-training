import "./meme-form.css"

export default function MemeForm() {
    return (
        <div className="meme-form-container">
            <form className="meme-form">
                <div className="meme-form-container-fields">
                    <div className="meme-field"><input type="text" placeholder="top-text" /></div>
                    <div className="meme-field"><input type="text" placeholder="bottom-text" /></div>
                </div>


                <button className="meme-submit">Get a new meme image</button>
            </form>
        </div>
    );
}