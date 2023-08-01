import { ToastStackListInterface } from '../interfaces/toast-stack-list.interface.ts';
import { useEffect } from 'react';
import { last } from 'lodash';

function useToastTimeout( toastStackList: ToastStackListInterface[],
                          deleteToast: (id: number) => void,
                          timeout: number | undefined) {
    useEffect(() => {
        const interval = setInterval(() => {
            if (toastStackList.length) {
                const lastArrayElement = last(toastStackList)
                if (lastArrayElement) {
                    deleteToast(lastArrayElement.id);
                }
            }
        }, timeout);

        return () => {
            clearInterval(interval);
        };
    }, [toastStackList, deleteToast, timeout]);
}

export default useToastTimeout;