// declarations.d.ts
declare module '*.svg' {
  const content: string;
  export default content;
}
declare module '*.scss' {
  const classes: { readonly [key: string]: string };
  export default classes;
}
