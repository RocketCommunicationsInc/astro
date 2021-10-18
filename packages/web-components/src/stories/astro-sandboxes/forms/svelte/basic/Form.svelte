<script>
  let count = 0;

  function handleClick() {
    count += 1;
  }
</script>

<div style="width: 60%; margin: auto;">
  <form style="padding: 1rem;" method="POST" action="/">
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
      <rux-radio-group label="Options">
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

