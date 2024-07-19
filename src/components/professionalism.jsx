export const Professionalism = () => {
    return <div>
        <div className="feedback-item">
            <h2>Professionalism</h2>
            
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
            <div className="submit">
                <button type="submit">Submit</button>
            </div>
            </div>
       
            </div>
    </div>
}