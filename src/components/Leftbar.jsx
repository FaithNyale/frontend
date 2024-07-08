import { useState } from "react"

export const Leftbar = () => {
    const [responsiveness, setResponsiveness] = useState(false);
    const [service, setService] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setResponsiveness(true)

    }
    return <div className="left-bar">
        <div className="leftbar">
            <p onClick={handleClick}>Responsiveness</p>
        </div>
        <div className="leftbar">Professionalism</div>
        <div className="leftbar">Service Quality</div>
        <div className="leftbar">Satisfaction</div>
        <div className="leftbar">Comments & Suggestions</div>
    </div>
}