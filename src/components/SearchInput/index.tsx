import { Button, CloseButton, Modal, TextInput } from "@mantine/core";
import { ChangeEventHandler, ReactChild, useState } from "react";
import { Search } from "tabler-icons-react";

type SearchInputProps = {
  onChange?: (text?: string) => void;
  value?: string;
  children?: ReactChild;
  title?: string;
  centtered?: boolean;
  placeholder: string;
  activeForm?: "button" | "text-field";
};

export function SearchInput({
  onChange,
  value,
  title,
  centtered,
  placeholder,
  activeForm = "text-field",
  children
}: SearchInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleOnChage: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (onChange) {
      const text = e.currentTarget.value;
      onChange(text);
    }
  };

  return (
    <>
      <Modal
        opened={isFocused}
        centered={centtered}
        withCloseButton={false}
        onClose={() => setIsFocused(false)}
        title={title}
        size="min(380px, 100vw)"
        padding={0}
      >
        <TextInput
          value={value}
          radius={0}
          onChange={handleOnChage}
          width="100%"
          placeholder={placeholder}
          icon={<Search />}
          rightSection={
            value &&
            value?.length > 0 && (
              <CloseButton onClick={() => onChange && onChange("")} />
            )
          }
          size="md"
          styles={{
            input: {
              borderTop: "unset",
              borderLeft: "unset",
              borderRight: "unset"
            }
          }}
        />
        {children}
      </Modal>
      {!isFocused &&
        ((activeForm === "text-field" && (
          <TextInput
            style={{
              width: "100%",
              maxWidth: 380
            }}
            defaultValue={value}
            onFocus={() => setIsFocused(true)}
            width="100%"
            placeholder={placeholder}
            icon={<Search />}
          />
        )) || <Button>+</Button>)}
    </>
  );
}
