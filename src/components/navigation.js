import React, { Component } from 'react';

class Navigation extends Component {
  render() {
    return (
      <div>
        <div className="nav-scroller py-1 mb-2">
        <nav className="nav d-flex justify-content-center">
          <a className="p-2 text-muted" href="#">Graphite</a>
          <a className="p-2 text-muted" href="#">Charcoal</a>
          <a className="p-2 text-muted" href="#">Ball Pen</a>
          <a className="p-2 text-muted" href="#">Gel Pen</a>
          <a className="p-2 text-muted" href="#">Water Color</a>
          <a className="p-2 text-muted" href="#">Pastels</a>
          <a className="p-2 text-muted" href="#">Ink</a>
        </nav>
      </div>
      </div>
    );
  }
}

export default Navigation;
