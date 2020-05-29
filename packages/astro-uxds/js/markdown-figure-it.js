// From https://github.com/chromeos/static-site-scaffold-modules/tree/master/modules/markdown-it-figure

// Bug in current version doesn't allow periods, hyphens or underscores in figure ID's
// Also prefer "string" to [brackets] around alt text

/**
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 *
 * @param {Object} md - Markdown It object
 *
 * @return {function} - Tokenizer Function
 */
function figureRenderer(md) {
  return function figureRender(tokens, idx) {
    const all = tokens[idx];
    const id = all.figid ? ` id="figure-${md.utils.escapeHtml(all.figid)}"` : '';
    const fig = all.fig ? `src="${md.utils.escapeHtml(all.fig)}"` : '';
    const figalt = all.figalt ? `alt="${md.utils.escapeHtml(all.figalt)}"` : '';
    const figcaption = all.figcaption ? `<figcaption>${all.figid ? 'Figure <span class="figure-id">' + all.figid + ': </span>' : ''}${md.utils.escapeHtml(all.figcaption)}</figcaption>` : '';

    const figure = `<figure${id}><img ${fig} ${figalt}/>${figcaption}</figure>`;

    return figure;
  };
}

/**
 *
 * @param {object} src - Source being validated
 * @param {number} pos - position to start from
 *
 * @return {boolean} Is the source valid?
 */
function validateStart(src, pos) {
  const startCode = src.charCodeAt(pos);
  const nextCode = src.charCodeAt(pos + 1);

  // Check if starts with #
  if (startCode !== 0x23 /* # */) return false;

  if (nextCode === 0x5b /* [ */) return true;

  if (0x30 /* 0 */ <= nextCode <= 0x39 /* 9 */) return true;

  return false;
}

const FIGURE_REGEX = /#([\d._-]+)*\[([a-zA-Z].+)]\([\s]*(.*?)[\s]*(\".*?\")??[)]/im;

/**
 *
 * @param {*} md
 *
 * @return {function} - A function that takes state and returns tokens for
 */
function figureRuler(md) {
  return function figureTokenize(state, silent) {
    const oldPos = state.pos;

    const valid = validateStart(state.src, oldPos);

    if (!valid) return false;

    const match = FIGURE_REGEX.exec(state.src.slice(state.pos, state.src.length));

    if (!match || match.length !== 5) return false;

    const figid = match[1] || false;
    const figcaption = match[2] || false;
    const fig = match[3] || false;
    const figalt = match[4] ? match[4].substring(1, match[4].length - 1) : false;

    const labelStart = state.pos + 2 + (figid.length || 0);
    const labelEnd = labelStart + (figcaption.length || 0);

    if (labelEnd < 0) return false;

    const theState = state;

    if (!silent) {
      theState.pos = labelStart;
      theState.caption = theState.src.slice(labelStart, labelEnd);
      const newState = new theState.md.inline.State(figcaption, theState.md, theState.env, []);
      newState.md.inline.tokenize(newState);

      const token = theState.push('figure', '');
      token.figid = figid;
      token.figcaption = figcaption;
      token.fig = fig;
      token.figalt = figalt;
    }

    theState.pos += theState.src.indexOf(')', theState.pos);
    return true;
  };
}

module.exports = function figurePlugin(md) {
  md.renderer.rules.figure = figureRenderer(md);
  md.inline.ruler.before('emphasis', 'figure', figureRuler(md));
};