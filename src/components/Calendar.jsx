import { useEffect } from 'react'
import GitHubCalendar from 'react-github-calendar'
export default function Calendar({theme}){
    const maptheme=theme=="light"?"dark":"light"
    const chartsTheme=theme=="light"?"dark":"light"
    
    const selectLastHalfYear = contributions => {
      const currentDate = new Date();
      const sixMonthsAgo = new Date();
      sixMonthsAgo.setMonth(currentDate.getMonth() - 6);
  
      return contributions.filter(activity => {
          const activityDate = new Date(activity.date);
          return activityDate >= sixMonthsAgo && activityDate <= currentDate;
      });
  };
  

    return(
        <>
          <div className='charts'>
            <div className='github-calendar'>
                <h2>Public Github Submissions</h2>
                <GitHubCalendar username='Lonewolf230'
                    transformData={selectLastHalfYear}
                    colorScheme={chartsTheme}/>
            </div>
            <div className="leetcode-chart">
                    <h2>LeetCode</h2>
                    <div>
                    <img
                        src={`https://leetcard.jacoblin.cool/manish2306j?theme=${maptheme}&font=Baloo%202&ext=heatmap`}
                        alt="LeetCode Submission Chart"
                    />
                    </div>
            </div>  
          </div>
        </>
    )
}