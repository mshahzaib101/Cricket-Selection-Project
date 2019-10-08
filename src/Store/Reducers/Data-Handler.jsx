import actionMain from '../Actions/action-main';

const INITIAL_STORE = {
    All_Players: 
    [
          {
            "player_id": 1492,
            "player_short_name": "Rashid Khan",
            "player_name": "Rashid Khan",
            "team_name": "MA",
            "role": "all_rounder",
            "team_id": 477,
            "series_player_credit": 10.5,
            "series_total_points": 0,
            "match_id": 620,
            "match_status": "upcoming"
          },
          {
            "player_id": 1493,
            "player_short_name": "Amir Hayat",
            "player_name": "Amir Hayat",
            "team_name": "MA",
            "role": "bowler",
            "team_id": 477,
            "series_player_credit": 9,
            "series_total_points": 0,
            "match_id": 620,
            "match_status": "upcoming"
          },
          {
            "player_id": 1494,
            "player_short_name": "S Badrinath",
            "player_name": "S Badrinath",
            "team_name": "MA",
            "role": "batsman",
            "team_id": 477,
            "series_player_credit": 8,
            "series_total_points": 0,
            "match_id": 620,
            "match_status": "upcoming"
          },
          {
            "player_id": 1495,
            "player_short_name": "DJ Bravo",
            "player_name": "Dwayne Bravo",
            "team_name": "MA",
            "role": "all_rounder",
            "team_id": 477,
            "series_player_credit": 9.5,
            "series_total_points": 0,
            "match_id": 620,
            "match_status": "upcoming"
          },
          {
            "player_id": 1496,
            "player_short_name": "JP Faulkner",
            "player_name": "James Faulkner",
            "team_name": "MA",
            "role": "all_rounder",
            "team_id": 477,
            "series_player_credit": 9,
            "series_total_points": 0,
            "match_id": 620,
            "match_status": "upcoming"
          },
          {
            "player_id": 1497,
            "player_short_name": "RJ Gleeson",
            "player_name": "Richard Gleeson",
            "team_name": "MA",
            "role": "bowler",
            "team_id": 477,
            "series_player_credit": 8.5,
            "series_total_points": 0,
            "match_id": 620,
            "match_status": "upcoming"
          },
          {
            "player_id": 1498,
            "player_short_name": "AD Hales",
            "player_name": "Alex Hales",
            "team_name": "MA",
            "role": "batsman",
            "team_id": 477,
            "series_player_credit": 9,
            "series_total_points": 0,
            "match_id": 620,
            "match_status": "upcoming"
          },
          {
            "player_id": 1499,
            "player_short_name": "Hazratullah Zazai",
            "player_name": "Hazratullah Zazai",
            "team_name": "MA",
            "role": "batsman",
            "team_id": 477,
            "series_player_credit": 8.5,
            "series_total_points": 0,
            "match_id": 620,
            "match_status": "upcoming"
          },
          {
            "player_id": 1500,
            "player_short_name": "Kamran Akmal",
            "player_name": "Kamran Akmal",
            "team_name": "MA",
            "role": "wicket_keeper",
            "team_id": 477,
            "series_player_credit": 9,
            "series_total_points": 0,
            "match_id": 620,
            "match_status": "upcoming"
          },
          {
            "player_id": 1501,
            "player_short_name": "A Lyth",
            "player_name": "Adam Lyth",
            "team_name": "MA",
            "role": "batsman",
            "team_id": 477,
            "series_player_credit": 9,
            "series_total_points": 0,
            "match_id": 620,
            "match_status": "upcoming"
          },
          {
            "player_id": 1502,
            "player_short_name": "Najibullah Zadran",
            "player_name": "Najibullah Zadran",
            "team_name": "MA",
            "role": "batsman",
            "team_id": 477,
            "series_player_credit": 8,
            "series_total_points": 0,
            "match_id": 620,
            "match_status": "upcoming"
          },
          {
            "player_id": 1503,
            "player_short_name": "BRM Taylor",
            "player_name": "Brendan Taylor",
            "team_name": "MA",
            "role": "wicket_keeper",
            "team_id": 477,
            "series_player_credit": 9,
            "series_total_points": 0,
            "match_id": 620,
            "match_status": "upcoming"
          },
          {
            "player_id": 1504,
            "player_short_name": "RE van der Merwe",
            "player_name": "Roelof van der Merwe",
            "team_name": "MA",
            "role": "all_rounder",
            "team_id": 477,
            "series_player_credit": 8.5,
            "series_total_points": 0,
            "match_id": 620,
            "match_status": "upcoming"
          },
          {
            "player_id": 1505,
            "player_short_name": "JM Vince",
            "player_name": "James Vince",
            "team_name": "MA",
            "role": "batsman",
            "team_id": 477,
            "series_player_credit": 8.5,
            "series_total_points": 0,
            "match_id": 620,
            "match_status": "upcoming"
          },
          {
            "player_id": 1506,
            "player_short_name": "Zahoor Khan",
            "player_name": "Zahoor Khan",
            "team_name": "MA",
            "role": "bowler",
            "team_id": 477,
            "series_player_credit": 9,
            "series_total_points": 0,
            "match_id": 620,
            "match_status": "upcoming"
          },
          {
            "player_id": 1507,
            "player_short_name": "Shoaib Malik",
            "player_name": "Shoaib Malik",
            "team_name": "PL",
            "role": "all_rounder",
            "team_id": 478,
            "series_player_credit": 9.5,
            "series_total_points": 0,
            "match_id": 620,
            "match_status": "upcoming"
          },
          {
            "player_id": 1508,
            "player_short_name": "Anwar Ali",
            "player_name": "Anwar Ali",
            "team_name": "PL",
            "role": "bowler",
            "team_id": 478,
            "series_player_credit": 8.5,
            "series_total_points": 0,
            "match_id": 620,
            "match_status": "upcoming"
          },
          {
            "player_id": 1509,
            "player_short_name": "JW Dernbach",
            "player_name": "Jade Dernbach",
            "team_name": "PL",
            "role": "bowler",
            "team_id": 478,
            "series_player_credit": 9,
            "series_total_points": 0,
            "match_id": 620,
            "match_status": "upcoming"
          },
          {
            "player_id": 1510,
            "player_short_name": "Hasan Khan",
            "player_name": "Hasan Khan",
            "team_name": "PL",
            "role": "bowler",
            "team_id": 478,
            "series_player_credit": 7.5,
            "series_total_points": 0,
            "match_id": 620,
            "match_status": "upcoming"
          },
          {
            "player_id": 1511,
            "player_short_name": "CJ Jordan",
            "player_name": "Chris Jordan",
            "team_name": "PL",
            "role": "bowler",
            "team_id": 478,
            "series_player_credit": 9,
            "series_total_points": 0,
            "match_id": 620,
            "match_status": "upcoming"
          },
          {
            "player_id": 1512,
            "player_short_name": "P Kumar",
            "player_name": "Praveen Kumar",
            "team_name": "PL",
            "role": "bowler",
            "team_id": 478,
            "series_player_credit": 8.5,
            "series_total_points": 0,
            "match_id": 620,
            "match_status": "upcoming"
          },
          {
            "player_id": 1513,
            "player_short_name": "E Lewis",
            "player_name": "Evin Lewis",
            "team_name": "PL",
            "role": "batsman",
            "team_id": 478,
            "series_player_credit": 10,
            "series_total_points": 0,
            "match_id": 620,
            "match_status": "upcoming"
          },
          {
            "player_id": 1514,
            "player_short_name": "MJ McClenaghan",
            "player_name": "Mitchell McClenaghan",
            "team_name": "PL",
            "role": "bowler",
            "team_id": 478,
            "series_player_credit": 9.5,
            "series_total_points": 0,
            "match_id": 620,
            "match_status": "upcoming"
          },
          {
            "player_id": 1515,
            "player_short_name": "Mohammad Sami",
            "player_name": "Mohammad Sami",
            "team_name": "PL",
            "role": "bowler",
            "team_id": 478,
            "series_player_credit": 9,
            "series_total_points": 0,
            "match_id": 620,
            "match_status": "upcoming"
          },
          {
            "player_id": 1516,
            "player_short_name": "TJ Moores",
            "player_name": "Tom Moores",
            "team_name": "PL",
            "role": "wicket_keeper",
            "team_id": 478,
            "series_player_credit": 8,
            "series_total_points": 0,
            "match_id": 620,
            "match_status": "upcoming"
          },
          {
            "player_id": 1517,
            "player_short_name": "LE Plunkett",
            "player_name": "Liam Plunkett",
            "team_name": "PL",
            "role": "bowler",
            "team_id": 478,
            "series_player_credit": 8.5,
            "series_total_points": 0,
            "match_id": 620,
            "match_status": "upcoming"
          },
          {
            "player_id": 1518,
            "player_short_name": "L Ronchi",
            "player_name": "Luke Ronchi",
            "team_name": "PL",
            "role": "wicket_keeper",
            "team_id": 478,
            "series_player_credit": 9.5,
            "series_total_points": 0,
            "match_id": 620,
            "match_status": "upcoming"
          },
          {
            "player_id": 1519,
            "player_short_name": "Shaiman Anwar",
            "player_name": "Shaiman Anwar",
            "team_name": "PL",
            "role": "batsman",
            "team_id": 478,
            "series_player_credit": 9,
            "series_total_points": 0,
            "match_id": 620,
            "match_status": "upcoming"
          },
          {
            "player_id": 1520,
            "player_short_name": "Umar Akmal",
            "player_name": "Umar Akmal",
            "team_name": "PL",
            "role": "batsman",
            "team_id": 478,
            "series_player_credit": 9,
            "series_total_points": 0,
            "match_id": 620,
            "match_status": "upcoming"
          },
          {
            "player_id": 1521,
            "player_short_name": "Zahir Khan",
            "player_name": "Zahir Khan",
            "team_name": "PL",
            "role": "bowler",
            "team_id": 478,
            "series_player_credit": 8,
            "series_total_points": 0,
            "match_id": 620,
            "match_status": "upcoming"
          }
        ]
        
            //Static provided data about players is stored here
  }



  function Ad_Players_Selected(state = INITIAL_STORE, action) {
    console.log('switch')
    switch (action.type) {  
     
    
    default:
    console.log('not running')
      return state
    }
  }
  
  export default Ad_Players_Selected;