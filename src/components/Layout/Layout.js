import React, {Component} from 'react'
import Auxi from '../../hoc/Auxi'
import classes from './Layout.css'
import Toolbar from '../Naviigation/Toolbar/Toolbar'
import Sidedrawer from '../Naviigation/Sidedrawer/Sidedrawer'

class layout extends Component {
    state = {
        showSideDrawer : false
    }
    SidedrawerClosedHandler= () => {
        this.setState({
            showSideDrawer: false
        })
    }
    SidedrawertoggleHandler= () => {
        this.setState((prevState)=>{
            return ({showSideDrawer: !prevState.showSideDrawer})
        })
    }
    render(){
        return(
            <Auxi>
                <div>
                    <Toolbar clicked={this.SidedrawertoggleHandler}/>
                    <Sidedrawer open={this.state.showSideDrawer}  closed={this.SidedrawerClosedHandler}/>
                    Backdrop
                </div>
                <main className={classes.content}>
                    {this.props.children}
                </main>
            </Auxi>
        )
    }
}

export default layout;