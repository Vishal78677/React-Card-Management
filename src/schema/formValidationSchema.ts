import * as Yup from "yup"
import { number } from 'card-validator';

export const formValidationSchema = Yup.object({

    name: Yup.string().required("Name is required filed").max(35, "Characters must be 35 or less than"),
    bankName: Yup.string().required("Bank Name is required filed"),
    cardType: Yup.string()
    .oneOf(["Credit", "Debit"], "Invalid card type")
    .required("Card type is required"),
    cardNumber: Yup.string().required("Card number is required filed").test('is-valid-card', 'Card number must be a valid card number', (value) => number(value).isValid),
    expiration: Yup.string()
    .required('Expiration date is required filed')
    .matches(/^(0[1-9]|1[0-2])\/\d{4}$/, 'Expiration date must be in MM/YYYY format')
    .test('is-future', 'Card has expired', (value) => {
        if (!value) return false;
        const [month, year] = value.split('/');
        const monthNumber = parseInt(month, 10);
        const yearNumber = parseInt(year, 10);
        const expiration = new Date(yearNumber, monthNumber - 1); 
        const currentDate = new Date();
        return expiration > currentDate;
      }),
      cvv: Yup.string().required("CVV number is required filed")

})