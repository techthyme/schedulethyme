### Pages

Used as the routing layers that import Server Components. See nextjs documentation for more details.

- Pages (/app/page.tsx) are mostly thin — they only exist to handle routing and to import Server Components.
- The app is written using typescript.

### Server Components: (`app/components/server/[component_name]`)

- Make initial server-side API calls to fetch reservations data
- Handle server-side data processing and optimization
- Pass initial data to client component
- Implement proper error handling for server-side operations
- Use Next.js App Router conventions
- Responsible for fetching the initial data.
- Call internal Next.js API routes (e.g., /api/vibes/[inspirationId]) instead of talking directly to external APIs.
- Pass fetched data as props down to Client Components.
- Wrapped in <Suspense> to stream parts of the page while waiting for data.
- Next.js API Routes (/app/api/.../route.ts) act as smart proxy layers:
- Handle inbound client requests.
- Extract and sanitize query parameters.
- Forward them securely to your backend server (e.g., https://api.mydomain.com).
- Can add headers, auth, cookies, etc.
- Can become edge-cached depending on the request.
- Uses Suspense to allow parts of the page to stream separately as data loads, improving perceived performance.

Each component should be fully functional, properly typed with TypeScript, and include comprehensive error handling. The solution should be production-ready with proper accessibility features and responsive design.

### Client Components: `app/components/client/[component_name]`

The primary responsibility of client components are to handle client-side logic and user interactions.

- Receive initial data from the Server Component.
- Render the UI using smaller reusable and composable UI Components.
- Handles dynamic UI behavior, infinite scrolling, re-fetching, and other interactions (clicks, scrolls, fetching more data). Example: Infinite scrolling — detect when near bottom, trigger fetch to /api/vibes/nid with parameters or making api calls to the search api as the guest types.
- Make client-side API calls for CRUD operations:
- Handle form submissions and validation
- Implement optimistic updates where appropriate

### UI Components:

- Small, dumb, pure presentational components.
- located in the src/components folder
- Like: Inputs, Buttons, Cards, Maps, Grids, Section wrappers, etc.
- No fetching or state — just rendering based on props (unless it makes more sense to do so)
- UI components such as Inputs, Buttons, and Text should be imported from the "@/components/ui/[type] folder

### Performance Considerations

- Implement proper memoization where needed
- Use React.memo for components that don't need frequent re-renders
- Optimize calendar rendering for large date ranges
- Implement virtual scrolling for large reservation lists if needed

### Error Handling

- Implement comprehensive error boundaries
- Provide user-friendly error messages
- Handle network failures gracefully
- Implement retry mechanisms where appropriate

### Styling & UI/UX

- Use Tailwind CSS for styling (ensure compatibility with Claude's available classes)
- Implement smooth animations for the slide-in details panel
- Ensure responsive design works across desktop, tablet, and mobile
- Follow accessibility best practices
- Use consistent color scheme and typography

### Hierchey

page - duh, the page
areas - the main locations on the page
sections

## Accessability

- Ensure all components are accessible (ARIA labels, keyboard navigation)
- The types in this description have already been created and can be found in "@/types"
- Ensure all components are accessible (ARIA labels, keyboard navigation)

### Datatypes

The types that are used in the backend are manually synced to the client types which you will find in the `src/types` folder
