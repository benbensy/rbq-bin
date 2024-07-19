import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function Preview() {
  const { hash } = useParams<{ hash: string }>();
  const [content, setContent] = useState<string>(null!);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/bin/${hash}`)
      .then((response) => response.json())
      .then((data) => {
        setContent(data.data.content);
      });
  }, [hash]);

  const copy = () => () => {
    navigator.clipboard.writeText(content).then(() => {
        alert('复制成功！')
    });
  }

  if (content === null) {
    return <>loading</>;
  } else {
    return <div>
        <div></div>
        <div>
            <pre>
            {content}
            </pre>
            <div>
                <button onClick={copy}>复制内容</button>
            </div>
        </div>
    </div>;
  }
}
