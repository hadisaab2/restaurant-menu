import React, { createContext, useContext, useMemo } from "react";

/**
 * The pipeline UI is shared between superadmin and sales, which reach the same
 * controllers under different mount points. This supplies the base paths so the
 * hooks below don't hardcode /superadmin.
 *
 * Sales is served by /sales/sourcing and /sales/zones, and the backend scopes
 * every request to the rep's assigned zones (see services/salesZoneScope.js).
 */
export const SUPERADMIN_SCOPE = { sourcing: "/superadmin/sourcing", zones: "/superadmin/zones" };
export const SALES_SCOPE = { sourcing: "/sales/sourcing", zones: "/sales/zones" };

const PipelineScopeContext = createContext(SUPERADMIN_SCOPE);

export const usePipelineScope = () => useContext(PipelineScopeContext);

export function PipelineScopeProvider({ scope, children }) {
  const value = useMemo(() => scope || SUPERADMIN_SCOPE, [scope]);
  return (
    <PipelineScopeContext.Provider value={value}>
      {children}
    </PipelineScopeContext.Provider>
  );
}
