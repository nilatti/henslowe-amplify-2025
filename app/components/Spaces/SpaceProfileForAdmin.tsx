"use client";
import React, { useState } from "react";
import {
  AddressInputWithToggle,
  TelephoneInputWithToggle,
  TextInputWithToggle,
  TextAreaInputWithToggle,
  UrlInputWithToggle,
} from "../forms/Inputs";
import { SpaceType } from "@/app/utils/typeDeclarations";
import { useAmplifyClient } from "@/app/providers/AmplifyClientProvider";
import { IoTrash } from "react-icons/io5";

export default function SpaceProfileForAdmin({
  onDelete,
  space,
  updateSpace,
}: {
  onDelete: Function;
  space: SpaceType;
  updateSpace: Function;
}) {
  const client = useAmplifyClient();
  const [workingSpace, setWorkingSpace] = useState(space);
  const [addressForm, setAddressForm] = useState(false);
  const [missionForm, setMissionForm] = useState(false);
  const [nameForm, setNameForm] = useState(false);
  const [phoneForm, setPhoneForm] = useState(false);
  const [urlForm, setUrlForm] = useState(false);

  
  function closeAllForms() {
    setAddressForm(false);
    setMissionForm(false);
    setNameForm(false);
    setPhoneForm(false);
    setUrlForm(false);
  }

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(44, e.target.name, e.target.value);
    setWorkingSpace({
      ...workingSpace,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(55, workingSpace);
    await updateSpace(workingSpace);
    closeAllForms();
  }
    async function handleDelete(spaceId: number) {
      try {
        console.log(spaceId);
        let response = await client.models.spaces.delete({ id: spaceId });
        if (response.errors) {
          console.error("Error deleting space:", response.errors);
        } else {
          onDelete();
        }
      } catch (error) {
        console.error("Unhandled error during delete operation:", error);
      }
    }

  return (
    <div>
      <div>
        <h2>
          <TextInputWithToggle
            formOpen={nameForm}
            handleFormClose={() => setNameForm(false)}
            handleSubmit={handleSubmit}
            label="Company Name"
            name={"name"}
            onChange={onChange}
            toggleForm={() => setNameForm(!nameForm)}
            toggleText={`Double click to set company name`}
            value={workingSpace.name}
          />
        </h2>
          <span onClick={() => handleDelete(space.id)}>
              <IoTrash />
          </span>

      </div>

      <TextAreaInputWithToggle
        formOpen={missionForm}
        handleFormClose={() => setMissionForm(false)}
        handleSubmit={handleSubmit}
        label="Mission Statement"
        name="mission_statement"
        onChange={onChange}
        toggleForm={() => setMissionForm(!missionForm)}
        toggleText="Double click to set mission statement"
        value={workingSpace.mission_statement}
      />

      <AddressInputWithToggle
        city={workingSpace.city}
        formOpen={addressForm}
        onChange={onChange}
        handleFormClose={() => setAddressForm(false)}
        handleSubmit={handleSubmit}
        toggleForm={() => setAddressForm(!addressForm)}
        toggleText="Double click to add address"
        state={workingSpace.state}
        street_address={workingSpace.street_address}
        zip={workingSpace.zip}
      />
      <TelephoneInputWithToggle
        formOpen={phoneForm}
        handleFormClose={() => setPhoneForm(false)}
        handleSubmit={handleSubmit}
        label="Telephone"
        name="phone_number"
        onChange={onChange}
        toggleForm={() => setPhoneForm(!phoneForm)}
        toggleText="Doubleclick to add phone number"
        value={workingSpace.phone_number}
      />

      <UrlInputWithToggle
        formOpen={urlForm}
        handleFormClose={() => setUrlForm(false)}
        handleSubmit={handleSubmit}
        label="Website"
        name="website"
        onChange={onChange}
        toggleForm={() => setUrlForm(!urlForm)}
        toggleText="Doubleclick to add website"
        value={workingSpace.website}
      />
    </div>
  );
}
