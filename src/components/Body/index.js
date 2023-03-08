// Write your code here
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="body-container">
          {showLeftNavbar && (
            <div className="item-container-left">
              <h1 className="item-heading">Left Navbar Menu</h1>
              <ul className="list-container">
                <li>Item1</li>
                <li>Item2</li>
                <li>Item3</li>
                <li>Item4</li>
              </ul>
            </div>
          )}
          {showContent && (
            <div className="item-container-content">
              <h1 className="item-heading">Content</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam.
              </p>
            </div>
          )}
          {showRightNavbar && (
            <div className="item-container-right">
              <h1 className="item-heading">Right Navbar</h1>
              <p className="box">Ad 1</p>
              <p className="box">Ad 2</p>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
