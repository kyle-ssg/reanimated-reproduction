import React from 'react';
import { NativeStackNavigationOptions } from 'react-native-screens/native-stack';

interface IRoute {
  name: string,
  options?: Partial<NativeStackNavigationOptions>,
  component: React.ComponentType,
  params?: Record<string, any>
}

export const routes: Record<string, IRoute> = {
    home: {
        name: '/',
        options: {
            title: 'Home',
        },
    },
    about: {
        name: '/about',
        options: {
            title: 'About',
        },
    },
    modal: {
        name: '/modal',
        options: {
            title: 'Modal',
            stackPresentation: 'fullScreenModal',
            headerShown: false,
        },
    },
};
