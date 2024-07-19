import { useContext, useState } from "react"
import { CustomerContext, FeedBackContext } from "./CustomerContext";

export const Leftbar = () => {
    const {
        response,
      setResponse,
      professionalism,
      setProfessionalism,
      serviceQuality,
      setServiceQuality,
      satisfaction,
      setSatisfaction,
      comentsAndSuggestion,
      setComentsAndSuggestion,
    } = useContext(FeedBackContext);


    const handleResponse= (e) => {
        e.preventDefault();
        setResponse(true);
        setProfessionalism(false);
        setServiceQuality(false);
        setSatisfaction(false);
        setComentsAndSuggestion(false);
        console.log(response.toString())
    }
    const handleProfession= (e) => {
        e.preventDefault();
        setResponse(false);
        setProfessionalism(true);
        setServiceQuality(false);
        setSatisfaction(false);
        setComentsAndSuggestion(false);
        console.log(professionalism.toString())
        console.log(response.toString())
        console.log(satisfaction.toString())
        console.log(comentsAndSuggestion.toString())
        console.log(serviceQuality.toString())

    }
    const handleSatisfaction= (e) => {
        e.preventDefault();
        setResponse(false);
        setProfessionalism(false);
        setServiceQuality(false);
        setSatisfaction(true);
        setComentsAndSuggestion(false);
       
        console.log(professionalism.toString())
        console.log(response.toString())
        console.log(satisfaction.toString())
        console.log(comentsAndSuggestion.toString())
        console.log(serviceQuality.toString())
    }
    const handleQuality= (e) => {
        e.preventDefault();
        setResponse(false);
        setProfessionalism(false);
        setServiceQuality(true);
        setSatisfaction(false);
        setComentsAndSuggestion(false);

        console.log(professionalism.toString())
        console.log(response.toString())
        console.log(satisfaction.toString())
        console.log(comentsAndSuggestion.toString())
        console.log(serviceQuality.toString())
    }
    const handleComments= (e) => {
        e.preventDefault();
        setResponse(false);
        setProfessionalism(false);
        setServiceQuality(false);
        setSatisfaction(false);
        setComentsAndSuggestion(true);

        console.log(professionalism.toString())
        console.log(response.toString())
        console.log(satisfaction.toString())
        console.log(comentsAndSuggestion.toString())
        console.log(serviceQuality.toString())
    }
    return <div className="left-bar">
        <div className="leftbar" onClick={handleResponse}>Responsiveness</div>
        <div className="leftbar"onClick={handleProfession}>Professionalism</div>
        <div className="leftbar" onClick={handleQuality}>Service Quality</div>
        <div className="leftbar" onClick={handleSatisfaction}>Satisfaction</div>
        <div className="leftbar" onClick={handleComments}>Comments & Suggestions</div>
    </div>
}