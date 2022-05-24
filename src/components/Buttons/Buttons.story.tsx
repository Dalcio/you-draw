import { AuthBtn } from "./AuthBtn";
import { LibraryBtn } from "./LibraryBtn";
import { SearchBtn } from "./SearchBtn";
import { SignInWithGoogleBtn } from "./SignInWithGoogleBtn";
import { SignUpWithGoogleBtn } from "./SignUpWithGoogleBtn";
import { SubmitBtn } from "./SubmitBtn";

export default {
  title: "Buttons"
};

export const AuthenticationButton = () => <AuthBtn />;

export const LibraryButton = () => <LibraryBtn />;

export const SignInWithGoogleButton = () => <SignInWithGoogleBtn />;

export const SignUpWithGoogleButton = () => <SignUpWithGoogleBtn />;

export const SignInButton = () => <SubmitBtn label="Sign in" />;

export const SignUpButton = () => (
  <SubmitBtn label="Sign up" onClick={() => alert("Sign up")} />
);

export const SearchButton = () => <SearchBtn />;

// export const = () => </>

// export const = () => </>
