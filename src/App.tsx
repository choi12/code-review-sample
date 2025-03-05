import { NavigationContainer } from '@react-navigation/native';
import * as Sentry from '@sentry/react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import CodePush from 'react-native-code-push';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import GlobalModals from './components/modal/GlobalModals';
import { MainNavigation } from './navigation';
import { setupInitialAppConfig } from './utils/config/app';
import { CODE_PUSH_OPTIONS } from './utils/config/codepush';
import { QUERY_CLIENT_CONFIG } from './utils/config/query';
import { initSentry, routingInstrumentation } from './utils/config/sentry';
import { reportError } from './utils/error/reportError';
import { navigationRef } from './utils/navigation/navigationRef';

initSentry();

const queryClient = new QueryClient(QUERY_CLIENT_CONFIG);

function App() {
  useEffect(() => {
    setupInitialAppConfig().catch((error) => reportError(error));
  }, []);

  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer
          ref={navigationRef}
          onReady={() => {
            routingInstrumentation.registerNavigationContainer(navigationRef);
          }}
        >
          <MainNavigation />
          <GlobalModals />
        </NavigationContainer>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}

const CodePushApp = CodePush(CODE_PUSH_OPTIONS)(App);
export default Sentry.wrap(CodePushApp);
