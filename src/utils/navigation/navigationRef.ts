import { createNavigationContainerRef } from '@react-navigation/native';

import { StackParamList } from '@/navigation/MainNavigation/types';

export const navigationRef = createNavigationContainerRef<StackParamList>();
