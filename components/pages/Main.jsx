import React from "react";
import "../../styles/styles.css"

import GridComponent from "../comps/GridComponent";
import Pages from "../comps/Pages";
import Menu from "../comps/Menu";
import SelectComponent from "../comps/SelectComponent";
import CustomTabPanel from "../comps/CustomTabPanel";

import { changeFavorites } from "../../redux-state/reducers/favorite";
import { setTab, setSubcategory } from "../../redux-state/reducers/sections";
import { setPage } from "../../redux-state/reducers/page";
import { useSelector, useDispatch } from "react-redux";

import emojiPack from './emoji.json'

import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const Main = () => {

    const [snackbar, setSnackbar] = React.useState({
      open: false,
      emoji: null
    });

    const dispatch = useDispatch()

    const favorite = useSelector(state => state.viewFavorites.favorites)
    const tab = useSelector(state => state.sectionReducer.tab)
    const subcategory = useSelector(state => state.sectionReducer.subcategory)
    const page = useSelector(state => state.pageReducer.page)

    const allEmoji = React.useMemo(() => {
      return Object.values(emojiPack.emoji)
        .flatMap(category => Object.values(category).flat());
    }, [emojiPack]);


    const handleChange = React.useCallback((event, newValue) => {
      dispatch(setTab(newValue));
      dispatch(setPage(1));
      dispatch(setSubcategory(''));
    }, [dispatch]);

    const handleChangePage = React.useCallback((event, newValue) => {
      dispatch(setPage(newValue));
    }, [dispatch]);
    
    const handleCopyToClipboard = React.useCallback(async (emoji) => {
      try {
        await navigator.clipboard.writeText(emoji);
        setSnackbar({ open: true, emoji });
      } catch (err) {
        console.error('Не удалось скопировать эмодзи: ', err);
      }
    }, []);

    const handleFavorite = React.useCallback((emoji) => {
      const newFavorites = favorite.includes(emoji)
      ? favorite.filter(item => item !== emoji)
      : [...favorite, emoji];
      dispatch(changeFavorites(newFavorites));
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
      }, [favorite, dispatch]);

    const handleClick = React.useCallback((emoji) => {
      handleCopyToClipboard(emoji);
    }, [handleCopyToClipboard]);

    const handleClose = React.useCallback((event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setSnackbar(prev => ({ ...prev, open: false }));
    }, []);

    const сurrentEmojiList = React.useMemo(() => {
      if (tab === 0) return favorite;
      if (tab > 1) return emojiPack.emoji[tab-1][subcategory];
      return allEmoji;
    }, [tab, subcategory, favorite, allEmoji]);

    return (
        <>
          <div className="form-container">
          <Menu category={tab} handleChange={handleChange} />
          <CustomTabPanel value={tab} index={tab}>
            { tab > 1 && 
            <SelectComponent name={emojiPack.emojiList[tab-2]} emojiPack={Object.keys(emojiPack.emoji[tab-1])}/>}
            
            <GridComponent emojiList={сurrentEmojiList}
            page={page} handleClick={handleClick} handleFavorite={handleFavorite} />
            
            <Pages emojiList={сurrentEmojiList} 
            page={page} handleChangePage={handleChangePage} />
          </CustomTabPanel> 

          <Snackbar open={snackbar.open} autoHideDuration={6000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="success"
              variant="filled"
              sx={{ width: '100%' }}
              >
              Каомодзи <span style={{fontWeight : '700'}}>{snackbar.emoji}</span> скопировалось! 
            </Alert>
          </Snackbar>
          </div>
        </>
    )
}

export default Main