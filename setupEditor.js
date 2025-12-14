// JSON Text Editors

import { EditorState } from "@codemirror/state"
import { EditorView, keymap, lineNumbers, highlightActiveLineGutter, highlightSpecialChars, drawSelection, dropCursor, rectangularSelection, crosshairCursor, highlightActiveLine } from "@codemirror/view"
import { history, historyKeymap, indentWithTab } from "@codemirror/commands"
import { json } from "@codemirror/lang-json"
import { syntaxHighlighting, defaultHighlightStyle, bracketMatching, foldGutter, foldKeymap } from "@codemirror/language"
import { closeBrackets, closeBracketsKeymap, completionKeymap } from "@codemirror/autocomplete"
import { highlightSelectionMatches, searchKeymap } from "@codemirror/search"
import { lintKeymap } from "@codemirror/lint"

// get our actual elements
export default function setupEditors() {
  const jsonRequestBody = document.querySelector("[data-json-request-body]")
  const jsonResponseBody = document.querySelector("[data-json-response-body]")

  const basicExtensions = [
    lineNumbers(),
    highlightActiveLineGutter(),
    highlightSpecialChars(),
    history(),
    foldGutter(),
    drawSelection(),
    dropCursor(),
    EditorState.allowMultipleSelections.of(true),
    syntaxHighlighting(defaultHighlightStyle, { fallback: true }),
    bracketMatching(),
    closeBrackets(),
    rectangularSelection(),
    crosshairCursor(),
    highlightActiveLine(),
    highlightSelectionMatches(),
    keymap.of([
      ...closeBracketsKeymap,
      indentWithTab,
      ...historyKeymap,
      ...foldKeymap,
      ...completionKeymap,
      ...searchKeymap,
      ...lintKeymap,
    ]),
    json(),
    EditorState.tabSize.of(2),
  ]

  const requestEditor = new EditorView({
    state: EditorState.create({
      doc: "{\n\t\n}", // doc is like text content
      extensions: basicExtensions,
    }),
    parent: jsonRequestBody,
  })

  const responseEditor = new EditorView({
    state: EditorState.create({
      doc: "{}", //empty JS object
      extensions: [...basicExtensions, EditorView.editable.of(false)],
    }),
    parent: jsonResponseBody,
  })

  // update the contents inside the Response Editor
  function updateResponseEditor(value) {
    responseEditor.dispatch({
      changes: {
        from: 0,
        to: responseEditor.state.doc.length,
        insert: JSON.stringify(value, null, 2),
      },
    })
  }

  return { requestEditor, updateResponseEditor }
}
