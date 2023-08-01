import { ToastStackListInterface } from './toast-stack-list.interface.ts';
import React from 'react';

export interface ToastWrapperPropsInterface {
    toastStackList: ToastStackListInterface[];
    toastSetStackList: React.Dispatch<React.SetStateAction<ToastStackListInterface[]>>;
    timeout?: number;
}