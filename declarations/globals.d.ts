declare module '*.css' {
  const content: {
    [className: string]: string;
  };

  export default content;
}

declare module '*.sass' {
  const content: {
    [className: string]: string;
  };

  export default content;
}

declare module '*.scss' {
  const content: {
    [className: string]: string;
  };

  export default content;
}

declare module '*.gif' {
  const content: string;

  export default content;
}

declare module '*.jpg' {
  const content: string;

  export default content;
}

declare module '*.jpeg' {
  const content: string;

  export default content;
}

declare module '*.png' {
  const content: string;

  export default content;
}

declare module '*.svg' {
  import React = require('react');

  const src: string;

  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >;
  export default src;
}

declare module '*.webp' {
  const content: string;

  export default content;
}
