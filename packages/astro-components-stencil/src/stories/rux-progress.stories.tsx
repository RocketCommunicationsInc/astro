import { html, render } from 'lit-html';
import { boolean, withKnobs, number } from '@storybook/addon-knobs';

//@ts-ignore
import readme from '../../src/components/rux-progress/readme.md';

export default {
    title: 'Components/Progress',
    decorators: [withKnobs],
    parameters: {
        readme: {
            sidebar: readme,
        },
    },
};

export const DeterminateProgress = () => {
   
    const progressLabel = 'Progress';
    const progressDefaultValue = 50;
    const progressOptions = {
        range: true,
        min: 1,
        max: 100,
        step: 1,
    };

    const progress = number(progressLabel, progressDefaultValue, progressOptions);
    const hideLabel = boolean('Hide Label', false);


    return html`
    <div style="margin: 3rem auto;  padding: 2rem; text-align: center;">
        <rux-progress value="${progress}" ?hide-label="${hideLabel}"></rux-progress>    
    </div>    
    `;
};

DeterminateProgress.story = {
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
    
    export const DeterminateProgressMax = () => {
      const maxValueLabel = 'Max';
      const maxValueDefaultValue = 10;
    
      const progressLabel = 'Progress';
      const progressDefaultValue = 1;
      const progressOptions = {
        range: true,
        min: 1,
        max: maxValueDefaultValue,
        step: 1,
      };
    
      const progress = number(progressLabel, progressDefaultValue, progressOptions);
      const maxLimit = number(maxValueLabel, maxValueDefaultValue);
      const hideLabel = boolean('Hide Label', true);
      return html`
        <div style="margin: 3rem auto;  padding: 2rem; text-align: center;">
          <rux-progress value="${progress}" max="${maxLimit}" ?hide-label="${hideLabel}"></rux-progress>
        </div>
      `;
    };

DeterminateProgressMax.story = {
  name: 'Determinate Progress (Max)',

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

export const IndeterminateProgress = () => html`
    <div style="margin: 3rem auto; max-width: 5rem; text-align: center;">
      <rux-progress></rux-progress>
    </div>
  `;

IndeterminateProgress.story = {
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











