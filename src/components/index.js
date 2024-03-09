import { useState } from "react";
import "./index.css";


function Popup() {

    const [isOpen, setisOpen] = useState(false);

    return (
        <>
        <button onClick={() => setisOpen(true)}>Open pop-up</button>
        {isOpen && (<div className="popup">
            <div className="popupContent">
                <h2>Title</h2>
                <p>text</p>
                <button onClick={() => setisOpen(false)}>Open pop-up</button>
            </div>
        </div>
        )}
        </>
    );

}

export default Popup;

