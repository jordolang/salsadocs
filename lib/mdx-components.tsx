import type { MDXComponents } from 'mdx/types';
import defaultComponents from 'fumadocs-ui/mdx';
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';
import { Callout } from 'fumadocs-ui/components/callout';
import { Step, Steps } from 'fumadocs-ui/components/steps';
import { File, Folder, Files } from 'fumadocs-ui/components/files';
import { Accordion, Accordions } from 'fumadocs-ui/components/accordion';
import { ImageZoom } from 'fumadocs-ui/components/image-zoom';
import { TypeTable } from 'fumadocs-ui/components/type-table';
import { Card, Cards } from 'fumadocs-ui/components/card';

export function getMdxComponents(): MDXComponents {
  return {
    ...defaultComponents,
    // Make all images zoomable
    img: (props) => {
      const { src, alt, ...rest } = props as React.ImgHTMLAttributes<HTMLImageElement>;
      if (!src || typeof src !== 'string') return <img {...props} />;
      return <ImageZoom src={src} alt={alt ?? ''} {...rest} />;
    },
    // Register all fumadocs components for use in MDX
    Tab,
    Tabs,
    Callout,
    Step,
    Steps,
    File,
    Folder,
    Files,
    Accordion,
    Accordions,
    ImageZoom,
    TypeTable,
    Card,
    Cards,
  };
}
