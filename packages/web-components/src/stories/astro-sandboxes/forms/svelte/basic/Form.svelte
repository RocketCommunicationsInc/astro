<script>
  let optionsVal;

  function onSubmit(e) {
    const formData = new FormData(e.target);

    const data = {};
    let arr = [];
    for (let field of formData) {
      const [key, value] = field;
      if (key === "things") {
        arr.push(value);
        data[key] = arr;
        console.log(data[key]);
      } else {
        data[key] = value;
      }
    }
    alert(`
      First Name: ${data["firstName"]}
      Last Name: ${data["lastName"]}
      Email: ${data["email"]}
      Country: ${data["country"]}
      Things: ${data["things"]}
      Options: ${optionsVal}
      range: ${data["range"]}
    `);
  }
  function handleChange(e) {
    optionsVal = e.target.value;
  }
</script>

<div style="width: 60%; margin: auto;">
  <form style="padding: 1rem;" method="POST" action="/" on:submit|preventDefault={onSubmit}>
    <div>
      <rux-input
        name="firstName"
        label="First Name"
      ></rux-input>
    </div>
    <div>
      <rux-input name="lastName" label="Last Name"></rux-input>
    </div>
    <div>
      <rux-input
        name="email"
        type="email"
        label="Email"
      ></rux-input>
    </div>
    <div>
      <rux-select name="country" label="Country / Region">
        <rux-option value="USA" label="United States"></rux-option>
        <rux-option value="Canada" label="Canada"></rux-option>
      </rux-select>
    </div>
    <div>
      <rux-checkbox-group label="Things">
        <rux-checkbox name="things" value="comments">
          Comments
        </rux-checkbox>
        <rux-checkbox name="things" value="offers">
          Offers
        </rux-checkbox>
        <rux-checkbox name="things" value="events">
          Events
        </rux-checkbox>
      </rux-checkbox-group>
    </div>
    <div>
      <rux-radio-group label="Options" value="everything" on:ruxchange={handleChange}>
        <rux-radio name="options" value="everything">
          Everything
        </rux-radio>
        <rux-radio name="options" value="same">
          Same
        </rux-radio>
        <rux-radio name="options" value="none">
          None
        </rux-radio>
      </rux-radio-group>
    </div>
    <div>
      <rux-slider name="range" label="A Range"> </rux-slider>
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

