import { React } from 'react';
import { createGlobalState } from 'react-hooks-global-state';
import { get_config } from './config'

const initialState = {
    config: await get_config(),
    navbar_hidden: false,
    current_view: 'default',
    git_username: 'pritamprasd'
};
const { useGlobalState } = createGlobalState(initialState);

export default useGlobalState;
