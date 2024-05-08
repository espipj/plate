import { isUrl } from '@udecode/plate-common';
import {
  getPlatePluginOptions,
  sanitizeUrl,
  SPEditor,
} from '@udecode/plate-core';
import { ELEMENT_LINK } from '../defaults';

export const validateUrl = (editor: SPEditor, url: string): boolean => {
  const { allowedSchemes } = getPlatePluginOptions(editor, ELEMENT_LINK);
  if (isUrl && !isUrl(url)) return false;

  if (
    !sanitizeUrl(url, {
      allowedSchemes,
      permitInvalid: true,
    })
  )
    return false;

  return true;
};
