// import { useEffect } from "react"

// import './badge.css'
// export default function Badges() {
//     useEffect(()=>{
//         const script = document.createElement('script');
//         script.src = "//cdn.credly.com/assets/utilities/embed.js";
//         script.async = true;
//         document.body.appendChild(script);

//         // Cleanup to avoid duplicate script loading
//         return () => {
//         document.body.removeChild(script);
//         };
//     },[])
//     return(
//         <>  
//             <div className=" badge-section">
//                 <h2>Certifications and Badges</h2>
//                 <div className="badge-container">
//                     <div className="credly-badge" data-iframe-width="150" data-iframe-height="270" data-share-badge-id="11313996-9611-4b59-aeae-0afe284f053e" data-share-badge-host="https://www.credly.com"></div>
//                 </div>
//             </div>
//         </>
//     )
// }