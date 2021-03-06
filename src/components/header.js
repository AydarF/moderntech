import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css"

class Header extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount(){
    window.addEventListener('scroll',
    this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', 
    this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if(scrollTop > 50){
      this.setState({ hasScrolled: true})
    } else {
      this.setState({ hasScrolled: false})
    }
  }

  render(){
    return (
      <header>
        <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
          <div className="HeaderGroup">
            <Link to="/"><img src={require('../images/logo.svg')} width="30" alt="logo" /></Link>
            <Link to="/courses">Cources</Link>
            <Link to="/resources">Resources</Link>
            <Link to="/workshops">Workshops</Link>
            <Link to="/buy"><button>Buy</button></Link>
          </div>
        </div>
      </header>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
