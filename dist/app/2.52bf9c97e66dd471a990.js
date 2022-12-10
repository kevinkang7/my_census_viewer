(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/@stencil/core/internal/client/shadow-css.js":
/*!******************************************************************!*\
  !*** ./node_modules/@stencil/core/internal/client/shadow-css.js ***!
  \******************************************************************/
/*! exports provided: scopeCss */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scopeCss", function() { return scopeCss; });
/*
 Stencil Client Platform v2.6.0 | MIT Licensed | https://stenciljs.com
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 *
 * This file is a port of shadowCSS from webcomponents.js to TypeScript.
 * https://github.com/webcomponents/webcomponentsjs/blob/4efecd7e0e/src/ShadowCSS/ShadowCSS.js
 * https://github.com/angular/angular/blob/master/packages/compiler/src/shadow_css.ts
 */
const safeSelector = (selector) => {
    const placeholders = [];
    let index = 0;
    let content;
    // Replaces attribute selectors with placeholders.
    // The WS in [attr="va lue"] would otherwise be interpreted as a selector separator.
    selector = selector.replace(/(\[[^\]]*\])/g, (_, keep) => {
        const replaceBy = `__ph-${index}__`;
        placeholders.push(keep);
        index++;
        return replaceBy;
    });
    // Replaces the expression in `:nth-child(2n + 1)` with a placeholder.
    // WS and "+" would otherwise be interpreted as selector separators.
    content = selector.replace(/(:nth-[-\w]+)(\([^)]+\))/g, (_, pseudo, exp) => {
        const replaceBy = `__ph-${index}__`;
        placeholders.push(exp);
        index++;
        return pseudo + replaceBy;
    });
    const ss = {
        content,
        placeholders,
    };
    return ss;
};
const restoreSafeSelector = (placeholders, content) => {
    return content.replace(/__ph-(\d+)__/g, (_, index) => placeholders[+index]);
};
const _polyfillHost = '-shadowcsshost';
const _polyfillSlotted = '-shadowcssslotted';
// note: :host-context pre-processed to -shadowcsshostcontext.
const _polyfillHostContext = '-shadowcsscontext';
const _parenSuffix = ')(?:\\((' + '(?:\\([^)(]*\\)|[^)(]*)+?' + ')\\))?([^,{]*)';
const _cssColonHostRe = new RegExp('(' + _polyfillHost + _parenSuffix, 'gim');
const _cssColonHostContextRe = new RegExp('(' + _polyfillHostContext + _parenSuffix, 'gim');
const _cssColonSlottedRe = new RegExp('(' + _polyfillSlotted + _parenSuffix, 'gim');
const _polyfillHostNoCombinator = _polyfillHost + '-no-combinator';
const _polyfillHostNoCombinatorRe = /-shadowcsshost-no-combinator([^\s]*)/;
const _shadowDOMSelectorsRe = [/::shadow/g, /::content/g];
const _selectorReSuffix = '([>\\s~+[.,{:][\\s\\S]*)?$';
const _polyfillHostRe = /-shadowcsshost/gim;
const _colonHostRe = /:host/gim;
const _colonSlottedRe = /::slotted/gim;
const _colonHostContextRe = /:host-context/gim;
const _commentRe = /\/\*\s*[\s\S]*?\*\//g;
const stripComments = (input) => {
    return input.replace(_commentRe, '');
};
const _commentWithHashRe = /\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g;
const extractCommentsWithHash = (input) => {
    return input.match(_commentWithHashRe) || [];
};
const _ruleRe = /(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g;
const _curlyRe = /([{}])/g;
const OPEN_CURLY = '{';
const CLOSE_CURLY = '}';
const BLOCK_PLACEHOLDER = '%BLOCK%';
const processRules = (input, ruleCallback) => {
    const inputWithEscapedBlocks = escapeBlocks(input);
    let nextBlockIndex = 0;
    return inputWithEscapedBlocks.escapedString.replace(_ruleRe, (...m) => {
        const selector = m[2];
        let content = '';
        let suffix = m[4];
        let contentPrefix = '';
        if (suffix && suffix.startsWith('{' + BLOCK_PLACEHOLDER)) {
            content = inputWithEscapedBlocks.blocks[nextBlockIndex++];
            suffix = suffix.substring(BLOCK_PLACEHOLDER.length + 1);
            contentPrefix = '{';
        }
        const cssRule = {
            selector,
            content,
        };
        const rule = ruleCallback(cssRule);
        return `${m[1]}${rule.selector}${m[3]}${contentPrefix}${rule.content}${suffix}`;
    });
};
const escapeBlocks = (input) => {
    const inputParts = input.split(_curlyRe);
    const resultParts = [];
    const escapedBlocks = [];
    let bracketCount = 0;
    let currentBlockParts = [];
    for (let partIndex = 0; partIndex < inputParts.length; partIndex++) {
        const part = inputParts[partIndex];
        if (part === CLOSE_CURLY) {
            bracketCount--;
        }
        if (bracketCount > 0) {
            currentBlockParts.push(part);
        }
        else {
            if (currentBlockParts.length > 0) {
                escapedBlocks.push(currentBlockParts.join(''));
                resultParts.push(BLOCK_PLACEHOLDER);
                currentBlockParts = [];
            }
            resultParts.push(part);
        }
        if (part === OPEN_CURLY) {
            bracketCount++;
        }
    }
    if (currentBlockParts.length > 0) {
        escapedBlocks.push(currentBlockParts.join(''));
        resultParts.push(BLOCK_PLACEHOLDER);
    }
    const strEscapedBlocks = {
        escapedString: resultParts.join(''),
        blocks: escapedBlocks,
    };
    return strEscapedBlocks;
};
const insertPolyfillHostInCssText = (selector) => {
    selector = selector
        .replace(_colonHostContextRe, _polyfillHostContext)
        .replace(_colonHostRe, _polyfillHost)
        .replace(_colonSlottedRe, _polyfillSlotted);
    return selector;
};
const convertColonRule = (cssText, regExp, partReplacer) => {
    // m[1] = :host(-context), m[2] = contents of (), m[3] rest of rule
    return cssText.replace(regExp, (...m) => {
        if (m[2]) {
            const parts = m[2].split(',');
            const r = [];
            for (let i = 0; i < parts.length; i++) {
                const p = parts[i].trim();
                if (!p)
                    break;
                r.push(partReplacer(_polyfillHostNoCombinator, p, m[3]));
            }
            return r.join(',');
        }
        else {
            return _polyfillHostNoCombinator + m[3];
        }
    });
};
const colonHostPartReplacer = (host, part, suffix) => {
    return host + part.replace(_polyfillHost, '') + suffix;
};
const convertColonHost = (cssText) => {
    return convertColonRule(cssText, _cssColonHostRe, colonHostPartReplacer);
};
const colonHostContextPartReplacer = (host, part, suffix) => {
    if (part.indexOf(_polyfillHost) > -1) {
        return colonHostPartReplacer(host, part, suffix);
    }
    else {
        return host + part + suffix + ', ' + part + ' ' + host + suffix;
    }
};
const convertColonSlotted = (cssText, slotScopeId) => {
    const slotClass = '.' + slotScopeId + ' > ';
    const selectors = [];
    cssText = cssText.replace(_cssColonSlottedRe, (...m) => {
        if (m[2]) {
            const compound = m[2].trim();
            const suffix = m[3];
            const slottedSelector = slotClass + compound + suffix;
            let prefixSelector = '';
            for (let i = m[4] - 1; i >= 0; i--) {
                const char = m[5][i];
                if (char === '}' || char === ',') {
                    break;
                }
                prefixSelector = char + prefixSelector;
            }
            const orgSelector = prefixSelector + slottedSelector;
            const addedSelector = `${prefixSelector.trimRight()}${slottedSelector.trim()}`;
            if (orgSelector.trim() !== addedSelector.trim()) {
                const updatedSelector = `${addedSelector}, ${orgSelector}`;
                selectors.push({
                    orgSelector,
                    updatedSelector,
                });
            }
            return slottedSelector;
        }
        else {
            return _polyfillHostNoCombinator + m[3];
        }
    });
    return {
        selectors,
        cssText,
    };
};
const convertColonHostContext = (cssText) => {
    return convertColonRule(cssText, _cssColonHostContextRe, colonHostContextPartReplacer);
};
const convertShadowDOMSelectors = (cssText) => {
    return _shadowDOMSelectorsRe.reduce((result, pattern) => result.replace(pattern, ' '), cssText);
};
const makeScopeMatcher = (scopeSelector) => {
    const lre = /\[/g;
    const rre = /\]/g;
    scopeSelector = scopeSelector.replace(lre, '\\[').replace(rre, '\\]');
    return new RegExp('^(' + scopeSelector + ')' + _selectorReSuffix, 'm');
};
const selectorNeedsScoping = (selector, scopeSelector) => {
    const re = makeScopeMatcher(scopeSelector);
    return !re.test(selector);
};
const applySimpleSelectorScope = (selector, scopeSelector, hostSelector) => {
    // In Android browser, the lastIndex is not reset when the regex is used in String.replace()
    _polyfillHostRe.lastIndex = 0;
    if (_polyfillHostRe.test(selector)) {
        const replaceBy = `.${hostSelector}`;
        return selector
            .replace(_polyfillHostNoCombinatorRe, (_, selector) => {
            return selector.replace(/([^:]*)(:*)(.*)/, (_, before, colon, after) => {
                return before + replaceBy + colon + after;
            });
        })
            .replace(_polyfillHostRe, replaceBy + ' ');
    }
    return scopeSelector + ' ' + selector;
};
const applyStrictSelectorScope = (selector, scopeSelector, hostSelector) => {
    const isRe = /\[is=([^\]]*)\]/g;
    scopeSelector = scopeSelector.replace(isRe, (_, ...parts) => parts[0]);
    const className = '.' + scopeSelector;
    const _scopeSelectorPart = (p) => {
        let scopedP = p.trim();
        if (!scopedP) {
            return '';
        }
        if (p.indexOf(_polyfillHostNoCombinator) > -1) {
            scopedP = applySimpleSelectorScope(p, scopeSelector, hostSelector);
        }
        else {
            // remove :host since it should be unnecessary
            const t = p.replace(_polyfillHostRe, '');
            if (t.length > 0) {
                const matches = t.match(/([^:]*)(:*)(.*)/);
                if (matches) {
                    scopedP = matches[1] + className + matches[2] + matches[3];
                }
            }
        }
        return scopedP;
    };
    const safeContent = safeSelector(selector);
    selector = safeContent.content;
    let scopedSelector = '';
    let startIndex = 0;
    let res;
    const sep = /( |>|\+|~(?!=))\s*/g;
    // If a selector appears before :host it should not be shimmed as it
    // matches on ancestor elements and not on elements in the host's shadow
    // `:host-context(div)` is transformed to
    // `-shadowcsshost-no-combinatordiv, div -shadowcsshost-no-combinator`
    // the `div` is not part of the component in the 2nd selectors and should not be scoped.
    // Historically `component-tag:host` was matching the component so we also want to preserve
    // this behavior to avoid breaking legacy apps (it should not match).
    // The behavior should be:
    // - `tag:host` -> `tag[h]` (this is to avoid breaking legacy apps, should not match anything)
    // - `tag :host` -> `tag [h]` (`tag` is not scoped because it's considered part of a
    //   `:host-context(tag)`)
    const hasHost = selector.indexOf(_polyfillHostNoCombinator) > -1;
    // Only scope parts after the first `-shadowcsshost-no-combinator` when it is present
    let shouldScope = !hasHost;
    while ((res = sep.exec(selector)) !== null) {
        const separator = res[1];
        const part = selector.slice(startIndex, res.index).trim();
        shouldScope = shouldScope || part.indexOf(_polyfillHostNoCombinator) > -1;
        const scopedPart = shouldScope ? _scopeSelectorPart(part) : part;
        scopedSelector += `${scopedPart} ${separator} `;
        startIndex = sep.lastIndex;
    }
    const part = selector.substring(startIndex);
    shouldScope = shouldScope || part.indexOf(_polyfillHostNoCombinator) > -1;
    scopedSelector += shouldScope ? _scopeSelectorPart(part) : part;
    // replace the placeholders with their original values
    return restoreSafeSelector(safeContent.placeholders, scopedSelector);
};
const scopeSelector = (selector, scopeSelectorText, hostSelector, slotSelector) => {
    return selector
        .split(',')
        .map(shallowPart => {
        if (slotSelector && shallowPart.indexOf('.' + slotSelector) > -1) {
            return shallowPart.trim();
        }
        if (selectorNeedsScoping(shallowPart, scopeSelectorText)) {
            return applyStrictSelectorScope(shallowPart, scopeSelectorText, hostSelector).trim();
        }
        else {
            return shallowPart.trim();
        }
    })
        .join(', ');
};
const scopeSelectors = (cssText, scopeSelectorText, hostSelector, slotSelector, commentOriginalSelector) => {
    return processRules(cssText, (rule) => {
        let selector = rule.selector;
        let content = rule.content;
        if (rule.selector[0] !== '@') {
            selector = scopeSelector(rule.selector, scopeSelectorText, hostSelector, slotSelector);
        }
        else if (rule.selector.startsWith('@media') || rule.selector.startsWith('@supports') || rule.selector.startsWith('@page') || rule.selector.startsWith('@document')) {
            content = scopeSelectors(rule.content, scopeSelectorText, hostSelector, slotSelector);
        }
        const cssRule = {
            selector: selector.replace(/\s{2,}/g, ' ').trim(),
            content,
        };
        return cssRule;
    });
};
const scopeCssText = (cssText, scopeId, hostScopeId, slotScopeId, commentOriginalSelector) => {
    cssText = insertPolyfillHostInCssText(cssText);
    cssText = convertColonHost(cssText);
    cssText = convertColonHostContext(cssText);
    const slotted = convertColonSlotted(cssText, slotScopeId);
    cssText = slotted.cssText;
    cssText = convertShadowDOMSelectors(cssText);
    if (scopeId) {
        cssText = scopeSelectors(cssText, scopeId, hostScopeId, slotScopeId);
    }
    cssText = cssText.replace(/-shadowcsshost-no-combinator/g, `.${hostScopeId}`);
    cssText = cssText.replace(/>\s*\*\s+([^{, ]+)/gm, ' $1 ');
    return {
        cssText: cssText.trim(),
        slottedSelectors: slotted.selectors,
    };
};
const scopeCss = (cssText, scopeId, commentOriginalSelector) => {
    const hostScopeId = scopeId + '-h';
    const slotScopeId = scopeId + '-s';
    const commentsWithHash = extractCommentsWithHash(cssText);
    cssText = stripComments(cssText);
    const orgSelectors = [];
    if (commentOriginalSelector) {
        const processCommentedSelector = (rule) => {
            const placeholder = `/*!@___${orgSelectors.length}___*/`;
            const comment = `/*!@${rule.selector}*/`;
            orgSelectors.push({ placeholder, comment });
            rule.selector = placeholder + rule.selector;
            return rule;
        };
        cssText = processRules(cssText, rule => {
            if (rule.selector[0] !== '@') {
                return processCommentedSelector(rule);
            }
            else if (rule.selector.startsWith('@media') || rule.selector.startsWith('@supports') || rule.selector.startsWith('@page') || rule.selector.startsWith('@document')) {
                rule.content = processRules(rule.content, processCommentedSelector);
                return rule;
            }
            return rule;
        });
    }
    const scoped = scopeCssText(cssText, scopeId, hostScopeId, slotScopeId);
    cssText = [scoped.cssText, ...commentsWithHash].join('\n');
    if (commentOriginalSelector) {
        orgSelectors.forEach(({ placeholder, comment }) => {
            cssText = cssText.replace(placeholder, comment);
        });
    }
    scoped.slottedSelectors.forEach(slottedSelector => {
        cssText = cssText.replace(slottedSelector.orgSelector, slottedSelector.updatedSelector);
    });
    return cssText;
};




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvc2hhZG93LWNzcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxNQUFNO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsTUFBTTtBQUN4QztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RUFBNEU7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixFQUFFLEVBQUUsY0FBYyxRQUFRLEtBQUssVUFBVTtBQUNuRSxzQkFBc0I7QUFDdEIscUJBQXFCO0FBQ3JCLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsS0FBSyxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBRSxPQUFPO0FBQ3RGLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiwrQkFBK0I7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGtCQUFrQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsUUFBUTtBQUMxQztBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLDJCQUEyQixFQUFFLHVCQUF1QjtBQUN6RjtBQUNBLDJDQUEyQyxjQUFjLElBQUksWUFBWTtBQUN6RTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGFBQWE7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsV0FBVyxHQUFHLFVBQVU7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLEdBQUc7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUUsWUFBWTtBQUMvRSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsb0JBQW9CO0FBQzlELG1DQUFtQyxjQUFjO0FBQ2pELCtCQUErQix1QkFBdUI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHVCQUF1QjtBQUN0RDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFb0IiLCJmaWxlIjoiMi41MmJmOWM5N2U2NmRkNDcxYTk5MC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gU3RlbmNpbCBDbGllbnQgUGxhdGZvcm0gdjIuNi4wIHwgTUlUIExpY2Vuc2VkIHwgaHR0cHM6Ly9zdGVuY2lsanMuY29tXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKlxuICogVGhpcyBmaWxlIGlzIGEgcG9ydCBvZiBzaGFkb3dDU1MgZnJvbSB3ZWJjb21wb25lbnRzLmpzIHRvIFR5cGVTY3JpcHQuXG4gKiBodHRwczovL2dpdGh1Yi5jb20vd2ViY29tcG9uZW50cy93ZWJjb21wb25lbnRzanMvYmxvYi80ZWZlY2Q3ZTBlL3NyYy9TaGFkb3dDU1MvU2hhZG93Q1NTLmpzXG4gKiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvbWFzdGVyL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9zaGFkb3dfY3NzLnRzXG4gKi9cbmNvbnN0IHNhZmVTZWxlY3RvciA9IChzZWxlY3RvcikgPT4ge1xuICAgIGNvbnN0IHBsYWNlaG9sZGVycyA9IFtdO1xuICAgIGxldCBpbmRleCA9IDA7XG4gICAgbGV0IGNvbnRlbnQ7XG4gICAgLy8gUmVwbGFjZXMgYXR0cmlidXRlIHNlbGVjdG9ycyB3aXRoIHBsYWNlaG9sZGVycy5cbiAgICAvLyBUaGUgV1MgaW4gW2F0dHI9XCJ2YSBsdWVcIl0gd291bGQgb3RoZXJ3aXNlIGJlIGludGVycHJldGVkIGFzIGEgc2VsZWN0b3Igc2VwYXJhdG9yLlxuICAgIHNlbGVjdG9yID0gc2VsZWN0b3IucmVwbGFjZSgvKFxcW1teXFxdXSpcXF0pL2csIChfLCBrZWVwKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlcGxhY2VCeSA9IGBfX3BoLSR7aW5kZXh9X19gO1xuICAgICAgICBwbGFjZWhvbGRlcnMucHVzaChrZWVwKTtcbiAgICAgICAgaW5kZXgrKztcbiAgICAgICAgcmV0dXJuIHJlcGxhY2VCeTtcbiAgICB9KTtcbiAgICAvLyBSZXBsYWNlcyB0aGUgZXhwcmVzc2lvbiBpbiBgOm50aC1jaGlsZCgybiArIDEpYCB3aXRoIGEgcGxhY2Vob2xkZXIuXG4gICAgLy8gV1MgYW5kIFwiK1wiIHdvdWxkIG90aGVyd2lzZSBiZSBpbnRlcnByZXRlZCBhcyBzZWxlY3RvciBzZXBhcmF0b3JzLlxuICAgIGNvbnRlbnQgPSBzZWxlY3Rvci5yZXBsYWNlKC8oOm50aC1bLVxcd10rKShcXChbXildK1xcKSkvZywgKF8sIHBzZXVkbywgZXhwKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlcGxhY2VCeSA9IGBfX3BoLSR7aW5kZXh9X19gO1xuICAgICAgICBwbGFjZWhvbGRlcnMucHVzaChleHApO1xuICAgICAgICBpbmRleCsrO1xuICAgICAgICByZXR1cm4gcHNldWRvICsgcmVwbGFjZUJ5O1xuICAgIH0pO1xuICAgIGNvbnN0IHNzID0ge1xuICAgICAgICBjb250ZW50LFxuICAgICAgICBwbGFjZWhvbGRlcnMsXG4gICAgfTtcbiAgICByZXR1cm4gc3M7XG59O1xuY29uc3QgcmVzdG9yZVNhZmVTZWxlY3RvciA9IChwbGFjZWhvbGRlcnMsIGNvbnRlbnQpID0+IHtcbiAgICByZXR1cm4gY29udGVudC5yZXBsYWNlKC9fX3BoLShcXGQrKV9fL2csIChfLCBpbmRleCkgPT4gcGxhY2Vob2xkZXJzWytpbmRleF0pO1xufTtcbmNvbnN0IF9wb2x5ZmlsbEhvc3QgPSAnLXNoYWRvd2Nzc2hvc3QnO1xuY29uc3QgX3BvbHlmaWxsU2xvdHRlZCA9ICctc2hhZG93Y3Nzc2xvdHRlZCc7XG4vLyBub3RlOiA6aG9zdC1jb250ZXh0IHByZS1wcm9jZXNzZWQgdG8gLXNoYWRvd2Nzc2hvc3Rjb250ZXh0LlxuY29uc3QgX3BvbHlmaWxsSG9zdENvbnRleHQgPSAnLXNoYWRvd2Nzc2NvbnRleHQnO1xuY29uc3QgX3BhcmVuU3VmZml4ID0gJykoPzpcXFxcKCgnICsgJyg/OlxcXFwoW14pKF0qXFxcXCl8W14pKF0qKSs/JyArICcpXFxcXCkpPyhbXix7XSopJztcbmNvbnN0IF9jc3NDb2xvbkhvc3RSZSA9IG5ldyBSZWdFeHAoJygnICsgX3BvbHlmaWxsSG9zdCArIF9wYXJlblN1ZmZpeCwgJ2dpbScpO1xuY29uc3QgX2Nzc0NvbG9uSG9zdENvbnRleHRSZSA9IG5ldyBSZWdFeHAoJygnICsgX3BvbHlmaWxsSG9zdENvbnRleHQgKyBfcGFyZW5TdWZmaXgsICdnaW0nKTtcbmNvbnN0IF9jc3NDb2xvblNsb3R0ZWRSZSA9IG5ldyBSZWdFeHAoJygnICsgX3BvbHlmaWxsU2xvdHRlZCArIF9wYXJlblN1ZmZpeCwgJ2dpbScpO1xuY29uc3QgX3BvbHlmaWxsSG9zdE5vQ29tYmluYXRvciA9IF9wb2x5ZmlsbEhvc3QgKyAnLW5vLWNvbWJpbmF0b3InO1xuY29uc3QgX3BvbHlmaWxsSG9zdE5vQ29tYmluYXRvclJlID0gLy1zaGFkb3djc3Nob3N0LW5vLWNvbWJpbmF0b3IoW15cXHNdKikvO1xuY29uc3QgX3NoYWRvd0RPTVNlbGVjdG9yc1JlID0gWy86OnNoYWRvdy9nLCAvOjpjb250ZW50L2ddO1xuY29uc3QgX3NlbGVjdG9yUmVTdWZmaXggPSAnKFs+XFxcXHN+K1suLHs6XVtcXFxcc1xcXFxTXSopPyQnO1xuY29uc3QgX3BvbHlmaWxsSG9zdFJlID0gLy1zaGFkb3djc3Nob3N0L2dpbTtcbmNvbnN0IF9jb2xvbkhvc3RSZSA9IC86aG9zdC9naW07XG5jb25zdCBfY29sb25TbG90dGVkUmUgPSAvOjpzbG90dGVkL2dpbTtcbmNvbnN0IF9jb2xvbkhvc3RDb250ZXh0UmUgPSAvOmhvc3QtY29udGV4dC9naW07XG5jb25zdCBfY29tbWVudFJlID0gL1xcL1xcKlxccypbXFxzXFxTXSo/XFwqXFwvL2c7XG5jb25zdCBzdHJpcENvbW1lbnRzID0gKGlucHV0KSA9PiB7XG4gICAgcmV0dXJuIGlucHV0LnJlcGxhY2UoX2NvbW1lbnRSZSwgJycpO1xufTtcbmNvbnN0IF9jb21tZW50V2l0aEhhc2hSZSA9IC9cXC9cXCpcXHMqI1xccypzb3VyY2UoTWFwcGluZyk/VVJMPVtcXHNcXFNdKz9cXCpcXC8vZztcbmNvbnN0IGV4dHJhY3RDb21tZW50c1dpdGhIYXNoID0gKGlucHV0KSA9PiB7XG4gICAgcmV0dXJuIGlucHV0Lm1hdGNoKF9jb21tZW50V2l0aEhhc2hSZSkgfHwgW107XG59O1xuY29uc3QgX3J1bGVSZSA9IC8oXFxzKikoW147XFx7XFx9XSs/KShcXHMqKSgoPzp7JUJMT0NLJX0/XFxzKjs/KXwoPzpcXHMqOykpL2c7XG5jb25zdCBfY3VybHlSZSA9IC8oW3t9XSkvZztcbmNvbnN0IE9QRU5fQ1VSTFkgPSAneyc7XG5jb25zdCBDTE9TRV9DVVJMWSA9ICd9JztcbmNvbnN0IEJMT0NLX1BMQUNFSE9MREVSID0gJyVCTE9DSyUnO1xuY29uc3QgcHJvY2Vzc1J1bGVzID0gKGlucHV0LCBydWxlQ2FsbGJhY2spID0+IHtcbiAgICBjb25zdCBpbnB1dFdpdGhFc2NhcGVkQmxvY2tzID0gZXNjYXBlQmxvY2tzKGlucHV0KTtcbiAgICBsZXQgbmV4dEJsb2NrSW5kZXggPSAwO1xuICAgIHJldHVybiBpbnB1dFdpdGhFc2NhcGVkQmxvY2tzLmVzY2FwZWRTdHJpbmcucmVwbGFjZShfcnVsZVJlLCAoLi4ubSkgPT4ge1xuICAgICAgICBjb25zdCBzZWxlY3RvciA9IG1bMl07XG4gICAgICAgIGxldCBjb250ZW50ID0gJyc7XG4gICAgICAgIGxldCBzdWZmaXggPSBtWzRdO1xuICAgICAgICBsZXQgY29udGVudFByZWZpeCA9ICcnO1xuICAgICAgICBpZiAoc3VmZml4ICYmIHN1ZmZpeC5zdGFydHNXaXRoKCd7JyArIEJMT0NLX1BMQUNFSE9MREVSKSkge1xuICAgICAgICAgICAgY29udGVudCA9IGlucHV0V2l0aEVzY2FwZWRCbG9ja3MuYmxvY2tzW25leHRCbG9ja0luZGV4KytdO1xuICAgICAgICAgICAgc3VmZml4ID0gc3VmZml4LnN1YnN0cmluZyhCTE9DS19QTEFDRUhPTERFUi5sZW5ndGggKyAxKTtcbiAgICAgICAgICAgIGNvbnRlbnRQcmVmaXggPSAneyc7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY3NzUnVsZSA9IHtcbiAgICAgICAgICAgIHNlbGVjdG9yLFxuICAgICAgICAgICAgY29udGVudCxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcnVsZSA9IHJ1bGVDYWxsYmFjayhjc3NSdWxlKTtcbiAgICAgICAgcmV0dXJuIGAke21bMV19JHtydWxlLnNlbGVjdG9yfSR7bVszXX0ke2NvbnRlbnRQcmVmaXh9JHtydWxlLmNvbnRlbnR9JHtzdWZmaXh9YDtcbiAgICB9KTtcbn07XG5jb25zdCBlc2NhcGVCbG9ja3MgPSAoaW5wdXQpID0+IHtcbiAgICBjb25zdCBpbnB1dFBhcnRzID0gaW5wdXQuc3BsaXQoX2N1cmx5UmUpO1xuICAgIGNvbnN0IHJlc3VsdFBhcnRzID0gW107XG4gICAgY29uc3QgZXNjYXBlZEJsb2NrcyA9IFtdO1xuICAgIGxldCBicmFja2V0Q291bnQgPSAwO1xuICAgIGxldCBjdXJyZW50QmxvY2tQYXJ0cyA9IFtdO1xuICAgIGZvciAobGV0IHBhcnRJbmRleCA9IDA7IHBhcnRJbmRleCA8IGlucHV0UGFydHMubGVuZ3RoOyBwYXJ0SW5kZXgrKykge1xuICAgICAgICBjb25zdCBwYXJ0ID0gaW5wdXRQYXJ0c1twYXJ0SW5kZXhdO1xuICAgICAgICBpZiAocGFydCA9PT0gQ0xPU0VfQ1VSTFkpIHtcbiAgICAgICAgICAgIGJyYWNrZXRDb3VudC0tO1xuICAgICAgICB9XG4gICAgICAgIGlmIChicmFja2V0Q291bnQgPiAwKSB7XG4gICAgICAgICAgICBjdXJyZW50QmxvY2tQYXJ0cy5wdXNoKHBhcnQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRCbG9ja1BhcnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBlc2NhcGVkQmxvY2tzLnB1c2goY3VycmVudEJsb2NrUGFydHMuam9pbignJykpO1xuICAgICAgICAgICAgICAgIHJlc3VsdFBhcnRzLnB1c2goQkxPQ0tfUExBQ0VIT0xERVIpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRCbG9ja1BhcnRzID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHRQYXJ0cy5wdXNoKHBhcnQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJ0ID09PSBPUEVOX0NVUkxZKSB7XG4gICAgICAgICAgICBicmFja2V0Q291bnQrKztcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoY3VycmVudEJsb2NrUGFydHMubGVuZ3RoID4gMCkge1xuICAgICAgICBlc2NhcGVkQmxvY2tzLnB1c2goY3VycmVudEJsb2NrUGFydHMuam9pbignJykpO1xuICAgICAgICByZXN1bHRQYXJ0cy5wdXNoKEJMT0NLX1BMQUNFSE9MREVSKTtcbiAgICB9XG4gICAgY29uc3Qgc3RyRXNjYXBlZEJsb2NrcyA9IHtcbiAgICAgICAgZXNjYXBlZFN0cmluZzogcmVzdWx0UGFydHMuam9pbignJyksXG4gICAgICAgIGJsb2NrczogZXNjYXBlZEJsb2NrcyxcbiAgICB9O1xuICAgIHJldHVybiBzdHJFc2NhcGVkQmxvY2tzO1xufTtcbmNvbnN0IGluc2VydFBvbHlmaWxsSG9zdEluQ3NzVGV4dCA9IChzZWxlY3RvcikgPT4ge1xuICAgIHNlbGVjdG9yID0gc2VsZWN0b3JcbiAgICAgICAgLnJlcGxhY2UoX2NvbG9uSG9zdENvbnRleHRSZSwgX3BvbHlmaWxsSG9zdENvbnRleHQpXG4gICAgICAgIC5yZXBsYWNlKF9jb2xvbkhvc3RSZSwgX3BvbHlmaWxsSG9zdClcbiAgICAgICAgLnJlcGxhY2UoX2NvbG9uU2xvdHRlZFJlLCBfcG9seWZpbGxTbG90dGVkKTtcbiAgICByZXR1cm4gc2VsZWN0b3I7XG59O1xuY29uc3QgY29udmVydENvbG9uUnVsZSA9IChjc3NUZXh0LCByZWdFeHAsIHBhcnRSZXBsYWNlcikgPT4ge1xuICAgIC8vIG1bMV0gPSA6aG9zdCgtY29udGV4dCksIG1bMl0gPSBjb250ZW50cyBvZiAoKSwgbVszXSByZXN0IG9mIHJ1bGVcbiAgICByZXR1cm4gY3NzVGV4dC5yZXBsYWNlKHJlZ0V4cCwgKC4uLm0pID0+IHtcbiAgICAgICAgaWYgKG1bMl0pIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnRzID0gbVsyXS5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgY29uc3QgciA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHAgPSBwYXJ0c1tpXS50cmltKCk7XG4gICAgICAgICAgICAgICAgaWYgKCFwKVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICByLnB1c2gocGFydFJlcGxhY2VyKF9wb2x5ZmlsbEhvc3ROb0NvbWJpbmF0b3IsIHAsIG1bM10pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByLmpvaW4oJywnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBfcG9seWZpbGxIb3N0Tm9Db21iaW5hdG9yICsgbVszXTtcbiAgICAgICAgfVxuICAgIH0pO1xufTtcbmNvbnN0IGNvbG9uSG9zdFBhcnRSZXBsYWNlciA9IChob3N0LCBwYXJ0LCBzdWZmaXgpID0+IHtcbiAgICByZXR1cm4gaG9zdCArIHBhcnQucmVwbGFjZShfcG9seWZpbGxIb3N0LCAnJykgKyBzdWZmaXg7XG59O1xuY29uc3QgY29udmVydENvbG9uSG9zdCA9IChjc3NUZXh0KSA9PiB7XG4gICAgcmV0dXJuIGNvbnZlcnRDb2xvblJ1bGUoY3NzVGV4dCwgX2Nzc0NvbG9uSG9zdFJlLCBjb2xvbkhvc3RQYXJ0UmVwbGFjZXIpO1xufTtcbmNvbnN0IGNvbG9uSG9zdENvbnRleHRQYXJ0UmVwbGFjZXIgPSAoaG9zdCwgcGFydCwgc3VmZml4KSA9PiB7XG4gICAgaWYgKHBhcnQuaW5kZXhPZihfcG9seWZpbGxIb3N0KSA+IC0xKSB7XG4gICAgICAgIHJldHVybiBjb2xvbkhvc3RQYXJ0UmVwbGFjZXIoaG9zdCwgcGFydCwgc3VmZml4KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBob3N0ICsgcGFydCArIHN1ZmZpeCArICcsICcgKyBwYXJ0ICsgJyAnICsgaG9zdCArIHN1ZmZpeDtcbiAgICB9XG59O1xuY29uc3QgY29udmVydENvbG9uU2xvdHRlZCA9IChjc3NUZXh0LCBzbG90U2NvcGVJZCkgPT4ge1xuICAgIGNvbnN0IHNsb3RDbGFzcyA9ICcuJyArIHNsb3RTY29wZUlkICsgJyA+ICc7XG4gICAgY29uc3Qgc2VsZWN0b3JzID0gW107XG4gICAgY3NzVGV4dCA9IGNzc1RleHQucmVwbGFjZShfY3NzQ29sb25TbG90dGVkUmUsICguLi5tKSA9PiB7XG4gICAgICAgIGlmIChtWzJdKSB7XG4gICAgICAgICAgICBjb25zdCBjb21wb3VuZCA9IG1bMl0udHJpbSgpO1xuICAgICAgICAgICAgY29uc3Qgc3VmZml4ID0gbVszXTtcbiAgICAgICAgICAgIGNvbnN0IHNsb3R0ZWRTZWxlY3RvciA9IHNsb3RDbGFzcyArIGNvbXBvdW5kICsgc3VmZml4O1xuICAgICAgICAgICAgbGV0IHByZWZpeFNlbGVjdG9yID0gJyc7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gbVs0XSAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hhciA9IG1bNV1baV07XG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09ICd9JyB8fCBjaGFyID09PSAnLCcpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHByZWZpeFNlbGVjdG9yID0gY2hhciArIHByZWZpeFNlbGVjdG9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgb3JnU2VsZWN0b3IgPSBwcmVmaXhTZWxlY3RvciArIHNsb3R0ZWRTZWxlY3RvcjtcbiAgICAgICAgICAgIGNvbnN0IGFkZGVkU2VsZWN0b3IgPSBgJHtwcmVmaXhTZWxlY3Rvci50cmltUmlnaHQoKX0ke3Nsb3R0ZWRTZWxlY3Rvci50cmltKCl9YDtcbiAgICAgICAgICAgIGlmIChvcmdTZWxlY3Rvci50cmltKCkgIT09IGFkZGVkU2VsZWN0b3IudHJpbSgpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlZFNlbGVjdG9yID0gYCR7YWRkZWRTZWxlY3Rvcn0sICR7b3JnU2VsZWN0b3J9YDtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIG9yZ1NlbGVjdG9yLFxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVkU2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc2xvdHRlZFNlbGVjdG9yO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIF9wb2x5ZmlsbEhvc3ROb0NvbWJpbmF0b3IgKyBtWzNdO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2VsZWN0b3JzLFxuICAgICAgICBjc3NUZXh0LFxuICAgIH07XG59O1xuY29uc3QgY29udmVydENvbG9uSG9zdENvbnRleHQgPSAoY3NzVGV4dCkgPT4ge1xuICAgIHJldHVybiBjb252ZXJ0Q29sb25SdWxlKGNzc1RleHQsIF9jc3NDb2xvbkhvc3RDb250ZXh0UmUsIGNvbG9uSG9zdENvbnRleHRQYXJ0UmVwbGFjZXIpO1xufTtcbmNvbnN0IGNvbnZlcnRTaGFkb3dET01TZWxlY3RvcnMgPSAoY3NzVGV4dCkgPT4ge1xuICAgIHJldHVybiBfc2hhZG93RE9NU2VsZWN0b3JzUmUucmVkdWNlKChyZXN1bHQsIHBhdHRlcm4pID0+IHJlc3VsdC5yZXBsYWNlKHBhdHRlcm4sICcgJyksIGNzc1RleHQpO1xufTtcbmNvbnN0IG1ha2VTY29wZU1hdGNoZXIgPSAoc2NvcGVTZWxlY3RvcikgPT4ge1xuICAgIGNvbnN0IGxyZSA9IC9cXFsvZztcbiAgICBjb25zdCBycmUgPSAvXFxdL2c7XG4gICAgc2NvcGVTZWxlY3RvciA9IHNjb3BlU2VsZWN0b3IucmVwbGFjZShscmUsICdcXFxcWycpLnJlcGxhY2UocnJlLCAnXFxcXF0nKTtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cCgnXignICsgc2NvcGVTZWxlY3RvciArICcpJyArIF9zZWxlY3RvclJlU3VmZml4LCAnbScpO1xufTtcbmNvbnN0IHNlbGVjdG9yTmVlZHNTY29waW5nID0gKHNlbGVjdG9yLCBzY29wZVNlbGVjdG9yKSA9PiB7XG4gICAgY29uc3QgcmUgPSBtYWtlU2NvcGVNYXRjaGVyKHNjb3BlU2VsZWN0b3IpO1xuICAgIHJldHVybiAhcmUudGVzdChzZWxlY3Rvcik7XG59O1xuY29uc3QgYXBwbHlTaW1wbGVTZWxlY3RvclNjb3BlID0gKHNlbGVjdG9yLCBzY29wZVNlbGVjdG9yLCBob3N0U2VsZWN0b3IpID0+IHtcbiAgICAvLyBJbiBBbmRyb2lkIGJyb3dzZXIsIHRoZSBsYXN0SW5kZXggaXMgbm90IHJlc2V0IHdoZW4gdGhlIHJlZ2V4IGlzIHVzZWQgaW4gU3RyaW5nLnJlcGxhY2UoKVxuICAgIF9wb2x5ZmlsbEhvc3RSZS5sYXN0SW5kZXggPSAwO1xuICAgIGlmIChfcG9seWZpbGxIb3N0UmUudGVzdChzZWxlY3RvcikpIHtcbiAgICAgICAgY29uc3QgcmVwbGFjZUJ5ID0gYC4ke2hvc3RTZWxlY3Rvcn1gO1xuICAgICAgICByZXR1cm4gc2VsZWN0b3JcbiAgICAgICAgICAgIC5yZXBsYWNlKF9wb2x5ZmlsbEhvc3ROb0NvbWJpbmF0b3JSZSwgKF8sIHNlbGVjdG9yKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gc2VsZWN0b3IucmVwbGFjZSgvKFteOl0qKSg6KikoLiopLywgKF8sIGJlZm9yZSwgY29sb24sIGFmdGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJlZm9yZSArIHJlcGxhY2VCeSArIGNvbG9uICsgYWZ0ZXI7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5yZXBsYWNlKF9wb2x5ZmlsbEhvc3RSZSwgcmVwbGFjZUJ5ICsgJyAnKTtcbiAgICB9XG4gICAgcmV0dXJuIHNjb3BlU2VsZWN0b3IgKyAnICcgKyBzZWxlY3Rvcjtcbn07XG5jb25zdCBhcHBseVN0cmljdFNlbGVjdG9yU2NvcGUgPSAoc2VsZWN0b3IsIHNjb3BlU2VsZWN0b3IsIGhvc3RTZWxlY3RvcikgPT4ge1xuICAgIGNvbnN0IGlzUmUgPSAvXFxbaXM9KFteXFxdXSopXFxdL2c7XG4gICAgc2NvcGVTZWxlY3RvciA9IHNjb3BlU2VsZWN0b3IucmVwbGFjZShpc1JlLCAoXywgLi4ucGFydHMpID0+IHBhcnRzWzBdKTtcbiAgICBjb25zdCBjbGFzc05hbWUgPSAnLicgKyBzY29wZVNlbGVjdG9yO1xuICAgIGNvbnN0IF9zY29wZVNlbGVjdG9yUGFydCA9IChwKSA9PiB7XG4gICAgICAgIGxldCBzY29wZWRQID0gcC50cmltKCk7XG4gICAgICAgIGlmICghc2NvcGVkUCkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwLmluZGV4T2YoX3BvbHlmaWxsSG9zdE5vQ29tYmluYXRvcikgPiAtMSkge1xuICAgICAgICAgICAgc2NvcGVkUCA9IGFwcGx5U2ltcGxlU2VsZWN0b3JTY29wZShwLCBzY29wZVNlbGVjdG9yLCBob3N0U2VsZWN0b3IpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gcmVtb3ZlIDpob3N0IHNpbmNlIGl0IHNob3VsZCBiZSB1bm5lY2Vzc2FyeVxuICAgICAgICAgICAgY29uc3QgdCA9IHAucmVwbGFjZShfcG9seWZpbGxIb3N0UmUsICcnKTtcbiAgICAgICAgICAgIGlmICh0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtYXRjaGVzID0gdC5tYXRjaCgvKFteOl0qKSg6KikoLiopLyk7XG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVkUCA9IG1hdGNoZXNbMV0gKyBjbGFzc05hbWUgKyBtYXRjaGVzWzJdICsgbWF0Y2hlc1szXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNjb3BlZFA7XG4gICAgfTtcbiAgICBjb25zdCBzYWZlQ29udGVudCA9IHNhZmVTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgc2VsZWN0b3IgPSBzYWZlQ29udGVudC5jb250ZW50O1xuICAgIGxldCBzY29wZWRTZWxlY3RvciA9ICcnO1xuICAgIGxldCBzdGFydEluZGV4ID0gMDtcbiAgICBsZXQgcmVzO1xuICAgIGNvbnN0IHNlcCA9IC8oIHw+fFxcK3x+KD8hPSkpXFxzKi9nO1xuICAgIC8vIElmIGEgc2VsZWN0b3IgYXBwZWFycyBiZWZvcmUgOmhvc3QgaXQgc2hvdWxkIG5vdCBiZSBzaGltbWVkIGFzIGl0XG4gICAgLy8gbWF0Y2hlcyBvbiBhbmNlc3RvciBlbGVtZW50cyBhbmQgbm90IG9uIGVsZW1lbnRzIGluIHRoZSBob3N0J3Mgc2hhZG93XG4gICAgLy8gYDpob3N0LWNvbnRleHQoZGl2KWAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgICAvLyBgLXNoYWRvd2Nzc2hvc3Qtbm8tY29tYmluYXRvcmRpdiwgZGl2IC1zaGFkb3djc3Nob3N0LW5vLWNvbWJpbmF0b3JgXG4gICAgLy8gdGhlIGBkaXZgIGlzIG5vdCBwYXJ0IG9mIHRoZSBjb21wb25lbnQgaW4gdGhlIDJuZCBzZWxlY3RvcnMgYW5kIHNob3VsZCBub3QgYmUgc2NvcGVkLlxuICAgIC8vIEhpc3RvcmljYWxseSBgY29tcG9uZW50LXRhZzpob3N0YCB3YXMgbWF0Y2hpbmcgdGhlIGNvbXBvbmVudCBzbyB3ZSBhbHNvIHdhbnQgdG8gcHJlc2VydmVcbiAgICAvLyB0aGlzIGJlaGF2aW9yIHRvIGF2b2lkIGJyZWFraW5nIGxlZ2FjeSBhcHBzIChpdCBzaG91bGQgbm90IG1hdGNoKS5cbiAgICAvLyBUaGUgYmVoYXZpb3Igc2hvdWxkIGJlOlxuICAgIC8vIC0gYHRhZzpob3N0YCAtPiBgdGFnW2hdYCAodGhpcyBpcyB0byBhdm9pZCBicmVha2luZyBsZWdhY3kgYXBwcywgc2hvdWxkIG5vdCBtYXRjaCBhbnl0aGluZylcbiAgICAvLyAtIGB0YWcgOmhvc3RgIC0+IGB0YWcgW2hdYCAoYHRhZ2AgaXMgbm90IHNjb3BlZCBiZWNhdXNlIGl0J3MgY29uc2lkZXJlZCBwYXJ0IG9mIGFcbiAgICAvLyAgIGA6aG9zdC1jb250ZXh0KHRhZylgKVxuICAgIGNvbnN0IGhhc0hvc3QgPSBzZWxlY3Rvci5pbmRleE9mKF9wb2x5ZmlsbEhvc3ROb0NvbWJpbmF0b3IpID4gLTE7XG4gICAgLy8gT25seSBzY29wZSBwYXJ0cyBhZnRlciB0aGUgZmlyc3QgYC1zaGFkb3djc3Nob3N0LW5vLWNvbWJpbmF0b3JgIHdoZW4gaXQgaXMgcHJlc2VudFxuICAgIGxldCBzaG91bGRTY29wZSA9ICFoYXNIb3N0O1xuICAgIHdoaWxlICgocmVzID0gc2VwLmV4ZWMoc2VsZWN0b3IpKSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBzZXBhcmF0b3IgPSByZXNbMV07XG4gICAgICAgIGNvbnN0IHBhcnQgPSBzZWxlY3Rvci5zbGljZShzdGFydEluZGV4LCByZXMuaW5kZXgpLnRyaW0oKTtcbiAgICAgICAgc2hvdWxkU2NvcGUgPSBzaG91bGRTY29wZSB8fCBwYXJ0LmluZGV4T2YoX3BvbHlmaWxsSG9zdE5vQ29tYmluYXRvcikgPiAtMTtcbiAgICAgICAgY29uc3Qgc2NvcGVkUGFydCA9IHNob3VsZFNjb3BlID8gX3Njb3BlU2VsZWN0b3JQYXJ0KHBhcnQpIDogcGFydDtcbiAgICAgICAgc2NvcGVkU2VsZWN0b3IgKz0gYCR7c2NvcGVkUGFydH0gJHtzZXBhcmF0b3J9IGA7XG4gICAgICAgIHN0YXJ0SW5kZXggPSBzZXAubGFzdEluZGV4O1xuICAgIH1cbiAgICBjb25zdCBwYXJ0ID0gc2VsZWN0b3Iuc3Vic3RyaW5nKHN0YXJ0SW5kZXgpO1xuICAgIHNob3VsZFNjb3BlID0gc2hvdWxkU2NvcGUgfHwgcGFydC5pbmRleE9mKF9wb2x5ZmlsbEhvc3ROb0NvbWJpbmF0b3IpID4gLTE7XG4gICAgc2NvcGVkU2VsZWN0b3IgKz0gc2hvdWxkU2NvcGUgPyBfc2NvcGVTZWxlY3RvclBhcnQocGFydCkgOiBwYXJ0O1xuICAgIC8vIHJlcGxhY2UgdGhlIHBsYWNlaG9sZGVycyB3aXRoIHRoZWlyIG9yaWdpbmFsIHZhbHVlc1xuICAgIHJldHVybiByZXN0b3JlU2FmZVNlbGVjdG9yKHNhZmVDb250ZW50LnBsYWNlaG9sZGVycywgc2NvcGVkU2VsZWN0b3IpO1xufTtcbmNvbnN0IHNjb3BlU2VsZWN0b3IgPSAoc2VsZWN0b3IsIHNjb3BlU2VsZWN0b3JUZXh0LCBob3N0U2VsZWN0b3IsIHNsb3RTZWxlY3RvcikgPT4ge1xuICAgIHJldHVybiBzZWxlY3RvclxuICAgICAgICAuc3BsaXQoJywnKVxuICAgICAgICAubWFwKHNoYWxsb3dQYXJ0ID0+IHtcbiAgICAgICAgaWYgKHNsb3RTZWxlY3RvciAmJiBzaGFsbG93UGFydC5pbmRleE9mKCcuJyArIHNsb3RTZWxlY3RvcikgPiAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIHNoYWxsb3dQYXJ0LnRyaW0oKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VsZWN0b3JOZWVkc1Njb3Bpbmcoc2hhbGxvd1BhcnQsIHNjb3BlU2VsZWN0b3JUZXh0KSkge1xuICAgICAgICAgICAgcmV0dXJuIGFwcGx5U3RyaWN0U2VsZWN0b3JTY29wZShzaGFsbG93UGFydCwgc2NvcGVTZWxlY3RvclRleHQsIGhvc3RTZWxlY3RvcikudHJpbSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHNoYWxsb3dQYXJ0LnRyaW0oKTtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgICAgIC5qb2luKCcsICcpO1xufTtcbmNvbnN0IHNjb3BlU2VsZWN0b3JzID0gKGNzc1RleHQsIHNjb3BlU2VsZWN0b3JUZXh0LCBob3N0U2VsZWN0b3IsIHNsb3RTZWxlY3RvciwgY29tbWVudE9yaWdpbmFsU2VsZWN0b3IpID0+IHtcbiAgICByZXR1cm4gcHJvY2Vzc1J1bGVzKGNzc1RleHQsIChydWxlKSA9PiB7XG4gICAgICAgIGxldCBzZWxlY3RvciA9IHJ1bGUuc2VsZWN0b3I7XG4gICAgICAgIGxldCBjb250ZW50ID0gcnVsZS5jb250ZW50O1xuICAgICAgICBpZiAocnVsZS5zZWxlY3RvclswXSAhPT0gJ0AnKSB7XG4gICAgICAgICAgICBzZWxlY3RvciA9IHNjb3BlU2VsZWN0b3IocnVsZS5zZWxlY3Rvciwgc2NvcGVTZWxlY3RvclRleHQsIGhvc3RTZWxlY3Rvciwgc2xvdFNlbGVjdG9yKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChydWxlLnNlbGVjdG9yLnN0YXJ0c1dpdGgoJ0BtZWRpYScpIHx8IHJ1bGUuc2VsZWN0b3Iuc3RhcnRzV2l0aCgnQHN1cHBvcnRzJykgfHwgcnVsZS5zZWxlY3Rvci5zdGFydHNXaXRoKCdAcGFnZScpIHx8IHJ1bGUuc2VsZWN0b3Iuc3RhcnRzV2l0aCgnQGRvY3VtZW50JykpIHtcbiAgICAgICAgICAgIGNvbnRlbnQgPSBzY29wZVNlbGVjdG9ycyhydWxlLmNvbnRlbnQsIHNjb3BlU2VsZWN0b3JUZXh0LCBob3N0U2VsZWN0b3IsIHNsb3RTZWxlY3Rvcik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY3NzUnVsZSA9IHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiBzZWxlY3Rvci5yZXBsYWNlKC9cXHN7Mix9L2csICcgJykudHJpbSgpLFxuICAgICAgICAgICAgY29udGVudCxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGNzc1J1bGU7XG4gICAgfSk7XG59O1xuY29uc3Qgc2NvcGVDc3NUZXh0ID0gKGNzc1RleHQsIHNjb3BlSWQsIGhvc3RTY29wZUlkLCBzbG90U2NvcGVJZCwgY29tbWVudE9yaWdpbmFsU2VsZWN0b3IpID0+IHtcbiAgICBjc3NUZXh0ID0gaW5zZXJ0UG9seWZpbGxIb3N0SW5Dc3NUZXh0KGNzc1RleHQpO1xuICAgIGNzc1RleHQgPSBjb252ZXJ0Q29sb25Ib3N0KGNzc1RleHQpO1xuICAgIGNzc1RleHQgPSBjb252ZXJ0Q29sb25Ib3N0Q29udGV4dChjc3NUZXh0KTtcbiAgICBjb25zdCBzbG90dGVkID0gY29udmVydENvbG9uU2xvdHRlZChjc3NUZXh0LCBzbG90U2NvcGVJZCk7XG4gICAgY3NzVGV4dCA9IHNsb3R0ZWQuY3NzVGV4dDtcbiAgICBjc3NUZXh0ID0gY29udmVydFNoYWRvd0RPTVNlbGVjdG9ycyhjc3NUZXh0KTtcbiAgICBpZiAoc2NvcGVJZCkge1xuICAgICAgICBjc3NUZXh0ID0gc2NvcGVTZWxlY3RvcnMoY3NzVGV4dCwgc2NvcGVJZCwgaG9zdFNjb3BlSWQsIHNsb3RTY29wZUlkKTtcbiAgICB9XG4gICAgY3NzVGV4dCA9IGNzc1RleHQucmVwbGFjZSgvLXNoYWRvd2Nzc2hvc3Qtbm8tY29tYmluYXRvci9nLCBgLiR7aG9zdFNjb3BlSWR9YCk7XG4gICAgY3NzVGV4dCA9IGNzc1RleHQucmVwbGFjZSgvPlxccypcXCpcXHMrKFteeywgXSspL2dtLCAnICQxICcpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGNzc1RleHQ6IGNzc1RleHQudHJpbSgpLFxuICAgICAgICBzbG90dGVkU2VsZWN0b3JzOiBzbG90dGVkLnNlbGVjdG9ycyxcbiAgICB9O1xufTtcbmNvbnN0IHNjb3BlQ3NzID0gKGNzc1RleHQsIHNjb3BlSWQsIGNvbW1lbnRPcmlnaW5hbFNlbGVjdG9yKSA9PiB7XG4gICAgY29uc3QgaG9zdFNjb3BlSWQgPSBzY29wZUlkICsgJy1oJztcbiAgICBjb25zdCBzbG90U2NvcGVJZCA9IHNjb3BlSWQgKyAnLXMnO1xuICAgIGNvbnN0IGNvbW1lbnRzV2l0aEhhc2ggPSBleHRyYWN0Q29tbWVudHNXaXRoSGFzaChjc3NUZXh0KTtcbiAgICBjc3NUZXh0ID0gc3RyaXBDb21tZW50cyhjc3NUZXh0KTtcbiAgICBjb25zdCBvcmdTZWxlY3RvcnMgPSBbXTtcbiAgICBpZiAoY29tbWVudE9yaWdpbmFsU2VsZWN0b3IpIHtcbiAgICAgICAgY29uc3QgcHJvY2Vzc0NvbW1lbnRlZFNlbGVjdG9yID0gKHJ1bGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBsYWNlaG9sZGVyID0gYC8qIUBfX18ke29yZ1NlbGVjdG9ycy5sZW5ndGh9X19fKi9gO1xuICAgICAgICAgICAgY29uc3QgY29tbWVudCA9IGAvKiFAJHtydWxlLnNlbGVjdG9yfSovYDtcbiAgICAgICAgICAgIG9yZ1NlbGVjdG9ycy5wdXNoKHsgcGxhY2Vob2xkZXIsIGNvbW1lbnQgfSk7XG4gICAgICAgICAgICBydWxlLnNlbGVjdG9yID0gcGxhY2Vob2xkZXIgKyBydWxlLnNlbGVjdG9yO1xuICAgICAgICAgICAgcmV0dXJuIHJ1bGU7XG4gICAgICAgIH07XG4gICAgICAgIGNzc1RleHQgPSBwcm9jZXNzUnVsZXMoY3NzVGV4dCwgcnVsZSA9PiB7XG4gICAgICAgICAgICBpZiAocnVsZS5zZWxlY3RvclswXSAhPT0gJ0AnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb2Nlc3NDb21tZW50ZWRTZWxlY3RvcihydWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHJ1bGUuc2VsZWN0b3Iuc3RhcnRzV2l0aCgnQG1lZGlhJykgfHwgcnVsZS5zZWxlY3Rvci5zdGFydHNXaXRoKCdAc3VwcG9ydHMnKSB8fCBydWxlLnNlbGVjdG9yLnN0YXJ0c1dpdGgoJ0BwYWdlJykgfHwgcnVsZS5zZWxlY3Rvci5zdGFydHNXaXRoKCdAZG9jdW1lbnQnKSkge1xuICAgICAgICAgICAgICAgIHJ1bGUuY29udGVudCA9IHByb2Nlc3NSdWxlcyhydWxlLmNvbnRlbnQsIHByb2Nlc3NDb21tZW50ZWRTZWxlY3Rvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJ1bGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcnVsZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IHNjb3BlZCA9IHNjb3BlQ3NzVGV4dChjc3NUZXh0LCBzY29wZUlkLCBob3N0U2NvcGVJZCwgc2xvdFNjb3BlSWQpO1xuICAgIGNzc1RleHQgPSBbc2NvcGVkLmNzc1RleHQsIC4uLmNvbW1lbnRzV2l0aEhhc2hdLmpvaW4oJ1xcbicpO1xuICAgIGlmIChjb21tZW50T3JpZ2luYWxTZWxlY3Rvcikge1xuICAgICAgICBvcmdTZWxlY3RvcnMuZm9yRWFjaCgoeyBwbGFjZWhvbGRlciwgY29tbWVudCB9KSA9PiB7XG4gICAgICAgICAgICBjc3NUZXh0ID0gY3NzVGV4dC5yZXBsYWNlKHBsYWNlaG9sZGVyLCBjb21tZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHNjb3BlZC5zbG90dGVkU2VsZWN0b3JzLmZvckVhY2goc2xvdHRlZFNlbGVjdG9yID0+IHtcbiAgICAgICAgY3NzVGV4dCA9IGNzc1RleHQucmVwbGFjZShzbG90dGVkU2VsZWN0b3Iub3JnU2VsZWN0b3IsIHNsb3R0ZWRTZWxlY3Rvci51cGRhdGVkU2VsZWN0b3IpO1xuICAgIH0pO1xuICAgIHJldHVybiBjc3NUZXh0O1xufTtcblxuZXhwb3J0IHsgc2NvcGVDc3MgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=