"use client";

import { Form, FormSpy } from "react-final-form";
import {
  FFDropdown,
  FFMultiSelectDropdown,
  FFTextInput,
  GBTypography,
  TextInput,
} from "@leapfinance/geebee-component-library";

type Props = {
  tasksCount: number;
  onApply: (values: any) => void;
};

function StudentOnboardingForm() {
  const submitHandler = (values: any) => {};

  const handleFormSpy = (values: any) => {
    console.log("values::", values);
    // onApply({ ...values });
  };

  return (
    <Form
      onSubmit={submitHandler}
      render={({ handleSubmit, form, values }) => {
        return (
          <form className="flex items-center justify-between pb-4">
            <div className="flex items-center gap-x-3">
              <FFTextInput
                fieldProps={{
                  name: "test-input",
                }}
              />
              <FFDropdown
                fieldProps={{
                  name: `taskAssignedToId`,
                }}
                componentProps={{
                  options: [
                    { label: "hello", value: 1 },
                    { label: "pello", value: 2 },
                  ],
                  textInputProps: {
                    label: `Filter by Assigned to`,
                    placeholder: `Select Assignee`,
                    InputProps: {
                      sx: {
                        backgroundColor: `white`,
                        borderRadius: `0.5rem`,
                        borderColor: `#B3B2C2`,
                      },
                    },
                    sx: {
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: `white`,
                        borderRadius: `0.5rem`,
                        borderColor: `#B3B2C2`,
                        paddingTop: `0.5rem`,
                        paddingBottom: `0.5rem`,
                      },
                    },
                  },
                  className: `min-w-[14rem]`,
                }}
              />
              <FFMultiSelectDropdown
                fieldProps={{
                  name: `priority`,
                }}
                componentProps={{
                  options: [
                    { label: "hello", value: 1 },
                    { label: "pello", value: 2 },
                  ],
                  textInputProps: {
                    label: `Filter by Priority`,
                    placeholder: `Select Priority`,
                    InputProps: {
                      sx: {
                        backgroundColor: `white`,
                        borderRadius: `0.5rem`,
                        borderColor: `#B3B2C2`,
                      },
                    },
                    sx: {
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: `white`,
                        borderRadius: `0.5rem`,
                        borderColor: `#B3B2C2`,
                        paddingTop: `0.5rem`,
                        paddingBottom: `0.5rem`,
                      },
                    },
                  },
                  className: `min-w-[14rem]`,
                }}
              />
            </div>
            <FormSpy subscription={{ values: true }} onChange={handleFormSpy} />
          </form>
        );
      }}
    />
  );
}

export default StudentOnboardingForm;
