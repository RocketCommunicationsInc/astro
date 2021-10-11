<script>
  import { schema, validateValues } from "./schema";

  let errors = {};

  let values = {
    firstName: "",
    lastName: "",
    email: ""
  };

  const validate = async () => {
    errors = await validateValues(values);
  };

  const handleSubmit = async () => {
    validate();
  };

  const handleFirstNameInput = e => {
    values.firstName = e.target.value;
  };

  const handleLastNameInput = e => {
    values.lastName = e.target.value;
  };

  const handleEmailInput = e => {
    values.email = e.target.value;
  };
</script>

<div style="width: 60%; margin: auto;">
  <form style="padding: 1rem;" method="POST" action="/" on:submit|preventDefault={handleSubmit}>
    <div>
      <rux-input
        name="firstName"
        label="First Name"
        on:rux-input={handleFirstNameInput}
        invalid={Object.keys(errors).includes('firstName')}
        error-text={errors.firstName}
        on:rux-blur={validate}
      >{values.firstName}</rux-input>
    </div>
    <div>
      <rux-input 
        name="lastName" 
        label="Last Name" 
        on:rux-input={handleLastNameInput}
        invalid={Object.keys(errors).includes('lastName')}
        error-text={errors.lastName}
        on:rux-blur={validate}
      >{values.lastName}</rux-input>
    </div>
    <div>
      <rux-input
        name="email"
        type="email"
        label="Email"
        invalid={Object.keys(errors).includes('email')}
        on:rux-input={handleEmailInput}
        error-text={errors.email}
        on:rux-blur={validate}
      >{values.email}</rux-input>
    </div>
    <div>
      <rux-button type="submit">Submit</rux-button>
    </div>
  </form>
</div>


<style>
  div {
    margin-bottom: 20px;
  }
</style>

