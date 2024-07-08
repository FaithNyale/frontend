import { useState } from "react"
import { CommentAndSuggestions } from "./CommentsAndSuggestions"
import { Professionalism } from "./professionalism"
import { Responsiveness } from "./responsiveness"
import { Satisfaction } from "./satisfaction"
import { ServiceQuality } from "./ServiceQuaity"
export const Container = () => {
    const [reponse, seResponse] = useState(false)
    return <div className="container">
        <Responsiveness/>
        <Professionalism/>
        <ServiceQuality/>
        <Satisfaction/>
        <CommentAndSuggestions/>
    </div>
}