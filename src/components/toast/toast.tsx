import { useState, forwardRef, useImperativeHandle, Ref } from 'react';
import { ToastPropsInterface } from './interfaces/toast-props.interface.ts';
import { ToastStackListInterface } from './interfaces/toast-stack-list.interface.ts';
import ToastWrapper from './toast-wrapper.tsx';
import { ToastTypesEnum } from './enums/toast-types.enum.ts';
import {DefaultToastPropertiesEnum} from "./enums/default-toast-properties.enum.ts";

export interface ToastRef {
    showSuccessToast: (text: string) => void;
    showWarningToast: (text: string) => void;
    showDangerToast: (text: string) => void;
}

function Toast({ timeout = DefaultToastPropertiesEnum.DEFAULT_TIME }: ToastPropsInterface, ref: Ref<ToastRef>) {
    const [toastList, setToastList] = useState<ToastStackListInterface[]>([]);

    const addSuccessToastToStack = (text: string) => {
        const toastProperty = {
            id: toastList.length + 1,
            text: text,
            type: ToastTypesEnum.SUCCESS
        }

        setToastList([...toastList, toastProperty])
    }

    const addWarningToastToStack = (text: string) => {
        const toastProperty = {
            id: toastList.length + 1,
            text: text,
            type: ToastTypesEnum.WARNING
        }

        setToastList([...toastList, toastProperty])
    }

    const addDangerToastToStack = (text: string) => {
        const toastProperty = {
            id: toastList.length + 1,
            text: text,
            type: ToastTypesEnum.DANGER
        }

        setToastList([...toastList, toastProperty])
    }

    useImperativeHandle(ref, () => ({
        showSuccessToast: (text: string): void => {
            addSuccessToastToStack(text);
        },
        showWarningToast: (text: string) : void => {
            addWarningToastToStack(text)
        },
        showDangerToast: (text: string): void => {
            addDangerToastToStack(text)
        }
    }));

    return (
        <ToastWrapper
            toastStackList={toastList}
            toastSetStackList={setToastList}
            timeout={timeout}
        />
    );
}

const ForwardedToastWrapper = forwardRef(Toast);

export default ForwardedToastWrapper;
