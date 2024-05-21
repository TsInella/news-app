import React from 'react';
import styled from 'styled-components/native';


const PostView = styled.View`
flex-direction: row;
background: rgb(237, 237, 233);  
padding :20px;
margin-top:12px;
border-bottom-width: 2px;
border-bottom-color: rgba(173, 181, 189); 
border-bottom-style:solid;
`;

const PostImage = styled.Image`
width:90px;
height:90px;
border-radius:12px;
margin-right:12px;
`;

const PostTitle = styled.Text`
font-size: 17px;
font-weight: 700;
color: black;
`

const PostDetails = styled.View`
justify-content: center;
flex:1;
`
const PostDate = styled.Text`
font-size: 12px;
margin-top:2px;
color: rgba(0,0,0,0.4);
`

const truncateTitle = (str) => {
    if(str.length>= 60){
        return str.substring(0,65) + '...';
    }

    return str;
}

export const Post = ({title, imageUrl, createdAt }) =>{
    return(
        <PostView>
            <PostImage source = {{uri: imageUrl}}/>
            <PostDetails>
                <PostTitle>{truncateTitle(title)}</PostTitle>
                <PostDate>{new Date(createdAt).toLocaleDateString()}</PostDate>
            </PostDetails>
      </PostView>
    )
};