"use client";
import React, { useState } from "react";
import {
  AddressInputWithToggle,
  //   TelephoneInputWithToggle,
  //   TextInputAsForm,
  //   TextAreaInputWithToggle,
  //   UrlInputWithToggle,
} from "../forms/Inputs";
// import { useForm } from "../../hooks/environmentUtils";
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
  //   const { inputs, handleChange } = useForm({
  //     city: theater?.city || "",
  //     id: theater?.id || null,
  //     mission_statement: theater?.mission_statement || "",
  //     name: theater?.name || "0",
  //     phone_number: theater?.phone_number || "",
  //     state: theater?.state || "",
  //     street_address: theater?.street_address || "",
  //     website: theater?.website || "",
  //     zip: theater?.zip || "",
  //   });
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

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(55, workingTheater);
    closeAllForms();
  }

  function toggleAddressForm() {
    setAddressForm(!addressForm);
  }

  function toggleMissionForm() {
    setMissionForm(!missionForm);
  }

  function toggleNameForm() {
    setNameForm(!nameForm);
  }

  function togglePhoneForm() {
    setPhoneForm(!phoneForm);
  }

  function toggleUrlForm() {
    setUrlForm(!urlForm);
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
        {/* {nameForm ? (
          <TextInputAsForm
            handleChange={handleChange}
            handleFormClose={toggleNameForm}
            handleSubmit={handleSubmit}
            label="Company Name"
            name="name"
            value={inputs.name}
          />
        ) : (
          <>
            <h2 onDoubleClick={toggleNameForm}>
              {theater.name}
            </h2>
            <span
              className="right floated trash icon"
              onClick={() => handleDelete(theater.id)}
            >
              <i className="fas fa-trash-alt"></i>
            </span>
          </>
        )}
      </div>

      <TextAreaInputWithToggle
        formOpen={missionForm}
        handleChange={handleChange}
        handleFormClose={toggleMissionForm}
        handleSubmit={handleSubmit}
        label="Mission Statement"
        name="mission_statement"
        toggleForm={toggleMissionForm}
        toggleText="Double click to set mission statement"
        value={inputs.mission_statement}
      /> */}

        <AddressInputWithToggle
          city={workingTheater.city}
          formOpen={addressForm}
          onChange={onChange}
          handleFormClose={toggleAddressForm}
          handleSubmit={handleSubmit}
          toggleForm={toggleAddressForm}
          toggleText="Double click to add address"
          state={workingTheater.state}
          street_address={workingTheater.street_address}
          zip={workingTheater.zip}
        />
        {/* <TelephoneInputWithToggle
        formOpen={phoneForm}
        handleChange={handleChange}
        handleFormClose={togglePhoneForm}
        handleSubmit={handleSubmit}
        label="Telephone"
        name="phone_number"
        toggleForm={togglePhoneForm}
        toggleText="Doubleclick to add phone number"
        value={inputs.phone_number}
      />
      <UrlInputWithToggle
        formOpen={urlForm}
        handleChange={handleChange}
        handleFormClose={toggleUrlForm}
        handleSubmit={handleSubmit}
        label="Website"
        name="website"
        toggleForm={toggleUrlForm}
        toggleText="Doubleclick to add website"
        value={inputs.website}
      /> */}
      </div>
    </div>
  );
}
