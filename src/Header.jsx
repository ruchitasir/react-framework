import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';


const Header= props=> {
   return(
       <AppBar position='static'>
            <div>
                <Button><div>Button 1</div></Button>
                <Button><div>Button 2</div></Button>
            </div>
       </AppBar>
        )
    }

export default Header