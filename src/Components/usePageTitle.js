import { useEffect } from "react";

const BASE = "Veerababu Chakali";

/** Sets document.title as "<page> | Veerababu Chakali". */
export default function usePageTitle(page) {
  useEffect(() => {
    document.title = page ? `${page} | ${BASE}` : `${BASE} | Full-stack developer`;
  }, [page]);
}
