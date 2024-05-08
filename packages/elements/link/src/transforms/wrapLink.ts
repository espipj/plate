import { wrapNodes } from '@udecode/plate-common';
import { getPlatePluginType, SPEditor } from '@udecode/plate-core';
import { Location } from 'slate';
import { ELEMENT_LINK } from '../defaults';
import { validateUrl } from '../utils';

/**
 * Wrap selected nodes with a link and collapse at the end.
 */
export const wrapLink = (
  editor: SPEditor,
  {
    at,
    url,
    skipValidation = false,
  }: { url: string; at?: Location; skipValidation?: boolean }
) => {
  if (!skipValidation && !validateUrl(editor, url)) return;

  wrapNodes(
    editor,
    {
      type: getPlatePluginType(editor, ELEMENT_LINK),
      url,
      children: [],
    },
    { at, split: true }
  );
};
