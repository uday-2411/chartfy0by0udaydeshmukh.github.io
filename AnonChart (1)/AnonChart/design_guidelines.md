# Design Guidelines: Anonymous Real-Time Chat Application

## Design Approach
**System-Based Approach**: Drawing from Discord and Slack's proven chat interface patterns, optimized for readability and real-time communication efficiency.

## Core Design Elements

### Typography
- **Primary Font**: Inter or system-ui for optimal readability
- **Message Text**: 15px (base), 400 weight for body text
- **Usernames**: 14px, 600 weight
- **Timestamps**: 12px, 400 weight
- **Input Field**: 15px, 400 weight

### Layout System
**Spacing Primitives**: Use Tailwind units of 2, 3, 4, 6, and 8 consistently
- Message padding: p-3 or p-4
- Section spacing: gap-4 to gap-6
- Container margins: m-4 to m-8

### Component Architecture

#### Chat Container
- Full-height layout (h-screen) with flex column structure
- Header: Fixed top bar (h-16) with app branding and active user count
- Message Area: Flex-grow scrollable container with overflow-y-auto
- Input Area: Fixed bottom bar (h-20) with message composition

#### Message Components
- **Message Bubble Structure**: Left-aligned with subtle background differentiation
- Each message contains: Avatar circle (32px), username, timestamp, and message content
- Messages grouped by user with 2px spacing between consecutive messages
- 16px spacing between different user messages
- Auto-generated usernames: "Guest" + 4-digit number with generated avatar colors

#### User Presence Sidebar (Desktop)
- Right sidebar (w-64) showing active users list
- Each user entry: Avatar circle + generated username
- Online indicator: small green dot (w-2 h-2) next to avatar
- Collapses on mobile (hidden below md breakpoint)

#### Message Input Area
- Text input with rounded corners (rounded-lg), full width with max-w-4xl
- Send button (icon-based) positioned at input's right edge
- Character counter showing remaining characters (max 500)
- Persistent send button - always visible

#### Header Navigation
- Left: App title/logo "Anonymous Chat"
- Center: Active users count badge "🟢 42 online"
- Right: Info icon leading to simple usage instructions modal

### Responsive Behavior
- **Desktop (lg+)**: Three-column layout (sidebar hidden | main chat | user list)
- **Tablet (md)**: Two-column (main chat | collapsible user list)
- **Mobile (base)**: Single column, user list accessible via slide-over panel

### Interaction Patterns
- Auto-scroll to latest message on new message arrival
- Smooth scroll behavior throughout
- Message send on Enter key, Shift+Enter for new line
- Real-time typing indicators (subtle "User is typing..." text)
- New message arrival notification sound (using Web Audio API)

### Icons
Use **Heroicons** via CDN for all interface icons:
- Send icon (paper airplane)
- Info icon (information circle)
- User icons (user circle)
- Menu icon (bars) for mobile user list toggle

### Images
No hero images needed. This is a functional application prioritizing chat efficiency.

### Message Metadata Display
- Timestamps: Relative format ("2m ago", "1h ago") with absolute time on hover
- Message status indicators: Sent confirmation checkmark
- Anonymous user color coding: Consistent avatar background colors per session

### Accessibility
- ARIA labels for all interactive elements
- Keyboard navigation support throughout
- Focus indicators on all interactive components
- Screen reader announcements for new messages
- High contrast text for readability