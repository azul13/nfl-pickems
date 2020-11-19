import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';

import ARI from './logos/ARI.png';
import ATL from './logos/ATL.png';
import BAL from './logos/BAL.png';
import BUF from './logos/BUF.png';
import CAR from './logos/CAR.png';
import CHI from './logos/CHI.png';
import CIN from './logos/CIN.png';
import CLE from './logos/CLE.png';
import DAL from './logos/DAL.png';
import DEN from './logos/DEN.png';
import DET from './logos/DET.png';
import GB from './logos/GB.png';
import HOU from './logos/HOU.png';
import IND from './logos/IND.png';
import JAX from './logos/JAX.png';
import KC from './logos/KC.png';
import LAC from './logos/LAC.png';
import LAR from './logos/LAR.png';
import LV from './logos/LV.png';
import MIA from './logos/MIA.png';
import MIN from './logos/MIN.png';
import NE from './logos/NE.png';
import NO from './logos/NO.png';
import NYG from './logos/NYG.png';
import NYJ from './logos/NYJ.png';
import PHI from './logos/PHI.png';
import PIT from './logos/PIT.png';
import SEA from './logos/SEA.png';
import SF from './logos/SF.png';
import TB from './logos/TB.png';
import TEN from './logos/TEN.png';
import WAS from './logos/WAS.png';

import './index.css';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
      maxWidth: 700,
    },
  });
  
function createData(name, g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12, g13, g14, n) {
  return { name, g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12, g13, g14, n };
}

const results = createData('Week10', IND, CLE, DET, GB, NYG, PIT, TB, LV, MIA, ARI, LAR, NO, NE, MIN, -1);

const rows = [
  createData('Ruben', TEN, CLE, DET, GB, NYG, PIT, TB, LV, MIA, ARI, SEA, NO, BAL, CHI, 0),
  createData('Ted',  TEN, CLE, DET, GB, NYG, PIT, TB, LV, LAC, ARI, LAR, NO, BAL, CHI, 0),
  createData('Andy', TEN, CLE, WAS, GB, NYG, PIT, TB, LV, LAC, BUF, SEA, NO, BAL, CHI, 0),
  createData('G', IND, CLE, DET, GB, PHI, PIT, TB, LV, MIA, ARI, LAR, NO, BAL, CHI, 0),
  createData('Javier', IND, CLE, WAS, GB, PHI, PIT, TB, LV, MIA, BUF, SEA, NO, BAL, CHI, 0),
  createData('Eddie', TEN, CLE, DET, GB, PHI, PIT, TB, LV, MIA, ARI, SEA, NO, BAL, CHI, 0),
  createData('Markandy', TEN, CLE, DET, GB, PHI, PIT, TB, LV, MIA, BUF, SEA, NO, BAL, MIN, 0),
  createData('Haha Clinton Dix', TEN, HOU, DET, GB, PHI, PIT, TB, LV, MIA, ARI, SEA, NO, NE, CHI, 0),
  createData('Big O Bob', TEN, CLE, DET, GB, PHI, PIT, TB, LV, MIA, BUF, SEA, NO, BAL, MIN, 0),
  createData('Fernando', IND, CLE, DET, GB, PHI, PIT, TB, LV, MIA, ARI, SEA, NO, BAL, MIN, 0),
  createData('Gerardo', TEN, CLE, DET, GB, PHI, PIT, CAR, LV, MIA, BUF, SEA, NO, BAL, MIN, 0),
  createData('Martin Basurato', TEN, HOU, DET, GB, NYG, PIT, TB, DEN, MIA, BUF, SEA, NO, BAL, CHI, 0),
  createData('Katie', TEN, HOU, WAS, GB, PHI, CIN, CAR, DEN, MIA, BUF, SEA, SF, BAL, CHI, 0),
  createData('The Fresh Prince of Clyde Edwards-Helaire', TEN, CLE, DET, GB, PHI, PIT, CAR, LV, MIA, BUF, SEA, NO, BAL, CHI, 0),
  createData('Roro', TEN, CLE, DET, GB, PHI, CIN, TB, LV, MIA, BUF, SEA, NO, BAL, MIN, 0),
  createData('Lilo', TEN, CLE, DET, GB, PHI, PIT, TB, LV, MIA, BUF, SEA, NO, BAL, MIN, 0),
  createData('Da Coach', TEN, CLE, WAS, GB, PHI, PIT, TB, LV, LAC, ARI, SEA, NO, BAL, MIN, 0)
];

const CreateClassName = (props) => {
  if(props.second === '-'){
    return <TableCell align="center" style={{borderStyle:'solid', borderWidth:'1px',  borderColor:'gray'}}><img src={props.first} className="logo" alt="???unknown???" /></TableCell>;
  } else {
    if(props.first === props.second){
      return (
        <TableCell align="center" style={{backgroundColor:'#57c25d', borderStyle:'solid', borderWidth:'1px', borderColor:'white'}}><img src={props.first} className="logo" alt="???unknown???" /></TableCell>
      );
    } else {
      return (
        <TableCell align="center" style={{backgroundColor:'#ca4343', borderStyle:'solid', borderWidth:'1px',  borderColor:'white'}}><img src={props.first} className="logo" alt="???unknown???" /></TableCell>
      );
    }
  }
  
}

function checkScore(results, player, score){
  const l1 = Object.keys(results);
  const l2 = Object.keys(player);

  for (const key of l1) {
    const val1 = results[key];
    const val2 = player[key];
    if (val1 === val2){
      score+=1;
    }
  }

  return score;
}

const getScores = async() => {
  const scores = await axios.get("https://static.nfl.com/liveupdate/scorestrip/ss.xml").then((json)=>json.data);
  var XMLParser = require('react-xml-parser');
  var xml = new XMLParser().parseFromString(scores);// Assume xmlText contains the example XML
  console.log(xml);
  //console.log(xml.getElementsByTagName('Name'));
}

const TableDisplay = () => {
    const classes = useStyles();
      rows.map((row) => (
        row.n = checkScore(results, row, row.n)
      ));
      getScores();
    
    return (
        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
            <TableHead>
            <TableRow >
                <TableCell align="center" style={{borderStyle:'solid', borderWidth:'1px', borderColor:'#acaaaaec'}}><b>PLAYER</b></TableCell>
                <TableCell align="center" style={{borderStyle:'solid', borderWidth:'1px', borderColor:'#acaaaaec'}}> <div class="header"> <img src={IND} className="small-logo" alt="NFL TEAM"/> &nbsp;IND </div> <div class="header"><img src={TEN} className="small-logo" alt="NFL TEAM"/> &nbsp;TEN </div></TableCell>
                <TableCell align="center" style={{borderStyle:'solid', borderWidth:'1px', borderColor:'#acaaaaec'}}> <div class="header"> <img src={HOU} className="small-logo" alt="NFL TEAM"/> &nbsp;HOU </div> <div class="header"><img src={CLE} className="small-logo" alt="NFL TEAM"/> &nbsp;CLE </div></TableCell>
                <TableCell align="center" style={{borderStyle:'solid', borderWidth:'1px', borderColor:'#acaaaaec'}}><div class="header"> <img src={WAS} className="small-logo" alt="NFL TEAM"/> &nbsp;WAS </div>  <div class="header"><img src={DET} className="small-logo" alt="NFL TEAM"/> &nbsp;DET </div></TableCell>
                <TableCell align="center" style={{borderStyle:'solid', borderWidth:'1px', borderColor:'#acaaaaec'}}><div class="header"> <img src={JAX} className="small-logo" alt="NFL TEAM"/> &nbsp;JAX </div>  <div class="header"><img src={GB} className="small-logo" alt="NFL TEAM"/> &nbsp;GB </div></TableCell>
                <TableCell align="center" style={{borderStyle:'solid', borderWidth:'1px', borderColor:'#acaaaaec'}}><div class="header"> <img src={PHI} className="small-logo" alt="NFL TEAM"/> &nbsp;PHI </div>  <div class="header"><img src={NYG} className="small-logo" alt="NFL TEAM"/> &nbsp;NYG </div></TableCell>
                <TableCell align="center" style={{borderStyle:'solid', borderWidth:'1px', borderColor:'#acaaaaec'}}><div class="header"> <img src={CIN} className="small-logo" alt="NFL TEAM"/> &nbsp;CIN </div>  <div class="header"><img src={PIT} className="small-logo" alt="NFL TEAM"/> &nbsp;PIT </div></TableCell>
                <TableCell align="center" style={{borderStyle:'solid', borderWidth:'1px', borderColor:'#acaaaaec'}}><div class="header"> <img src={TB} className="small-logo" alt="NFL TEAM"/> &nbsp;TB </div>    <div class="header"><img src={CAR} className="small-logo" alt="NFL TEAM"/> &nbsp;CAR </div></TableCell>
                <TableCell align="center" style={{borderStyle:'solid', borderWidth:'1px', borderColor:'#acaaaaec'}}><div class="header"> <img src={DEN} className="small-logo" alt="NFL TEAM"/> &nbsp;DEN </div>  <div class="header"><img src={LV} className="small-logo" alt="NFL TEAM"/> &nbsp;LV </div></TableCell>
                <TableCell align="center" style={{borderStyle:'solid', borderWidth:'1px', borderColor:'#acaaaaec'}}><div class="header"> <img src={LAC} className="small-logo" alt="NFL TEAM"/> &nbsp;LAC </div>  <div class="header"><img src={MIA} className="small-logo" alt="NFL TEAM"/> &nbsp;MIA </div></TableCell>
                <TableCell align="center" style={{borderStyle:'solid', borderWidth:'1px', borderColor:'#acaaaaec'}}><div class="header"> <img src={BUF} className="small-logo" alt="NFL TEAM"/> &nbsp;BUF </div>  <div class="header"><img src={ARI} className="small-logo" alt="NFL TEAM"/> &nbsp;ARI </div></TableCell>
                <TableCell align="center" style={{borderStyle:'solid', borderWidth:'1px', borderColor:'#acaaaaec'}}><div class="header"> <img src={SEA} className="small-logo" alt="NFL TEAM"/> &nbsp;SEA </div>  <div class="header"><img src={LAR} className="small-logo" alt="NFL TEAM"/> &nbsp;LAR </div></TableCell>
                <TableCell align="center" style={{borderStyle:'solid', borderWidth:'1px', borderColor:'#acaaaaec'}}><div class="header"> <img src={SF} className="small-logo" alt="NFL TEAM"/> &nbsp;SF </div>    <div class="header"><img src={NO} className="small-logo" alt="NFL TEAM"/> &nbsp;NO </div></TableCell>
                <TableCell align="center" style={{borderStyle:'solid', borderWidth:'1px', borderColor:'#acaaaaec'}}><div class="header"> <img src={BAL} className="small-logo" alt="NFL TEAM"/> &nbsp;BAL </div>  <div class="header"><img src={NE} className="small-logo" alt="NFL TEAM"/> &nbsp;NE </div></TableCell>
                <TableCell align="center" style={{borderStyle:'solid', borderWidth:'1px', borderColor:'#acaaaaec'}}><div class="header"> <img src={MIN} className="small-logo" alt="NFL TEAM"/> &nbsp;MIN </div>  <div class="header"><img src={CHI} className="small-logo" alt="NFL TEAM"/> &nbsp;CHI </div></TableCell>
                <TableCell><b>TOTAL</b></TableCell>
                
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                    <b>{row.name}</b>
                </TableCell>
                <CreateClassName first={row.g1} second={results.g1} n={row.n}/>
                <CreateClassName first={row.g2} second={results.g2}/>
                <CreateClassName first={row.g3} second={results.g3}/>
                <CreateClassName first={row.g4} second={results.g4}/>
                <CreateClassName first={row.g5} second={results.g5}/>
                <CreateClassName first={row.g6} second={results.g6}/>
                <CreateClassName first={row.g7} second={results.g7}/>
                <CreateClassName first={row.g8} second={results.g8}/>
                <CreateClassName first={row.g9} second={results.g9}/>
                <CreateClassName first={row.g10} second={results.g10}/>
                <CreateClassName first={row.g11} second={results.g11}/>
                <CreateClassName first={row.g12} second={results.g12}/>
                <CreateClassName first={row.g13} second={results.g13}/>
                <CreateClassName first={row.g14} second={results.g14}/>
                <TableCell align="center"><div style={{ fontSize: '25px'}}>{row.n}</div></TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    );
};

export default TableDisplay;