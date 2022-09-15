import { React } from 'react';
import { createGlobalState } from 'react-hooks-global-state';
import { get_config } from './config'


const initial_default_config = await get_config();
const initialState = {
    config: initial_default_config,
    navbar_hidden: false,
    current_view: 'default'
};
const { useGlobalState } = createGlobalState(initialState);

export default useGlobalState;
