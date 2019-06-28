import React, {Component} from 'react';
import Header from '../components/Header';
import UserMessage from '../components/UserMessage';
import Search from '../components/Search';
import ResultsContainer from '../containers/ResultsContainer';
// import Pagination from '../components/Pagination';
import Footer from '../components/Footer';
import ParticleContainer from '../containers/ParticleContainer';
import axios from 'axios';

// const MAIN_API_URL = '/';
const API_KEY = process.env.REACT_APP_NASA_API_KEY;
const MAIN_API_URL = 'https://mars-photos.herokuapp.com/api/v1/rovers/curiosity/photos?api_key=' + API_KEY;
const DEFAULT_MAX_SOL = 2444;

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      max_sol: DEFAULT_MAX_SOL,
      errorMessage: '',
      currentPage: 0,
      totalPages: 0
    }
    this.getYesterdaysDate = this.getYesterdaysDate.bind(this);
    this.doSearch = this.doSearch.bind(this);
    this.onPageChanged = this.onPageChanged.bind(this);
  }

  getYesterdaysDate() {
    let date = new Date();
    date.setDate(date.getDate()-1);
    return date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate();
  }
  
  componentDidMount() {
    if (this._isMounted) {
      doSearch(cameraInput, solInput);
    }
  }
  
  componentWillUnmount() {
    this._isMounted = false;
  }

  doSearch(cameraInput, solInput) {    
    let yesterday = this.getYesterdaysDate();
    // Default search URL: use yesterday's date with all cameras for the default search. More likely to have photos yesterday if today isn't long past midnight.
    let API_URL = MAIN_API_URL + '&earth_date=' + yesterday + '&page=1';
    if (solInput) {
      // Not default search URL because user submitted a search.
      // But first, check for special characters.
      let originalSolInput = solInput.toString();
      solInput = originalSolInput.replace(/\D/g,'');
      if (solInput != originalSolInput) {
        // user included weird characters the server doesn't accept.
        this.setState({
          searchResults: [],
          errorMessage: 'Special characters are not allowed except (space, comma, decimal, dash, apostrophe).'
        }); 
        return; 
      }
      if (cameraInput) {
        let originalCameraInput = cameraInput;
        cameraInput = originalCameraInput.replace(/[^A-Za-z]/g,'');
        API_URL = MAIN_API_URL + '&sol=' + solInput + '&camera=' + cameraInput + '&page=1';
      } else {
        API_URL = MAIN_API_URL + '&sol=' + solInput + '&page=1';
      }
    }
    axios.get(API_URL) // the Express endpoint.
    .then(res => {
      let searchResults = res.data.photos;
      // console.log(API_URL + ' ' + searchResults);
      if (searchResults && searchResults.length) {
        // We can get the max_sol (last day the rover has been active so far) from the first returned record.
        let max_sol = searchResults[0].rover.max_sol;
        searchResults = Array.from(searchResults);
        this.setState({
          searchResults,
          max_sol,
          errorMessage: ''
        });
        return;
      } else {
        this.setState({
          searchResults: [],
          max_sol: DEFAULT_MAX_SOL,
          errorMessage: 'No Results Found'
        });
        return;
      }
    })
    .catch(err => { 
      this.setState({
        searchResults: [],
        max_sol: DEFAULT_MAX_SOL,
        errorMessage: err,
        currentPage: 0,
        totalPages: 0
      });
      return;
    });
  }

  /* Called with data of the current pagination state only when the current page changes. */
  onPageChanged = data => {
    let {searchResults} = this.state;
    const {currentPage, totalPages, pageLimit} = data;
    /* -1 to make it zero based */
    const offset = (currentPage - 1) * pageLimit; 
    searchResults = searchResults.slice(offset, offset + pageLimit);
    this.setState({
      currentPage,
      searchResults,
      totalPages
    });
  }

  render() {
    return (
      <>
        <div className="content">
          <Header />
          {this.state.errorMessage 
            ? <>
              <UserMessage userMessage={this.state.errorMessage} />
              <Search doSearch={this.doSearch} max_sol={this.state.max_sol} />
              </>
            : <>
              <Search doSearch={this.doSearch} max_sol={this.state.max_sol} />
              <ResultsContainer searchResults={this.state.searchResults} />
              </>
          }
          {/* <Pagination totalRecords={1000} pageLimit={PAGE_LIMIT} pageNeighbours={2} onPageChanged={this.onPageChanged} /> */}        
        </div>
        <Footer />
        <ParticleContainer />
      </>
    )
  }
}

