import React from 'react';
import styled from 'styled-components/native';


const PostView = styled.View`
flex-direction: row;
background: rgb(96, 140, 153);
padding :20px;
margin-top:12px;
border-bottom-width: 1px;
border-bottom-color: rgba(0,0,0,0.1);
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
color: white;
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