import { Outlet, createFileRoute } from "@tanstack/react-router";

/**
 * Layout route for the services section: /services (index) and
 * /services/$slug (per-service detail) both mount through here.
 */
export const Route = createFileRoute("/services")({
  component: () => <Outlet />,
});
