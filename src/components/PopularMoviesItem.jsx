import '../styles/PopularMoviesItem.css'

const PopularMoviesItem = ({
  img = 'https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/3-300x450.jpg',
  title = 'Delta Bravo',
  year = '2017',
  id = 0,
  categories = ['Action ', 'Adventure '],
  featured = true
}) => {
  return (
    <>
      <div className='popular-movies-item'>
        <div className='popular-movies-item-featured-container'>
          <p className='popular-movies-item-featured'>featured</p>
        </div>
        <img className='popular-movies-img' src={img} alt='movie' />
        <div className='popular-movies-item-info'>
          <div className='popular-movies-basic-info'>
            <p className='popular-movies-item-year'>{year}, </p>
            <p className='popular-movies-item-categories'>{categories}, </p>
          </div>
          <h4 className='popular-movies-item-title'>{title}</h4>
        </div>
      </div>
    </>
  )
}

export default PopularMoviesItem
