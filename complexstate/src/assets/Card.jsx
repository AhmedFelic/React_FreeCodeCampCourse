import React from "react"

export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })
   /*
    https://freeiconshop.com/wp-content/uploads/edd/star-outline-filled.png -- star Filled image
   */
    
    let starIcon = contact.isFavorite ? "https://freeiconshop.com/wp-content/uploads/edd/star-outline-filled.png" : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Five-pointed_star.svg/2176px-Five-pointed_star.svg.png"

    function toggleFavorite() {
        setContact(prevContact =>{
            return{
                ...prevContact,
                isFavorite: !prevContact.isFavorite
            }
        })
    }
    
    return (
        <main className="newMain">
            <article className="card">
                <img src="https://www.w3schools.com/howto/img_avatar.png" className="card--image" />
                <div className="card--info">
                    <img 
                        src={starIcon} 
                        className="card--favorite"
                        onClick={toggleFavorite}
                    />
                    <h2 className="card--name">
                        {contact.firstName +" "+ contact.lastName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                    <br/>
                    <h3>Click on the star!</h3>
                </div>
                
            </article>
        </main>
    )
}
