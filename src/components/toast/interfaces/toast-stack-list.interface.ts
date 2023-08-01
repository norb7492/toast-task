import { ToastTypesEnum } from '../enums/toast-types.enum.ts';

export interface ToastStackListInterface {
    id: number;
    text?: string;
    type?: ToastTypesEnum.SUCCESS | ToastTypesEnum.WARNING | ToastTypesEnum.DANGER;
}