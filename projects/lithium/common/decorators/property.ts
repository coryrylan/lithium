// tslint:disable-next-line
import { property as prop } from 'lit-element';
import { PropertyDeclaration } from 'lit-element/src/lib/updating-element';

/**
 * lit-element @property decorator with custom defaults.
 *
 * A property decorator which creates a LitElement property which reflects a
 * corresponding attribute value. A PropertyDeclaration may optionally be
 * supplied to configure property features.
 */
export function property(options?: PropertyDeclaration<unknown, unknown>) {
  return prop(getDefaultOptions(options)) as (protoOrDescriptor: {}, name?: string | number | symbol) => any;
}

/**
 * https://developers.google.com/web/fundamentals/web-components/best-practices
 */
export function getDefaultOptions(options: PropertyDeclaration<unknown, unknown>) {
  const type = options ? options.type : options;

  switch (type) {
    case Array:
      return { reflect: false, ...options };
    case Object:
      return { reflect: false, ...options };
    case String:
      return { reflect: true, ...options };
    case Number:
      return { reflect: true, ...options };
    case Boolean:
      return {
        reflect: true,
        converter: {
          // Mimic standard HTML boolean attributes + support "false" attribute values
          // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attributes
          fromAttribute: (value: string) => value !== 'false'
        },
        ...options
      };
    case Date: {
      return {
        // Parse date strings from attributes but do not reflect back into attribute
        reflect: false,
        converter: {
          fromAttribute: (value: string) => new Date(value)
        },
        ...options
      };
    }
    default:
      return options;
  }
}
