import { useContext, useState } from "react"
import { CommentAndSuggestions } from "./CommentsAndSuggestions"
import { Professionalism } from "./professionalism"
import { Responsiveness } from "./responsiveness"
import { Satisfaction } from "./satisfaction"
import { ServiceQuality } from "./ServiceQuaity"
import { FeedBackContext } from "./CustomerContext"

export const Container = () => {
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
    return <div className="container">
        {response && <Responsiveness/>}
        {professionalism && <Professionalism/>}
        {serviceQuality && <ServiceQuality/>}
        {satisfaction && <Satisfaction/>}
        {comentsAndSuggestion && <CommentAndSuggestions/>}
    </div>
}