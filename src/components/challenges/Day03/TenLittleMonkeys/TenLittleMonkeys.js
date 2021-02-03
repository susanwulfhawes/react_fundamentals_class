import {useState} from 'react';
const TenLittleMonkeys = () =>{
    const [count, setCount]=useState(10);

    function handleClick(){
        //Subtract count
        if(count != 0){
            setCount(count-1);
        }
    }

    return(
        <div>
            <p>
                {count != 0 ? `${count} little monkies` : "no more monkeys"}
                </p>
            <button onClick={handleClick}>Click Here</button>
        </div>
    )
}

export default TenLittleMonkeys;









// import React, {useState} from 'react';

// const TenLittleMonkeys = () => {
//     return(
//         <div>
//             <h1>Ten Little Monkeys Jumping on the Bed</h1>
//             <CountMonkeys/>
            
//         </div>
//     );
// };

// function CountMonkeys(){
//     const [monkeyNum, setMonkeyNum] = useState(10);

//     if (monkeyNum > 0){
//             setMonkeyNum(monkeyNum-1)
//             return <ManyMonkeys/>;
//         } else {
//             return <NoMonkeys/>;
//         }
    

    
// }

// function ManyMonkeys(){
//     const [monkeyNum, setMonkeyNum] = useState(10);
//     return(
//         <div>
//             <a><img style={{width: '100px', height: '100px'}} src="https://i.pinimg.com/564x/2a/3e/15/2a3e152383712a5f4e5e1d42fa51ba2b.jpg" onClick={e=>setMonkeyNum(monkeyNum-1)}/> Click the Monkey</a>

//             <p><span>{monkeyNum}</span> little monkeys jumping on the bed one fell of and bumped his head. Momma called the doctor and the doctor said. No more monkeys jumping on the bed.</p>
            
//         </div>
//     )
// }

// function NoMonkeys(){
//     return(
//         <div>
//             <p>what the heck</p>
//         </div>
//     )
// }

// export default TenLittleMonkeys;