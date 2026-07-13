const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim() || "b5c595de-19fb-468b-bfce-862e5dd05d80";
const ENDPOINT = "https://api.web3forms.com/submit";

export type Web3FormsPayload = Record<string, string>;

export async function submitWeb3Forms(payload: Web3FormsPayload): Promise<void> {
  const body = new FormData();
  body.append("access_key", ACCESS_KEY);

  Object.entries(payload).forEach(([key, value]) => {
    if (value.trim()) {
      body.append(key, value.trim());
    }
  });

  const response = await fetch(ENDPOINT, {
    method: "POST",
    body,
  });

  const data = (await response.json()) as { success?: boolean; message?: string };

  if (!response.ok || !data.success) {
    throw new Error(data.message ?? "Submission failed.");
  }
}
