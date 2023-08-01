import { useCallback } from 'react';
import { ToastStackListInterface } from '../interfaces/toast-stack-list.interface.ts';

function useDeleteToast(toastStackList: ToastStackListInterface[], toastSetStackList: (toastList: ToastStackListInterface[]) => void) {
    const deleteToast = useCallback((id: number) => {
        const toastListItem = toastStackList.filter((e) => e.id !== id);
        toastSetStackList(toastListItem);
    }, [toastStackList, toastSetStackList]);

    return deleteToast;
}

export default useDeleteToast;