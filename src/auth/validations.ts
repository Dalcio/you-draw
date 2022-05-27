import * as z from "zod";
import { ZodError } from "zod";

const zedErrorExtract = (parse: any, value: any) => {
  try {
    parse(value);
  } catch (error) {
    return JSON.parse((error as ZodError)?.message)[0].message;
  }
  return;
};

const email = (value: string) => {
  const { parse } = z.string().email({ message: "Invalid email address" });

  return zedErrorExtract(parse, value);
};

const password = (value: string) => {
  const { parse } = z
    .string()
    .min(5, { message: "Must be 5 or more characters long" })
    .max(100, { message: "Must be 100 or fewer characters long" });

  return zedErrorExtract(parse, value);
};

export const sigInFormValidation = {
  initialValues: {
    email: "",
    password: ""
  },
  validate: {
    email,
    password
  }
};

export const sigUpFormValidation = {
  initialValues: {
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  },
  validate: {
    username: (value: string) => {
      const rgx = /^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/;
      const { parse } = z.string().regex(rgx, {
        message: "Invalid username,ex: user"
      });

      return zedErrorExtract(parse, value);
    },
    email,
    password,
    confirmPassword: (value: string, values: { password: string }) =>
      value !== values.password ? "Passwords did not match" : null
  }
};
