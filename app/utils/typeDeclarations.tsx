import { ChangeEventHandler } from "react";
export type SpaceType = {
  id: number,
  fake?: boolean,
  name: string,
  street_address?: string;
  city?: string;
  state?: string;
  zip?: string;
  phone_number: string,
  website: string,
  seating_capacity: number,
  mission_statement: string,
  logo: string
}
export type TheaterType = {
  id: number;
  fake?: boolean;
  name: string;
  location?: string;
  capacity?: number;
  seats?: number;
  mission_statement?: string;
  phone_number?: string;
  website?: string;
  street_address?: string;
  city?: string;
  state?: string;
  zip?: string;
};


export type AddressType = {
  street_address?: string;
  city?: string;
  state?: string;
  zip?: string;
};

export type InputProps = {
  label: string;
  onChange: ChangeEventHandler;
  name: string;
  value?: string;
};

export type ToggleFormType = {
  formOpen: boolean;
  handleFormClose: React.MouseEventHandler<HTMLButtonElement>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  toggleForm: React.MouseEventHandler<HTMLDivElement>;
  toggleText: string;
}