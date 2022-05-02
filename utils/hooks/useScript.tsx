import { useEffect } from "react";

export const useScript = (attributes: ({ src: string } | { body: string }) & {options?: { [key: string]: string };}) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    if ("src" in attributes) {
      script.src = attributes.src;
    } else {
      script.innerHTML = attributes.body;
    }
    if (attributes.options) {
      Object.entries(attributes.options).forEach(([key, value]) => {
        script.setAttribute(key, value);
      });
    }
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
};

export const useScriptinHead = (attributes: ({ src: string } | { body: string }) & {options?: { [key: string]: string };}) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    if ("src" in attributes) {
      script.src = attributes.src;
    } else {
      script.innerHTML = attributes.body;
    }
    if (attributes.options) {
      Object.entries(attributes.options).forEach(([key, value]) => {
        script.setAttribute(key, value);
      });
    }
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);
};
