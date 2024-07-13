import { useContext, useState } from "react"
import { CustomerContext } from "./CustomerContext";

export const Leftbar = () => {
    const [ response, setResponse ] = useState(false);
    const [Professionalism, setProfessionalism] = useState(false);
    const [serviceQuality, setServiceQuality] = useState(false);
    const [satisfaction, setSatisfaction] = useState(false);
    const [comentsAndSuggestion, setPrcomentsAndSuggestion] = useState(false);


    const handleClick = (e) => {
        e.preventDefault();
        alert("Clicked");
    }
    return <div className="left-bar">
        <div className="leftbar" onClick={handleClick}>Responsiveness</div>
        <div className="leftbar">Professionalism</div>
        <div className="leftbar">Service Quality</div>
        <div className="leftbar">Satisfaction</div>
    </div>
}