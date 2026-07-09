import * as yup from "yup";

const regExpEmail: RegExp = new RegExp(/^\S+@\S+\.\S+$/);
const regExpPassword: RegExp = new RegExp(
  /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>_\-\\[\]/+=~`';]).{8,}$/
);

export const loginSchema = yup.object().shape({
	email: yup.string().trim().required("A required field").matches(regExpEmail, "Invalid format"),
	password: yup.string().trim().required("A required field").matches(regExpPassword, "Minimum eight characters, at least one letter and one number")
});