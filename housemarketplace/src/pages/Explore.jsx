import { Link } from 'react-router-dom'
import rentCategoryImage from '../assets/jpg/rentCategoryImage.jpg'
import sellCategoryImage from '../assets/jpg/sellCategoryImage.jpg'

function Explore() {
  return(
    <div className='explore'>
        <header>
          <p className="pageHeader">Explore</p>
        </header>

        <main>
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
