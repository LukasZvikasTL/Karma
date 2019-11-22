import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PurchaseReview from "./containers/PurchaseReview";
import PurchaseApproved from "./containers/PurchaseApproved";
import Navigation from "./components/Navigation";
import { Styled } from "./styles";

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        {!window.location.pathname.includes("purchase_approved") && (
          <Styled.NavigationWrapper>
            <Navigation />
          </Styled.NavigationWrapper>
        )}
        <Styled.ContentWrapper>
          <Switch>
            <Route path="/purchase_review" component={PurchaseReview}></Route>
            <Route
              path="/purchase_approved"
              component={PurchaseApproved}
            ></Route>
          </Switch>
        </Styled.ContentWrapper>
      </BrowserRouter>
    </div>
  );
};

export default App;
