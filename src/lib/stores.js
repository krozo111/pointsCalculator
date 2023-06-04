import { writable } from "svelte/store";

export let ageClass = writable([
  { id: 1, text: "at least 18 but less than 25 years", value: 25 },
  { id: 2, text: "at least 25 but less than 33 years", value: 30 },
  { id: 3, text: "at least 33 but less than 40 years", value: 25 },
  { id: 4, text: "at least 40 but less than 45 years", value: 15 },
  { id: 5, text: "over 45 years", value: 0 },
]);
export let visaSubclass = writable([
  {
    id: 1,
    text: "Skilled Work Regional 491 visa (Provisional)",
    value: 15,
    info: "Requires sponsorship by a relative living in a regional area or a state or territory government. 491 visa information.",
  },
  {
    id: 2,
    text: "Skilled Nominated 190 visa (Permanent)",
    value: 5,
    info: "Allows skilled workers who are nominated by an Australian state or territory government to live and work in Australia as a permanent resident. Your occupation must be on the Skilled Occupation List.",
  },
  {
    id: 3,
    text: "Skilled Independent 189 visa (Permanent",
    value: 0,
    info: "Skilled workers who are not sponsored by an employer or family member or nominated by a state or territory government. Your occupation must be on the Skilled Occupation List.",
  },
]);
export let overseasSkill = writable([
  { id: 1, text: "Less than 3 years", value: 0 },
  { id: 2, text: "At least 3 but less than 5 years", value: 5 },
  { id: 3, text: "At least 5 but less than 8 years", value: 10 },
  { id: 4, text: "At least 8 years", value: 15 },
]);
export let englishLevel = writable([
  { id: 1, text: "Compentent English", value: 0 },
  { id: 2, text: "Proficient English", value: 10 },
  { id: 3, text: "Superior English", value: 20 },
]);
export let australianSkill = writable([
  { id: 1, text: "Less than 1 year", value: 0 },
  { id: 2, text: "At least 1 but less than 3 years", value: 5 },
  { id: 3, text: "At least 3 but less than 5 years", value: 10 },
  { id: 4, text: "At least 5 but less than 8 years", value: 15 },
  { id: 5, text: "At least 8 years", value: 20 },
]);
export let educationQual = writable([
  {
    id: 1,
    text: "A Doctorate from an Australian educational institution or a Doctorate from another educational institution, that is of a recognised standard.",
    value: 20,
  },
  {
    id: 2,
    text: "At least a Bachelor degree from an Australian educational institution or at least a Bachelor qualification, from another educational institution, that is of a recognised standard.",
    value: 15,
  },
  {
    id: 3,
    text: "A diploma or trade qualification from an Australian educational institution.",
    value: 10,
  },
  {
    id: 4,
    text: "Attained a qualification or award recognised by the relevant assessing authority for your nominated skilled occupation as being suitable for that occupation.",
    value: 10,
  },
  { id: 5, text: "No Recognised Qualifications.", value: 0 },
]);

export let partnerSkills = writable([
  {
    id: 1,
    text: "Your spouse or de facto partner is also an applicant for this visa and meets age, English and skill criteria.",
    value: 10,
  },
  {
    id: 2,
    text: "Your spouse or de facto partner is also an applicant for this visa and has competent English. ",
    value: 5,
  },
  {
    id: 3,
    text: "You are single or your partner is an Australian citizen or permanent resident.",
    value: 10,
  },
]);
