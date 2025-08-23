'use client';

import { useEffect, useRef } from 'react';

export default function Page() {
  const editorRef = useRef<any>(null);

  useEffect(() => {
    // Dynamic imports to ensure client-side only execution
    const initializeEditor = async () => {
      const EditorJS = (await import('@editorjs/editorjs')).default;
      const Header = (await import('@editorjs/header')).default;
      const List = (await import('@editorjs/list')).default;

      if (editorRef.current === null) {
        editorRef.current = new EditorJS({
          holder: 'editorjs',
          tools: {
            header: Header as any,
            list: List as any
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