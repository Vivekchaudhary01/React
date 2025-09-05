import style from "./card.module.css";
import Example from "./Example";
// we are storing refernce of card.module.css into style variable. 
// module css is used t access particular css file in the particular module.
// if we remove style variable from style.cardContainer then global css will run.
const Card = () => {
  return (
    <div id={style.cardWrapper}>
        <div id="cardContainer"></div>  
        {/* GLOBAL CSS */}

        {/* MODULE  CSS */}
        <section id={style.cardContainer}>
            <h1 className={style.heading}>John Doe</h1>
        </section>

        <footer>
            I am Footer.
        </footer>

        <p>Para in Card Component</p>

        <Example/>
    </div>
  )
}

export default Card