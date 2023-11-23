import React from 'react'
import { styled } from 'styled-components' 

const RoleDice = ({currentDice,roleDice}) => {
    
  return (
    <DiceContainer>
      <div className='dice' onClick={roleDice}>
        <img src={`./Images/dice_${currentDice}.png`} alt="dice1" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RoleDice

const DiceContainer=styled.div`
    display: flex;
    align-items: center;
    margin-top:48px;
    flex-direction: column;
    .dice{
        cursor: pointer;
    }
    p{
        font-size: 24px;
    }
`
