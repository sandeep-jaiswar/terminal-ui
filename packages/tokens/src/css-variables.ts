/**
 * CSS custom properties generator for design tokens
 * 
 * Generates CSS variables from design tokens for use in stylesheets
 * Provides runtime theming capabilities
 * 
 * @example
 * ```typescript
 * import { generateCSSVariables } from '@sandeep-jaiswar/tokens/css-variables'
 * 
 * // Generate and inject CSS variables
 * const cssVars = generateCSSVariables()
 * document.head.insertAdjacentHTML('beforeend', `<style>${cssVars}</style>`)
 * ```
 */

import { colors, semanticColors } from './colors'
import { spacing } from './spacing'
import { shadows } from './shadows'
import { radius } from './radius'
import { zIndex } from './z-index'
import { typography } from './typography'

/**
 * Recursively flattens nested objects into CSS variable declarations
 */
function flattenObject(
  obj: Record<string, unknown>,
  prefix = '',
  separator = '-'
): Record<string, string> {
  const result: Record<string, string> = {}
  
  for (const [key, value] of Object.entries(obj)) {
    const newKey = prefix ? `${prefix}${separator}${key}` : key
    
    if (typeof value === 'object' && !Array.isArray(value) && value !== null) {
      Object.assign(result, flattenObject(value as Record<string, unknown>, newKey, separator))
    } else if (Array.isArray(value)) {
      // Handle arrays (like font families)
      result[newKey] = value.join(', ')
    } else {
      result[newKey] = String(value)
    }
  }
  
  return result
}

/**
 * Generates CSS custom properties from all design tokens
 * 
 * @returns CSS string with :root selector and all variables
 */
export function generateCSSVariables(): string {
  const cssVariables: string[] = []
  
  // Add color variables
  const flatColors = flattenObject(colors, 'color')
  Object.entries(flatColors).forEach(([key, value]) => {
    cssVariables.push(`  --${key}: ${value};`)
  })
  
  // Add semantic color variables
  const flatSemanticColors = flattenObject(semanticColors, 'semantic')
  Object.entries(flatSemanticColors).forEach(([key, value]) => {
    cssVariables.push(`  --${key}: ${value};`)
  })
  
  // Add spacing variables
  const flatSpacing = flattenObject(spacing, 'spacing')
  Object.entries(flatSpacing).forEach(([key, value]) => {
    cssVariables.push(`  --${key}: ${value};`)
  })
  
  // Add shadow variables
  const flatShadows = flattenObject(shadows, 'shadow')
  Object.entries(flatShadows).forEach(([key, value]) => {
    cssVariables.push(`  --${key}: ${value};`)
  })
  
  // Add radius variables
  const flatRadius = flattenObject(radius, 'radius')
  Object.entries(flatRadius).forEach(([key, value]) => {
    cssVariables.push(`  --${key}: ${value};`)
  })
  
  // Add z-index variables
  const flatZIndex = flattenObject(zIndex, 'z')
  Object.entries(flatZIndex).forEach(([key, value]) => {
    cssVariables.push(`  --${key}: ${value};`)
  })
  
  // Add typography variables
  const flatTypography = flattenObject(typography, 'font')
  Object.entries(flatTypography).forEach(([key, value]) => {
    cssVariables.push(`  --${key}: ${value};`)
  })
  
  return `:root {\n${cssVariables.join('\n')}\n}`
}

/**
 * Generates CSS variables and returns them as a CSS string
 * Can be used to create a CSS file at build time
 */
export function generateCSSFile(): string {
  return `/**
 * Generated CSS custom properties from @sandeep-jaiswar/tokens
 * DO NOT EDIT - This file is auto-generated
 */

${generateCSSVariables()}
`
}
