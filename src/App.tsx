import './App.css'
import 'typeface-montserrat';
import Toast from './components/toast/toast.tsx';
import useToast from './components/toast/hooks/use-toast.ts';

function App() {
    const { showSuccessToast, showWarningToast, showDangerToast, toastRef } = useToast();

    function handleClickSuccess() {
        showSuccessToast('Success text');
    }

    function handleClickDanger() {
        showDangerToast('Danger text');
    }

    function handleClickWarning() {
        showWarningToast('Warning Text');
    }

    function handleClickBigText() {
        showSuccessToast('Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.');
    }

    return (
        <div className='App' style={{padding: 30}}>
            <div style={{height: 100}}></div>
            <button onClick={handleClickSuccess}>Show Success</button>
            <button onClick={handleClickDanger}>Show Danger</button>
            <button onClick={handleClickWarning}>Show Warning</button>
            <button onClick={handleClickBigText}>Show Big Text</button>
            <Toast ref={toastRef} timeout={3000} />
        </div>
    )
}

export default App
