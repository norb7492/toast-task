import React from 'react';
import { ToastWrapperPropsInterface } from './interfaces/toast-wrapper-props.interface.ts';
import './toast-wrapper.css';
import ToastContent from './toast-content.tsx';
import useToastTimeout from './hooks/use-toast-timeout.ts';
import useDeleteToast from './hooks/use-delete-toast.ts';

function ToastWrapper(props: ToastWrapperPropsInterface) {
    const { toastStackList, toastSetStackList, timeout} =
        props;

    const deleteToast = useDeleteToast(toastStackList, toastSetStackList);

    useToastTimeout(toastStackList, deleteToast, timeout);

    return (
        <div className={`toast-container`}>
            {
                toastStackList.map((toast) => (
                    <React.Fragment key={toast.id}>
                        <ToastContent
                            id={toast.id}
                            deleteToast={deleteToast}
                            text={toast.text} type={toast.type}
                        />
                    </React.Fragment>
                ))
            }
        </div>
    );
}

export default ToastWrapper;