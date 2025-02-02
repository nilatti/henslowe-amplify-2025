import React, {
  ChangeEvent,
  ChangeEventHandler,
  useEffect,
  useState,
} from "react";
import styles from "./forms.module.css";
import {
  DATE_FORMAT,
  TIME_FORMAT,
  US_STATES_ARRAY,
} from "../../utils/hardcodedConstants";
import BaseForm, { FormButtonGroup } from "./BaseForm";
export const AddressInput = ({
  city,
  onChange,
  label,
  state,
  street_address,
  zip,
}: {
  city?: string;
  onChange: ChangeEventHandler;
  label?: string;
  state?: string;
  street_address?: string;
  zip?: string;
}) => {
  const states = US_STATES_ARRAY.map((us_state) => (
    <option key={us_state.abbr} value={us_state.abbr}>
      {us_state.name}
    </option>
  ));
  return (
    <>
      <h3>{label || "Address"}</h3>
      <div className={styles.formGroupInline}>
        <label>Street Address</label>
        <input
          type="text"
          placeholder="street address"
          name="street_address"
          value={street_address}
          onChange={onChange}
        />
      </div>
      <div className={styles.formGroupInline}>
        <label>City</label>
        <input
          type="text"
          placeholder="city"
          name="city"
          value={city}
          onChange={onChange}
        />
      </div>
      <div className={styles.formGroupInline}>
        <label>State</label>
        <select name="state" onChange={onChange} value={state}>
          {states}
        </select>
      </div>
      <div className={styles.formGroupInline}>
        <label>Zip Code</label>
        <input
          type="number"
          placeholder="zip"
          name="zip"
          value={zip}
          onChange={onChange}
        />{" "}
      </div>
    </>
  );
};

export const AddressInputWithToggle = ({
  city,
  formOpen,
  onChange,
  handleFormClose,
  handleSubmit,
  toggleForm,
  toggleText,
  state,
  street_address,
  zip,
}: {
  city?: string;
  formOpen: boolean;
  onChange: ChangeEventHandler;
  handleFormClose: () => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  toggleForm: () => void;
  toggleText: string;
  state?: string;
  street_address?: string;
  zip?: string;
}) => {
  if (formOpen) {
    return (
      <BaseForm onSubmit={(e) => handleSubmit(e)}>
        <AddressInput
          city={city}
          onChange={onChange}
          state={state}
          street_address={street_address}
          zip={zip}
        />
        <FormButtonGroup cancelFunction={handleFormClose} />
      </BaseForm>
    );
  } else if (street_address || city || state || zip) {
    return (
      <div onDoubleClick={toggleForm}>
        {street_address && (
          <span>
            {street_address}
            <br />
          </span>
        )}
        {city && <span>{city}, </span>}
        {state && <span>{state} </span>}
        {zip && <span>{zip}</span>}
      </div>
    );
  } else {
    return <div onDoubleClick={toggleForm}>{toggleText}</div>;
  }
};
export const Checkbox = ({ name }: { name: string }) => {
  return <input name={name} type="checkbox" />;
};
export const Checkboxes = ({
  additionalClassName,
  options,
}: {
  additionalClassName: string;
  options: { id: number | string; name: string }[];
}) => {
  const [checkedState, setCheckedState] = useState(
    new Array(options.length).fill(false)
  );

  const handleOnChange = (position: number) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
  };
  return (
    <div className={`${styles.checkboxWrapper} ${styles[additionalClassName]}`}>
      {options.map((option, index) => (
        <div key={index}>
          <input
            id={`checkbox-${index}`}
            name={option.name}
            type="checkbox"
            value={option.id}
            checked={checkedState[index]}
            onChange={() => handleOnChange(index)}
          />
          <label htmlFor={`checkbox-${index}`}>{option.name}</label>
        </div>
      ))}
    </div>
  );
};
export const Email = ({ name }: { name: string }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const validateEmail = () => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
    } else {
      setError("");
    }
  };

  useEffect(() => {
    validateEmail();
  }, [email]);

  return (
    <>
      <input
        autoFocus
        className="invalid:bg-red-200 invalid:text-red-800"
        name={name}
        onChange={handleEmailChange}
        type="email"
        value={email}
      ></input>
      {error && (
        <div>
          {" "}
          <p className="error">{error}</p>
        </div>
      )}
    </>
  );
};

export const RadioSelect = ({
  additionalClassName,
  name,
  options,
}: {
  additionalClassName: string;
  name: string;
  options: { id: number | string; name: string }[];
}) => {
  const [checkedState, setCheckedState] = useState(
    new Array(options.length).fill(false)
  );

  const handleOnChange = (position: number) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
  };
  return (
    <div className={`${styles.checkboxWrapper} ${styles[additionalClassName]}`}>
      {options.map((option, index) => (
        <div key={index}>
          <input
            id={`radio-${index}`}
            name={name}
            type="radio"
            value={option.id}
            onChange={() => handleOnChange(index)}
          />
          <label htmlFor={`radio-${index}`}>{option.name}</label>
        </div>
      ))}
    </div>
  );
};
export const SubmitButton = ({
  children,
}: {
  type: string;
  children: string;
}) => {
  return <button type="submit">{children}</button>;
};
export const Text = ({ name }: { name: string }) => {
  return <input autoFocus name={name} type="text" />;
};
export const TextArea = ({ name }: { name: string }) => {
  return <textarea autoFocus cols={100} name={name} rows={30} />;
};
export const Url = ({ name }: { name: string }) => {
  const [url, setUrl] = useState("");
  const [error, setError] = useState<string | null>(null);
  const handleUrlChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };
  const validateUrl = () => {
    const urlRegex =
      /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;
    if (!urlRegex.test(url)) {
      setError("Please enter a valid url");
    } else {
      setError("");
    }
  };

  useEffect(() => {
    validateUrl();
  }, [url]);

  return (
    <>
      <input
        autoFocus
        className="invalid:bg-red-200 invalid:text-red-800"
        name={name}
        onChange={handleUrlChange}
        type="url"
        value={url}
      ></input>
      {error && (
        <div>
          {" "}
          <p className="error">{error}</p>
        </div>
      )}
    </>
  );
};
