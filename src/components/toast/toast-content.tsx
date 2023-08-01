import './toast-content.css';
import { ToastTypesEnum } from './enums/toast-types.enum.ts';
import { capitalize } from 'lodash';
import warning from '../../assets/warning.svg';
import danger from '../../assets/danger.svg';
import success from '../../assets/success.svg';
import { ToastContentInterface } from './interfaces/toast-content.interface.ts';

const ICONS = {
    [ToastTypesEnum.WARNING]: warning,
    [ToastTypesEnum.DANGER]: danger,
    [ToastTypesEnum.SUCCESS]: success,
};

function ToastContent(props: ToastContentInterface) {
    const { id, deleteToast, text = '', type = ToastTypesEnum.SUCCESS } = props;

    const icon = ICONS[type];
    const typeFirstLetterUppercase = capitalize(type.toLowerCase());

    return (
        <div className={`content-container ${type}-box`}>
            <div className='content-subcontainer'>
                <div className='icon-container'>
                    <img src={icon} alt={typeFirstLetterUppercase}/>
                </div>
                <div className='toast-box-text-content'>
                    <div style={{
                        fontWeight: 600,
                        fontSize: 16,
                    }}>
                        {typeFirstLetterUppercase}
                    </div>
                    <div style={{
                        fontWeight: 400,
                        fontSize: 14
                    }}>
                        {text}
                    </div>
                </div>
            </div>
            <div>
                <button onClick={() => deleteToast(id)}>X</button>
            </div>
        </div>
    );
}

export default ToastContent;
