import React, {Component} from 'react';
import routes from '../routes'
import { Route, Switch } from 'react-router-dom';

class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          {routes.map((route, idx) => {
            return route.component ? (
              <Route 
                key={idx}
                path={route.path}
                exact={route.exact}
                name={route.name}
                render={props => { 
                  return(
                    <route.component {...props} />
                  )
                }}
              />) : (null);
            },
          )}
        </Switch>
      </React.Fragment>
    );
  }
}


export default Layout