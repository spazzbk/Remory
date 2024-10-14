import UI from './config/ui.config.js';
import { validate } from './helpers/validate.js'

const { form, inputLogin, inputPassword} = UI;
const inputs = [inputLogin, inputPassword]
form.addEventListener('submit', (event) => {
    event.preventDefault();
    onSubmit();
});

function onSubmit() {
    const isValidForm = inputs.every((el) => {
        const isValidInput = validate(el);
        return isValidInput
    });

    console.log(isValidForm);
}
