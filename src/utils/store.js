import { React } from 'react';
import { createGlobalState } from 'react-hooks-global-state';

const default_config = {
    descriptions: {
        current_view: 'default'
    }
}

const initialState = {
    config: default_config,
    navbar_hidden: false,
    current_view: 'default',
    git_username: 'pritamprasd'
};
const { useGlobalState } = createGlobalState(initialState);

export default useGlobalState;

