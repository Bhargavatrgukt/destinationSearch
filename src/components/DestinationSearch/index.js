import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem/index'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    console.log(destinationsList)
    const {searchInput} = this.state
    const searchResults = destinationsList.filter(eachUser =>
      eachUser.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <h1 className="heading">Destination Search</h1>
        <form>
          <input
            type="search"
            placeholder="search"
            onChange={this.onChangeSearchInput}
            value={searchInput}
            className="search"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
          />
        </form>
        <ul className="container">
          {searchResults.map(eachUser => (
            <DestinationItem destinationsList={eachUser} key={eachUser.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
