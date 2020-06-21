import React from 'react';

import SearchBox from '../../components/SearchBox/SearchBox';
import Scroll from '../../components/Scroll/Scroll';
import ErrorBoundry from '../../components/ErrorBoundry/ErrorBoundry';
import CardList from '../../components/CardList/CardList';

const Robots = ({ isPending, onSearchChange, filteredRobots }) => {
  return (
    <main className='container'>
      <SearchBox searchChange={onSearchChange}/>
        <Scroll>
        { isPending ? <h1>Loading</h1> :
          <ErrorBoundry>
            <CardList robots={filteredRobots} />
          </ErrorBoundry> 
        }
        </Scroll>
    </main>
  );
};

export default Robots;
