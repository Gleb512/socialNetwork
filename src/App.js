import React from 'react';
import './App.css';
import Content from './Components/content/content.jsx';
import Footer from './Components/footer/footer.jsx';
import Sidebar from './Components/sidebar/sidebar.jsx';
import {BrowserRouter, withRouter} from "react-router-dom";
import HeaderContainer from "./Components/header/headerContainer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redax/app-reducer";
import Preloader from "./Components/common/Preloader/Preloader";
import store from "./redax/redux-store";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }
    render() {
        if(!this.props.initialized){
            return <Preloader />
        }

        return (
            <div className={"App-wrapper"}>
                <HeaderContainer/>
                <Sidebar/>
                <Content />
                <Footer/>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})
let AppContainer = compose(
    withRouter,
    connect  (mapStateToProps, {initializeApp}))(App);
const MyAppComponent = () => {
    return (<div>
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </BrowserRouter>
    </div>);
}
export default MyAppComponent;