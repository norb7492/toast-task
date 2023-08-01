import { ToastTypesEnum } from '../enums/toast-types.enum.ts';

export interface ToastContentInterface {
    id: number
    deleteToast: (id: number) => void;
    text?: string;
    type?: ToastTypesEnum.SUCCESS | ToastTypesEnum.WARNING | ToastTypesEnum.DANGER;
}