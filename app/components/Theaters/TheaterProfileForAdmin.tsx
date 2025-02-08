"use client";
import React, { useState } from "react";
import {
  AddressInputWithToggle,
  TelephoneInputWithToggle,
  TextInputWithToggle,
  TextAreaInputWithToggle,
  UrlInputWithToggle,
} from "../forms/Inputs";
// import { deleteItem } from "../../api/crud";
import { TheaterType } from "@/app/utils/typeDeclarations";

export default function TheaterProfileForAdmin({
  theater,
  updateTheater,
}: {
  theater: TheaterType;
  updateTheater: Function;
}) {
  const [workingTheater, setWorkingTheater] = useState(theater);
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
    setWorkingTheater({
      ...workingTheater,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(55, workingTheater);
    await updateTheater(workingTheater);
    closeAllForms();
  }
  //   async function handleDelete(theaterId) {
  //     let response = await deleteItem(theaterId, "theater");
  //     if (response.status >= 400) {
  //       console.log("error deleting theater");
  //     } else {
  //       history.push("/theaters");
  //     }
  //   }

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
            value={workingTheater.name}
          />
        </h2>
        {/* <span
              className="right floated trash icon"
              onClick={() => handleDelete(theater.id)}
            >
              <i className="fas fa-trash-alt"></i>
            </span> */}
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
        value={workingTheater.mission_statement}
      />

      <AddressInputWithToggle
        city={workingTheater.city}
        formOpen={addressForm}
        onChange={onChange}
        handleFormClose={() => setAddressForm(false)}
        handleSubmit={handleSubmit}
        toggleForm={() => setAddressForm(!addressForm)}
        toggleText="Double click to add address"
        state={workingTheater.state}
        street_address={workingTheater.street_address}
        zip={workingTheater.zip}
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
        value={workingTheater.phone_number}
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
        value={workingTheater.website}
      />
    </div>
  );
}
