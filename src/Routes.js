import React from "react";
import { Route, Switch } from "react-router-dom";
import AppliedRoute from "./components/AppliedRoute";
import Home from "./containers/Home/Home";
import PlanBenefits from "./containers/PlanBenefits/PlanBenefits";
import GettingStarted from "./containers/GettingStarted/GettingStarted";
import EasyActions from "./containers/EasyActions/EasyActions";
import LowCostMeasures from "./containers/LowCostMeasures/LowCostMeasures";
import JoinNow from "./containers/JoinNow/JoinNow";
import NotFound from "./containers/NotFound/NotFound";

export default ({ childProps }) => (
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <AppliedRoute path="/Home" exact component={Home} props={childProps} />
    <AppliedRoute
      path="/PlanBenefits"
      exact
      component={PlanBenefits}
      props={childProps}
    />
    <AppliedRoute
      path="/GettingStarted"
      exact
      component={GettingStarted}
      props={childProps}
    />
    <AppliedRoute
      path="/EasyActions"
      exact
      component={EasyActions}
      props={childProps}
    />
    <AppliedRoute
      path="/LowCostMeasures"
      exact
      component={LowCostMeasures}
      props={childProps}
    />
    <AppliedRoute
      path="/JoinNow"
      exact
      component={JoinNow}
      props={childProps}
    />
    <Route component={NotFound} />
  </Switch>
);
