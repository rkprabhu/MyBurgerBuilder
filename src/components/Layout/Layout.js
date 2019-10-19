import React from 'react'
import Auxi from '../../hoc/Auxi'
import classes from './Layout.css'

const layout = (props) => (
    <Auxi>
        <div>
            Toolbar, Side Drawer, Backdrop
        </div>
        <main className={classes.content}>
            {props.children}
        </main>
    </Auxi>
)

export default layout;