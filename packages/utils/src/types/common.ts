/**
 * Common utility types for the component library
 */

/**
 * Makes specific properties of a type optional
 */
export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

/**
 * Makes specific properties of a type required
 */
export type RequiredBy<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>

/**
 * Extract keys from object type that have a specific value type
 */
export type KeysOfType<T, V> = {
  [K in keyof T]: T[K] extends V ? K : never
}[keyof T]

/**
 * Ensures at least one property from the union is present
 */
export type RequireAtLeastOne<T, Keys extends keyof T = keyof T> = 
  Pick<T, Exclude<keyof T, Keys>> 
  & {
      [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>
    }[Keys]

/**
 * Ensures exactly one property from the union is present
 */
export type RequireOnlyOne<T, Keys extends keyof T = keyof T> =
  Pick<T, Exclude<keyof T, Keys>>
  & {
      [K in Keys]-?:
        Required<Pick<T, K>>
        & Partial<Record<Exclude<Keys, K>, undefined>>
    }[Keys]
