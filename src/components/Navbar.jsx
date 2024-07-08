import jkuat from '../image/jkuat.png'
export const Navbar = () =>
    { return <div className="navbar">
    <div className="logo">
        <img src= {jkuat} alt="jkuat"/>
    </div>
    <div className="links">
    <div className="feedback">FeedBack</div>
    <div className="complaint">Complaint</div>
    <div className="compliments">Compliment</div>
    </div>  
    </div>
    
}