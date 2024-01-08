import React from 'react'

export function Header() {
    const aStyle = {
        display: 'inline-block',
        color:'blue',
        margin: '7px',
        textDecoration:'none'
    }  
    return (
        <div style={{backgroundColor: '#ccc'}}>
            <a href=" " style={aStyle}>Home</a> |&nbsp;
            <a href=" " style={aStyle}>React</a> |&nbsp;
            <a href=" " style={aStyle}>React Native</a> 
        </div>
    )
}
// export function …………………….. {
//     return (
//         <div style={{textAlign: ……………………}}>
//             <h2>…………………..............................................</h2>
//             <br/><br/><br/>
//         </div>
//     )
// }
// export const Footer = () => {
//     return (
//         <div style={{textAlign: ………………….}}>
//             &copy; {new Date().getFullYear()} ……………………………..
//         </div>
//     )
// }
    