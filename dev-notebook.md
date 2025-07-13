# Dev Notebook

## [2024-06-09] DockItem Component Addition

- **Context:** The Dock component (macOS-style) previously only supported DockIcon, which allowed a single icon with magnification effect.
- **Change:** Introduced a new `DockItem` component that allows rendering both an icon and an additional element (such as a label, badge, or any React node) together, with the same magnification effect as DockIcon.
- **Design Choice:** This enables more flexible dock items, such as icons with labels or status indicators, without breaking existing DockIcon usage. Dock now supports both DockIcon and DockItem as children, passing magnification and sizing props to both.
- **Usage Example:**
  ```tsx
  <Dock>
    <DockItem icon={<MyIcon />} element={<span>Label</span>} />
    <DockIcon>...</DockIcon>
  </Dock>
  ```
- **Reasoning:** This approach maintains backward compatibility and provides a clear, extensible pattern for future dock item enhancements. 