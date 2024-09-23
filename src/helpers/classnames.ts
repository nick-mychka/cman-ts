type Mods = Record<string, boolean | string>

export function classnames(className: string, mods: Mods, additionals: string[]): string {
  return [
    className,
    ...Object.entries(mods)
      .filter(([, enabled]) => Boolean(enabled))
      .map(([modClassName]) => modClassName),
    ...additionals,
  ].join(' ');
}
