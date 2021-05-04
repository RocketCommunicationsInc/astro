import { html, render } from 'lit-html';
import { boolean, select, date, withKnobs } from '@storybook/addon-knobs';
//@ts-ignore
import readme from '../../src/components/rux-clock/readme.md';

export default {
  title: 'Components|Clock',
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
  const aosKnob = date('AOS', new Date());
  const losKnob = date('LOS', new Date());
  const losAsISO = new Date(losKnob).toISOString();
  const hideTimezoneKnob = boolean('Hide Timezone', false);
  const hideDateKnob = boolean('Hide DOY', false);
  const smallKnob = boolean('Small Version', false);
  return html`
    <div style="padding: 10%; display: flex; justify-content: center;">
      <rux-clock
        .timezone="${timezoneKnob}"
        aos="${aosKnob}"
        los="${losAsISO}"
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
