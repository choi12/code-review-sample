import { create } from 'zustand';

import { createModalSlice } from './slices/modal/slice';
import { createUISlice } from './slices/ui/slice';
import { createUserSlice } from './slices/user/slice';
import { StoreState } from './types';

export const useStore = create<StoreState>()((...methods) => ({
  ...createModalSlice(...methods),
  ...createUISlice(...methods),
  ...createUserSlice(...methods),
}));
