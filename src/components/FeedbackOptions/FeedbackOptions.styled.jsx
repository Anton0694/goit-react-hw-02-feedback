import styled from '@emotion/styled'

export const BtnContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
gap: 16px;
width: 600px;
`

export const Button = styled.button`
    cursor: pointer;
    font-size: 18px;
    border-radius: 5px;
    padding: 10px;
&:hover{
        background-color: blue;
        text-decoration: #fff;
    }
`