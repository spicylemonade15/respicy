import { FaArrowRight } from "react-icons/fa"
import { NavLink } from "react-router-dom"


const HomePage = () => {
  
  return (
    <div class="container hero"> 
      <div class="home-banner">
        <div className="home-banner-content">
          <h2>Explore the famous recipes!</h2>
          <p>Find the top recipes from around the globe ready to be cooked and served! Easy to understand instructions and clear steps for amazing cooking experience. Bon apetit!</p>
          <NavLink to="/recipes"><button>Start cooking 😋 <FaArrowRight /></button></NavLink>
        </div>
        <img src="/cooking.jpg" alt="cooking food" className="hero-image"></img>
      </div>
    </div>
  )
}

export default HomePage