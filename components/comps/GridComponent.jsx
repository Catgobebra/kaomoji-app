import React from "react";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import { styled } from '@mui/material/styles';

import { useSelector } from 'react-redux';

import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const GridComponent = (props) => {

    const {emojiList, page, handleClick, handleFavorite} = props;

    const favoriteList = useSelector(state => state.viewFavorites.favorites);

    const Item = styled(Paper)(({ theme }) => ({
      backgroundColor: '#fff',
      ...theme.typography.body2,
      padding: theme.spacing(2),
      textAlign: 'center',
      color: (theme.vars ?? theme).palette.text.secondary,
      ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
      }),
    }));
    
    return (
        <Grid style={{marginBottom : '15px'}} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 12, md: 12 }}>
            {emojiList && 
            (emojiList.slice((page-1)*12,page*12)).map((_, index) => (
              <Grid style={{position: 'relative'}} key={index} size={{ xs: 2, sm: 4, md: 4 }}>
                <Item onClick={() => handleClick(_)} sx={{ cursor: 'pointer',whiteSpace: 'nowrap', color: 'black', transition: 'background-color 0.2s',
                 '&:hover': {
                backgroundColor: '#f5f5f5',
              }}}>
                    {_}
                    {(favoriteList.includes(_)) ?
                        <BookmarkIcon 
                          style={{
                            position: 'absolute',
                            top: '8%',
                            right: '4%',
                            fontSize: '1rem',
                            cursor: 'pointer'
                          }}
                          onClick={() => handleFavorite(_)}
                          />
                        : 
                          <BookmarkBorderIcon 
                            style={{
                              position: 'absolute',
                              top: '8%',
                              right: '4%',
                              fontSize: '1rem',
                              cursor: 'pointer'
                            }}
                            onClick={() => handleFavorite(_)}
                            />
                      }
                </Item>
                
              </Grid>
            ))
            }
        </Grid>
    )
}

export default GridComponent