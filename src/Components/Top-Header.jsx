import React, { Component } from 'react';
import '../Styles/style1.css';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import AccountBalanceIcon from '@material-ui/icons/AccountBalanceWallet';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import banFlag from '../images/ban.jpg';
import wiFlag from '../images/wi.jpg';


const styles = theme => ({
    
  });



class TopHeader extends Component {
    render() {
      const { classes } = this.props;
  
      return (
        <div>
        <div className="top-header">
          <div>
          <IconButton className={classes.button} aria-label="ArrowBack">
          <ArrowBackIcon />
          </IconButton>
          </div>
          <div className='top-header-midContainer'>
          <div className='img-div'>
            <img className='flag' src={banFlag} />
          </div>
          <div className='text-div'>
            <h2 className='match-head'>PL vs MA</h2>
            <p className='match-time'>22h 13m 25s</p>
          </div>
          <div className='img-div'>
          <img className='flag' src={wiFlag} />
          </div>
          
          </div>
          <div>
          <IconButton className={classes.button} aria-label="AccountBalanceWallet">
          <AccountBalanceIcon />
          </IconButton>
          </div>
        </div>
         
        </div>
      );
    }
  }
  
  
  TopHeader.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(TopHeader);
  