import React from 'react'
import TotalScore from './TotalScore'
import NumberSekecter from './NumberSekecter'
import { styled } from 'styled-components'
import RoleDice from './RoleDice'
import { useState } from 'react'
import { Button, OutlinedButton } from '../Styled/Button'
import Rules from './Rules'

const GamePlay = () => {
    const [score,setScore]= useState(0)
    const [selectedNumber,setSelectedNumber]=useState();
    const [currentDice,setCurrentDice]=useState(1);
    const [error,seterror] = useState("")
    const [ShowRules,setShowRules] = useState(false)

    const generateRandomNumber =(min,max)=>{
        console.log(Math.floor(Math.random()*(max-min)+min))
        return Math.floor(Math.random()*(max-min)+min)
    }
    const roleDice=()=>{
        if(!selectedNumber){
            seterror("You have not selected any number")
            return 
        }
        const randomNumber=generateRandomNumber(1,7);
        setCurrentDice((prev)=>randomNumber);
  
        if(selectedNumber===randomNumber){
            setScore(prev=>prev + 2);
        }else{
            setScore(prev=>prev - 2);
        }
        setSelectedNumber(undefined)
    }

    const resetScore=()=>{
        setScore(0)
    }
    return (
        <MainContainer>
            <div className='top_section'>
                <TotalScore score={score}/>
                <NumberSekecter seterror={seterror} error={error}  selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/>
            </div>
            <RoleDice currentDice={currentDice} roleDice={roleDice}/>
            <div className='btns'>
                <OutlinedButton onClick={resetScore}>Reset Score</OutlinedButton>
                <Button
                 onClick={()=>setShowRules((prev)=>!prev)}
                >{ShowRules ? "hide" : "show"}Show Rules</Button>

            </div>
            {ShowRules && <Rules/>}
            

        </MainContainer>
    )
}

export default GamePlay 
const MainContainer = styled.div`
padding-top: 70px;
    .top_section{
        display: flex;
        justify-content: space-around;
        align-items: end;
    }
    .btns{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        margin-top: 40px;
    }
` 