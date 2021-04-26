import { html, render } from 'lit-html';
import { boolean, select, date, withKnobs } from '@storybook/addon-knobs';

//@ts-ignore
import readme from './readme.md';

export default {
  title: 'Components/Clock',
  decorators: [withKnobs],
};

export const Clock = () => {
  const timezones = {
    Guam: 'Pacific/Guam',
    Hawaii: 'Pacific/Honolulu',
    Alaska: 'America/Anchorage',
    Pacific: 'America/Los_Angeles',
    Mountain: 'America/Denver',
    Central: 'america/chicago', // testing case-insensitive string match
    Eastern: 'America/New_York',
    Tokyo: 'Asia/Tokyo',
    Sydney: 'Australia/Sydney',
    UTC: 'UTC',
    Z: 'Z',
    z: 'z',
    a: 'a',
    B: 'B',
  };

  const timezoneKnob = select('Timezone', timezones, 'UTC');
  const hideTimezoneKnob = boolean('Hide Timezone', false);
  const hideDateKnob = boolean('Hide DOY', false);
  const smallKnob = boolean('Small Version', false);

  return html`
    <div style="padding: 10%; display: flex; justify-content: center;">
      <rux-clock
        .timezone="${timezoneKnob}"
        ?hideTimezone="${hideTimezoneKnob}"
        ?hideDate="${hideDateKnob}"
        ?small="${smallKnob}"
      ></rux-clock>
    </div>
  `;
};

Clock.story = {
  parameters: {
    exports: {
      render,
      html,
    },
    readme: {
      sidebar: readme,
    },
  },
};

export const ClockWithAosLos = () => {
  function dateWrapper(name, defaultValue) {
    const stringTimestamp = date(name, defaultValue);
    return new Date(stringTimestamp);
  }

  const timezones = {
    Guam: 'Pacific/Guam',
    Hawaii: 'Pacific/Honolulu',
    Alaska: 'America/Anchorage',
    Pacific: 'America/Los_Angeles',
    Mountain: 'America/Denver',
    Central: 'america/chicago', // testing case-insensitive string match
    Eastern: 'America/New_York',
    UTC: 'UTC',
    Z: 'Z',
    z: 'z',
  };

  const timezoneKnob = select('Timezone', timezones, 'UTC');
  const aosKnob = dateWrapper('AOS', new Date(1557503698781));
  const losKnob = dateWrapper('LOS', new Date('2019-05-10T16:21:12.000Z'));
  const hideTimezoneKnob = boolean('Hide Timezone', false);
  const hideDateKnob = boolean('Hide DOY', false);
  const smallKnob = boolean('Small Version', false);
  return html`
    <div style="padding: 10%; display: flex; justify-content: center;">
      <rux-clock
        .timezone="${timezoneKnob}"
        aos="${aosKnob.toString()}"
        los="${losKnob.toString()}"
        ?hideTimezone="${hideTimezoneKnob}"
        ?hideDate="${hideDateKnob}"
        ?small="${smallKnob}"
      ></rux-clock>
    </div>
  `;
};

ClockWithAosLos.story = {
  name: 'Clock with AOS/LOS',

  parameters: {
    exports: {
      render,
      html,
    },
    readme: {
      sidebar: readme,
    },
  },
};
