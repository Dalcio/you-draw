import { AuthBtn } from "./AuthBtn";
import { LibraryBtn } from "./LibraryBtn";
import { SearchBtn } from "./SearchBtn";
import { GoogleBtn } from "./GoogleBtn";
import { SubmitBtn } from "./SubmitBtn";
import { ColorSchemeToggle } from "./ColorSchemeToggle";

export default {
  title: "Buttons"
};

export const ColorSchemeToggleButton = () => <ColorSchemeToggle />;

export const AuthenticationButton = () => <AuthBtn />;

export const LibraryButton = () => <LibraryBtn />;

export const SignInWithGoogleButton = () => <GoogleBtn sign="up" />;

export const SignUpWithGoogleButton = () => <GoogleBtn sign="up" />;

export const SignInButton = () => <SubmitBtn label="Sign in" />;

export const SignUpButton = () => (
  <SubmitBtn label="Sign up" onClick={() => alert("Sign up")} />
);

export const SearchButton = () => <SearchBtn />;

// export const = () => </>

// export const = () => </>
