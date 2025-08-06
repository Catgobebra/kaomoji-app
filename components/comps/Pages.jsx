import React from "react";

import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';

const Pages = (props) => {

    const {emojiList, page, handleChangePage } = props;

    return (
        <>
        {emojiList && 
        <Stack spacing={2} style={{alignItems : 'center'}}>
        <Pagination page={page} onChange={handleChangePage} count={Math.ceil(emojiList.length/12)} color="primary"/>
        </Stack>
        }
        </>
    )
}

export default Pages