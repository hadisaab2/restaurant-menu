import React, { useState, useEffect } from "react";
import { ReactFormBuilder, ReactFormGenerator } from "react-form-builder2";
import { FormBuilder as FormBuilderIo, Formio, FormEdit } from "react-formio";

import "react-form-builder2/dist/app.css";
import "formiojs/dist/formio.full.css";
import "./styles.css";
function removeUnnecessaryAttributes(obj) {
  Object.keys(obj).forEach((key) => {
    if (Array.isArray(obj[key])) {
      obj[key].forEach((item) => {
        if (typeof item === "object" && item !== null) {
          removeUnnecessaryAttributes(item);
        }
      });
      // Optionally remove empty arrays if needed
      if (obj[key].length === 0) {
        delete obj[key];
      }
    } else if (obj[key] && typeof obj[key] === "object") {
      removeUnnecessaryAttributes(obj[key]); // Recursive call for nested objects
      // Check if the object is now empty or only contains unnecessary values, then remove it
      if (
        Object.keys(obj[key]).length === 0 ||
        allValuesAreUnecessary(obj[key])
      ) {
        delete obj[key];
      }
    } else if (obj[key] === "" || obj[key] === false || obj[key] === null) {
      delete obj[key]; // Remove empty strings, false, and null values
    }
  });
  return obj;
}

// Helper function to check if all values in an object are unnecessary
function allValuesAreUnecessary(obj) {
  return Object.values(obj).every(
    (value) =>
      value === "" ||
      value === false ||
      value === null ||
      (Array.isArray(value) && value.length === 0) ||
      (typeof value === "object" && value && Object.keys(value).length === 0)
  );
}
export default function FormBuilder({jsonString,setJsonString}) {
  const [formData, setFormData] = useState(JSON.parse(jsonString));

  useEffect(() => {
    console.log(JSON.stringify(formData, null, 2))
    setJsonString(JSON.stringify(formData, null, 2)); // Initialize jsonString when formData changes
  }, [formData]);

  const handleJsonChange = (event) => {
    const newJsonString = event.target.value;
    setJsonString(newJsonString);
    try {
      const newFormData = JSON.parse(newJsonString);
      setFormData(newFormData); // Update the form data if JSON is valid
    } catch (error) {
      console.error("Invalid JSON", error);
    }
  };

  const handleFormChange = (newdata) => {
    const cleanedData = removeUnnecessaryAttributes(newdata);
    setFormData(cleanedData);
    setJsonString(JSON.stringify(cleanedData, null, 2));
  };
  const builderOptions = {
    basic: {
      default: false,
      components: {
        textfield: {
          title: "Text Field",
          key: "textfield",
        },
        number: {
          title: "Number",
          key: "number",
        },
        email: false, // Exclude Email
      },
    },
    layout: {
      default: true,
      components: {
        panel: false,
        fieldset: {
          title: "Fieldset",
          key: "fieldset",
        },
        columns: {
          title: "Columns",
          key: "columns",
        },
      },
    },
    advanced: false,
  };
  console.log(FormBuilder.builder);

  return (
    <div className="formwrapper">
      <FormBuilderIo
        form={formData}
        onChange={handleFormChange}
        onSubmit={(data) => console.log("Submitted data:", data)}
        saveText="Save Form"
        onSubmitDone={(data) => console.log("Form submit done:", data)}
        builder={builderOptions}
        
      />
      <div style={{ marginTop: "20px" }}>
        <textarea
          value={jsonString}
          onChange={handleJsonChange}
          style={{ width: "100%", height: "300px" }}
        />
      </div>
    </div>
  );
}
