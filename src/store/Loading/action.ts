import { ACTION_LOADING_END, ACTION_LOADING_START } from './types';

export const startLoading = () => ({
  type: ACTION_LOADING_START,
});

export const stopLoading = () => ({
  type: ACTION_LOADING_END,
});
