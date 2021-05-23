import {React} from 'react'
import './TeamTile.scss'
import {Link} from 'react-router-dom'
 
export const TeamTile = ({teamName}) => 
{
    return (
    <Link to={`/team/${teamName}`}>
        <div className="TeamTile">
            <h1>
                {teamName}
            </h1>
        </div>
    </Link>
    )
}