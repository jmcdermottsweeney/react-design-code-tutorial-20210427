import * as React from "react"
// import PropTypes from "prop-types"
import { Link } from "gatsby"
import './Header.css'
import DesignCodeLogo from '../images/logo-designcode.svg'

const Header = ({ siteTitle }) => (
  <header className="Header">
    <div className="HeaderGroup">
      <Link to="/">
        <img src={DesignCodeLogo} width="30" alt="Design+Code logo"/>
      </Link>
      <Link to="/courses">Courses</Link>
      <Link to="/downloads">Downloads</Link>
      <Link to="/workshops">Workshops</Link>
      <Link to="/buy">
        <button>Buy</button>
      </Link>
    </div>
  </header>
)

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
