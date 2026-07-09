import * as yup from "yup";

const regExpEmail: RegExp = new RegExp(/^\S+@\S+\.\S+$/);
const regExpPhone: RegExp = new RegExp(/^\+?[1-9][0-9]{7,14}$/);

export const bookSchema = yup.object().shape({
	learning_reason: yup.string().required("Required a radio action"),
	full_name: yup.string().trim().required("A required field").min(2, "Must be at least 2 characters"),
	email: yup.string().trim().required("A required field").matches(regExpEmail, "Invalid format"),
	phone_number: yup.string().trim().required("A required field").matches(regExpPhone, "Invalid format")
});