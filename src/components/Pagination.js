import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

const LEFT_PAGE = 'LEFT';
const RIGHT_PAGE = 'RIGHT';

// Create a range of numbers ie. range(1, 5) => [1, 2, 3, 4, 5]
const range = (from, to, step = 1) => {
  let i = from;
  const range = [];
  while (i <= to) {
    range.push(i);
    i += step;
  }
  return range;
}

export default class Pagination extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1
    }
    // console.log(props);
    const { totalRecords, pageLimit, pageNeighbors } = props;
    this.pageLimit = typeof pageLimit === 'number' ? pageLimit: 100;
    this.totalRecords = typeof totalRecords === 'number' ? totalRecords : 0;
    /* pageNeighbors means the page numbers on either side of the current page.
    The minimum value is 0 and the maximum value is 2. If not specified, 
    it defaults to 0 as defined in the constructor(). */
    this.pageNeighbors = typeof pageNeighbors === 'number'
      ? Math.max(0, Math.min(pageNeighbors, 2))
      : 0;
    this.totalPages = Math.ceil(this.totalRecords / this.pageLimit);
  }

  componentDidMount() {
    // First time rendering.
    this.gotoPage(1);
  }

  gotoPage = page => {
    const {OnPageChanged = f => f} = this.props;
    const currentPage = Math.max(0, Math.min(page, this.totalPages));
    const paginationData = {
      currentPage,
      totalPages: this.totalPages,
      pageLimit: this.pageLimit,
      totalRecords: this.totalRecords
    }
    /* calls the onPageChanged() function that was passed
     in as a prop, with data indicating the new pagination state. */
    this.setState({currentPage}, () => OnPageChanged(paginationData));
  }


  /* Generates the page numbers to be shown on the pagination control.
  We want the first page and last page to always be visible. */
  fetchPageNumbers = () => {
    const totalPages = this.totalPages;
    const currentPage = this.state.currentPage;
    const pageNeighbors = this.pageNeighbors;
    console.log(totalPages + '-' + currentPage + '-' + pageNeighbors);
    /* * 2 for each side, left and right of the current page. */
    const totalNumbersToShow = (this.pageNeighbors * 2) + 3;
    /* totalNumbersToShow + 2 for the < and > buttons. */
    const totalBlocksToShow = totalNumbersToShow + 2;
    if (totalPages > totalBlocksToShow) {
      // we hide some of the page number buttons at both ends.
      const startPage = Math.max(2, currentPage - pageNeighbors);
      const endPage = Math.min(totalPages - 1, currentPage + pageNeighbors);
      let pages = range(startPage, endPage);
      /*hasLeftSpill: has hidden pages to the left
       hasRightSpill: has hidden pages to the right
       spillOffset: number of hidden pages either to the left or to the right. */
      const hasLeftSpill = startPage > 2;
      const hasRightSpill = (totalPages - endPage) > 1;
      const spillOffset = totalNumbersToShow - (pages.length + 1);

      console.log(startPage + ' ' + endPage);
      
      switch(true) {
        case (hasLeftSpill && !hasRightSpill): {
          const extraPages = range(startPage - spillOffset, startPage - 1);
          pages = [LEFT_PAGE, ...extraPages, ...pages];
          break;
        }
        case (!hasLeftSpill && hasRightSpill): {
          const extraPages = range(endPage + 1, endPage + spillOffset);
          pages = [...pageNeighbors, ...extraPages, RIGHT_PAGE];
          break;
        }
        case (hasLeftSpill && hasRightSpill):
        default: {
          pages = [LEFT_PAGE, ...pageNeighbors, RIGHT_PAGE];
          break;
        }
      }
      return [1, ...pages, totalPages];
    }
    /* of the totalPages is smaller than the number of blocks to show,
    simply return a range of numbers from 1 to totalPages. */
    return range(1, totalPages);
  }

  handleClick = page => evt => {
    evt.preventDefault();
    this.gotoPage(page);
  }
S
  handleMoveLeft = evt => {
    evt.preventDefault();
    this.gotoPage(this.state.currentPage - (this.pageNeighbors * 2) - 1);
  }

  handleMoveRight = evt => {
    evt.preventDefault();
    this.gotoPage(this.state.currentPage + (this.pageNeighbors * 2) + 1);
  }

  render() {
    if (!this.totalRecords || this.totalPages === 1) {
      return null;
    }
    const {currentPage} = this.state;
    const pages = this.fetchPageNumbers();
    return (
      <Fragment>
        <nav aria-label="Meteorite Database Pagination">
          <ul className="pagination">
            { pages.map((page, index) => {
              if (page === LEFT_PAGE) {
                return (
                  <li key={index} className="page-item">
                  <a className="page-link" href="#" aria-label="Previous" onClick={this.handleMoveLeft}>
                    <span aria-hidden="true">&raquo;</span>
                    <span className="sr-only">Previous</span>
                  </a>
                </li>
                );
              }
              if (page === RIGHT_PAGE) {
                return (
                  <li key={index} className="page-item">
                  <a className="page-link" href="#" aria-label="Next" onClick={this.handleMoveRight}>
                    <span aria-hidden="true">&raquo;</span>
                    <span className="sr-only">Next</span>
                  </a>
                </li>
                );
              }

              return (
                <li key={index} className={`page-item${ currentPage === page ? ' active' : ''}`}>
                  <a className="page-link" href="#" onClick={ this.handleClick(page) }>{ page }</a>
                </li>   
              );
            })}
          </ul>
        </nav>
      </Fragment>
    );
  }
}
/* onPageChanged - is a function that will be called with data
of the current pagination state only when the current page changes. */
Pagination.propTypes = {
  totalRecords: PropTypes.number.isRequired,
  pageLimit: PropTypes.number,
  pageNeighbors: PropTypes.number,
  OnPageChanged: PropTypes.func
}