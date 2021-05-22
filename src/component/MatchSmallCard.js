import {React} from 'react'
import {Link} from 'react-router-dom'
import './MatchSmallCard.scss'

export const MatchSmallCard = ({teamName, match}) => {

  const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
  const otherTeamRoute = `/team/${otherTeam}`;
  const isMatchWon = teamName === match.matchWinner;
  return (
    <div className={isMatchWon ? 'MatchSmallCard won-card' : 'MatchSmallCard lost-card'}>
      <div>
        <h3>vs</h3>
      </div>
      <h3><Link to = {otherTeamRoute}>{otherTeam}</Link></h3>
      <div className="match-result">
        <p>{match.matchWinner} won by {match.resultMargin} {match.result}</p>
      </div>
    </div>
  );
}
