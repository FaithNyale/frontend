import { useState } from "react"

export const Responsiveness = () => {
    const [responsive, setResponsive]  = useState(false);
    return <div>
        <div className="feedback-item">
            <h2>Responsiveness</h2>
            <div className="inputs">
            <div className="satisfaction">
                <label>Satisfaction : </label>
            <select>
                <option>Excellent</option>
                <option>Good</option>
                <option>Fair</option>
                <option>Poor</option>
            </select>
            </div>
            <div className="remarks">

            <textarea rows="4" cols="50" placeholder="Enter remarks if Any...">

            </textarea>
            </div>
       
            </div>

        </div>
    </div>
}