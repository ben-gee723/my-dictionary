// INPUT/LABELS
export type inputType = {
    label: string,
    type: string,
    name: string,
    maxlength?: number,
    minlength?: number,
    placeholder?: string
    value?: void
};

export let initInput: inputType = {
    label: "Firstname",
    type: "text",
    name: "Firstname",
};


// INPUT ARRAY
export type inputArrType = inputType[]

export let initInputArr: inputArrType = [
    {label: "Firstname:", type: "text", name: "firstname",},
    {label: "Lastname:", type: "text", name: "lastname",},
    {label: "Company:", type: "text", name: "company",},
    {label: "Email:", type: "email", name: "email",},
    {label: "Password:", type: "password", name: "password1",},
    {label: "Confirm password:", type: "password", name: "password2",},
];


// FORM ARGS
export type formArgsType = {
    title: string,
    inputs: inputArrType
}
  
export  let initFormArgs = {
    title: "Hello World",
    inputs: initInputArr
}