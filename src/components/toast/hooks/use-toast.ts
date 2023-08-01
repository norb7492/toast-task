import { useRef } from 'react';
import { ToastRef } from '../toast.tsx';

function useToast() {
    const toastRef = useRef<ToastRef>(null);

    const showSuccessToast = (message: string) => {
        if (toastRef.current) {
            toastRef.current.showSuccessToast(message);
        }
    };

    const showWarningToast = (message: string) => {
        if (toastRef.current) {
            toastRef.current.showWarningToast(message);
        }
    };

    const showDangerToast = (message: string) => {
        if (toastRef.current) {
            toastRef.current.showDangerToast(message);
        }
    };

    return { showSuccessToast, showWarningToast, showDangerToast, toastRef };
}

export default useToast;