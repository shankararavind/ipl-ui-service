import {React, useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import { MatchDetailCard } from '../component/MatchDetailCard'
import { MatchSmallCard } from '../component/MatchSmallCard'
import { YearSelector } from '../component/YearSelector'
import './MatchPage.scss'

export const MatchPage = () => {

    const [matches, setMatches] = useState([]);
    const {teamName, year} = useParams();
    
    useEffect(
        () => {
         const fetchMatches = async () => {
           const response = await fetch(`http://localhost:8081/team/${teamName}/matches?year=${year}`);
           const data = await response.json(); 
           console.log(data);
           setMatches(data);
         };
         fetchMatches(); 
        }, [teamName, year]
    );

    if (!matches)
    {
        return <h1>Team Not Found</h1>
    }

    return (
        <div className="MatchPage">
            <div className="year-selector">
                <h3>Select Year</h3>
                <YearSelector teamName={teamName}/>
            </div>
            <div>
                <h1 className="page-heading">{teamName} matches in {year}</h1>
                {
                    matches.map(match => <MatchDetailCard teamName={teamName} match={match} />)
                }
            </div>
        </div>
        
    )
}