import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import * as React from "react";

import "../styles.css";

import { $getRoot } from "lexical";
import { $createStickyNode } from "../nodes/StickyNode";

export default function ToolbarPlugin(): JSX.Element {
  const [editor] = useLexicalComposerContext();

  return (
    <div className="toolbar">
      <button
        onClick={() => {
          editor.update(() => {
            const root = $getRoot();
            const stickyNode = $createStickyNode(0, 0);
            root.append(stickyNode);
          });
        }}
        className={"toolbar-item spaced "}
      >
        <span className="text">Insert Sticky Note</span>
      </button>
    </div>
  );
}
