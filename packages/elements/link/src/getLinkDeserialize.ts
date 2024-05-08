import { getNodeDeserializer } from '@udecode/plate-common';
import { Deserialize, getPlatePluginOptions } from '@udecode/plate-core';
import { ELEMENT_LINK } from './defaults';
import { validateUrl } from './utils';

export const getLinkDeserialize = (): Deserialize => (editor) => {
  const options = getPlatePluginOptions(editor, ELEMENT_LINK);

  return {
    element: getNodeDeserializer({
      type: options.type,
      getNode: (el) => {
        const url = el.getAttribute('href');

        if (url && validateUrl(editor, url)) {
          return {
            type: options.type,
            url,
          };
        }

        return undefined;
      },
      rules: [{ nodeNames: 'A' }],
      ...options.deserialize,
    }),
  };
};
