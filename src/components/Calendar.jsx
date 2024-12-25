import GithubCalendar from 'github-calendar'
import { useEffect } from 'react'

export default function Calendar(){

    useEffect(()=>{
        GithubCalendar(".calendar","Lonewolf230")
    },[])
    return(
        <>
            <div className='calendar'></div>
        </>
    )
}