import React, { useEffect, useReducer, useRef } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import TextStyle from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";
import Highlight from "@tiptap/extension-highlight";
import Link from "@tiptap/extension-link";
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import Placeholder from "@tiptap/extension-placeholder";
import { Box, IconButton, ToggleButton, Tooltip, Divider } from "@mui/material";
import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaStrikethrough,
  FaSubscript,
  FaSuperscript,
  FaListUl,
  FaListOl,
  FaQuoteRight,
  FaMinus,
  FaAlignLeft,
  FaAlignCenter,
  FaAlignRight,
  FaAlignJustify,
  FaLink,
  FaUnlink,
  FaRemoveFormat,
  FaHeading,
  FaParagraph,
} from "react-icons/fa";

function ToolbarDivider() {
  return (
    <Divider
      flexItem
      orientation="vertical"
      sx={{ mx: 0.25, alignSelf: "stretch", borderColor: "divider" }}
    />
  );
}

export default function ProductRichTextEditor({
  value,
  onChange,
  placeholder,
  documentDir = "ltr",
  sx,
}) {
  const lastHtmlRef = useRef(value ?? "");
  const [, bumpToolbar] = useReducer((n) => n + 1, 0);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [2, 3] },
      }),
      Underline,
      TextStyle,
      Color,
      Highlight.configure({ multicolor: true }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          rel: "noopener noreferrer",
          target: "_blank",
        },
      }),
      Subscript,
      Superscript,
      Placeholder.configure({
        placeholder: placeholder || "",
      }),
    ],
    content: value || "",
    editorProps: {
      attributes: {
        dir: documentDir,
      },
    },
    onUpdate: ({ editor: ed }) => {
      const html = ed.getHTML();
      lastHtmlRef.current = html;
      onChange(html);
    },
  });

  useEffect(() => {
    if (!editor || editor.isDestroyed) return;
    const html = value ?? "";
    if (html === lastHtmlRef.current) return;
    lastHtmlRef.current = html;
    editor.commands.setContent(html, false);
  }, [editor, value]);

  useEffect(() => {
    if (!editor || editor.isDestroyed) return;
    editor.view.dom.setAttribute("dir", documentDir);
  }, [editor, documentDir]);

  useEffect(() => {
    if (!editor || editor.isDestroyed) return;
    const onChangeSel = () => bumpToolbar();
    editor.on("selectionUpdate", onChangeSel);
    editor.on("transaction", onChangeSel);
    return () => {
      editor.off("selectionUpdate", onChangeSel);
      editor.off("transaction", onChangeSel);
    };
  }, [editor]);

  if (!editor) {
    return null;
  }

  const setLink = (e) => {
    e.preventDefault();
    const previous = editor.getAttributes("link").href;
    const url = window.prompt("URL", previous || "https://");
    if (url === null) return;
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  };

  return (
    <Box sx={sx}>
      <Box
        className="product-rich-text-toolbar"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: 0.25,
          py: 0.5,
          px: 0.5,
          borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
          bgcolor: "action.hover",
        }}
        onMouseDown={(e) => e.preventDefault()}
      >
        <Tooltip title="Bold">
          <span>
            <ToggleButton
              size="small"
              value="bold"
              selected={editor.isActive("bold")}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => editor.chain().focus().toggleBold().run()}
              sx={{ py: 0.25, px: 0.5, minWidth: 32 }}
            >
              <FaBold size={14} />
            </ToggleButton>
          </span>
        </Tooltip>
        <Tooltip title="Italic">
          <span>
            <ToggleButton
              size="small"
              value="italic"
              selected={editor.isActive("italic")}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => editor.chain().focus().toggleItalic().run()}
              sx={{ py: 0.25, px: 0.5, minWidth: 32 }}
            >
              <FaItalic size={14} />
            </ToggleButton>
          </span>
        </Tooltip>
        <Tooltip title="Underline">
          <span>
            <ToggleButton
              size="small"
              value="underline"
              selected={editor.isActive("underline")}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => editor.chain().focus().toggleUnderline().run()}
              sx={{ py: 0.25, px: 0.5, minWidth: 32 }}
            >
              <FaUnderline size={14} />
            </ToggleButton>
          </span>
        </Tooltip>
        <Tooltip title="Strikethrough">
          <span>
            <ToggleButton
              size="small"
              value="strike"
              selected={editor.isActive("strike")}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => editor.chain().focus().toggleStrike().run()}
              sx={{ py: 0.25, px: 0.5, minWidth: 32 }}
            >
              <FaStrikethrough size={14} />
            </ToggleButton>
          </span>
        </Tooltip>
        <Tooltip title="Subscript">
          <span>
            <ToggleButton
              size="small"
              value="sub"
              selected={editor.isActive("subscript")}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => editor.chain().focus().toggleSubscript().run()}
              sx={{ py: 0.25, px: 0.5, minWidth: 32 }}
            >
              <FaSubscript size={14} />
            </ToggleButton>
          </span>
        </Tooltip>
        <Tooltip title="Superscript">
          <span>
            <ToggleButton
              size="small"
              value="sup"
              selected={editor.isActive("superscript")}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => editor.chain().focus().toggleSuperscript().run()}
              sx={{ py: 0.25, px: 0.5, minWidth: 32 }}
            >
              <FaSuperscript size={14} />
            </ToggleButton>
          </span>
        </Tooltip>

        <ToolbarDivider />

        <Tooltip title="Heading 2">
          <span>
            <ToggleButton
              size="small"
              value="h2"
              selected={editor.isActive("heading", { level: 2 })}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 2 }).run()
              }
              sx={{ py: 0.25, px: 0.5, minWidth: 32 }}
            >
              <FaHeading size={14} />
            </ToggleButton>
          </span>
        </Tooltip>
        <Tooltip title="Heading 3">
          <span>
            <ToggleButton
              size="small"
              value="h3"
              selected={editor.isActive("heading", { level: 3 })}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 3 }).run()
              }
              sx={{ py: 0.25, px: 0.5, minWidth: 32 }}
            >
              <span style={{ fontSize: 12, fontWeight: 700 }}>H3</span>
            </ToggleButton>
          </span>
        </Tooltip>
        <Tooltip title="Paragraph">
          <span>
            <ToggleButton
              size="small"
              value="p"
              selected={
                editor.isActive("paragraph") && !editor.isActive("heading")
              }
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => editor.chain().focus().setParagraph().run()}
              sx={{ py: 0.25, px: 0.5, minWidth: 32 }}
            >
              <FaParagraph size={14} />
            </ToggleButton>
          </span>
        </Tooltip>

        <ToolbarDivider />

        <Tooltip title="Bullet list">
          <span>
            <ToggleButton
              size="small"
              value="bullet"
              selected={editor.isActive("bulletList")}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => editor.chain().focus().toggleBulletList().run()}
              sx={{ py: 0.25, px: 0.5, minWidth: 32 }}
            >
              <FaListUl size={14} />
            </ToggleButton>
          </span>
        </Tooltip>
        <Tooltip title="Numbered list">
          <span>
            <ToggleButton
              size="small"
              value="ordered"
              selected={editor.isActive("orderedList")}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => editor.chain().focus().toggleOrderedList().run()}
              sx={{ py: 0.25, px: 0.5, minWidth: 32 }}
            >
              <FaListOl size={14} />
            </ToggleButton>
          </span>
        </Tooltip>
        <Tooltip title="Quote">
          <span>
            <ToggleButton
              size="small"
              value="quote"
              selected={editor.isActive("blockquote")}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => editor.chain().focus().toggleBlockquote().run()}
              sx={{ py: 0.25, px: 0.5, minWidth: 32 }}
            >
              <FaQuoteRight size={14} />
            </ToggleButton>
          </span>
        </Tooltip>
        <Tooltip title="Horizontal rule">
          <span>
            <IconButton
              size="small"
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => editor.chain().focus().setHorizontalRule().run()}
              sx={{ p: 0.5 }}
            >
              <FaMinus size={14} />
            </IconButton>
          </span>
        </Tooltip>

        <ToolbarDivider />

        <Tooltip title="Align left">
          <span>
            <ToggleButton
              size="small"
              value="left"
              selected={editor.isActive({ textAlign: "left" })}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() =>
                editor.chain().focus().setTextAlign("left").run()
              }
              sx={{ py: 0.25, px: 0.5, minWidth: 32 }}
            >
              <FaAlignLeft size={14} />
            </ToggleButton>
          </span>
        </Tooltip>
        <Tooltip title="Align center">
          <span>
            <ToggleButton
              size="small"
              value="center"
              selected={editor.isActive({ textAlign: "center" })}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() =>
                editor.chain().focus().setTextAlign("center").run()
              }
              sx={{ py: 0.25, px: 0.5, minWidth: 32 }}
            >
              <FaAlignCenter size={14} />
            </ToggleButton>
          </span>
        </Tooltip>
        <Tooltip title="Align right">
          <span>
            <ToggleButton
              size="small"
              value="right"
              selected={editor.isActive({ textAlign: "right" })}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() =>
                editor.chain().focus().setTextAlign("right").run()
              }
              sx={{ py: 0.25, px: 0.5, minWidth: 32 }}
            >
              <FaAlignRight size={14} />
            </ToggleButton>
          </span>
        </Tooltip>
        <Tooltip title="Justify">
          <span>
            <ToggleButton
              size="small"
              value="justify"
              selected={editor.isActive({ textAlign: "justify" })}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() =>
                editor.chain().focus().setTextAlign("justify").run()
              }
              sx={{ py: 0.25, px: 0.5, minWidth: 32 }}
            >
              <FaAlignJustify size={14} />
            </ToggleButton>
          </span>
        </Tooltip>

        <ToolbarDivider />

        <Tooltip title="Link">
          <span>
            <ToggleButton
              size="small"
              value="link"
              selected={editor.isActive("link")}
              onMouseDown={(e) => e.preventDefault()}
              onClick={setLink}
              sx={{ py: 0.25, px: 0.5, minWidth: 32 }}
            >
              <FaLink size={14} />
            </ToggleButton>
          </span>
        </Tooltip>
        <Tooltip title="Remove link">
          <span>
            <IconButton
              size="small"
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => editor.chain().focus().unsetLink().run()}
              sx={{ p: 0.5 }}
            >
              <FaUnlink size={14} />
            </IconButton>
          </span>
        </Tooltip>

        <Tooltip title="Text color">
          <span>
            <IconButton
              size="small"
              component="label"
              sx={{ p: 0.5, overflow: "hidden" }}
            >
              <Box
                component="input"
                type="color"
                value={editor.getAttributes("textStyle").color || "#000000"}
                onInput={(e) =>
                  editor.chain().focus().setColor(e.target.value).run()
                }
                sx={{
                  position: "absolute",
                  opacity: 0,
                  width: 0,
                  height: 0,
                }}
              />
              <Box
                sx={{
                  width: 18,
                  height: 18,
                  borderRadius: 0.5,
                  border: "1px solid",
                  borderColor: "divider",
                  bgcolor:
                    editor.getAttributes("textStyle").color || "transparent",
                }}
              />
            </IconButton>
          </span>
        </Tooltip>
        <Tooltip title="Highlight">
          <span>
            <IconButton
              size="small"
              component="label"
              sx={{ p: 0.5, overflow: "hidden" }}
            >
              <Box
                component="input"
                type="color"
                defaultValue="#fff176"
                onInput={(e) =>
                  editor
                    .chain()
                    .focus()
                    .toggleHighlight({ color: e.target.value })
                    .run()
                }
                sx={{
                  position: "absolute",
                  opacity: 0,
                  width: 0,
                  height: 0,
                }}
              />
              <Box
                sx={{
                  width: 18,
                  height: 18,
                  borderRadius: 0.5,
                  border: "1px solid",
                  borderColor: "divider",
                  bgcolor:
                    editor.getAttributes("highlight").color || "#fff176",
                }}
              />
            </IconButton>
          </span>
        </Tooltip>

        <ToolbarDivider />

        <Tooltip title="Clear formatting">
          <span>
            <IconButton
              size="small"
              onMouseDown={(e) => e.preventDefault()}
              onClick={() =>
                editor
                  .chain()
                  .focus()
                  .clearNodes()
                  .unsetAllMarks()
                  .setParagraph()
                  .run()
              }
              sx={{ p: 0.5 }}
            >
              <FaRemoveFormat size={14} />
            </IconButton>
          </span>
        </Tooltip>
      </Box>
      <Box sx={{ flex: 1, minHeight: 0 }}>
        <EditorContent editor={editor} className="product-rich-text-content" />
      </Box>
    </Box>
  );
}
