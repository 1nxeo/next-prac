import { useRouter } from "next/router";
import React from "react";

export default function CardDetail() {
  const router = useRouter();
  const a = router.query.id;
  return (
    <div>
      <p>{`${a}`}</p>
    </div>
  );
}
