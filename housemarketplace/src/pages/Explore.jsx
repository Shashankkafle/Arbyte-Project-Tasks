
import { Link } from 'react-router-dom'
import rentCategoryImage from '../assets/jpg/rentCategoryImage.jpg'
import sellCategoryImage from '../assets/jpg/sellCategoryImage.jpg'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import Slider from '../components/Slider'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

function Explore() {
  
  return(
    <div className='explore'>
        <header>
          <p className="pageHeader">Explore</p>
        </header>
        <main>
          <Slider/>
          <p className="exploreCategoryHeading">Categries</p>
          <div className="exploreCategories">
            <Link  to='/category/rent'>
              <img src={rentCategoryImage} alt='Rent' className='exploreCategoryImg'></img>
              <p className="exploreCategoryName">Places For Rent</p>
            </Link>
            <Link  to='/category/sale'>
              <img src={sellCategoryImage} alt='Sell' className='exploreCategoryImg'></img>
              <p className="exploreCategoryName">Places For Sale</p>
            </Link>
          </div>
        </main>
    </div>
    );
}

export default Explore;
