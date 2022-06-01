import {
  Button,
  CloseButton,
  Modal,
  TextInput,
  useMantineTheme
} from "@mantine/core";
import { ChangeEventHandler, ReactChild, useState } from "react";
import { Plus, Search } from "tabler-icons-react";

type SearchInputProps = {
  onChange?: (text: string) => void;
  value?: string;
  children?: ReactChild | null;
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
  const { breakpoints: bp } = useMantineTheme();
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
        size={`min(${bp.sm}px, 100%)`}
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
      {activeForm === "text-field" ? (
        <TextInput
          style={{
            width: "100%",
            maxWidth: bp.sm
          }}
          defaultValue={value}
          onClick={() => setIsFocused(true)}
          placeholder={placeholder}
          icon={<Search />}
        />
      ) : (
        <Button
          variant="subtle"
          onClick={() => setIsFocused(true)}
          leftIcon={<Plus />}
        >
          New
        </Button>
      )}
    </>
  );
}
