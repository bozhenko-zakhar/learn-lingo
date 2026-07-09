import * as yup from "yup";

const regExpEmail: RegExp = new RegExp(/^\S+@\S+\.\S+$/);
const regExpPassword: RegExp = new RegExp(
  /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>_\-\\[\]/+=~`';]).{8,}$/
);

export const registerSchema = yup.object().shape({
	name: yup.string().trim().required("A required field").min(2, "Must be at least 2 characters"),
	email: yup.string().trim().required("A required field").matches(regExpEmail, "Invalid format"),
	password: yup.string().trim().required("A required field").matches(regExpPassword, "Minimum eight characters, at least one letter and one number")
});