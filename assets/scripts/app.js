import UI from 'config/ui.config';
import { validate } from '/helpers/validate'

const { form, inputLogin, inputPassword} = UI;
const inputs = [inputLogin, inputPassword]

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(1);
    onSubmit();
});

function onSubmit() {
    const isValidForm = inputs.every((el) => {
        const isValidInput = validate(el);
        return isValidInput
    });

    console.log(isValidForm);
}
