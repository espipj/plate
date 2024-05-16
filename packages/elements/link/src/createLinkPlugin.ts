import {
  getPlatePluginTypes,
  getRenderElement,
  PlatePlugin,
} from '@udecode/plate-core';
import { ELEMENT_LINK } from './defaults';
import { getLinkDeserialize } from './getLinkDeserialize';
import { WithLinkOptions } from './types';
import { withLink } from './withLink';

/**
 * Enables support for hyperlinks.
 */
export const createLinkPlugin = (
  options: WithLinkOptions = {
    allowedSchemes: ['http', 'https', 'mailto', 'tel'],
  }
): PlatePlugin => ({
  pluginKeys: ELEMENT_LINK,
  renderElement: getRenderElement(ELEMENT_LINK),
  deserialize: getLinkDeserialize(),
  inlineTypes: getPlatePluginTypes(ELEMENT_LINK),
  withOverrides: withLink(options),
});
