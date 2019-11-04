import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch,Redirect,withRouter } from 'react-router-dom'
//引入/导入
import {Button} from 'antd'
import HomePage from './HomePage/homePage'
import LoginPage from './Login/login';
class IndexPage extends React.Component {
    constructor(props){
        super(props)
    }
    log=()=>{
        console.log(this.props)
        this.props.history.push("/login")
    }
    render() {
        return (
            <div>
                <div>
                    不被路由管理的内容，广告
                </div>
                <BrowserRouter basename='react-example'>
                    <Switch>
                        <Route path="/homepage" component={HomePage}></Route>
                        <Route path="/login" component={LoginPage} history={this.props.history}></Route>
                        <Redirect to="/homepage"></Redirect>
                    </Switch>
                    
                    <Button onClick={this.log}>按钮</Button>
                </BrowserRouter>
            </div>
        )
    }
}
export default withRouter(IndexPage)
ReactDOM.render(<IndexPage />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
