import React from 'react'
import DefaultHeader from './../Header/header'
import BuyPage from './Buy/buy';
import SalePage from './Sale/sale';
import { BrowserRouter, Route, Link, withRouter } from 'react-router-dom'
import { Button } from 'antd'
class HomePage extends React.Component {

    constructor(props) {
        super(props)
        this.handle = this.handle.bind(this)
    }
    handle = function() {
        console.log(this.props);
        var xhr = new XMLHttpRequest();
        var url = "/user/getAll"
        xhr.open('GET', url);
        xhr.responseType = 'json';
        xhr.onload = function () {
            console.log(xhr.response);
        };
        xhr.onerror = function () {
            console.log("Oops, error");
        };        
        xhr.send();
    }
render() {
    // console.log(this.props.location.state.message)
    return (
        <div>
            <Button onClick={this.handle}>按钮1</Button>
            <DefaultHeader />
            <BrowserRouter basename="homepage">
                <div>
                    <Link to="/buy">我要买</Link>
                    <Link to="/sale">我要卖</Link>
                    <Link to="/login">登陆</Link>
                </div>
                <div>
                    <Route path="/buy" component={BuyPage}></Route>
                    <Route path="/sale" component={SalePage}></Route>
                </div>
                
            </BrowserRouter>
        </div>
    )
}
}
export default withRouter(HomePage)