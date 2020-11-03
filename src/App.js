import { withRouter } from "react-router-dom";
import Header from "./components/header/header";
import SiteWrapper from "./components/siteWrapper/siteWrapper";
import Routes from "./Routes";

function App() {
  return (
    <div className="App">
      <SiteWrapper>
        <Header />
        <Routes />
      </SiteWrapper>
    </div>
  );
}

export default withRouter(App);
