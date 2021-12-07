import React from 'react';
import tokenAPI from '../api/token/tokenAPI'

export default () => {
    tokenAPI.clear()
    tokenAPI.verify()
    return <></>
}