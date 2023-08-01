# Toast Component

![image](https://github.com/norb7492/toast-task/assets/6706757/1dbcd445-b17d-419c-b4e9-b06540800d78)

Also works for bigger text

![image](https://github.com/norb7492/toast-task/assets/6706757/b56ec7db-0f7f-4a46-961e-a8ee83787fca)

to start the project simply run "npm install" and afterwards "npm run dev"

In the application there are example buttons visible to call the Toasters

![image](https://github.com/norb7492/toast-task/assets/6706757/cddd43e7-3fb1-4f6a-a636-b7b2944659f6)

By clicking them the Toasters will appear

![image](https://github.com/norb7492/toast-task/assets/6706757/cd759f8a-53ab-4b76-b62b-dffbedd4a604)



To use the Toast Component simply import 
```ts
import Toast from './components/toast/toast.tsx';
import useToast from './components/toast/hooks/use-toast.ts';
```
then add the component in the tsx
timeout is set default 6000 if prop is not passed

```ts
<Toast ref={toastRef} timeout={3000} />
```
we need to pass the toastRef 

```ts
const { showSuccessToast, showWarningToast, showDangerToast, toastRef } = useToast();
```
now is everything good to go just use the hooks from the use useToast to call the Toast

```ts
showSuccessToast('success text');
```
![image](https://github.com/norb7492/toast-task/assets/6706757/1b310ffe-6e96-41fc-8557-3c0901f43b4a)

```ts
showDangerToast('danger text');
```
![image](https://github.com/norb7492/toast-task/assets/6706757/d18f54b6-4ce3-4cb7-b0ed-0acee006eb88)

```ts
showWarningToast('Warning Text');
```

![image](https://github.com/norb7492/toast-task/assets/6706757/48f9fef3-8372-4921-b0f2-89c3d8d7d3d9)



