import React, { Component, Suspense } from 'react';

import Header from '../../components/Header/Header';
import Robots from '../Robots/Robots';
import Footer from '../../components/Footer/Footer';

const Personal= React.lazy(() => import('../Personal/Personal'));

class MainPage extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  filterRobots = (robots) => {
    return robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
    })
  };

  renderContent = (route) => {    
    switch(route) {
      case 'personal':
        return(
          <Suspense fallback={<div>Loading...</div>}>
            <Personal 
              onNameChange={this.props.onNameChange}
              name={this.props.name}
            />
          </Suspense>
        );
      default:
        return(
          <Robots 
            isPending={this.props.isPending}
            onSearchChange={this.props.onSearchChange}
            filteredRobots={this.filterRobots(this.props.robots)}
          />
        );
    }
  }

  render() {
    const { onSearchChange, onRouteChange, onNameChange, route } = this.props;
    
    return (
      <article className='tc'>
        <Header 
          onRouteChange={onRouteChange}
          resetSearch={onSearchChange}
          resetName={onNameChange}
        />
        {this.renderContent(route)}
        <Footer />
      </article>
    );
  }
}

export default MainPage;
