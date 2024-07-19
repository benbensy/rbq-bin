import { useRef, useState, FormEvent } from "react";

export function Index() {
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const [previewUrl, setPreviewUrl] = useState("");

  const submit = async (e: FormEvent) => {
    e.preventDefault();

    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/bin`, {
      method: "POST",
      headers: {
        "Content-type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        content: contentRef.current?.value,
      }),
    });

    const data = (await response.json()).data as { url: string };
    setPreviewUrl(data.url);
  };

  return (
    <>
      <div>
        <form onSubmit={submit}>
          <textarea rows={20} cols={50} ref={contentRef} name="content" />
          <button type="submit">提交</button>
          <a href={previewUrl} target="_blank">
            预览
          </a>
        </form>
      </div>
    </>
  );
}
