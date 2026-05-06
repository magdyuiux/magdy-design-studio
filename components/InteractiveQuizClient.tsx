"use client";

import dynamic from "next/dynamic";

const InteractiveQuiz = dynamic(() => import("@/components/InteractiveQuiz"), {
  ssr: false,
  loading: () => null,
});

export default function InteractiveQuizClient() {
  return <InteractiveQuiz />;
}
