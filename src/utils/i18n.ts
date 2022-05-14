import { i18n } from "../globals";

const t = (key: string) => {
  const path = key.split(".");
  let messages = i18n.messages[i18n.fallback];
  for (const i of path) {
    messages = messages[i];
  }
  return typeof messages === "string" ? messages : null;
};

export default { t };
