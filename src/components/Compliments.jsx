export const Compliments = () => {
    return <div className="complaint-form">
        <div className="form">
            <h2>Compliment</h2>
            <form>
                <label>Deprtment: </label>
                <select>
                    <option value="IT department">IT department</option>
                    <option value="Architecture department">Architecture department</option>
                    <option value="Clinical Medicine department">Clinical Medicine department</option>
                    <option value="Computing department">Computing department</option>
                    <option value="Construction Management department">Construction Management department</option>
                </select> <br></br>

                <label>Enter Your Compliment: </label>
                <input type="text"/><br></br>
                <label>Compliment Summary: </label><br></br>
                <textarea rows="4" cols="50" placeholder="Summary of compliment...">

            </textarea><br></br>

                <button type="submit" className="submit">Submit</button>

            </form>
        </div>
        
    </div>
}