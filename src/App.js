import React, { Component } from 'react';
import './Styles/style1.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import noteams from './images/no teams.jpg';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/HighlightOff';
import Tooltip from '@material-ui/core/Tooltip';
import TopHeader from './Components/Top-Header';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TableHeading from './Components/tableHeading';
import plFlag from './images/ban.jpg';
import ground from './images/groung.jpeg';
import maFlag from './images/wi.jpg';
import { connect } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import Toolbar from '@material-ui/core/Toolbar';
import actionMain from "./Store/Actions/action-main";
import Badge from '@material-ui/core/Badge';

// for redux 
// Mapping the component's property to Redux's state
function mapStateToProps(state) {
  return {
       PlayersData : state.Ad_Players_Selected.All_Players,  // recieving players data from redux
        SelectedData: state.Players_Selected_Data  //selected players by user
  };
}

function mapDispatchToProps(dispatch) {
   return {
     //sending data to redux
       sendingUserSelectedPlayersList : function (data){
         return dispatch(
        actionMain.AD_Selected_Players_meh(data))
      
  }}
  
}






//for tabs
function TabContainer(props) {
  return (
    <div>
      {props.children}
    </div>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
//>

const styles = theme => ({
  padding: {
    padding: `0 ${theme.spacing.unit * 2}px`,
  },
  dialogBtn:{
    'float': 'right',
  },

  messageDisplay:{
    'text-align': 'center !important'
  },
  
  addbtn: {
    float: 'right',
    

    ['@media (max-width:700px)']: { // eslint-disable-line no-useless-computed-key
       height: '24px',
       width: '30px',
    },
  },
  tabRoot:{
    color: 'black',
    
    '&$tabSelected': {
      color: '#000000',
      
    },
    '&:focus': {
      color: '#000000',
    },
    '&$tabsIndicator': {
      'backgroundColor': '#000000',
      
    },
  },
  tabSelected:{
    color: 'black',
    'font-weight': 'bolder',
  },
  tabsIndicator:{
    'background-color': '#000000',
    
  },
  removeplayerbutton:{
    height: '4px',
    width: '40px',
    ['@media (max-width:700px)']: { // eslint-disable-line no-useless-computed-key
      height: '3px',
      width: '30px',
   },
   ['@media (max-width:400px)']: { // eslint-disable-line no-useless-computed-key
    height: '1.5px',
    width: '30px',
    
 },
},
  addplayerbutton:{
    height: '4px',
    width: '40px',
    backgroundColor: 'green',
    '&:focus': {
      backgroundColor: '#066906',
    },
    '&:hover': {
      backgroundColor: '#066906',
    },
    ['@media (max-width:700px)']: { // eslint-disable-line no-useless-computed-key
      height: '3px',
      width: '30px',
   },
   ['@media (max-width:400px)']: { // eslint-disable-line no-useless-computed-key
    height: '1.5px',
    width: '30px',
    
 },

  }
});

function Transition(props) {
  return <Slide direction="up" {...props} />;
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      team1: 'PL',
      team2:'MA',
      changeVisibility : false,
      value: 0, // tab value,
      AllPlayersSelectedData: [],
      arrayOfAllPlayers: [], //for switching btns
      playersSelected: 0,
      team1PlayersSelected: 0,
      team2PlayersSelected: 0,
      totalCreditLeft: 100,
      open: false,          //for error msg
      errorMsg: '',
      dialogopen: false,
      //for badges on tab
      wicket_keeper_selected: 0,
      batsman_selected: 0,
      bowlers_selected: 0,
      all_rounders_selected: 0,
      invisiblewicket_keeper: true,
      invisiblebatsman: true,
      invisibleall_rounders: true,
      invisiblebowlers: true,
     
      
      
    }
  }

  changeVisibility = () => {
    this.setState({changeVisibility: true});
  }

  // for tabs
  handleChange = (event, value) => {
    this.setState({ value });
  };

  //for flag picture
  flagPic = (team_name) => {
    if(team_name === 'PL') {
      return plFlag
    }
    else{
      return maFlag
    }
  }

  //adding player
  changeBtn = (id) => {
   if(this.state.arrayOfAllPlayers[id] === true){
     let playersArray = this.state.arrayOfAllPlayers;
     playersArray[id] = false;
     this.setState({arrayOfAllPlayers: playersArray})
   }
   else{
    let playersArray = this.state.arrayOfAllPlayers;
    playersArray[id] = true;
    this.setState({arrayOfAllPlayers: playersArray})
   }
   //changing footer disolay
   this.updatingDifferentValuesInFooter();
    
  }

  componentDidMount() {
    console.log(this.props.SelectedData)
    let playersDataLenght = this.props.PlayersData;
    playersDataLenght = playersDataLenght.length;
    let arrayOfPlayersNum = [];
    //creating array
    let i;
    for(i = 0; i < playersDataLenght; i++){
      arrayOfPlayersNum.push(true)
    }
  //  console.log(arrayOfPlayersNum)
    this.setState({arrayOfAllPlayers : arrayOfPlayersNum})
    
  }

  addWicketKeeper = (data, id) => {
    // console.log(this.state.AllPlayersSelectedData);
    //demo array
    let playersArray = this.state.AllPlayersSelectedData;
    let wicketKeeperExixt = false;
  
    

    //max 6 players from 1 team
    let passout = false;
    if(data.team_name === this.state.team1){
      if(this.state.team1PlayersSelected === 6) {
        this.setState({errorMsg:'You can only select max 6 players from each team'})
         this.handleClick();
      }else{passout = true;}
    }
    else if(data.team_name === this.state.team2){
      if(this.state.team2PlayersSelected === 6 ) {
        this.setState({errorMsg:'You can only select max 6 players from each team'})
        this.handleClick();
      }else{passout = true;}
    }
    if(passout === true){
    //checking if data is of role wicket keeper
    if(this.state.playersSelected === 11) {
      // displaying error
      this.setState({errorMsg:'You have selected 11 players'})
      this.handleClick();
    }else{
            if(data.role === 'wicket_keeper') {
              
              // console.log('yes')
              if(playersArray.length > 0){
                // console.log('ha')
                playersArray.map((d,i)=>{
                  if(d.role === 'wicket_keeper'){
                    wicketKeeperExixt = true;
                  }
                })
              
              }
              
            }
            if(wicketKeeperExixt === false){
              if(this.managingCreditPoints(data.series_player_credit)){
              // console.log('false')
              playersArray.push(data);
              //changing display btn
              this.changeBtn(id)
              }else{
                this.setState({errorMsg:'Not Enough Credit Points'})
                this.handleClick();
              }
            }else{
              // displaying error
              this.setState({errorMsg:'Max 1 Wicket keeper only you have to choose'})
              this.handleClick();
              
            }
            this.setState({AllPlayersSelectedData: playersArray})
            // console.log(this.state.AllPlayersSelectedData);
          }

  }}

  removeWicketKeeper = (data,id) => {
    // console.log(this.state.AllPlayersSelectedData);
    //demo array
    let playersArray = this.state.AllPlayersSelectedData;
    let wicketKeeperExixt = false;
    //checking if data is of role wicket keeper
    if(data.role === 'wicket_keeper') {
      playersArray.map((d,i)=>{
        if(d.player_id === data.player_id){
          wicketKeeperExixt = true;
        
          playersArray.splice(i, 1);
          //removing credit points
          this.decreasingCreditPoints(data.series_player_credit);
          //changing btn
          this.changeBtn(id)
        }
      })
    }
   this.setState({AllPlayersSelectedData: playersArray})
    console.log(this.state.AllPlayersSelectedData);

  }

  updatingDifferentValuesInFooter= () => {
    let totalplayers = 0;
    let tema1players = 0;
    let tema2players = 0;
    let wicket_keeper = 0;
    let batsman = 0;
    let bowlers = 0;
    let all_rounders = 0;
    
    
    this.state.AllPlayersSelectedData.map((d,i)=>{

      //for footer
      totalplayers = totalplayers+1;
      // team1
      if(d.team_name === this.state.team1) {
        tema1players = tema1players+1;
      }
      else if(d.team_name === this.state.team2) {
        tema2players = tema2players+1;
      }
      //for footer
      //for badges on tabs
      if(d.role === 'wicket_keeper'){
        wicket_keeper = wicket_keeper+1;
      }
      else if(d.role === 'batsman'){
        batsman = batsman+1;
      }
      else if(d.role === 'bowler'){
        bowlers = bowlers+1;
      }
      else {
        all_rounders = all_rounders+1;
      }
    })
    this.setState({
      playersSelected:totalplayers,
      team1PlayersSelected:tema1players,
      team2PlayersSelected:tema2players,
      wicket_keeper_selected:wicket_keeper,
      batsman_selected:batsman,
      bowlers_selected:bowlers,
      all_rounders_selected:all_rounders,

    })

    if(wicket_keeper === 0){
      this.setState({invisiblewicket_keeper: true})
    }else{
      this.setState({invisiblewicket_keeper: false})
    }

    if(batsman === 0){
      this.setState({invisiblebatsman: true})
    }else{
      this.setState({invisiblebatsman: false})
    }

    if(bowlers === 0){
      this.setState({invisiblebowlers: true})
    }else{
      this.setState({invisiblebowlers: false})
    }

    if(all_rounders === 0){
      this.setState({invisibleall_rounders: true})
    }else{
      this.setState({invisibleall_rounders: false})
    }
    // console.log(wicket_keeper,bowlers,all_rounders,batsman)
  }

  managingCreditPoints = (points) => {
  
    let totalpoints = 100 - this.state.totalCreditLeft;
    
    if(points+totalpoints <101) {
      this.setState({totalCreditLeft: 100-(totalpoints+points)})
      return true;
    }
    else{
      return false;
    }
  }

  decreasingCreditPoints = (points) =>{
    let totalpoints = 100 - this.state.totalCreditLeft;
    this.setState({totalCreditLeft: 100-(totalpoints-points)})
  }

  //for batsman tab
  addBatsMan = (data, id) => {
    //demo array
    let playersArray = this.state.AllPlayersSelectedData;
    let BatsManExixt = 0;
//issue
if((this.state.playersSelected === 11 || this.state.playersSelected === 10 || this.state.playersSelected === 9) && (this.state.wicket_keeper_selected === 0 || this.state.all_rounders_selected === 0)){
  if(this.state.wicket_keeper_selected === 0){
    this.setState({errorMsg:'Please select 1 wicket keeper of your team'})
      this.handleClick();
  }
  else if(this.state.all_rounders_selected === 0){
      this.setState({errorMsg:'Please select atleast 1 all rounder'})
      this.handleClick();
  }
}

else if((this.state.playersSelected === 11 || this.state.playersSelected === 10 || this.state.playersSelected === 9 || this.state.playersSelected === 8) && (this.state.bowlers_selected < 3)) {
  this.setState({errorMsg:'Please select atleast 3 bowlers'})
  this.handleClick();
}
else{

     //max 6 players from 1 team
     let passout = false;
     if(data.team_name === this.state.team1){
       if(this.state.team1PlayersSelected === 6) {
         this.setState({errorMsg:'You can only select max 6 players from each team'})
          this.handleClick();
       }else{passout = true;}
     }
     else if(data.team_name === this.state.team2){
       if(this.state.team2PlayersSelected === 6 ) {
         this.setState({errorMsg:'You can only select max 6 players from each team'})
         this.handleClick();
       }else{passout = true;}
     }
     if(passout === true){
    //checking if data is of role wicket keeper
    if(this.state.playersSelected === 11) {
    // displaying error
    this.setState({errorMsg:'You have selected 11 players'})
    this.handleClick();
    }else{
              if(data.role === 'batsman') {
                
                console.log('yes')
                if(playersArray.length > 0){
                  // console.log('ha')
                  playersArray.map((d,i)=>{
                    if(d.role === 'batsman'){
                      BatsManExixt = BatsManExixt+1;
                    }
                  })

                  if(BatsManExixt === 0){
                    if(this.managingCreditPoints(data.series_player_credit)){
                      playersArray.push(data);
                      //changing display btn
                      this.changeBtn(id)
                      }else{
                        this.setState({errorMsg:'Not Enough Credit Points'})
                        this.handleClick();
                      }
                  }
                
                }else{
                  if(this.managingCreditPoints(data.series_player_credit)){
                  playersArray.push(data);
                  //changing display btn
                  this.changeBtn(id)
                  }else{
                    this.setState({errorMsg:'Not Enough Credit Points'})
                    this.handleClick();
                  }
                }
                
              }
              if(BatsManExixt < 5 && BatsManExixt > 0){
                if(this.managingCreditPoints(data.series_player_credit)){
                // console.log('false')
                playersArray.push(data);
                //changing display btn
                this.changeBtn(id)
                }else{
                  this.setState({errorMsg:'Not Enough Credit Points'})
                  this.handleClick();
                }
              }
              else if(BatsManExixt === 0) {console.log('0')}
              else{
                // displaying error
                this.setState({errorMsg:'Max 5 Batsman you have to choose'})
                this.handleClick();
                
              }
              this.setState({AllPlayersSelectedData: playersArray})
              // console.log(this.state.AllPlayersSelectedData);
            }
          }
  }}

  // for batsman tab
  removeBatsMan = (data,id) => {
    // console.log(this.state.AllPlayersSelectedData);
    //demo array
    let playersArray = this.state.AllPlayersSelectedData;
    let BatsManExixt = false;
    //checking if data is of role batsman
    if(data.role === 'batsman') {
      console.log('playersArray', playersArray)
       playersArray.map((d,i)=>{
         if(d.player_id === data.player_id){
           BatsManExixt = true;
           console.log('matched')
          playersArray.splice(i, 1);
          //removing credit points
          this.decreasingCreditPoints(data.series_player_credit);
          //changing btn
          this.changeBtn(id)
         }
       })
    }
   this.setState({AllPlayersSelectedData: playersArray})
    // console.log(this.state.AllPlayersSelectedData);

  }

  //for bowler tab
  addBowlers = (data, id) => {
    //demo array
    let playersArray = this.state.AllPlayersSelectedData;
    let BowlersExixt = 0;

    //issue
if((this.state.playersSelected === 11 || this.state.playersSelected === 9 || this.state.playersSelected === 10) && (this.state.wicket_keeper_selected === 0 || this.state.all_rounders_selected === 0)){
  if(this.state.wicket_keeper_selected === 0){
    this.setState({errorMsg:'Please select 1 wicket keeper of your team'})
      this.handleClick();
  }
  else if(this.state.all_rounders_selected === 0){
      this.setState({errorMsg:'Please select atleast 1 all rounder'})
      this.handleClick();
  }
 
  
}
else if((this.state.playersSelected === 11 || this.state.playersSelected === 10 || this.state.playersSelected === 9 || this.state.playersSelected === 8) && (this.state.batsman_selected < 3)) {
  this.setState({errorMsg:'Please select atleast 3 batsman'})
  this.handleClick();
}
else{

     //max 6 players from 1 team
     let passout = false;
     if(data.team_name === this.state.team1){
       if(this.state.team1PlayersSelected === 6) {
         this.setState({errorMsg:'You can only select max 6 players from each team'})
          this.handleClick();
       }else{passout = true;}
     }
     else if(data.team_name === this.state.team2){
       if(this.state.team2PlayersSelected === 6 ) {
         this.setState({errorMsg:'You can only select max 6 players from each team'})
         this.handleClick();
       }else{passout = true;}
     }
     if(passout === true){
    //checking if data is of bowler
    if(this.state.playersSelected === 11) {
      // displaying error
      this.setState({errorMsg:'You have selected 11 players'})
      this.handleClick();
    }else{
            if(data.role === 'bowler') {
              
              
              if(playersArray.length > 0){
              
                playersArray.map((d,i)=>{
                  if(d.role === 'bowler'){
                    BowlersExixt = BowlersExixt+1;
                  }
                })

                if(BowlersExixt === 0){
                  if(this.managingCreditPoints(data.series_player_credit)){
                    playersArray.push(data);
                    //changing display btn
                    this.changeBtn(id)
                    }else{
                      this.setState({errorMsg:'Not Enough Credit Points'})
                      this.handleClick();
                    }
                }
              
              }else{
                if(this.managingCreditPoints(data.series_player_credit)){
                playersArray.push(data);
                //changing display btn
                this.changeBtn(id)
                }else{
                  this.setState({errorMsg:'Not Enough Credit Points'})
                  this.handleClick();
                }
              }
              
            }
            if(BowlersExixt < 5 && BowlersExixt > 0){
              if(this.managingCreditPoints(data.series_player_credit)){
              // console.log('false')
              playersArray.push(data);
              //changing display btn
              this.changeBtn(id)
              }else{
                this.setState({errorMsg:'Not Enough Credit Points'})
                this.handleClick();
              }
            }
            else if(BowlersExixt === 0) {console.log('0')}
            else{
              // displaying error
              this.setState({errorMsg:'Max 5 Batsman you have to choose'})
              this.handleClick();
              
            }
            this.setState({AllPlayersSelectedData: playersArray})
            // console.log(this.state.AllPlayersSelectedData);
          }
  }
}
  }
  //for bowler tab
  removeBowlers  = (data,id) => {
    //demo array
    let playersArray = this.state.AllPlayersSelectedData;
    let BowlersExixt = false;
    //checking if data is of role bowler
    if(data.role === 'bowler') {
      console.log('playersArray', playersArray)
       playersArray.map((d,i)=>{
         if(d.player_id === data.player_id){
          BowlersExixt = true;
           console.log('matched')
          playersArray.splice(i, 1);
          //removing credit points
          this.decreasingCreditPoints(data.series_player_credit);
          //changing btn
          this.changeBtn(id)
         }
       })
    }
   this.setState({AllPlayersSelectedData: playersArray})
    // console.log(this.state.AllPlayersSelectedData);

  }

  //for all rounder tab
  addAllRounders = (data, id) => {
    //demo array

    if((this.state.playersSelected === 11 || this.state.playersSelected === 10) && (this.state.wicket_keeper_selected === 0 )){
      
        this.setState({errorMsg:'Please select 1 wicket keeper of your team'})
          this.handleClick();
    }
    else if((this.state.playersSelected === 11 || this.state.playersSelected === 10 || this.state.playersSelected === 9 || this.state.playersSelected === 8) && (this.state.bowlers_selected < 3 || this.state.batsman_selected < 3)) {
      if(this.state.bowlers_selected < 3){
        this.setState({errorMsg:'Please select atleast 3 bowlers'})
          this.handleClick();
      }
      else if(this.state.batsman_selected < 3){
        this.setState({errorMsg:'Please select atleast 3 batsman'})
          this.handleClick();
      }
    }
    else{

    //max 6 players from 1 team
     //max 6 players from 1 team
     let passout = false;
     if(data.team_name === this.state.team1){
       if(this.state.team1PlayersSelected === 6) {
         this.setState({errorMsg:'You can only select max 6 players from each team'})
          this.handleClick();
       }else{passout = true;}
     }
     else if(data.team_name === this.state.team2){
       if(this.state.team2PlayersSelected === 6 ) {
         this.setState({errorMsg:'You can only select max 6 players from each team'})
         this.handleClick();
       }else{passout = true;}
     }
     if(passout === true){
    let playersArray = this.state.AllPlayersSelectedData;
    let AllRoundersExixt = 0;
    //checking if data is of all_rounder
    if(this.state.playersSelected === 11) {
       // displaying error
       this.setState({errorMsg:'You have selected 11 players'})
       this.handleClick();
            }else{
            if(data.role === 'all_rounder') {
              
              
              if(playersArray.length > 0){
              
                playersArray.map((d,i)=>{
                  if(d.role === 'all_rounder'){
                    AllRoundersExixt = AllRoundersExixt+1;
                  }
                })

                if(AllRoundersExixt === 0){
                  if(this.managingCreditPoints(data.series_player_credit)){
                    playersArray.push(data);
                    //changing display btn
                    this.changeBtn(id)
                    }else{
                      this.setState({errorMsg:'Not Enough Credit Points'})
                      this.handleClick();
                    }
                }
              
              }else{
                if(this.managingCreditPoints(data.series_player_credit)){
                playersArray.push(data);
                //changing display btn
                this.changeBtn(id)
                }else{
                  this.setState({errorMsg:'Not Enough Credit Points'})
                  this.handleClick();
                }
              }
              
            }
            if(AllRoundersExixt < 3 && AllRoundersExixt > 0){
              if(this.managingCreditPoints(data.series_player_credit)){
              // console.log('false')
              playersArray.push(data);
              //changing display btn
              this.changeBtn(id)
              }else{
                this.setState({errorMsg:'Not Enough Credit Points'})
                this.handleClick();
              }
            }
            else if(AllRoundersExixt === 0) {console.log('0')}
            else{
              // displaying error
              this.setState({errorMsg:'Max 3 all_rounder you can choose'})
              this.handleClick();
              
            }
            this.setState({AllPlayersSelectedData: playersArray})
            // console.log(this.state.AllPlayersSelectedData);
          }
          
        }
  }}

  //for all rounder tab
  removeAllRounders  = (data,id) => {
    //demo array
    let playersArray = this.state.AllPlayersSelectedData;
    let all_rounderExixt = false;
    //checking if data is of role all_rounder
    if(data.role === 'all_rounder') {
      console.log('playersArray', playersArray)
       playersArray.map((d,i)=>{
         if(d.player_id === data.player_id){
          all_rounderExixt = true;
           console.log('matched')
          playersArray.splice(i, 1);
          //removing credit points
          this.decreasingCreditPoints(data.series_player_credit);
          //changing btn
          this.changeBtn(id)
         }
       })
    }
   this.setState({AllPlayersSelectedData: playersArray})
    // console.log(this.state.AllPlayersSelectedData);

  }

  //for errolr msg
  handleClick = () => {
    this.setState({ open: true });
  };

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ open: false });
  }
 
  //for dialog
  dialoghandleClickOpen = () => {
    this.setState({ dialogopen: true });
  };

  dialoghandleClose = () => {
    this.setState({ dialogopen: false });
  };

  //Sending data to Redux
  sendingSelectedDataToRedux = () =>{
    // if(this.state.wicket_keeper_selected === 0) {
    //   this.setState({errorMsg:'Please select 1 wicket keeper of your team'})
    //   this.handleClick();
    // }
    // else if(this.state.all_rounders_selected === 0) {
    //   this.setState({errorMsg:'Please select atleast 1 all rounder'})
    //   this.handleClick();
    // }
    // else{

    // if(this.state.playersSelected === 11) {

    // }
    
      this.props.sendingUserSelectedPlayersList(this.state.AllPlayersSelectedData);
      this.dialoghandleClickOpen();
      console.log(this.props.SelectedData)
    
    
  }
 
  render() {
    const { classes } = this.props;
    const { value, } = this.state;
    

    
      if(this.state.changeVisibility === false) {
        return(
      <div>
     <TopHeader />

      <img className='noteams-img' src={noteams} />
      <Tooltip title="Create a Team" placement="left">
      <Button variant="fab" color="secondary" aria-label="Add" className={classes.addbtn} onClick={this.changeVisibility}>
          <AddIcon />
        </Button>
        </Tooltip>
       
      </div>
      )
    }
      else{
        return(
          <div>
          <TopHeader />
          {/* // 4 tabs code */}
         
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
          indicator= {classes.tabsIndicator}
        >
          <Tab label={
            <Badge className={classes.padding} color="secondary" badgeContent={this.state.wicket_keeper_selected} invisible={this.state.invisiblewicket_keeper}>
           WK  
          </Badge>
          }
          classes={{ root: classes.tabRoot, selected: classes.tabSelected }}  />
          
          
          <Tab label={
            <Badge className={classes.padding} color="secondary" badgeContent={this.state.batsman_selected} invisible={this.state.invisiblebatsman}>
           Bat
          </Badge>
          }
           classes={{ root: classes.tabRoot, selected: classes.tabSelected }} />
          
          
          <Tab label={
            <Badge className={classes.padding} color="secondary" badgeContent={this.state.bowlers_selected} invisible={this.state.invisiblebowlers}>
            Bowl
          </Badge>
          }
           classes={{ root: classes.tabRoot, selected: classes.tabSelected}} />
           
          <Tab label={<Badge className={classes.padding} color="secondary" badgeContent={this.state.all_rounders_selected} invisible={this.state.invisibleall_rounders}>
            Ar
              </Badge>}
           classes={{ root: classes.tabRoot, selected: classes.tabSelected }} />
           
        </Tabs>
      

      {/* //tabs material */}
      {/* ///////////////////////////////////////////////////////////////////// */}
      {/* first tab */}

      {value === 0 && <TabContainer>
        {/* //first tab */}
        <h3 className='guide-text'>Select Min 1 Wicket-Keeper</h3>
        <TableHeading />
        <div className='tableData'>
{
  //looping through players data
  this.props.PlayersData.map((data, id)=>{
    // console.log('id', id)
    // console.log('data', data.role)
    
      if(data.role === "wicket_keeper") {
                return(
                  <div className='table-content' key={data.player_id} >
                  <div className='table-head1 playerdiv'>
                  <div>
                    <img src={this.flagPic(data.team_name)} className='small-flag' />
                  </div>
                  <div className='playerNameDiv'>
                    <h3 className='playername'>{data.player_short_name}</h3>
                    <p className='player-type'>{data.team_name}|{data.role}</p>
                  </div>
                  </div>
                  <div className='table-head2 points'>{data.series_total_points}</div>
                  <div className='table-head3 points' >{data.series_player_credit}</div>
                  <div className='table-head4'>
                  {
                  (this.state.arrayOfAllPlayers[id])?
                   
                      <div>
                      <Button onClick={()=>{this.addWicketKeeper(data, id)}} variant="fab" mini color="secondary" aria-label="Add" className={classes.addplayerbutton}>
                       <AddIcon />
                 
                     </Button>
                      </div>
                    
                    :
                    <div>
                      <Button onClick={()=>{this.removeWicketKeeper(data, id)}}  variant="fab" mini color="secondary" aria-label="Remove" className={classes.removeplayerbutton}>
                     <RemoveIcon />
                     </Button> 
                    </div>

}
                  </div>
                </div>
            )
      }})

  }
  </div>

        </TabContainer>}

  {/* ///////////////////////////////////////////////////////////////////// */}
      {/* second tab */}


      
        {value === 1 && <TabContainer>
         
        <h3 className='guide-text'>Select 3 to 5 Batsman</h3>
        <TableHeading />
        

        <div className='tableData'>
{
  //looping through players data
  this.props.PlayersData.map((data, id)=>{
    // console.log('id', id)
    // console.log('data', data.role)
    
      if(data.role === "batsman") {
                return(
                  <div className='table-content' key={data.player_id} >
                  <div className='table-head1 playerdiv'>
                  <div>
                    <img src={this.flagPic(data.team_name)} className='small-flag' />
                  </div>
                  <div className='playerNameDiv'>
                    <h3 className='playername'>{data.player_short_name}</h3>
                    <p className='player-type'>{data.team_name}|{data.role}</p>
                  </div>
                  </div>
                  <div className='table-head2 points'>{data.series_total_points}</div>
                  <div className='table-head3 points' >{data.series_player_credit}</div>
                  <div className='table-head4'>
                  {
                  (this.state.arrayOfAllPlayers[id])?
                   
                      <div>
                      <Button onClick={()=>{this.addBatsMan(data, id)}} variant="fab" mini color="secondary" aria-label="Add" className={classes.addplayerbutton}>
                       <AddIcon />
                 
                     </Button>
                      </div>
                    
                    :
                    <div>
                      <Button onClick={()=>{this.removeBatsMan(data, id)}}  variant="fab" mini color="secondary" aria-label="Remove" className={classes.removeplayerbutton}>
                     <RemoveIcon />
                     </Button> 
                    </div>

}
                  </div>
                </div>
            )
      }})

  }
  </div>
  </TabContainer>}


        {/* ///////////////////////////////////////////////////////////////////// */}
      {/* third tab */}

        {value === 2 && <TabContainer>
       
        <h3 className='guide-text'>Select 3 to 5 Bowler</h3>
        <TableHeading />
        <div className='tableData'>
{
  //looping through players data
  this.props.PlayersData.map((data, id)=>{
    // console.log('id', id)
    // console.log('data', data.role)
    
      if(data.role === "bowler") {
                return(
                  <div className='table-content' key={data.player_id} >
                  <div className='table-head1 playerdiv'>
                  <div>
                    <img src={this.flagPic(data.team_name)} className='small-flag' />
                  </div>
                  <div className='playerNameDiv'>
                    <h3 className='playername'>{data.player_short_name}</h3>
                    <p className='player-type'>{data.team_name}|{data.role}</p>
                  </div>
                  </div>
                  <div className='table-head2 points'>{data.series_total_points}</div>
                  <div className='table-head3 points' >{data.series_player_credit}</div>
                  <div className='table-head4'>
                  {
                  (this.state.arrayOfAllPlayers[id])?
                   
                      <div>
                      <Button onClick={()=>{this.addBowlers(data, id)}} variant="fab" mini color="secondary" aria-label="Add" className={classes.addplayerbutton}>
                       <AddIcon />
                 
                     </Button>
                      </div>
                    
                    :
                    <div>
                      <Button onClick={()=>{this.removeBowlers(data, id)}}  variant="fab" mini color="secondary" aria-label="Remove" className={classes.removeplayerbutton}>
                     <RemoveIcon />
                     </Button> 
                    </div>

}
                  </div>
                </div>
            )
      }})

  }
  </div>


        </TabContainer>}

        

        {/* ///////////////////////////////////////////////////////////////////// */}
      {/* forth tab */}
        {value === 3 && <TabContainer>
     
        <h3 className='guide-text'>Select Min 1 All Rounder</h3>
        <TableHeading />

  <div className='tableData'>
{
  //looping through players data
  this.props.PlayersData.map((data, id)=>{
    // console.log('id', id)
    // console.log('data', data.role)
    
      if(data.role === "all_rounder") {
                return(
                  <div className='table-content' key={data.player_id} >
                  <div className='table-head1 playerdiv'>
                  <div>
                    <img src={this.flagPic(data.team_name)} className='small-flag' />
                  </div>
                  <div className='playerNameDiv'>
                    <h3 className='playername'>{data.player_short_name}</h3>
                    <p className='player-type'>{data.team_name}|{data.role}</p>
                  </div>
                  </div>
                  <div className='table-head2 points'>{data.series_total_points}</div>
                  <div className='table-head3 points' >{data.series_player_credit}</div>
                  <div className='table-head4'>
                  {
                  (this.state.arrayOfAllPlayers[id])?
                   
                      <div>
                      <Button onClick={()=>{this.addAllRounders(data, id)}} variant="fab" mini color="secondary" aria-label="Add" className={classes.addplayerbutton}>
                       <AddIcon />
                 
                     </Button>
                      </div>
                    
                    :
                    <div>
                      <Button onClick={()=>{this.removeAllRounders(data, id)}}  variant="fab" mini color="secondary" aria-label="Remove" className={classes.removeplayerbutton}>
                     <RemoveIcon />
                     </Button> 
                    </div>

}
                  </div>
                </div>
            )
      }})

  }
  </div>

        </TabContainer>}

        {/* ///////////////////////////////////////////////////////////////////// */}
      {/*  tabs end */}

          
        
          
         
          <div className='Footer'>
        <div className='Main-footer'>
          <div className='footer1'>
          <h4 className='score'>{this.state.playersSelected}/11</h4>
          <p className='score-text'>Payers</p>
          </div>
          <div className='footer2'>
          <h4 className='score'>{this.state.team1PlayersSelected}</h4>
          <p className='score-text'>PL</p>
          </div>
          <div className='footer3'>
          <h4 className='score'>{this.state.team2PlayersSelected}</h4>
          <p className='score-text'>MA</p>
          </div>
          <div className='footer4'>
          <h4 className='score'>{this.state.totalCreditLeft}/100</h4>
          <p className='score-text'>Credit Left</p>
          </div>
          <div className='footer5'>
          <Button onClick={()=>{this.sendingSelectedDataToRedux()}} variant="contained" color="secondary" >
          PREVIEW
          </Button>

          {/* //full screen dialog code */}
          <Dialog
          fullScreen
          open={this.state.dialogopen}
          onClose={this.dialoghandleClose}
          TransitionComponent={Transition}
          
        >
         
         <Toolbar>
              <IconButton className={classes.dialogBtn}  color="inherit" onClick={this.dialoghandleClose} aria-label="Close">
                <CloseIcon />
              </IconButton>
          </Toolbar> 
          <div className='dialogDiv'>
          <div className='dialogDiv1'>

          <div className='playersviewDiv'>
          {
            this.state.AllPlayersSelectedData.map((d,i)=>{
              return(
                <div className='playersviewchild' key={i}>
                <h2 className='picdisplayName'>{d.player_short_name}</h2>
                <p className='picdisplayRole'>{d.role}</p>
                </div>
              )
            })
         
        }
          </div>
          </div>
          </div>
            
        </Dialog>


          </div>
        </div>
        </div>


      {/* //snack bar code */}
        <Snackbar
         
         anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={this.state.open}
        autoHideDuration={5000}
        onClose={this.handleClose}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">{this.state.errorMsg}</span>}
        className={classes.messageDisplay}
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            className={classes.close}
            onClick={this.handleClose}
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />


          </div>
        )
      }
    
  }
}


App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(withStyles(styles)(App));

