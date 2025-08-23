'use client';

import EditorJS, { BlockToolConstructable } from '@editorjs/editorjs';
import { useEffect, useRef } from 'react';

export default function Page() {
  const editorRef = useRef<EditorJS | null>(null);

  useEffect(() => {
    // Dynamic imports to ensure client-side only execution
    const initializeEditor = async () => {
      const EditorJSModule = (await import('@editorjs/editorjs')).default;
      const Header = (await import('@editorjs/header')).default;
      const List = (await import('@editorjs/list')).default;

      if (editorRef.current === null) {
        editorRef.current = new EditorJSModule({
          holder: 'editorjs',
          tools: {
            header: {
              class: Header as unknown as BlockToolConstructable,
              inlineToolbar: ['link']
            },
            list: {
              class: List as unknown as BlockToolConstructable,
              inlineToolbar: true
            }
          },
        });
      }
    };

    initializeEditor();

    // Cleanup function
    return () => {
      if (editorRef.current && editorRef.current.destroy) {
        editorRef.current.destroy();
        editorRef.current = null;
      }
    };
  }, []);

  return (
    <div>
      <div id="editorjs"></div>
    </div>
  )
}